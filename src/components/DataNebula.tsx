"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function DataNebula() {
  const points = useRef<THREE.Points>(null!);
  const points2 = useRef<THREE.Points>(null!);
  const { mouse, viewport } = useThree();

  const count = 3000;
  const count2 = 1500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 7;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    const color1 = new THREE.Color("#a855f7"); // Bright neon purple
    const color2 = new THREE.Color("#7c3aed"); // Deep purple
    const color3 = new THREE.Color("#22d3ee"); // Electric cyan
    const color4 = new THREE.Color("#c084fc"); // Light purple

    for (let i = 0; i < count; i++) {
      const mix = Math.random();
      let finalColor: THREE.Color;
      if (mix < 0.35) finalColor = color1;
      else if (mix < 0.55) finalColor = color2;
      else if (mix < 0.8) finalColor = color3;
      else finalColor = color4;
      cols[i * 3] = finalColor.r;
      cols[i * 3 + 1] = finalColor.g;
      cols[i * 3 + 2] = finalColor.b;
    }
    return cols;
  }, []);

  const positions2 = useMemo(() => {
    const pos = new Float32Array(count2 * 3);
    for (let i = 0; i < count2; i++) {
      const angle = (i / count2) * Math.PI * 2 * 5 + Math.random() * 0.5;
      const r = 1.5 + (i / count2) * 3;
      pos[i * 3] = Math.cos(angle) * r + (Math.random() - 0.5) * 0.5;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
      pos[i * 3 + 2] = Math.sin(angle) * r + (Math.random() - 0.5) * 0.5;
    }
    return pos;
  }, []);

  const colors2 = useMemo(() => {
    const cols = new Float32Array(count2 * 3);
    const c1 = new THREE.Color("#a855f7");
    const c2 = new THREE.Color("#22d3ee");
    for (let i = 0; i < count2; i++) {
      const t = i / count2;
      const c = c1.clone().lerp(c2, t);
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    return cols;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const targetX = mouse.x * viewport.width / 2;
    const targetY = mouse.y * viewport.height / 2;

    points.current.rotation.x = THREE.MathUtils.lerp(points.current.rotation.x, targetY * 0.08, 0.03);
    points.current.rotation.y = THREE.MathUtils.lerp(points.current.rotation.y, targetX * 0.08, 0.03);
    points.current.rotation.z += 0.0008;

    points2.current.rotation.y += 0.003;
    points2.current.rotation.x = Math.sin(time * 0.2) * 0.15;

    const scale = 1 + Math.sin(time * 0.4) * 0.04;
    points.current.scale.set(scale, scale, scale);
    const scale2 = 1 + Math.sin(time * 0.6 + 1) * 0.06;
    points2.current.scale.set(scale2, scale2, scale2);
  });

  return (
    <group>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.04} vertexColors transparent opacity={0.7} sizeAttenuation blending={THREE.NormalBlending} depthWrite={false} />
      </points>
      <points ref={points2}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count2} array={positions2} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={count2} array={colors2} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.06} vertexColors transparent opacity={0.85} sizeAttenuation blending={THREE.NormalBlending} depthWrite={false} />
      </points>
    </group>
  );
}
