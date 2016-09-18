import * as React from 'react'
import {render} from 'react-dom'
import * as three from 'three'
import './styles/main.scss'

import App from './components/App/App.tsx'

const container = document.querySelector('#root')

render(<App />, container)
