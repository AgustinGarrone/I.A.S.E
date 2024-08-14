import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message, company, cellphone } = await request.json();

    console.log(name, email, message, company, cellphone);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.MAILER_RECEIVER,
      subject: `Contacto nuevo de ${name}`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background-color: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #007bff; text-align: center;">Tenés un contacto nuevo a través de tu página</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Mail:</strong> ${email}</p>
            <p><strong>Empresa:</strong> ${company || "Not provided"}</p>
            <p><strong>Móvil:</strong> ${cellphone || "Not provided"}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="background-color: #f9f9f9; padding: 10px; border-left: 3px solid #007bff;">
              ${message}
            </p>
            <div style="text-align: center; margin-top: 20px;">
              <img src=${
                process.env.LOGO_PUBLIC
              } alt="Company Logo" style="max-width: 150px;">
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
