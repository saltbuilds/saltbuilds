import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface CrystalProps {
    mousePosition: { x: number; y: number };
    scrollProgress: number;
}

// Main hero crystal with premium glass material
function MainCrystal({ mousePosition, scrollProgress }: CrystalProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    // Higher detail geometry for better appearance
    const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.2, 1), []);

    useFrame(() => {
        if (!meshRef.current) return;

        const targetRotationY = mousePosition.x * 0.5;
        const targetRotationX = mousePosition.y * 0.35;

        meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.15;
        meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.15;
        meshRef.current.rotation.z += 0.0015;

        meshRef.current.position.y = Math.sin(scrollProgress * Math.PI) * 0.15;
    });

    return (
        <mesh ref={meshRef} geometry={geometry}>
            <MeshTransmissionMaterial
                backside={true}
                samples={8}
                resolution={512}
                transmission={0.98}
                roughness={0.0}
                thickness={1.5}
                ior={1.52}
                chromaticAberration={0.12}
                anisotropy={1}
                distortion={0.15}
                distortionScale={0.4}
                temporalDistortion={0.05}
                clearcoat={1}
                clearcoatRoughness={0}
                attenuationDistance={0.8}
                attenuationColor="#64b5d6"
                color="#ffffff"
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}

// Secondary accent crystals
function AccentCrystal({
    position,
    scale,
    mousePosition,
    speed = 1.5,
    color = "#81C7D4"
}: {
    position: [number, number, number];
    scale: number;
    mousePosition: { x: number; y: number };
    speed?: number;
    color?: string;
}) {
    const meshRef = useRef<THREE.Mesh>(null);

    const geometry = useMemo(() => new THREE.OctahedronGeometry(1, 1), []);

    useFrame(() => {
        if (!meshRef.current) return;
        meshRef.current.rotation.y += 0.002 * speed;
        meshRef.current.rotation.x += 0.001 * speed;
    });

    return (
        <group position={position} scale={scale}>
            <mesh ref={meshRef} geometry={geometry}>
                <MeshTransmissionMaterial
                    samples={6}
                    resolution={256}
                    transmission={0.95}
                    roughness={0.05}
                    thickness={1}
                    ior={1.5}
                    chromaticAberration={0.08}
                    clearcoat={1}
                    attenuationColor={color}
                    color="#ffffff"
                />
            </mesh>
        </group>
    );
}

// Optimized crystal group with better composition
function CrystalGroup({ mousePosition, scrollProgress }: CrystalProps) {
    return (
        <group>
            {/* Main hero crystal with gentle float */}
            <Float
                speed={1.2}
                rotationIntensity={0.15}
                floatIntensity={0.3}
                floatingRange={[-0.1, 0.1]}
            >
                <MainCrystal mousePosition={mousePosition} scrollProgress={scrollProgress} />
            </Float>

            {/* Accent crystal 1 - Top right *

/}
      <Float 
        speed={1.8} 
        rotationIntensity={0.25} 
        floatIntensity={0.5}
        floatingRange={[-0.15, 0.15]}
      >
        <AccentCrystal 
          position={[2, 1.2, -1]} 
          scale={0.45} 
          mousePosition={mousePosition}
          speed={1.3}
          color="#5fa8c7"
        />
      </Float>
      
      {/* Accent crystal 2 - Left side */}
            <Float
                speed={2.2}
                rotationIntensity={0.3}
                floatIntensity={0.6}
                floatingRange={[-0.2, 0.2]}
            >
                <AccentCrystal
                    position={[-1.8, -0.3, -0.8]}
                    scale={0.35}
                    mousePosition={mousePosition}
                    speed={1.6}
                    color="#95d4e8"
                />
            </Float>

            {/* Tiny accent crystal - for depth */}
            <Float
                speed={2.5}
                rotationIntensity={0.2}
                floatIntensity={0.7}
            >
                <AccentCrystal
                    position={[1.2, -1.5, 0.5]}
                    scale={0.25}
                    mousePosition={mousePosition}
                    speed={2}
                    color="#81C7D4"
                />
            </Float>
        </group>
    );
}

// Main component with optimized scene
export default function GlassySaltCrystal() {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const [scrollProgress, setScrollProgress] = React.useState(0);

    React.useEffect(() => {
        let rafId = 0;
        const handleMouseMove = (e: MouseEvent) => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth) * 2 - 1;
                const y = -(e.clientY / window.innerHeight) * 2 + 1;
                setMousePosition({ x, y });
                rafId = 0;
            }) as unknown as number;
        };

        let scrollRafId = 0;
        const handleScroll = () => {
            if (scrollRafId) return;
            scrollRafId = requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                const progress = Math.min(scrollY / (maxScroll || 1), 1);
                setScrollProgress(progress);
                scrollRafId = 0;
            }) as unknown as number;
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
            if (scrollRafId) cancelAnimationFrame(scrollRafId);
        };
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
            <Canvas
                dpr={[1, 2]}
                camera={{ position: [0, 0, 6], fov: 50 }}
                gl={{
                    alpha: true,
                    antialias: true,
                    powerPreference: 'high-performance',
                    stencil: false,
                }}
            >
                <color attach="background" args={['transparent']} />

                {/* Premium lighting setup */}
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
                <directionalLight position={[-3, -3, -3]} intensity={0.6} color="#e0f7ff" />
                <pointLight position={[0, 3, 3]} intensity={0.8} color="#81C7D4" />
                <pointLight position={[-4, 0, 2]} intensity={0.5} color="#5fa8c7" />

                {/* Lightweight environment for subtle reflections */}
                <Environment preset="dawn" environmentIntensity={0.4} />

                {/* Crystal Group */}
                <CrystalGroup mousePosition={mousePosition} scrollProgress={scrollProgress} />
            </Canvas>
        </div>
    );
}
