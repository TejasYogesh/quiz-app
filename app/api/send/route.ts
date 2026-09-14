import { NextResponse } from "next/server";
import { Resend } from "resend";
import { generateAnswerKeyPdf } from "@/lib/generateAnswerKeyPdf";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const bannerUrl = "https://quiz-app-fux3.vercel.app/finalScreening.png";

  try {
    // Get data from request body
    const body = await request.json();
    const { name, email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // --- 1. GENERATE THE ANSWER KEY PDF ---
    const pdfFileName = "Vision-Hunt-Quiz-Answer-Key.pdf";

    let pdfBuffer: Buffer;
    try {
      pdfBuffer = await generateAnswerKeyPdf("Vision Hunt Quiz");
    } catch (genError) {
      console.error("Error generating answer key PDF:", genError);
      return NextResponse.json(
        { error: "Server error: Could not generate answer key PDF." },
        { status: 500 }
      );
    }

    // 2. Your HTML (no changes)
    const emailHtml = `
      <body style="margin: 0; padding: 0; background-color: #f6f9fc;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td align="center" style="padding: 20px 0;">
              
              <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                
                <tr>
                  <td align="center" background="${bannerUrl}" style="background-image: url('${bannerUrl}'); background-size: cover; background-position: center; background-repeat: no-repeat; background-color: #0a0118; padding: 60px 30px;">
                    <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="max-width: 440px; background-color: rgba(10, 5, 30, 0.55); border-radius: 16px;">
                      <tr>
                        <td align="center" style="padding: 32px 40px;">
                          <h1 style="color: #ffffff; font-size: 26px; font-weight: 800; line-height: 1.3; margin: 0;">
                            Vision Hunt Quiz
                          </h1>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 40px 30px 30px 30px; color: #333333; line-height: 1.7; background-color: #f8fafc;">
                    <h2 style="color: #111; font-weight: 500; font-size: 22px; margin: 0 0 20px;">
                      Hello ${name},
                    </h2>
                    <p style="font-size: 16px; margin: 0 0 15px;">
                     Thank you for participating in the Vision Hunt quiz! We appreciate your enthusiasm and effort, your scores will be updated in the leaderboard soon.
                    </p>
                   <div style="background-color: #f8f9fa; border-left: 4px solid #007bff; padding: 15px; margin: 20px 0;">
                      <p style="font-size: 16px; margin: 0;">
                        <span style="color: #007bff; font-weight: 700; font-size: 18px;">Pragyatha 2025</span>
                         is a national-level entrepreneurial fest conducted annually.
                         <span style="background-color: #fff3cd; padding: 2px 6px; border-radius: 4px; color: #856404; font-weight: 600;">
                        The quiz questions and answer key are attached below
                        </span>
                        — please take a look and register soon!
                     </p>
                  </div>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 0 30px 30px 30px; background-color: #f8fafc;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px;">
                      <tr>
                        <td style="padding: 16px 20px;">
                          <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="font-size: 28px; padding-right: 14px;" valign="middle">&#128196;</td>
                              <td valign="middle">
                                <p style="margin: 0; font-size: 15px; font-weight: 600; color: #111;">${pdfFileName}</p>
                                <p style="margin: 2px 0 0; font-size: 13px; color: #888888;">Quiz questions &amp; answer key &mdash; attached to this email</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="background-color: #f9fafb; padding: 30px; border-top: 1px solid #e0e0e0;">
                    <p style="color: #888888; font-size: 14px; margin: 0 0 10px;">
                      Best regards,<br>
                      <strong>ME-RIISE Foundation</strong>
                    </p>
                    <p style="color: #aaaaaa; font-size: 12px; margin: 0;">
                      &copy; ${new Date().getFullYear()} ME-RIISE Foundation. All rights reserved.
                    </p>
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
        </table>
      </body>
    `;

    // --- 3. SEND THE EMAIL WITH ATTACHMENT ---
    // Convert buffer to base64 for Resend API
    const base64Content = pdfBuffer.toString("base64");

    const { data, error } = await resend.emails.send({
      from: "visionhunt@meriise.org",
      to: email,
      subject: "Thank you for participating in the Vision Hunt Quiz!",
      html: emailHtml,

      // Add the attachments array with base64-encoded content
      attachments: [
        {
          filename: pdfFileName, // The name the recipient will see
          content: base64Content, // Base64-encoded content
        },
      ],
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Send email error:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
