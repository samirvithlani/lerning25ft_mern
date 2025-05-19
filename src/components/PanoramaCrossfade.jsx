import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import bedroom from "../assets/images/Bedroom-1_out.png";
import hall from "../assets/images/hall.png";

const PanoramaCrossfade = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const lonRef = useRef(0);
  const latRef = useRef(0);
  const isDraggingRef = useRef(false);
  const prevMousePosRef = useRef({ x: 0, y: 0 });

  const progressRef = useRef(0); // 0 to 1 transition progress
  const [loading, setLoading] = useState(true); // Loader state
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1500
    );
    camera.position.set(0, 0, 0.1);

    const loader = new THREE.TextureLoader();
    let textureBedroom, textureHall;
    let texturesLoaded = 0;

    const onTextureLoad = () => {
      texturesLoaded++;
      if (texturesLoaded === 2) {
        setLoading(false);
      }
    };

    textureBedroom = loader.load(bedroom, onTextureLoad);
    textureHall = loader.load(hall, onTextureLoad);

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const overlapDistance = 950;

    const meshBedroom = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({
        map: textureBedroom,
        transparent: true,
        opacity: 1,
      })
    );
    const meshHall = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({
        map: textureHall,
        transparent: true,
        opacity: 0,
      })
    );
    meshHall.position.set(overlapDistance, 0, 0);

    scene.add(meshBedroom);
    scene.add(meshHall);

    containerRef.current.addEventListener("pointerdown", onPointerDown);
    containerRef.current.addEventListener("pointerup", onPointerUp);
    containerRef.current.addEventListener("pointermove", onPointerMove);

    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    function onPointerDown(e) {
      isDraggingRef.current = true;
      prevMousePosRef.current = { x: e.clientX, y: e.clientY };
    }

    function onPointerUp() {
      isDraggingRef.current = false;
    }

    function onPointerMove(e) {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - prevMousePosRef.current.x;
      const deltaY = e.clientY - prevMousePosRef.current.y;
      lonRef.current -= deltaX * 0.1;
      latRef.current += deltaY * 0.1;
      latRef.current = Math.min(85, Math.max(-85, latRef.current));
      prevMousePosRef.current = { x: e.clientX, y: e.clientY };
    }

    function animate() {
      requestAnimationFrame(animate);

      const phi = THREE.MathUtils.degToRad(90 - latRef.current);
      const theta = THREE.MathUtils.degToRad(lonRef.current);

      if (moving && progressRef.current < 1) {
        progressRef.current += 0.01;
        if (progressRef.current >= 1) {
          progressRef.current = 1;
          setMoving(false);
        }
      }

      const easedProgress = easeInOutQuad(progressRef.current);

      camera.position.x = overlapDistance * easedProgress;
      camera.position.y = 0;
      camera.position.z = 1;

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.cos(phi);
      const z = Math.sin(phi) * Math.sin(theta);

      meshBedroom.material.opacity = 1 - easedProgress;
      meshHall.material.opacity = easedProgress;

      camera.lookAt(camera.position.x + x, y, z);

      renderer.render(scene, camera);
    }

    animate(); // Start animation loop

    return () => {
      containerRef.current.removeEventListener("pointerdown", onPointerDown);
      containerRef.current.removeEventListener("pointerup", onPointerUp);
      containerRef.current.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
    };
  }, [moving]);

  const goToHall = () => {
    if (!moving) {
      progressRef.current = 0;
      setMoving(true);
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "500px",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />

      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 20,
            flexDirection: "column",
            fontSize: "1.2rem",
          }}
        >
          <div
            style={{
              border: "4px solid rgba(255, 255, 255, 0.3)",
              borderTop: "4px solid #fff",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              animation: "spin 1s linear infinite",
              marginBottom: "10px",
            }}
          />
          <p>Loading panorama...</p>
        </div>
      )}

      <button
        onClick={goToHall}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 10,
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Go to Hall
      </button>

      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default PanoramaCrossfade;
