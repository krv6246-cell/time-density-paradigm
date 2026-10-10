function drawFlow(canvas, density) {
  const context = canvas.getContext("2d");
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const bounds = canvas.getBoundingClientRect();
  const width = Math.max(1, Math.round(bounds.width * ratio));
  const height = Math.max(1, Math.round(bounds.height * ratio));

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, bounds.width, bounds.height);

  const centerX = bounds.width / 2;
  const centerY = bounds.height / 2;
  const radius = Math.min(bounds.width, bounds.height) * 0.34;
  const gradient = context.createRadialGradient(centerX, centerY, 2, centerX, centerY, radius);
  gradient.addColorStop(0, "rgba(245, 158, 11, 0.95)");
  gradient.addColorStop(0.12, "rgba(6, 182, 212, 0.78)");
  gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
  context.fillStyle = gradient;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.fill();

  const points = 8 + Math.round(density * 20);
  for (let index = 0; index < points; index += 1) {
    const angle = (Math.PI * 2 * index) / points;
    const spread = radius * (1.25 - density * 0.7);
    const startX = centerX + Math.cos(angle) * spread;
    const startY = centerY + Math.sin(angle) * spread;
    const endX = centerX + Math.cos(angle) * 7;
    const endY = centerY + Math.sin(angle) * 7;
    const line = context.createLinearGradient(startX, startY, endX, endY);
    line.addColorStop(0, "rgba(59, 130, 246, 0)");
    line.addColorStop(0.7, "rgba(6, 182, 212, 0.78)");
    line.addColorStop(1, "rgba(245, 158, 11, 1)");
    context.strokeStyle = line;
    context.lineWidth = 1.2;
    context.beginPath();
    context.moveTo(startX, startY);
    context.quadraticCurveTo(centerX + Math.sin(angle) * 22, centerY - Math.cos(angle) * 22, endX, endY);
    context.stroke();
  }

  context.fillStyle = "#0b0f19";
  context.beginPath();
  context.arc(centerX, centerY, 8, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "rgba(245, 158, 11, 0.95)";
  context.lineWidth = 1.5;
  context.stroke();
}

document.querySelectorAll("[data-flow-preview]").forEach((preview) => {
  const canvas = preview.querySelector("canvas");
  const control = preview.querySelector("input[type='range']");
  const update = () => drawFlow(canvas, Number(control.value));

  control.addEventListener("input", update);
  window.addEventListener("resize", update);
  update();
});
