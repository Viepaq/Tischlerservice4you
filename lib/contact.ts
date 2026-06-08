import { site } from "./site";

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export function readContactForm(form: HTMLFormElement): ContactPayload {
  const data = new FormData(form);
  return {
    name: String(data.get("name") ?? "").trim(),
    email: String(data.get("email") ?? "").trim(),
    phone: String(data.get("phone") ?? "").trim(),
    message: String(data.get("message") ?? "").trim(),
  };
}

/**
 * Opens the visitor's mail client with a pre-filled message.
 * No backend/secrets required. Swap for a POST to an API route later
 * if server-side delivery (z.B. Web3Forms/Resend) gewünscht ist.
 */
export function sendViaMailto({ name, email, phone, message }: ContactPayload): void {
  const subject = `Anfrage von ${name || "Website"}`;
  const body = [
    `Name: ${name}`,
    `E-Mail: ${email}`,
    phone ? `Telefon: ${phone}` : null,
    "",
    "Nachricht:",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const href = `mailto:${site.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = href;
}
