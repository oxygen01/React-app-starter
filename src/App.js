import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Application from './modules/core/Application'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<Application />
		</BrowserRouter>
	)
}

export default App
