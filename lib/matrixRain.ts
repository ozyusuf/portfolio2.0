export function startMatrixRain(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF";
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops: number[] = Array(columns).fill(1);

  let animId: number;

  function draw() {
    ctx!.fillStyle = "rgba(10, 10, 12, 0.05)";
    ctx!.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const opacity = 0.1 + Math.random() * 0.3;
      ctx!.fillStyle = `rgba(74, 222, 128, ${opacity})`;
      ctx!.font = `${fontSize}px monospace`;
      ctx!.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    animId = requestAnimationFrame(draw);
  }

  draw();

  return () => cancelAnimationFrame(animId);
}
