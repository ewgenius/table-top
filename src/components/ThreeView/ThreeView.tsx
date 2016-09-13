import * as React from 'react'
import {Component} from 'react'
import './ThreeView.scss'

import * as THREE from 'three'
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Mesh,
  CubeGeometry,
  MeshNormalMaterial,
} from 'three'

interface ThreeViewProps {
  canvasId?: string
} 

export default class ThreeView extends Component<ThreeViewProps, {}> {
  static defaultProps = {
    canvasId: 'canvas'
  }

  private canvas: HTMLCanvasElement
  private container: Element
  private renderer: WebGLRenderer
  private scene: Scene
  private camera: PerspectiveCamera

  componentDidMount() {
    this.canvas = this.refs[this.props.canvasId] as HTMLCanvasElement
    this.container = this.refs['wrapper'] as Element
    this.initThree()
  }

  initThree() {
    this.renderer = new WebGLRenderer({
      canvas: this.canvas
    })
    this.scene = new Scene()
    this.camera = new PerspectiveCamera(65, this.canvas.clientWidth / this.canvas.clientHeight, 1, 10000)

    this.camera.position.y = 150
    this.camera.position.z = 350

    const cube = new Mesh(new CubeGeometry(100, 100, 100), new MeshNormalMaterial())
    cube.name = 'test'
    this.scene.add(cube)

    window.addEventListener('resize', () => this.resizeScene())

    this.resizeScene()
    this.renderScene()
  }

  resizeScene() {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
  }

  renderScene() {
    let cube = this.scene.getObjectByName('test') as Mesh
    cube.rotation.y += 0.1
    this.renderer.render(this.scene, this.camera)

    requestAnimationFrame(() => this.renderScene())
  }

  render() {
    return <div className='three-view'>
      <div ref='wrapper' className='canvas-container'>
        <canvas ref={this.props.canvasId}></canvas>
      </div>
    </div>
  }
}
