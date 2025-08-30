import { useRef, useEffect, useState } from "react";

// const FONT_FAMILY = "Space Mono, monospace";
// const FONT_SIZE = 26;
// const LINE_HEIGHT = 35;
// const PADDING = 16;
const MAX_CANVAS_WIDTH = 600;

const SecureText = ({ text }: { text: string }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [canvasWidth, setCanvasWidth] = useState(MAX_CANVAS_WIDTH);

    useEffect(() => {
        // Set canvas width based on container width (responsive)
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

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (!context) return;

        const isMobile = canvasWidth < 400;
        const FONT_SIZE = isMobile ? 22 : 26;
        const LINE_HEIGHT = isMobile ? 27 : 35;
        const FONT_FAMILY = "Space Mono, monospace";
        const PADDING = 16;

        // Set initial width and font
        canvas.width = canvasWidth;
        context.font = `bold ${FONT_SIZE}px ${FONT_FAMILY}`;
        const words = text.split(" ");
        let line = "";
        const lines = [];
        const maxWidth = canvasWidth - PADDING * 2;

        // Word wrap logic
        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + " ";
            const metrics = context.measureText(testLine);
            const testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                lines.push(line.trim());
                line = words[n] + " ";
            } else {
                line = testLine;
            }
        }
        lines.push(line.trim());




        // Set canvas height based on lines
        const canvasHeight = lines.length * LINE_HEIGHT + PADDING * 2;
        canvas.height = canvasHeight;

        // Draw background pattern (diagonal lines)
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = "rgba(156,163,175,0.18)";
        context.lineWidth = 1;
        for (let i = -canvas.height; i < canvas.width; i += 24) {
            context.beginPath();
            context.moveTo(i, 0);
            context.lineTo(i + canvas.height, canvas.height);
            context.stroke();
        }

        // Draw random circles
        for (let i = 0; i < 20; i++) {
            context.beginPath();
            context.arc(
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                8 + Math.random() * 10,
                0,
                2 * Math.PI
            );
            context.fillStyle = `rgba(156,163,175,${Math.random() * 0.12})`;
            context.fill();
        }

        // Draw noisy dots
        for (let i = 0; i < 120; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            context.fillStyle = `rgba(0,0,0,${Math.random() * 0.09})`;
            context.fillRect(x, y, 2, 2);
        }

        // Draw each line of text
        context.font = `bold ${FONT_SIZE}px ${FONT_FAMILY}`;
        context.fillStyle = "#1f2937";
        context.textAlign = "left";
        context.textBaseline = "top";
        for (let i = 0; i < lines.length; i++) {
            context.fillText(lines[i], PADDING, PADDING + i * LINE_HEIGHT);
        }
    }, [text, canvasWidth]);

    return (
        <div
            ref={containerRef}
            style={{ width: "100%", maxWidth: MAX_CANVAS_WIDTH, overflow: "hidden" }}
        >
            <canvas ref={canvasRef} width={canvasWidth} />
        </div>
    );
};

export default SecureText;