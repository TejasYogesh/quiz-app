import { generateAnswerKeyPdf } from "@/lib/generateAnswerKeyPdf";

export async function GET() {
  const pdfBuffer = await generateAnswerKeyPdf("Vision Hunt Quiz");

  return new Response(new Uint8Array(pdfBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Vision-Hunt-Quiz-Answer-Key.pdf"',
    },
  });
}
