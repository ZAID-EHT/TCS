import React, { useRef, useLayoutEffect, Component, ReactNode, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { useLenis } from "lenis/react";

class ModelErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean}> {
  constructor(props: {children: ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    console.error("3D Model failed to load:", error);
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <ProceduralCar />;
    }
    return this.props.children;
  }
}

function ProceduralCar() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Exquisite custom procedural sports car built with Three.js primitives
  // This guarantees there is always a gorgeous, interactive, high-performance car visible
  return (
    <group ref={groupRef} position={[0, -0.3, 0]}>
      {/* Main lower aerodynamic chassis panel */}
      <mesh castShadow receiveShadow position={[0, 0.1, 0]}>
        <boxGeometry args={[1.7, 0.3, 3.7]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.12} metalness={0.92} />
      </mesh>
      
      {/* Sleek curves - front hood and bumper */}
      <mesh castShadow position={[0, 0.22, 1.3]}>
        <boxGeometry args={[1.6, 0.22, 1.1]} />
        <meshStandardMaterial color="#bc000c" roughness={0.1} metalness={0.95} />
      </mesh>

      {/* Rear trunk and bodywork */}
      <mesh castShadow position={[0, 0.28, -1.2]}>
        <boxGeometry args={[1.62, 0.35, 1.3]} />
        <meshStandardMaterial color="#bc000c" roughness={0.1} metalness={0.95} />
      </mesh>

      {/* Glossy aerodynamic cabin container */}
      <mesh castShadow position={[0, 0.52, -0.1]}>
        <boxGeometry args={[1.34, 0.42, 1.8]} />
        <meshStandardMaterial color="#1a1a2b" roughness={0.02} metalness={0.98} transparent opacity={0.88} />
      </mesh>

      {/* Front glowing blue windshield */}
      <mesh position={[0, 0.55, 0.8]} rotation={[-Math.PI / 6, 0, 0]}>
        <boxGeometry args={[1.22, 0.45, 0.05]} />
        <meshStandardMaterial color="#00f3ff" roughness={0.01} metalness={0.9} transparent opacity={0.7} emissive="#00354d" emissiveIntensity={1.5} />
      </mesh>

      {/* Futuristic sports car wheels */}
      {/* Front Left */}
      <mesh castShadow position={[-0.9, 0.0, 1.15]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.38, 0.38, 0.28, 24]} />
        <meshStandardMaterial color="#111111" roughness={0.9} />
      </mesh>
      {/* Front Right */}
      <mesh castShadow position={[0.9, 0.0, 1.15]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.38, 0.38, 0.28, 24]} />
        <meshStandardMaterial color="#111111" roughness={0.9} />
      </mesh>
      {/* Rear Left */}
      <mesh castShadow position={[-0.9, 0.0, -1.15]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.32, 24]} />
        <meshStandardMaterial color="#111111" roughness={0.9} />
      </mesh>
      {/* Rear Right */}
      <mesh castShadow position={[0.9, 0.0, -1.15]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.32, 24]} />
        <meshStandardMaterial color="#111111" roughness={0.9} />
      </mesh>

      {/* Highly polished titanium hub caps */}
      <mesh position={[-1.01, 0.0, 1.15]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.06, 12]} />
        <meshStandardMaterial color="#f0f0f0" metalness={1.0} roughness={0.05} />
      </mesh>
      <mesh position={[1.01, 0.0, 1.15]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.06, 12]} />
        <meshStandardMaterial color="#f0f0f0" metalness={1.0} roughness={0.05} />
      </mesh>
      <mesh position={[-1.01, 0.0, -1.15]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.24, 0.24, 0.06, 12]} />
        <meshStandardMaterial color="#f0f0f0" metalness={1.0} roughness={0.05} />
      </mesh>
      <mesh position={[1.01, 0.0, -1.15]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.24, 0.24, 0.06, 12]} />
        <meshStandardMaterial color="#f0f0f0" metalness={1.0} roughness={0.05} />
      </mesh>

      {/* Cyber carbon spoiler wing */}
      <mesh castShadow position={[0, 0.65, -1.5]} rotation={[0.04, 0, 0]}>
        <boxGeometry args={[1.5, 0.04, 0.45]} />
        <meshStandardMaterial color="#0b0b0b" roughness={0.08} metalness={0.95} />
      </mesh>
      <mesh castShadow position={[-0.6, 0.45, -1.48]}>
        <boxGeometry args={[0.04, 0.32, 0.12]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.2} />
      </mesh>
      <mesh castShadow position={[0.6, 0.45, -1.48]}>
        <boxGeometry args={[0.04, 0.32, 0.12]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.2} />
      </mesh>

      {/* Laser LED headlights */}
      <mesh position={[-0.6, 0.28, 1.83]} rotation={[0.0, 0, 0]}>
        <boxGeometry args={[0.24, 0.06, 0.08]} />
        <meshStandardMaterial color="#00f3ff" emissive="#00ffff" emissiveIntensity={5} />
      </mesh>
      <mesh position={[0.6, 0.28, 1.83]} rotation={[0.0, 0, 0]}>
        <boxGeometry args={[0.24, 0.06, 0.08]} />
        <meshStandardMaterial color="#00f3ff" emissive="#00ffff" emissiveIntensity={5} />
      </mesh>

      {/* Horizontal ruby-red light strip */}
      <mesh position={[0, 0.35, -1.83]}>
        <boxGeometry args={[1.4, 0.04, 0.06]} />
        <meshStandardMaterial color="#ff0022" emissive="#ff0022" emissiveIntensity={4} />
      </mesh>
    </group>
  );
}

