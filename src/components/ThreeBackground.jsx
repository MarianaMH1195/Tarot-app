import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // --- Configuración de Escena "Deep Space" (Monochrome Edition) ---
        const scene = new THREE.Scene();
        // Fondo Charcoal/Black
        scene.background = new THREE.Color(0x0a0a0a);
        scene.fog = new THREE.FogExp2(0x0a0a0a, 0.0005);

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 3000);
        camera.position.z = 400;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Estilos CSS
        renderer.domElement.style.position = 'fixed';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        renderer.domElement.style.zIndex = '-10';
        renderer.domElement.style.pointerEvents = 'none';

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // --- Texturas Procedurales ---

        // 1. Textura de Estrella "Flare" (Silver Glow)
        const getFlareTexture = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext('2d');
            const cx = 32;
            const cy = 32;

            // Núcleo brillante
            const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 32);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.2, 'rgba(232, 213, 183, 0.8)'); // Parchment tint
            gradient.addColorStop(0.5, 'rgba(192, 192, 192, 0.2)'); // Silver
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(cx, cy, 16, 0, Math.PI * 2);
            ctx.fill();

            // Spikes (Silver)
            ctx.strokeStyle = 'rgba(192, 192, 192, 0.6)';
            ctx.lineWidth = 2;
            ctx.shadowBlur = 4;
            ctx.shadowColor = '#e8d5b7'; // Parchment glow

            // Horizontal
            ctx.beginPath();
            ctx.moveTo(0, cy);
            ctx.lineTo(64, cy);
            ctx.stroke();

            // Vertical
            ctx.beginPath();
            ctx.moveTo(cx, 0);
            ctx.lineTo(cx, 64);
            ctx.stroke();

            return new THREE.CanvasTexture(canvas);
        };
        const flareTexture = getFlareTexture();

        // 2. Textura de Polvo/Nebulosa (Grey Mist)
        const getCloudTexture = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext('2d');

            const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
            gradient.addColorStop(0, 'rgba(168, 168, 168, 0.1)'); // Gray Light
            gradient.addColorStop(0.6, 'rgba(100, 100, 100, 0.05)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 64, 64);

            return new THREE.CanvasTexture(canvas);
        };
        const cloudTexture = getCloudTexture();

        // --- Capas del Universo ---

        // 1. Campo de Estrellas Lejano
        const createStarField = (count, size, opacity) => {
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);

            // Monochrome Palette
            const silver = new THREE.Color(0xc0c0c0);
            const white = new THREE.Color(0xffffff);

            for (let i = 0; i < count; i++) {
                // Distribución amplia
                positions[i * 3] = (Math.random() - 0.5) * 2000;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 1500;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 1000 - 200; // Preferir fondo

                const color = Math.random() > 0.8 ? silver : white;
                colors[i * 3] = color.r;
                colors[i * 3 + 1] = color.g;
                colors[i * 3 + 2] = color.b;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            const material = new THREE.PointsMaterial({
                size: size,
                transparent: true,
                opacity: opacity,
                vertexColors: true,
                depthWrite: false,
                sizeAttenuation: true
            });

            return new THREE.Points(geometry, material);
        };

        // 2. Nebulosas (Dark/Charcoal Clouds)
        const createNebulaField = () => {
            const geometry = new THREE.BufferGeometry();
            const count = 50;
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);

            const charcoal = new THREE.Color(0x1a1a1a);
            const darkSilver = new THREE.Color(0x404040);

            for (let i = 0; i < count; i++) {
                // Agrupadas un poco irregularmente
                positions[i * 3] = (Math.random() - 0.5) * 1500;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 1000;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 800 - 300;

                const color = Math.random() > 0.5 ? charcoal : darkSilver;
                const intensity = 0.5 + Math.random() * 0.5;

                colors[i * 3] = color.r * intensity;
                colors[i * 3 + 1] = color.g * intensity;
                colors[i * 3 + 2] = color.b * intensity;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            const material = new THREE.PointsMaterial({
                size: 600, // Muy grandes
                map: cloudTexture,
                transparent: true,
                opacity: 0.2, // Un poco más visible por ser oscuro
                vertexColors: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending
            });

            return new THREE.Points(geometry, material);
        };

        const bgStars = createStarField(3000, 1.5, 0.8);
        const distantStars = createStarField(5000, 1, 0.5); // Más pequeñas y lejos
        const nebula = createNebulaField();

        scene.add(distantStars);
        scene.add(bgStars);
        scene.add(nebula);


        // --- Constelaciones y Estrellas "Hero" ---
        const constellationsGroup = new THREE.Group();

        const createConstellation = (points, offset, scale = 1, rotation = [0, 0, 0]) => {
            // Líneas finas
            const lineGeo = new THREE.BufferGeometry();
            const linePos = [];
            for (let i = 0; i < points.length - 1; i++) {
                linePos.push(...points[i], ...points[i + 1]);
            }
            lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3));
            const lineMat = new THREE.LineBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.15,
                linewidth: 1
            });
            const lines = new THREE.LineSegments(lineGeo, lineMat);

            // Estrellas 'Hero' con Flare
            const starGeo = new THREE.BufferGeometry();
            const starPos = [];
            points.forEach(p => starPos.push(...p));
            starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));

            const starMat = new THREE.PointsMaterial({
                size: 10, // Grandes para ver el flare
                map: flareTexture,
                color: 0xffffff,
                transparent: true,
                opacity: 1,
                depthWrite: false,
                blending: THREE.AdditiveBlending
            });
            const stars = new THREE.Points(starGeo, starMat);

            // Agrupar
            const group = new THREE.Group();
            group.add(lines);
            group.add(stars);

            group.position.set(...offset);
            group.scale.set(scale, scale, scale);
            group.rotation.set(...rotation);

            return group;
        };

        // Big Dipper (Ursa Major) - Imitando la imagen
        const bigDipperPts = [
            [-40, 30, 0], [-20, 25, 0], [0, 20, 0], [15, 22, 0], // Mango
            [15, 22, 0], [20, 5, 0], [40, 5, 0], [35, 25, 0], [15, 22, 0] // Cazo
        ];

        const bigDipper = createConstellation(bigDipperPts, [-100, 50, -100], 2.5, [0, 0, 0.2]);
        const bigDipperEcho = createConstellation(bigDipperPts, [200, -100, -300], 2, [0, 0, -0.5]); // Otra constelación similar lejos

        // "Pleiades" style cluster
        const clusterPts = [
            [0, 0, 0], [5, 2, 0], [2, 5, 0], [-2, 3, 0], [1, -2, 0], [4, -1, 0]
        ];
        const cluster = createConstellation(clusterPts, [150, 80, -200], 3, [0, 0, 0]);

        constellationsGroup.add(bigDipper);
        constellationsGroup.add(bigDipperEcho);
        constellationsGroup.add(cluster);

        scene.add(constellationsGroup);


        // --- Loop de Animación ---
        let frameId;
        let time = 0;

        const animate = () => {
            frameId = requestAnimationFrame(animate);
            time += 0.0002;

            // Movimiento paralláctico sutil (cámara flotante)
            camera.position.x = Math.sin(time) * 20;
            camera.position.y = Math.cos(time * 0.8) * 20;

            // Rotación ultra lenta del fondo
            nebula.rotation.z = time * 0.05;
            bgStars.rotation.y = -time * 0.02;

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="three-background-container" />;
};

export default ThreeBackground;
