import { PDFDocument, StandardFonts, rgb, PDFPage, PDFFont } from "pdf-lib";
import { mockQuestions } from "@/data/questionModule";

const PAGE_WIDTH = 595.28; // A4
const PAGE_HEIGHT = 841.89;
const MARGIN = 50;
const MAX_WIDTH = PAGE_WIDTH - MARGIN * 2;

// ponytail: WinAnsi (the standard font encoding) can't render arbitrary unicode
// (emoji, checkmarks, etc). Map common smart punctuation to ASCII, then drop
// anything else unsupported so a future question with a stray symbol doesn't
// crash PDF generation.
const PUNCT_MAP: Record<string, string> = {
  "‘": "'", "’": "'", "“": '"', "”": '"',
  "–": "-", "—": "-", "…": "...",
};
function sanitize(text: string): string {
  return Array.from(text)
    .map((ch) => PUNCT_MAP[ch] ?? (ch.codePointAt(0)! <= 0xff ? ch : "?"))
    .join("");
}

function wrapText(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

export async function generateAnswerKeyPdf(quizName: string): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let page: PDFPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - MARGIN;

  const newPage = () => {
    page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    y = PAGE_HEIGHT - MARGIN;
  };

  const ensureSpace = (needed: number) => {
    if (y - needed < MARGIN) newPage();
  };

  // Title
  page.drawText(quizName, {
    x: MARGIN,
    y,
    size: 22,
    font: boldFont,
    color: rgb(0, 0.29, 0.6),
  });
  y -= 28;
  page.drawText("Answer Key", {
    x: MARGIN,
    y,
    size: 14,
    font,
    color: rgb(0.35, 0.35, 0.35),
  });
  y -= 30;

  mockQuestions.forEach((q, index) => {
    const questionLines = wrapText(sanitize(`${index + 1}. ${q.question_text}`), boldFont, 12, MAX_WIDTH);
    ensureSpace(questionLines.length * 16 + q.options.length * 14 + 16);

    for (const line of questionLines) {
      page.drawText(line, { x: MARGIN, y, size: 12, font: boldFont, color: rgb(0.1, 0.1, 0.1) });
      y -= 16;
    }

    for (const opt of q.options) {
      const prefix = opt.isCorrect ? "[Correct] " : "";
      const optLines = wrapText(sanitize(`${prefix}${opt.text}`), font, 11, MAX_WIDTH - 15);
      for (const line of optLines) {
        ensureSpace(14);
        page.drawText(line, {
          x: MARGIN + 15,
          y,
          size: 11,
          font,
          color: opt.isCorrect ? rgb(0, 0.5, 0) : rgb(0.25, 0.25, 0.25),
        });
        y -= 14;
      }
    }
    y -= 10;
  });

  const bytes = await pdfDoc.save();
  return Buffer.from(bytes);
}
