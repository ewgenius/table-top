import * as THREE from 'three'
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Mesh,
  CubeGeometry,
  MeshNormalMaterial
} from 'three'

export class TableScene extends Scene {
  cube = new Mesh(new CubeGeometry(100, 100, 100), new MeshNormalMaterial())

  constructor() {
    super()

    this.cube.name = 'test'
    this.add(this.cube)
  }

  update(delta) {
    this.cube.rotation.y += 0.1 * delta
  }
}