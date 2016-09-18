import * as React from 'react'
import {Component, Props} from 'react'
import './ThreeView.scss'

import * as THREE from 'three'
import {
  WebGLRenderer,
  PerspectiveCamera,
  Clock
} from 'three'
import {TableScene} from '../../engine/TableScene.ts'
import Controls from '../../engine/Controls.ts'

interface ThreeViewProps extends Props<ThreeView> {
  canvasId?: string
}

export default class ThreeView extends Component<ThreeViewProps, {}> {
  static defaultProps = {
    canvasId: 'canvas'
  }

  private canvas: HTMLCanvasElement
  private container: HTMLElement
  private renderer: WebGLRenderer
  private scene: TableScene
  private camera: PerspectiveCamera
  private clock: Clock
  private controls: Controls

  componentDidMount() {
    this.canvas = this.refs[this.props.canvasId] as HTMLCanvasElement
    this.container = this.refs['wrapper'] as HTMLElement
    this.initThree()
  }

  initThree() {
    this.clock = new Clock()

    this.renderer = new WebGLRenderer({
      canvas: this.canvas
    })
    this.scene = new TableScene()
    this.camera = new PerspectiveCamera(65, this.canvas.clientWidth / this.canvas.clientHeight, 1, 10000)
    this.controls = new Controls(this.camera, this.container)

    this.camera.position.y = 150
    this.camera.position.z = 350

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
    this.controls.update()
    this.scene.update(this.clock.getDelta())
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
