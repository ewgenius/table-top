import * as React from 'react'
import {render} from 'react-dom'
import * as three from 'three'
import './styles/main.scss'

import ThreeView from './components/ThreeView/ThreeView.tsx'

const container = document.querySelector('#root')

render(<ThreeView />, container)
