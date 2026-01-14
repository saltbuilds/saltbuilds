import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Icosahedron3DProps {
    color?: string;
    size?: number;
    className?: string;
}

const Icosahedron3D: React.FC<Icosahedron3DProps> = ({
    color = '#81C7D4',
    size = 300,
    className = ''
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const icosahedronRef = useRef<THREE.Mesh | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            45,
            size / size,
            0.1,
            1000
        );
        camera.position.z = 4;
        cameraRef.current = camera;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        renderer.setSize(size, size);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Create wireframe icosahedron
        const geometry = new THREE.IcosahedronGeometry(1.5, 0);
        const material = new THREE.MeshBasicMaterial({
            color: color,
            wireframe: true,
            wireframeLinewidth: 2
        });
        const icosahedron = new THREE.Mesh(geometry, material);
        scene.add(icosahedron);
        icosahedronRef.current = icosahedron;

        // Add subtle ambient rotation
        let mouseX = 0;
        let mouseY = 0;
        let targetRotationX = 0;
        let targetRotationY = 0;

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            animationFrameRef.current = requestAnimationFrame(animate);

            if (icosahedronRef.current) {
                // Continuous slow rotation
                icosahedronRef.current.rotation.x += 0.003;
                icosahedronRef.current.rotation.y += 0.005;

                // Subtle mouse interaction
                targetRotationX = mouseY * 0.2;
                targetRotationY = mouseX * 0.2;

                icosahedronRef.current.rotation.x += (targetRotationX - icosahedronRef.current.rotation.x) * 0.05;
                icosahedronRef.current.rotation.y += (targetRotationY - icosahedronRef.current.rotation.y) * 0.05;
            }

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);

            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }

            if (containerRef.current && rendererRef.current) {
                containerRef.current.removeChild(rendererRef.current.domElement);
            }

            if (rendererRef.current) {
                rendererRef.current.dispose();
            }

            if (icosahedronRef.current) {
                icosahedronRef.current.geometry.dispose();
                if (icosahedronRef.current.material instanceof THREE.Material) {
                    icosahedronRef.current.material.dispose();
                }
            }
        };
    }, [color, size]);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                width: size,
                height: size,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        />
    );
};

export default Icosahedron3D;
