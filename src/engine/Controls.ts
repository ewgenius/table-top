import * as THREE from 'three'
import {
  EventDispatcher,
  Camera,
  MOUSE
} from 'three'

export default class Controls extends EventDispatcher {
  private object: Camera
  private domElement: HTMLElement | HTMLDocument;
  private minDistance: number;
  private maxDistance: number;

  constructor(object: Camera, domElement?: HTMLElement | HTMLDocument) {
    super()

    this.object = object
    this.domElement = domElement || document

    this.domElement.addEventListener('contextmenu', e => {
      console.log(e)
      e.preventDefault()
    })
    this.domElement.addEventListener('mousedown', e => {
      console.log(e)
    })
    this.domElement.addEventListener('wheel', e => {
      console.log(e)
    })
  }

  update() {

  }
}