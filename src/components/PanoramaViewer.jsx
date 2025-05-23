import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";

import kitchen from "../assets/images/hall2.jpg";
import hall from "../assets/images/hall.png";
import gallery from "../assets/images/hall2.jpg";
import pooja from "../assets/images/Bedroom-1_out.png";

const images = {
  kitchen,
  hall,
  gallery,
  pooja,
};

const PanoramaViewer = () => {
  const containerRef = useRef();
  const rendererRef = useRef();
  const cameraRef = useRef();
  const sceneRef = useRef();
  const sphereRef = useRef();
  const animationFrameIdRef = useRef();
  const texturesRef = useRef({});
  const [currentPanorama, setCurrentPanorama] = useState("kitchen");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const uniformsRef = useRef({
    texture1: { value: null },
    texture2: { value: null },
    mixRatio: { value: 0.0 },
  });

  // Load all textures first
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    let loadedCount = 0;
    const keys = Object.keys(images);

    keys.forEach((key) => {
      loader.load(
        images[key],
        (texture) => {
          texture.mapping = THREE.EquirectangularReflectionMapping;
          texture.encoding = THREE.sRGBEncoding;
          texturesRef.current[key] = texture;

          if (key === currentPanorama) {
            uniformsRef.current.texture1.value = texture;
          }

          loadedCount++;
          if (loadedCount === keys.length) {
            setIsInitialized(true); // trigger rendering after all textures loaded
          }
        },
        undefined,
        (err) => console.error(`Error loading texture for ${key}`, err)
      );
    });
  }, [currentPanorama]);

  // Three.js initialization after textures are ready
  useEffect(() => {
    if (!isInitialized) return;

    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 0.1);
    cameraRef.current = camera;

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: uniformsRef.current,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D texture1;
        uniform sampler2D texture2;
        uniform float mixRatio;
        varying vec2 vUv;
        void main() {
          vec4 tex1 = texture2D(texture1, vUv);
          vec4 tex2 = texture2D(texture2, vUv);
          gl_FragColor = mix(tex1, tex2, mixRatio);
        }
      `,
      side: THREE.BackSide,
    });

    const sphere = new THREE.Mesh(geometry, shaderMaterial);
    sphereRef.current = sphere;
    scene.add(sphere);

    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      shaderMaterial.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [isInitialized]);

  const switchPanorama = (name) => {
    if (name === currentPanorama || isTransitioning) return;
    const nextTexture = texturesRef.current[name];
    if (!nextTexture) return;

    setIsTransitioning(true);

    uniformsRef.current.texture2.value = nextTexture;

    gsap.to(uniformsRef.current.mixRatio, {
      value: 1,
      duration: 2,
      onComplete: () => {
        uniformsRef.current.texture1.value = nextTexture;
        uniformsRef.current.mixRatio.value = 0;
        setCurrentPanorama(name);
        setIsTransitioning(false);
      },
    });
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 2,
          display: "flex",
          gap: "10px",
        }}
      >
        {Object.keys(images).map((key) => (
          <button
            key={key}
            onClick={() => switchPanorama(key)}
            disabled={isTransitioning}
            style={{
              padding: "10px 20px",
              backgroundColor: currentPanorama === key ? "#ccc" : "#fff",
              cursor: isTransitioning ? "not-allowed" : "pointer",
              borderRadius: "5px",
              border: "1px solid #000",
            }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PanoramaViewer;
