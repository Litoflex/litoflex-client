import { NextResponse } from "next/server";

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

    const text = `
<b>Новая заявка с сайта</b>
👤 Имя: ${name}
📞 Телефон: ${phone}
💬 Комментарий: ${comment || "-"}
    `;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML"
        })
      }
    );

    const data = await telegramRes.json();

    if (!data.ok) {
      throw new Error("Telegram API error");
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
