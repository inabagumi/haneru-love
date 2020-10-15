import { Plane, useTexture } from '@react-three/drei'
import { EffectComposer, Glitch, Noise } from '@react-three/postprocessing'
import { Suspense } from 'react'
import type { FC } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import styled from 'styled-components'
import haneruURL from '../assets/haneru.png'

const Container = styled.div`
  height: 80vh;
`

const Scene: FC = () => {
  const { viewport } = useThree()
  const textures = useTexture(haneruURL)

  const texture = Array.isArray(textures) ? textures[0] : textures
  const image = texture.image as HTMLImageElement
  const ratio = image.width / image.height

  return (
    <Plane scale={[viewport.height * ratio, viewport.height, 1]}>
      <meshBasicMaterial map={texture} />
    </Plane>
  )
}

const Hero: FC = () => {
  return (
    <Container>
      <Canvas
        camera={{ zoom: 5, position: [0, 0, 200], far: 300, near: 0 }}
        gl={{
          alpha: false,
          antialias: false,
          powerPreference: 'high-performance'
        }}
        orthographic
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <EffectComposer>
          <Glitch active />
          <Noise premultiply />
        </EffectComposer>
      </Canvas>
    </Container>
  )
}

export default Hero
