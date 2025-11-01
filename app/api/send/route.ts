import { NextResponse } from "next/server";
import { Resend } from "resend";
import fs from "fs/promises"; // Use 'fs/promises' for async/await
import path from "path";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const websiteLink = "https://pragyatha25.meriise.org"; // Example link for the button

  try {
    // Get data from request body
    const body = await request.json();
    const { name, email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // --- 1. READ THE PDF FILE ---
    // IMPORTANT: Replace 'your-file-name.pdf' with the actual name of your PDF
    const pdfFileName = "Pragyatha2k25-Rulebook.pdf";

    // Construct the full path to the file in the 'public' directory
    const filePath = path.join(process.cwd(), "public", pdfFileName);

    let pdfBuffer: Buffer;
    try {
      // Read the file into a buffer
      pdfBuffer = await fs.readFile(filePath);
    } catch (readError) {
      console.error(
        `Error reading attachment file from ${filePath}:`,
        readError
      );
      // If the file isn't found or readable, return a server error
      return NextResponse.json(
        { error: "Server error: Could not read attachment file." },
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
                  <td align="center" style="background-color: #004a99; padding: 40px 20px;">
                    <h1 style="color: #ffffff; font-size: 28px; font-weight: 600; margin: 0;">
                      Vision Hunt Quiz
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 40px 30px 30px 30px; color: #333333; line-height: 1.7;">
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
                        The rulebook for the event is attached below
                        </span>
                        — please take a look and register soon!
                     </p>
                  </div>

                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td align="center">
                          <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td align="center" style="background-color: #007bff; border-radius: 8px;">
                                <a href="${websiteLink}" target="_blank" style="color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; padding: 14px 28px; border: 1px solid #007bff; border-radius: 8px; display: inline-block;">
                                  Visit Pragyatha 2025
                                </a>
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
    const { data, error } = await resend.emails.send({
      from: "visionhunt@meriise.org",
      to: email,
      subject: "Thank you for participating in the Vision Hunt Quiz!",
      html: emailHtml,

      // Add the attachments array
      attachments: [
        {
          filename: pdfFileName, // The name the recipient will see
          content: pdfBuffer, // The file content as a Buffer
        },
      ],
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
