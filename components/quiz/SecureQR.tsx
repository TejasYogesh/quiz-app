// src/components/quiz/SecureText.tsx
import { useRef, useEffect, useState } from "react";
import QRCode from 'qrcode';

const MAX_CANVAS_WIDTH = 600;

// The component now requires the user's USN to generate the unique QR code
export const SecureOR = ({ text, usn }: { text: string; usn: string }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [canvasWidth, setCanvasWidth] = useState(MAX_CANVAS_WIDTH);

    // Effect to make the canvas responsive
    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const width = Math.min(containerRef.current.clientWidth, MAX_CANVAS_WIDTH);
                setCanvasWidth(width);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Effect to draw the canvas content, including the QR code
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !usn) return; // Don't render if there's no USN
        const context = canvas.getContext("2d");
        if (!context) return;

        // --- Responsive Font and Padding Settings ---
        const isMobile = canvasWidth < 400;
        const FONT_SIZE = isMobile ? 22 : 26;
        const LINE_HEIGHT = isMobile ? 27 : 35;
        const FONT_FAMILY = "Space Mono, monospace";
        const PADDING = 16;
        
        // --- Word Wrap Logic (to calculate canvas height) ---
        canvas.width = canvasWidth;
        context.font = `bold ${FONT_SIZE}px ${FONT_FAMILY}`;
        const words = text.split(" ");
        let line = "";
        const lines: string[] = [];
        const maxWidth = canvasWidth - PADDING * 2;

        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + " ";
            const metrics = context.measureText(testLine);
            if (metrics.width > maxWidth && n > 0) {
                lines.push(line.trim());
                line = words[n] + " ";
            } else {
                line = testLine;
            }
        }
        lines.push(line.trim());
        const canvasHeight = lines.length * LINE_HEIGHT + PADDING * 2;
        canvas.height = canvasHeight;

        // --- QR Code Generation and Drawing ---
        // 1. Construct the unique URL pointing to your new flagging page
        const qrUrl = `${window.location.origin}/flag/${usn}`;

        // 2. Generate the QR code as a Data URL (a base64 image string)
        QRCode.toDataURL(qrUrl, { errorCorrectionLevel: 'L', margin: 2 }, (err, url) => {
            if (err) {
                console.error("Failed to generate QR code:", err);
                return;
            }

            const qrImage = new Image();
            qrImage.src = url;
            qrImage.onload = () => {
                // Make the QR code very faint so it acts as a watermark
                context.globalAlpha = 100; 
                context.drawImage(qrImage, 0, 0, canvas.width, canvas.height);
                context.globalAlpha = 1.0; // Reset for other elements

                // Add a semi-transparent white overlay to make the text more readable
                context.fillStyle = "rgba(255, 255, 255, 0.85)";
                context.fillRect(0, 0, canvas.width, canvas.height);

                // --- Draw Text and Other Patterns (same as before) ---
                context.font = `bold ${FONT_SIZE}px ${FONT_FAMILY}`;
                context.fillStyle = "#4b5563";
                context.textAlign = "left";
                context.textBaseline = "top";
                for (let i = 0; i < lines.length; i++) {
                    context.fillText(lines[i], PADDING, PADDING + i * LINE_HEIGHT);
                }
            };
        });

    }, [text, canvasWidth, usn]);

    return (
        <div ref={containerRef} style={{ width: "100%", maxWidth: MAX_CANVAS_WIDTH, overflow: "hidden" }}>
            <canvas ref={canvasRef} width={canvasWidth} />
        </div>
    );
};

export default SecureOR;
