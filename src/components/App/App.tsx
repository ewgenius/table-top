import * as React from 'react'
import {Component, Props} from 'react'
import './App.scss'

import ThreeView from '../ThreeView/ThreeView.tsx'

export default class App extends Component<any, any> {
  render() {
    return <div className='app'>
      <div className='tools-container'>
        tools
      </div>
      
      <div className='three-view-container'>
        <ThreeView />
      </div>
    </div>
  }
} 