interface CarModelProps {
  modelUrl: string;
}

function CarModel({ modelUrl }: CarModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Use reliable Draco-loader fallback for all model formats
  const { scene } = useGLTF(modelUrl, "https://www.gstatic.com/draco/versioned/decoders/1.5.5/");
  
  React.useLayoutEffect(() => {
    // Reset standard transforms
    scene.scale.setScalar(1);
    scene.rotation.set(0, 0, 0);
    scene.position.set(0, 0, 0);

    // Dynamic scale depending on viewport width - reduced by exactly 8% from precious dimensions!
    // Original sizes was 3.8 / 5.8 -> Reduced by 8% = 3.5 / 5.34 (let's use 3.5 and 5.3)
    const isMobile = window.innerWidth < 768;
    const targetSize = isMobile ? 3.5 : 5.3;

    // Detect and auto-resolve standing orientation issues (tail standing)
    let box = new THREE.Box3().setFromObject(scene);
    let size = box.getSize(new THREE.Vector3());

    if (size.y > size.x && size.y > size.z) {
      // Lay the model flat on its wheels
      scene.rotation.x = Math.PI / 2;
      scene.updateMatrixWorld(true);
      box = new THREE.Box3().setFromObject(scene);
      size = box.getSize(new THREE.Vector3());
    }

    if (size.x > size.z) {
      // Rotate 90 degrees horizontally to point front/back nicely
      scene.rotation.y = Math.PI / 2;
      scene.updateMatrixWorld(true);
      box = new THREE.Box3().setFromObject(scene);
      size = box.getSize(new THREE.Vector3());
    }

    // Centering and ground planar positioning
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const scale = targetSize / maxDim;
      scene.scale.setScalar(scale);

      const center = box.getCenter(new THREE.Vector3());
      // Center X and Z, and snap bottom tires to the surface (y = 0 relative to parent)
      scene.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale);
    }

    // Apply premium materials and shiny metallic gloss shaders
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const m = child as THREE.Mesh;
        m.castShadow = true;
        m.receiveShadow = true;
        
        if (m.material) {
          const mat = m.material as THREE.MeshStandardMaterial;
          mat.envMapIntensity = 3.5; // Exquisite sunset glossy reflection
          
          const matName = (mat.name || "").toLowerCase();
          
          // Outer body metal sheets and lacquers
          if (
            matName.includes("paint") || 
            matName.includes("body") || 
            matName.includes("car") || 
            matName.includes("exterior") ||
            matName.includes("bodypaint") ||
            matName.includes("shell")
          ) {
            mat.roughness = 0.05; // Gloss paint
            mat.metalness = 0.95; // Premium metallic alloy
            mat.color.set("#111111"); // Rich Obsidian Gloss
          }
          
          // Rims, steel, chrome details
          if (
            matName.includes("rim") || 
            matName.includes("chrome") || 
            matName.includes("metal") || 
            matName.includes("silver") ||
            matName.includes("alloy")
          ) {
            mat.metalness = 1.0;
            mat.roughness = 0.08;
            mat.color.set("#dedede");
          }
          
          // Transparent Dark Windows
          if (matName.includes("glass") || matName.includes("window") || matName.includes("windshield")) {
            mat.transparent = true;
            mat.opacity = 0.35;
            mat.roughness = 0.02;
            mat.color.set("#151525");
          }
          
          // Tires & Matt Rubber
          if (matName.includes("tire") || matName.includes("rubber") || matName.includes("wheel_rubber")) {
            mat.roughness = 0.85;
            mat.metalness = 0.05;
            mat.color.set("#1a1a1a");
          }
        }
      }
    });
  }, [scene, modelUrl]);

  // Buttery physics-lerping rotation loop matching scroll speed smoothly
  useFrame(() => {
    if (!groupRef.current) return;

    const circleProgress = (window as any).showcaseCircleProgress || 0;
    const progress = (window as any).showcaseScrollProgress || 0;

    let targetX = 0;
    // Slight vertical offset for centering
    let targetY = -0.3; 
    let targetZ = 0;

    let targetRotY = -Math.PI / 4;
    let targetRotX = 0;
    let targetRotZ = 0;

    const isMobile = window.innerWidth < 768;
    const nudgeDistance = isMobile ? 0 : 1.15;
    
    let targetScale = isMobile ? 0.95 : 1.05; 

    if (circleProgress < 1.0) {
      // Phase 1: Interactive Smooth Entry / Reveal (based on smooth entrance)
      targetScale = THREE.MathUtils.lerp(isMobile ? 0.65 : 0.75, isMobile ? 1.05 : 1.25, circleProgress);
      targetRotY = THREE.MathUtils.lerp(-Math.PI / 3, -Math.PI / 2, circleProgress);
    } else {
      // Phases 2, 3, 4 based on sticky scroll progress (from clampedProgress = 0.0 to 1.0)
      if (progress < 0.35) {
        // Phase 2: Slide Right, Rotate to show side bodywork (Progress mapped from 0.0 to 0.35)
        const t = progress / 0.35;
        targetScale = isMobile ? 1.05 : 1.25;
        targetX = THREE.MathUtils.lerp(0, nudgeDistance, t);
        targetRotY = THREE.MathUtils.lerp(-Math.PI / 2, Math.PI / 9, t);
        targetRotX = THREE.MathUtils.lerp(0, 0.05, t); 
      } else if (progress < 0.75) {
        // Phase 3: Slide Left, Rotate around to highlight tyre depth and rear details (Progress mapped from 0.35 to 0.75)
        const t = (progress - 0.35) / 0.40;
        targetScale = isMobile ? 1.05 : 1.25;
        targetX = THREE.MathUtils.lerp(nudgeDistance, -nudgeDistance, t);
        targetRotY = THREE.MathUtils.lerp(Math.PI / 9, -Math.PI / 1.5, t);
        targetRotX = THREE.MathUtils.lerp(0.05, -0.05, t);
      } else {
        // Phase 4: Spin back to central finish (Progress mapped from 0.75 to 1.0)
        const t = (progress - 0.75) / 0.25;
        targetScale = THREE.MathUtils.lerp(isMobile ? 1.05 : 1.25, isMobile ? 0.85 : 1.08, t);
        targetX = THREE.MathUtils.lerp(-nudgeDistance, 0, t);
        targetRotY = THREE.MathUtils.lerp(-Math.PI / 1.5, -Math.PI / 4 + Math.PI * 2, t);
        targetRotX = THREE.MathUtils.lerp(-0.05, 0, t);
      }
    }

    // Buttery inertia factor (0.075 achieves a spectacular heavy mechanical/fluid weight)
    const lerpSpeed = 0.075;
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, lerpSpeed);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, lerpSpeed);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, lerpSpeed);

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, lerpSpeed);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, lerpSpeed);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, lerpSpeed);

    groupRef.current.scale.x = THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, lerpSpeed);
    groupRef.current.scale.y = THREE.MathUtils.lerp(groupRef.current.scale.y, targetScale, lerpSpeed);
    groupRef.current.scale.z = THREE.MathUtils.lerp(groupRef.current.scale.z, targetScale, lerpSpeed);
  });

  return (
    <group ref={groupRef}>
       <primitive object={scene} />
    </group>
  );
}

