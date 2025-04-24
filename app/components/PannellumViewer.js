'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

const PannellumViewer = ({ imageUrl, config = {} }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current && window.pannellum) {
      const defaultConfig = {
        type: 'equirectangular',
        panorama: imageUrl,
        autoLoad: true,
        autoRotate: -2,
        compass: true,
        showControls: true,
        ...config,
      };

      const viewer = window.pannellum.viewer(viewerRef.current, defaultConfig);

      return () => {
        viewer.destroy();
      };
    }
  }, [imageUrl, config]);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"
        strategy="beforeInteractive"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"
      />
      <div
        ref={viewerRef}
        style={{
          width: '100%',
          height: '500px',
          position: 'relative',
        }}
      />
    </>
  );
};

export default PannellumViewer; 