import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/sendEmail";

// Verify Cloudflare Turnstile token
async function verifyTurnstileToken(token: string): Promise<boolean> {
    const secretKey = process.env.TURNSTILE_SECRET_KEY;

    if (!secretKey) {
        console.error("TURNSTILE_SECRET_KEY is not configured");
        return false;
    }

    try {
        const response = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
            }
        );

        const data = await response.json();
        return data.success === true;
    } catch (error) {
        console.error("Error verifying Turnstile token:", error);
        return false;
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, company, message, turnstileToken } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Faltan campos obligatorios" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Email no válido" },
                { status: 400 }
            );
        }

        // Verify Turnstile token
        if (!turnstileToken) {
            return NextResponse.json(
                { error: "Verificación de seguridad requerida" },
                { status: 400 }
            );
        }

        const isValidToken = await verifyTurnstileToken(turnstileToken);
        if (!isValidToken) {
            return NextResponse.json(
                { error: "Verificación de seguridad fallida. Por favor, intenta de nuevo." },
                { status: 400 }
            );
        }

        // Log the contact form submission
        console.log("=== NUEVO MENSAJE DE CONTACTO ===");
        console.log("Nombre:", name);
        console.log("Email:", email);
        console.log("Empresa:", company || "No especificada");
        console.log("Mensaje:", message);
        console.log("Fecha:", new Date().toISOString());
        console.log("Turnstile verificado: ✅");
        console.log("================================");

        // Send email using nodemailer
        try {
            await sendContactEmail({
                name,
                email,
                company,
                message,
            });

            console.log("✅ Email enviado exitosamente");
        } catch (emailError) {
            console.error("❌ Error al enviar email:", emailError);

            // Log the error but don't fail the request
            // The form data is still logged above
            return NextResponse.json(
                {
                    error: "Error al enviar el email. Por favor, intenta de nuevo o contáctanos directamente.",
                    details: process.env.NODE_ENV === "development" ? String(emailError) : undefined
                },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Mensaje enviado correctamente"
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing contact form:", error);
        return NextResponse.json(
            { error: "Error al procesar el formulario" },
            { status: 500 }
        );
    }
}