export function Showcase3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const tooltip1Ref = useRef<HTMLDivElement>(null);
  const tooltip2Ref = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const [modelPath, setModelPath] = useState<string | null>(null);

  useEffect(() => {
    // Detect if a local nissan_gtr.glb is available in the public folder
    fetch("/nissan_gtr.glb", { method: "HEAD" })
      .then((res) => {
        if (res.status === 200 || res.ok) {
          setModelPath("/nissan_gtr.glb");
        } else {
          setModelPath("https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/ferrari.glb");
        }
      })
      .catch(() => {
        setModelPath("https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/ferrari.glb");
      });
  }, []);

  // Unified scroll handler to track scroll container position with native perfection
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      if (totalHeight <= 0) return;

      const rawProgress = -rect.top / totalHeight;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      (window as any).showcaseScrollProgress = clampedProgress;

      // Top of the container relative to the viewport
      const topOfContainer = rect.top;
      
      // Let's start the circle animation smoothly when the section first scrolls into the viewport
      const startAnimY = window.innerHeight * 0.95; // start opening near the bottom fold
      const endAnimY = -window.innerHeight * 0.15; // fully open soon after top reaches the status header
      
      let circleProgress = 0;
      if (topOfContainer <= startAnimY) {
        circleProgress = (startAnimY - topOfContainer) / (startAnimY - endAnimY);
        circleProgress = Math.max(0, Math.min(1, circleProgress));
      }

      (window as any).showcaseCircleProgress = circleProgress;

      // Direct high-performance DOM manipulation with Webkit prefix and Hardware Layer Promotion to prevent Safari/Chrome bugs
      if (maskRef.current) {
        const radius = circleProgress * 150;
        const clipVal = `circle(${radius}% at 50% 50%)`;
        maskRef.current.style.clipPath = clipVal;
        (maskRef.current.style as any).webkitClipPath = clipVal;
      }

      if (headerRef.current) {
        const headerOpacity = Math.max(0, 1 - clampedProgress / 0.18);
        const headerY = -(clampedProgress / 0.18) * 60;
        headerRef.current.style.opacity = `${headerOpacity}`;
        headerRef.current.style.transform = `translateY(${headerY}px)`;
      }

      if (tooltip1Ref.current) {
        let tooltip1Opacity = 0;
        let tooltip1Transform = "translateX(-30px) scale(0.9)";
        if (clampedProgress > 0.25 && clampedProgress < 0.60) {
          if (clampedProgress < 0.38) {
            const t = (clampedProgress - 0.25) / 0.13;
            tooltip1Opacity = t;
            tooltip1Transform = `translateX(${-30 + 30 * t}px) scale(${0.9 + 0.1 * t})`;
          } else if (clampedProgress > 0.48) {
            const t = Math.max(0, 1 - (clampedProgress - 0.48) / 0.12);
            tooltip1Opacity = t;
            tooltip1Transform = `translateX(${-20 * (1 - t)}px) scale(${0.95 + 0.05 * t})`;
          } else {
            tooltip1Opacity = 1;
            tooltip1Transform = "translateX(0px) scale(1)";
          }
        }
        tooltip1Ref.current.style.opacity = `${tooltip1Opacity}`;
        tooltip1Ref.current.style.transform = tooltip1Transform;
        tooltip1Ref.current.style.pointerEvents = tooltip1Opacity > 0.5 ? "auto" : "none";
      }

      if (tooltip2Ref.current) {
        let tooltip2Opacity = 0;
        let tooltip2Transform = "translateX(30px) scale(0.9)";
        if (clampedProgress > 0.60 && clampedProgress < 0.90) {
          if (clampedProgress < 0.73) {
            const t = (clampedProgress - 0.60) / 0.13;
            tooltip2Opacity = t;
            tooltip2Transform = `translateX(${30 - 30 * t}px) scale(${0.9 + 0.1 * t})`;
          } else if (clampedProgress > 0.80) {
            const t = Math.max(0, 1 - (clampedProgress - 0.80) / 0.10);
            tooltip2Opacity = t;
            tooltip2Transform = `translateX(${20 * (1 - t)}px) scale(${0.95 + 0.05 * t})`;
          } else {
            tooltip2Opacity = 1;
            tooltip2Transform = "translateX(0px) scale(1)";
          }
        }
        tooltip2Ref.current.style.opacity = `${tooltip2Opacity}`;
        tooltip2Ref.current.style.transform = tooltip2Transform;
        tooltip2Ref.current.style.pointerEvents = tooltip2Opacity > 0.5 ? "auto" : "none";
      }
    };

    // Fast event-bound synchronization for instant responsiveness
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    if (lenis) {
      lenis.on("scroll", handleScroll);
    }

    // Capture initial location
    handleScroll();

    // Occasional debounce fallback to make absolutely sure coordinates align on layout changes
    const resizeObserver = new ResizeObserver(() => handleScroll());
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (lenis) {
        lenis.off("scroll", handleScroll);
      }
      resizeObserver.disconnect();
    };
  }, [lenis]);

  return (
    <div ref={containerRef} className="relative z-20 h-[300vh] w-full bg-primary">
      {/* 
        Native CSS Sticky ensures the viewport stays locked beautifully 
        for 3 screen heights of natural user scrolling inside any iframe context/browser!
      */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-primary">
        
        {/* Layer 0: Backdrop subtle watermark */}
        <h2 className="font-headline text-5xl md:text-8xl text-on-primary/10 uppercase text-center absolute z-0 tracking-tight select-none">
          Precision <br/> Engineering
        </h2>

        {/* Layer 1: Circular Reveal Container */}
        <div 
          ref={maskRef}
          className="absolute inset-0 bg-surface-lowest z-10 overflow-hidden select-none" 
          style={{ 
            clipPath: "circle(0% at 50% 50%)",
            WebkitClipPath: "circle(0% at 50% 50%)",
            transform: "translate3d(0, 0, 0)",
            WebkitTransform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            willChange: "clip-path, -webkit-clip-path"
          }}
        >
          {/* 3D Canvas with High-Performance Power Preference and Pixel Ratio Caps */}
          <Canvas 
            camera={{ position: [0, 1.2, 5.8], fov: 42 }} 
            gl={{ 
              antialias: true, 
              powerPreference: "high-performance",
              precision: "highp"
            }} 
            dpr={[1, 2]} 
            shadows
            style={{ willChange: "transform" }}
          >
            {/* Cinematic warm light highlights */}
            <ambientLight intensity={0.7} color="#fffcf5" />
            <directionalLight 
              position={[10, 6, 8]} 
              intensity={2.8} 
              color="#ffedd5" 
              castShadow 
              shadow-mapSize={[2048, 2048]} 
            />
            {/* Soft cool fill light */}
            <directionalLight position={[-10, 10, -5]} intensity={0.6} color="#dbeafe" />
            {/* Spotlighting overhead rim lines */}
            <spotLight position={[0, 15, 0]} intensity={3.5} angle={Math.PI / 4} penumbra={1} castShadow />
            {/* Metallic floor outline shines */}
            <directionalLight position={[0, -2, 5]} intensity={1.5} color="#ffffff" />
            
            <ModelErrorBoundary>
              <Environment preset="sunset" />
            </ModelErrorBoundary>

            {modelPath && (
              <ModelErrorBoundary>
                <React.Suspense fallback={null}>
                  <CarModel modelUrl={modelPath} />
                </React.Suspense>
              </ModelErrorBoundary>
            )}
            
            <ContactShadows resolution={1024} scale={15} blur={2.5} opacity={0.65} far={5} position={[0, -0.85, 0]} />
          </Canvas>
          
          {/* HTML Overlays over Canvas */}
          <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between py-16 md:py-24 px-gutter md:px-24">
             <div className="flex justify-center w-full">
                <h2 
                  ref={headerRef}
                  className="font-headline text-4xl md:text-7xl uppercase text-primary tracking-tight text-center select-none"
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)"
                  }}
                >
                  The GTR Experience
                </h2>
             </div>
             
             {/* Side Detail Tooltips */}
             <div className="w-full h-full relative font-mono uppercase tracking-widest text-xs flex items-center justify-between pointer-events-none">
                {/* Left Card */}
                <div 
                  ref={tooltip1Ref}
                  className="bg-primary text-on-primary p-6 border-l-4 border-secondary max-w-sm ml-4 md:ml-12 shadow-2xl rounded-sm pointer-events-auto transform transition-all duration-150"
                  style={{
                    opacity: 0,
                    transform: "translateX(-30px) scale(0.9)",
                    willChange: "transform, opacity",
                    pointerEvents: "none"
                  }}
                >
                  <div className="flex items-center gap-2 mb-2 text-secondary font-bold tracking-wider text-[10px]">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-ping" />
                    <span>01 / SURFACE</span>
                  </div>
                  <p className="font-headline text-2xl tracking-normal normal-case mb-1 text-on-primary">Ceramic Shield</p>
                  <p className="opacity-70 text-[11px] font-sans lowercase leading-relaxed text-on-primary/95">
                    Ultra-hard 9H liquid glass coating that locks out minor abrasions while creating deep obsidian water-beading lacquer layers.
                  </p>
                </div>
                
                {/* Right Card */}
                <div 
                  ref={tooltip2Ref}
                  className="bg-primary text-on-primary p-6 border-r-4 border-secondary max-w-sm mr-4 md:mr-12 text-right shadow-2xl rounded-sm pointer-events-auto transform transition-all duration-150"
                  style={{
                    opacity: 0,
                    transform: "translateX(30px) scale(0.9)",
                    willChange: "transform, opacity",
                    pointerEvents: "none"
                  }}
                >
                  <div className="flex items-center justify-end gap-2 mb-2 text-secondary font-bold tracking-wider text-[10px]">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-ping" />
                    <span>02 / TEXTURE</span>
                  </div>
                  <p className="font-headline text-2xl tracking-normal normal-case mb-1 text-on-primary">Flawless Finish</p>
                  <p className="opacity-70 text-[11px] font-sans lowercase leading-relaxed text-on-primary/95">
                    100% micro-swirl restoration. Multi-stage wool polishing levels imperfections to produce a pure reflective, mirror-like depth field.
                  </p>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Preload the assets
useGLTF.preload("https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/ferrari.glb", "https://www.gstatic.com/draco/versioned/decoders/1.5.5/");
