import React, { useRef, useEffect } from 'react';
import heatmap from "../assets/images/heatmapimage.png"

const HeatMapOverImage = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  // Hardcoded image and heatmap data
  const imageSrc = heatmap; // Replace with your image path
  const heatData = [
    { x: 100, y: 80, intensity: 1.0 },
    { x: 200, y: 150, intensity: 0.8 },
    { x: 300, y: 220, intensity: 0.3 },
    { x: 180, y: 100, intensity: 0.6 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawHeatMap = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      heatData.forEach(({ x, y, intensity }) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 50);
        gradient.addColorStop(0, `rgba(255,0,0,${intensity})`);
        gradient.addColorStop(1, 'rgba(183, 255, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(x - 50, y - 50, 100, 100);
      });
    };

    const handleImageLoad = () => {
      canvas.width = imageRef.current.offsetWidth;
      canvas.height = imageRef.current.offsetHeight;
      drawHeatMap();
    };

    const img = imageRef.current;
    if (img.complete) {
      handleImageLoad();
    } else {
      img.addEventListener('load', handleImageLoad);
    }

    return () => {
      img.removeEventListener('load', handleImageLoad);
    };
  }, []);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        ref={imageRef}
        src={imageSrc}
        alt="Map"
        style={{ display: 'block', width: '100%' }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default HeatMapOverImage;
