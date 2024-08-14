import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail", // Puedes usar cualquier servicio de correo
      auth: {
        user: "agustinngarrone@gmail.com", // Configura estas variables en tu .env.local
        pass: "Robbstark23#",
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: "your-email@example.com", // Reemplaza con tu email
        subject: `New message from ${name}`,
        text: message,
        html: `<p>You have a new contact form submission</p><br>
          <p><strong>Name: </strong> ${name} </p><br>
          <p><strong>Email: </strong> ${email} </p><br>
          <p><strong>Message: </strong> ${message} </p><br>`,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
