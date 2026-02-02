import nodemailer from "nodemailer";

// Email configuration from environment variables
const EMAIL_CONFIG = {
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_PORT === "465", // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
};

const EMAIL_FROM = process.env.EMAIL_FROM || process.env.EMAIL_USER;
const EMAIL_TO = process.env.EMAIL_TO || process.env.EMAIL_USER;

// Create reusable transporter
const createTransporter = () => {
    return nodemailer.createTransport(EMAIL_CONFIG);
};

interface ContactEmailData {
    name: string;
    email: string;
    company?: string;
    message: string;
}

/**
 * Send contact form email
 */
export async function sendContactEmail(data: ContactEmailData): Promise<void> {
    const { name, email, company, message } = data;

    // Create transporter
    const transporter = createTransporter();

    // Email HTML template
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nuevo mensaje de contacto - Bregalia</title>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #f5f5f5;
                }
                .container {
                    background-color: #ffffff;
                    border-radius: 8px;
                    padding: 30px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .header {
                    border-bottom: 3px solid #3b82f6;
                    padding-bottom: 20px;
                    margin-bottom: 30px;
                }
                .header h1 {
                    margin: 0;
                    color: #1e40af;
                    font-size: 24px;
                }
                .field {
                    margin-bottom: 20px;
                }
                .field-label {
                    font-weight: 600;
                    color: #4b5563;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 5px;
                }
                .field-value {
                    color: #1f2937;
                    font-size: 16px;
                    padding: 10px;
                    background-color: #f9fafb;
                    border-radius: 4px;
                    border-left: 3px solid #3b82f6;
                }
                .message-box {
                    background-color: #f9fafb;
                    border-left: 3px solid #3b82f6;
                    padding: 15px;
                    border-radius: 4px;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                }
                .footer {
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #e5e7eb;
                    font-size: 12px;
                    color: #6b7280;
                    text-align: center;
                }
                .timestamp {
                    color: #9ca3af;
                    font-size: 14px;
                    margin-top: 10px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Nuevo Mensaje de Contacto de Bregalia</h1>
                </div>
                
                <div class="field">
                    <div class="field-label">Nombre</div>
                    <div class="field-value">${name}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Email</div>
                    <div class="field-value">
                        <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                    </div>
                </div>
                
                ${company ? `
                <div class="field">
                    <div class="field-label">Empresa</div>
                    <div class="field-value">${company}</div>
                </div>
                ` : ''}
                
                <div class="field">
                    <div class="field-label">Mensaje</div>
                    <div class="message-box">${message}</div>
                </div>
                
                <div class="timestamp">
                    📅 Recibido: ${new Date().toLocaleString('es-ES', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'Europe/Madrid'
    })}
                </div>
                
                <div class="footer">
                    Este mensaje fue enviado desde el formulario de contacto de Bregalia
                </div>
            </div>
        </body>
        </html>
    `;

    // Plain text version
    const textContent = `
NUEVO MENSAJE DE CONTACTO - BREGALIA

Nombre: ${name}
Email: ${email}
${company ? `Empresa: ${company}` : ''}

Mensaje:
${message}

---
Recibido: ${new Date().toISOString()}
    `.trim();

    // Send email
    try {
        const info = await transporter.sendMail({
            from: `"Bregalia Contacto" <${EMAIL_FROM}>`,
            to: EMAIL_TO,
            subject: `Nuevo contacto de ${name}${company ? ` - ${company}` : ''}`,
            text: textContent,
            html: htmlContent,
            replyTo: email, // Allow direct reply to the sender
        });

        console.log("✅ Email sent successfully:", info.messageId);
    } catch (error) {
        console.error("❌ Error sending email:", error);
        throw new Error("Failed to send email");
    }
}
