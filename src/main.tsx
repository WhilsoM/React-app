import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/layout/App.tsx'
import Header from './components/layout/Header.tsx'

import './components/styles/reset.scss'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Header />
		<App />
	</React.StrictMode>
)
