import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.js'

const rootElem = document.getElementById('root')

if (rootElem != null) {
  createRoot(rootElem).render(
    createElement(
      App,
      { message: 'Hello World! A Counter App built on ESBuild + React + Typescript' },
      null
    )
  )
} else alert('Cannot find element with id "root", something went wrong')
