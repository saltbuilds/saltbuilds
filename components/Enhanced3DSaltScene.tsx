import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

// Individual Salt Crystal with enhanced materials
const SaltCrystal: React.FC<{
    position: [number, number, number];
    scale: number;
    rotation: [number, number, number];
    scrollY: number;
    index: number;
}> = ({ position, scale, rotation, scrollY, index }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    // Create irregular crystal geometry
    const geometry = useMemo(() => {
        const geo = new THREE.OctahedronGeometry(1, 0);
        const vertices = geo.attributes.position.array;

        // Randomize vertices for more organic look
        for (let i = 0; i < vertices.length; i += 3) {
            vertices[i] += (Math.random() - 0.5) * 0.2;
            vertices[i + 1] += (Math.random() - 0.5) * 0.2;
            vertices[i + 2] += (Math.random() - 0.5) * 0.2;
        }

        geo.computeVertexNormals();
        return geo;
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            const time = state.clock.getElapsedTime();

            // Gentle rotation
            meshRef.current.rotation.x = rotation[0] + time * 0.1 * (index % 2 === 0 ? 1 : -1);
            meshRef.current.rotation.y = rotation[1] + time * 0.15 * (index % 2 === 0 ? -1 : 1);

            // Mouse parallax effect
            const mouseX = state.mouse.x;
            const mouseY = state.mouse.y;

            meshRef.current.position.x = position[0] + mouseX * (0.5 + index * 0.1);
            meshRef.current.position.y = position[1] + mouseY * (0.3 + index * 0.1) - scrollY * 0.001 * (index + 1);

            // Gentle floating
            meshRef.current.position.y += Math.sin(time * 0.5 + index) * 0.1;
        }
    });

    return (
        <mesh ref={meshRef} geometry={geometry} position={position} scale={scale}>
            <MeshTransmissionMaterial
                backside
                backsideThickness={0.5}
                thickness={0.8}
                chromaticAberration={0.3}
                anisotropy={0.5}
                distortion={0.2}
                distortionScale={0.5}
                temporalDistortion={0.1}
                transmission={0.95}
                roughness={0.1}
                metalness={0.1}
                ior={1.5}
                color="#81C7D4"
                attenuationColor="#81C7D4"
                attenuationDistance={1.5}
            />
        </mesh>
    );
};

// Multiple floating salt crystals
const CrystalCluster: React.FC<{ scrollY: number }> = ({ scrollY }) => {
    const crystalData = useMemo(() => [
        { position: [2, 1, 0] as [number, number, number], scale: 1.2, rotation: [0, 0, 0.3] as [number, number, number] },
        { position: [-2.5, -0.5, -1] as [number, number, number], scale: 0.8, rotation: [0.5, 0.2, 0] as [number, number, number] },
        { position: [0, -2, -0.5] as [number, number, number], scale: 1.5, rotation: [0.2, 0, 0.5] as [number, number, number] },
        { position: [3.5, -1.5, -2] as [number, number, number], scale: 0.6, rotation: [0.8, 0.3, 0.2] as [number, number, number] },
        { position: [-3, 2, -1.5] as [number, number, number], scale: 0.9, rotation: [0.1, 0.6, 0.4] as [number, number, number] },
        { position: [1, 2.5, -2.5] as [number, number, number], scale: 0.7, rotation: [0.4, 0.1, 0.7] as [number, number, number] },
    ], []);

    return (
        <>
            {crystalData.map((data, index) => (
                <SaltCrystal
                    key={index}
                    {...data}
                    scrollY={scrollY}
                    index={index}
                />
            ))}
        </>
    );
};

// Main 3D Canvas Component
const Enhanced3DSaltScene: React.FC = () => {
    const [scrollY, setScrollY] = React.useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance"
                }}
                dpr={[1, 2]}
            >
                <color attach="background" args={['transparent']} />

                {/* Lighting setup for realism */}
                <ambientLight intensity={0.3} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
                <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#81C7D4" />
                <pointLight position={[0, 0, 10]} intensity={0.5} color="#81C7D4" />

                {/* Environment for reflections */}
                <Environment preset="city" />

                {/* Crystal cluster */}
                <CrystalCluster scrollY={scrollY} />
            </Canvas>
        </div>
    );
};

export default Enhanced3DSaltScene;
