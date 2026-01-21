import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/sendEmail";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, company, message, antiRobotAnswer } = body;

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

        // Validate anti-robot answer (5 + 3 = 8)
        if (parseInt(antiRobotAnswer) !== 8) {
            return NextResponse.json(
                { error: "Respuesta de seguridad incorrecta" },
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
