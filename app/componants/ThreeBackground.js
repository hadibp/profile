import { useEffect, useRef } from "react";

// --- Vanilla Three.js Background Component ---
export const ThreeBackground = ({ isLoaded }) => {
  const mountRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Wait until the script is loaded and the mount point exists
    if (!isLoaded || !mountRef.current || !window.THREE) {
      return;
    }

    const THREE = window.THREE;
    const currentMount = mountRef.current;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha: true for transparent bg
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // --- 3D Model (Wireframe TorusKnot) ---
    const geometry = new THREE.TorusKnotGeometry(1.8, 0.4, 120, 16);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x00ffff, // Cyan color
      wireframe: true 
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    camera.position.z = 5;

    // --- Mouse Interaction ---
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- Animation Loop ---
    const animate = () => {
      // Make model rotate slowly
      torusKnot.rotation.x += 0.001;
      torusKnot.rotation.y += 0.002;
      
      // Make camera drift with mouse
      camera.position.x += (mouseX * 0.1 - camera.position.x) * 0.02;
      camera.position.y += (mouseY * 0.1 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      if (currentMount) {
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
      }
    };
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      scene.remove(torusKnot);
    };
  }, [isLoaded]); // Re-run effect if isLoaded changes

  // Increased opacity to make the model more visible
  return <div ref={mountRef} className="absolute inset-0 z-1 opacity-60" />;
};