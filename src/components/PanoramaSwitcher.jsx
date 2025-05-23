import React, { useEffect, useRef, useState } from "react";
import { Viewer, ImagePanorama } from "panolens";
import kitchen from "../assets/images/hall2.jpg";
import hall from "../assets/images/hall.png";
import gallery from "../assets/images/hall2.jpg";
import pooja from "../assets/images/Bedroom-1_out.png";

const PanoramaSwitcher = () => {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const [currentPanorama, setCurrentPanorama] = useState(null);
  const panoramasRef = useRef({});

  // Utility function to ensure image is loaded before creating panorama
  const loadImage = (src) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(src);
      img.onerror = reject;
    });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();

    if (width === 0 || height === 0) {
      console.warn("Panorama container has zero size.");
      return;
    }

    // Preload images to avoid runtime rendering issues
    Promise.all([
      loadImage(kitchen),
      loadImage(hall),
      loadImage(gallery),
      loadImage(pooja),
    ])
      .then(([kitchenSrc, hallSrc, gallerySrc, poojaSrc]) => {
        panoramasRef.current.kitchen = new ImagePanorama(kitchenSrc);
        panoramasRef.current.hall = new ImagePanorama(hallSrc);
        panoramasRef.current.gallery = new ImagePanorama(gallerySrc);
        panoramasRef.current.pooja = new ImagePanorama(poojaSrc);

        // Initialize viewer instance
        viewerRef.current = new Viewer({
          container,
          controlBar: true,
          autoHideInfospot: false,
        });

        // Set initial panorama
        viewerRef.current.setPanorama(panoramasRef.current.kitchen);
        setCurrentPanorama("kitchen");
      })
      .catch((error) => {
        console.error("Image loading failed:", error);
      });

    return () => {
      if (viewerRef.current) {
        viewerRef.current.dispose();
        viewerRef.current = null;
      }
    };
  }, []);

  const switchPanorama = (name) => {
    if (
      !viewerRef.current ||
      !panoramasRef.current[name] ||
      currentPanorama === name
    )
      return;

    viewerRef.current.setPanorama(panoramasRef.current[name]);
    setCurrentPanorama(name);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      <div
        ref={containerRef}
        style={{ width: "100%", height: "100%", outline: "none" }}
        tabIndex={-1}
      />
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 10,
          display: "flex",
          gap: "10px",
          userSelect: "none",
        }}
      >
        <button
          onClick={() => switchPanorama("kitchen")}
          disabled={currentPanorama === "kitchen"}
        >
          Kitchen
        </button>
        <button
          onClick={() => switchPanorama("hall")}
          disabled={currentPanorama === "hall"}
        >
          Hall
        </button>
        <button
          onClick={() => switchPanorama("gallery")}
          disabled={currentPanorama === "gallery"}
        >
          Gallery
        </button>
        <button
          onClick={() => switchPanorama("pooja")}
          disabled={currentPanorama === "pooja"}
        >
          Pooja Room
        </button>
      </div>
    </div>
  );
};

export default PanoramaSwitcher;
