import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const leadInbox = process.env.LEAD_INBOX_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  leadKind?: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload;

    if (!payload.name || !payload.email) {
      return NextResponse.json(
        { success: false, error: "Campos obrigatórios ausentes." },
        { status: 422 },
      );
    }

    const leadSummary = [
      `Nome: ${payload.name}`,
      `E-mail: ${payload.email}`,
      payload.phone ? `Telefone/WhatsApp: ${payload.phone}` : null,
      payload.company ? `Empresa/Escritório: ${payload.company}` : null,
      payload.leadKind ? `Fluxo de interesse: ${payload.leadKind}` : null,
      payload.message ? `Mensagem: ${payload.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    if (resend && leadInbox) {
      await resend.emails.send({
        from: "SmartJus <leads@smartjus.ai>",
        to: [leadInbox],
        subject: `Novo lead ${payload.leadKind ?? ""} - ${payload.name}`,
        text: leadSummary,
        html: leadSummary.replace(/\n/g, "<br />"),
      });

      return NextResponse.json({ success: true, delivered: true });
    }

    console.info("[SmartJus lead]", leadSummary);
    return NextResponse.json({ success: true, delivered: false });
  } catch (error) {
    console.error("[SmartJus lead error]", error);
    return NextResponse.json(
      { success: false, error: "Erro ao processar o lead." },
      { status: 500 },
    );
  }
}
