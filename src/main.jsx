import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import About from './routes/About'
import './style.css'

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
		},
		{
			path: '/about',
			element: <About />,
		},
	],
	{ basename: '/' }
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
