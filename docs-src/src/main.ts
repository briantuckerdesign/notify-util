import { Toast, configure } from 'plain-toast';

configure({
  position: 'top-right',
  theme: 'auto'
});

// Dark mode toggle functionality
function initTheme() {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (stored) {
    document.documentElement.setAttribute('data-theme', stored);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

function updateAriaLabel() {
  const darkModeButton = document.querySelector('.dark-mode');
  if (!darkModeButton) return;

  const current = document.documentElement.getAttribute('data-theme');
  const label = current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  darkModeButton.setAttribute('aria-label', label);
  darkModeButton.setAttribute('title', label);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateAriaLabel();
}

// Initialize theme on page load
initTheme();
updateAriaLabel();

// Add click handler to dark mode toggle button
const darkModeButton = document.querySelector('.dark-mode');
if (darkModeButton) {
  darkModeButton.addEventListener('click', (e) => {
    e.preventDefault();
    toggleTheme();
  });
}

// Animated Background
function createAnimatedBackground() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1';
  canvas.style.opacity = '0.15';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d')!;
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  // Resize handler
  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });

  // Shape interface
  interface Shape {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    rotation: number;
    rotationSpeed: number;
    type: 'circle' | 'triangle' | 'square' | 'hexagon';
  }

  // Create shapes
  const shapes: Shape[] = [];
  const shapeCount = 25;
  const shapeTypes: Shape['type'][] = ['circle', 'triangle', 'square', 'hexagon'];

  for (let i = 0; i < shapeCount; i++) {
    shapes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 40 + 20,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)]
    });
  }

  // Get color from CSS variables
  function getColor() {
    const theme = document.documentElement.getAttribute('data-theme');
    const isDark =
      theme === 'dark' ||
      (theme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    return isDark ? '#b492ff' : '#8f62f0';
  }

  // Draw shapes
  function drawShape(shape: Shape) {
    ctx.save();
    ctx.translate(shape.x, shape.y);
    ctx.rotate(shape.rotation);
    ctx.strokeStyle = getColor();
    ctx.lineWidth = 2;
    ctx.fillStyle = 'transparent';

    switch (shape.type) {
      case 'circle':
        ctx.beginPath();
        ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
        ctx.stroke();
        break;

      case 'triangle':
        ctx.beginPath();
        ctx.moveTo(0, -shape.size / 2);
        ctx.lineTo(shape.size / 2, shape.size / 2);
        ctx.lineTo(-shape.size / 2, shape.size / 2);
        ctx.closePath();
        ctx.stroke();
        break;

      case 'square':
        ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
        break;

      case 'hexagon':
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i;
          const x = (Math.cos(angle) * shape.size) / 2;
          const y = (Math.sin(angle) * shape.size) / 2;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.stroke();
        break;
    }

    ctx.restore();
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    shapes.forEach((shape) => {
      // Update position
      shape.x += shape.speedX;
      shape.y += shape.speedY;
      shape.rotation += shape.rotationSpeed;

      // Wrap around edges
      if (shape.x < -shape.size) shape.x = width + shape.size;
      if (shape.x > width + shape.size) shape.x = -shape.size;
      if (shape.y < -shape.size) shape.y = height + shape.size;
      if (shape.y > height + shape.size) shape.y = -shape.size;

      drawShape(shape);
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// Initialize background
createAnimatedBackground();

const buttons = document.querySelectorAll('[data-toast-type]');

const toastMessages = {
  success: {
    heading: 'Success!',
    body: 'Your operation completed successfully.'
  },
  error: {
    heading: 'Error',
    body: 'Something went wrong. Please try again.'
  },
  warning: {
    heading: 'Warning',
    body: 'This action requires your attention.'
  },
  info: {
    heading: 'Information',
    body: "Here's something you should know."
  },
  debug: {
    heading: 'Debug Info',
    body: 'This is a debug message for developers.'
  },
  spinner: {
    heading: 'Loading...',
    body: 'Please wait while we process your request.'
  },
  progress: {
    heading: 'Uploading file...',
    body: 'Your file is being uploaded.'
  }
};

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const type = button.getAttribute('data-toast-type') as keyof typeof toastMessages;
    const message = toastMessages[type];

    if (type === 'spinner') {
      const toast = new Toast({
        type: 'spinner',
        heading: message.heading,
        body: message.body,
        duration: null
      });

      setTimeout(() => {
        toast.close();
      }, 3000);
    } else if (type === 'progress') {
      const toast = new Toast({
        type: 'progress',
        heading: message.heading,
        body: message.body,
        progress: {
          total: 100,
          current: 0,
          showPercentage: true
        }
      });

      let current = 0;
      const interval = setInterval(() => {
        current += 10;
        toast.setProgress(current);

        if (current >= 100) {
          clearInterval(interval);
          toast.complete();
        }
      }, 300);
    } else {
      new Toast({
        type,
        heading: message.heading,
        body: message.body,
        duration: 5000
      });
    }
  });
});
