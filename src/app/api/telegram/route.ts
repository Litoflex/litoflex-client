import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, comment } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Invalid data" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <h2>Новая заявка с сайта LITOFLEX</h2>
      <table style="border-collapse:collapse;font-size:16px;">
        <tr><td style="padding:8px 16px;font-weight:bold;">👤 Имя:</td><td style="padding:8px 16px;">${name}</td></tr>
        <tr><td style="padding:8px 16px;font-weight:bold;">📞 Телефон:</td><td style="padding:8px 16px;"><a href="tel:${phone}">${phone}</a></td></tr>
        <tr><td style="padding:8px 16px;font-weight:bold;">💬 Комментарий:</td><td style="padding:8px 16px;">${comment || "—"}</td></tr>
      </table>
      <br>
      <p style="color:#888;font-size:13px;">Отправлено с сайта litoflex.by</p>
    `;

    await transporter.sendMail({
      from: `"LITOFLEX Сайт" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Заявка с сайта — ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Email error:", e);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
