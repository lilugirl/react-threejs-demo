import React ,{useRef} from 'react'
import {Text,RenderTexture,PerspectiveCamera   } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export const Cube = () => {
  const textRef=useRef()
  useFrame(state=>{textRef.current.position.x=Math.sin(state.clock.elapsedTime) * 2})
  return (
       <mesh>
            <boxGeometry />
            <meshStandardMaterial >
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0,0,4]} />
                    <color attach="background" args={["#dc9dcd"]}></color>
                    <Text ref={textRef} fontSize={2} color="#555">
                        Hello
                    </Text>
                </RenderTexture>
             </meshStandardMaterial>
        </mesh>     
  )
}
