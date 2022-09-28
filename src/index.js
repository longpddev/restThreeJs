import React, { Suspense, useRef } from "react"
import { createRoot } from "react-dom/client"
import { Canvas, Dom, useFrame } from "react-three-fiber"
import { Stats } from "./Stats"
import "./styles.css"

function Part() {
  const mesh = useRef()
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.01))
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}
console.log("react 18")
const container = document.getElementById("root")
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <Canvas colorManagement pixelRatio={window.devicePixelRatio} camera={{ position: [0, 0, 10], fov: 50 }}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <pointLight position={[-10, -10, -10]} />
    <spotLight position={[-10, 10, 10]} angle={0.2} intensity={3} />
    <Suspense fallback={<Dom center>loading...</Dom>}>
      <Part />
    </Suspense>
    <Stats />
  </Canvas>
)
