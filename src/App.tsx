// @ts-expect-error Required for React to be in scope
import React, { type ReactElement } from 'react'
import { Layout } from './components/common/Layout/Layout'

import './App.css'

export const App = (): ReactElement => (<Layout/>)
