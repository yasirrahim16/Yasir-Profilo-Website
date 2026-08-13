"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles, Stars, Environment } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "@/shaders/aurora";

function EnergyRing({ radius, speed, opacity }: { radius: number; speed: number; opacity: number }) {
  const ref=useRef<THREE.Mesh>(null);
  useFrame((state)=>{if(ref.current){ref.current.rotation.z=state.clock.elapsedTime*speed;ref.current.rotation.x=Math.sin(state.clock.elapsedTime*.28)*.2}});
  return <mesh ref={ref}><torusGeometry args={[radius,.009,24,180]} /><meshBasicMaterial transparent opacity={opacity} color="#8ceaff" /></mesh>;
}

function AuroraPlane() {
  const mat=useMemo(()=>new THREE.ShaderMaterial({vertexShader,fragmentShader,transparent:true,depthWrite:false,uniforms:{uTime:{value:0},uHover:{value:0}}}),[]);
  useFrame((state)=>{mat.uniforms.uTime.value=state.clock.elapsedTime;mat.uniforms.uHover.value=.4+Math.sin(state.clock.elapsedTime)*.2});
  return <mesh rotation={[-Math.PI/2.6,0,0]} position={[0,-1.6,-1]} material={mat}><planeGeometry args={[7,5,42,42]}/></mesh>;
}

function Core() {
  const group=useRef<THREE.Group>(null);
  useFrame((state)=>{if(group.current){group.current.rotation.y=state.clock.elapsedTime*.12;group.current.rotation.x=Math.sin(state.clock.elapsedTime*.6)*.08}});
  return <group ref={group}><Float speed={1.8} rotationIntensity={.25} floatIntensity={.65}><mesh><icosahedronGeometry args={[1.25,4]} /><meshPhysicalMaterial color="#090c15" emissive="#1a1640" emissiveIntensity={1.2} roughness={.18} metalness={.75} transmission={.16} thickness={1.2} clearcoat={1} clearcoatRoughness={.18} /></mesh><mesh scale={1.03}><icosahedronGeometry args={[1.25,4]} /><meshBasicMaterial wireframe color="#74eaff" transparent opacity={.18} /></mesh></Float><EnergyRing radius={1.6} speed={.18} opacity={.52}/><EnergyRing radius={1.9} speed={-.13} opacity={.18}/><EnergyRing radius={2.18} speed={.08} opacity={.11}/></group>
}

export default function HeroScene() {
  return <div className="absolute inset-0"><Canvas dpr={[1,1.7]} camera={{ position: [0,0,7], fov: 38 }} gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}>
    <color attach="background" args={["#030407"]}/><fog attach="fog" args={["#030407", 5, 12]}/><ambientLight intensity={.5}/><directionalLight position={[3,4,5]} intensity={2.2} color="#a8f4ff"/><pointLight position={[-3,1,2]} intensity={25} distance={8} color="#6f56ff"/><pointLight position={[4,-2,-2]} intensity={18} distance={7} color="#95ffbe"/>
    <Stars radius={42} depth={18} count={1100} factor={1.3} saturation={0} fade speed={.2}/><Sparkles count={100} scale={9} size={1.5} speed={.22} noise={1.1} color="#8fdcff"/><Core/><AuroraPlane/><Environment preset="city" environmentIntensity={.25}/><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.15} rotateSpeed={.25}/>
  </Canvas></div>
}
