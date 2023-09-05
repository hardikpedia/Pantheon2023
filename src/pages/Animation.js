import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Trail, OrbitControls, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Image from 'next/image';

function ShootingStar() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 2
    ref.current.position.set(Math.sin(t) * 4, Math.atan(t) * Math.cos(t / 2) * 2)
  })
  
  return (
    <Trail width={5} length={8} color={new THREE.Color(2, 1, 10)} attenuation={(t) => t * t}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.25]} />
        <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
      </mesh>
    </Trail>
  )
}

export default function Animation() {
  return (
    <div className='h-screen' >
        <Canvas className='fixed' camera={{ position: [0, 0, 15] }}>
            <color attach="background" args={['black']} />
            <ambientLight intensity={1} />
            <ShootingStar />
            <Stars saturation={false} count={800} speed={0.3} />
            <OrbitControls />
            <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={1} />
            </EffectComposer>
        </Canvas>
        <Image src="/pantheon_main_white.png" alt="pantheon" width={500} height={500} className='fixed left-0 top-0 z-100 bg-transparent text-white' />
    </div>
  )
}
