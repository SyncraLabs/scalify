import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ContactPayload {
  nombre?: string;
  email?: string;
  telefono?: string;
  empresa?: string;
  servicio?: string;
  presupuesto?: string;
  mensaje?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value?: string): string {
  if (!value) return "";
  const safe = escapeHtml(value).replace(/\n/g, "<br />");
  return `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #eaeaea;font-weight:600;color:#111;width:160px;vertical-align:top;">${label}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #eaeaea;color:#333;">${safe}</td>
    </tr>`;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const nombre = body.nombre?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const mensaje = body.mensaje?.trim() ?? "";

  if (!nombre || !email || !mensaje) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios (nombre, email, mensaje)" },
      { status: 400 }
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM ?? user;
  const to = process.env.SMTP_TO ?? user;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  if (!host || !user || !password || !from || !to) {
    return NextResponse.json(
      { error: "SMTP no está configurado en el servidor" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass: password },
    requireTLS: !secure,
    tls: { minVersion: "TLSv1.2" },
  });

  const subject = `Nuevo formulario de contacto · ${nombre}`;
  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background:#f6f6f9;padding:24px;">
      <div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #ececf2;">
        <div style="background:linear-gradient(135deg,#6C3AED,#3B82F6);padding:20px 24px;color:#ffffff;">
          <p style="margin:0;font-size:12px;letter-spacing:.12em;text-transform:uppercase;opacity:.85;">Scalify Labs · Web</p>
          <h1 style="margin:6px 0 0;font-size:20px;font-weight:700;">Nuevo formulario de contacto</h1>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${row("Nombre", nombre)}
          ${row("Email", email)}
          ${row("Teléfono", body.telefono)}
          ${row("Empresa", body.empresa)}
          ${row("Servicio", body.servicio)}
          ${row("Presupuesto", body.presupuesto)}
          ${row("Mensaje", mensaje)}
        </table>
        <div style="padding:16px 24px;background:#fafafc;color:#777;font-size:12px;">
          Recibido desde scalifylabs.es · responde directamente a este email para contactar con ${escapeHtml(nombre)}.
        </div>
      </div>
    </div>`;

  const text = [
    `Nombre: ${nombre}`,
    `Email: ${email}`,
    body.telefono ? `Teléfono: ${body.telefono}` : null,
    body.empresa ? `Empresa: ${body.empresa}` : null,
    body.servicio ? `Servicio: ${body.servicio}` : null,
    body.presupuesto ? `Presupuesto: ${body.presupuesto}` : null,
    "",
    "Mensaje:",
    mensaje,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transporter.sendMail({
      from: `"Scalify Labs Web" <${from}>`,
      to,
      replyTo: `${nombre} <${email}>`,
      subject,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "SMTP error";
    console.error("[/api/contact] SMTP send failed:", message);
    return NextResponse.json(
      { error: "No se pudo enviar el email" },
      { status: 502 }
    );
  }
}
