type EmailPayload = {
  to: string;
  subject?: string;
  body?: string;
};

export function openEmail(payload: EmailPayload): void {
  const { to, subject, body } = payload;
  const encodedBody = encodeURIComponent(body || "");
  const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject || "")}&body=${encodedBody}`;
  window.open(mailtoLink, "_blank");
}