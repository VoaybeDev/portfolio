import { useEffect } from 'react';

const FluidMouseEffect = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/smokey-fluid-cursor@latest/dist/index.global.js';
    script.async = true;

    script.onload = () => {
      setTimeout(() => {
        if (window.SmokyFluid?.initFluid) {
          window.SmokyFluid.initFluid({
            canvasId: 'fluid-canvas',
            simResolution: 128,
            dyeResolution: 512,
            densityDissipation: 0.96,
            velocityDissipation: 0.97,
            curl: 50,
            splatRadius: 0.27,
            splatForce: 9500,
            colorUpdateSpeed: 1.65,
            shading: true,
            transparent: true,
          });
          console.log('✅ Effet fumée fluide chargé avec succès');
        }
      }, 400);
    };

    document.body.appendChild(script);

    return () => {
      const canvas = document.getElementById('fluid-canvas');
      if (canvas) canvas.remove();
    };
  }, []);

  return (
    <canvas
      id="fluid-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default FluidMouseEffect;