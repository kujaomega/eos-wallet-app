import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './containers'
import { Router } from 'react-router'
import createHistory from 'history/createBrowserHistory'

import './styles/core.css'

// TODO assess if needed
import registerServiceWorker from './func/registerServiceWorker'

const history = createHistory()

ReactDOM.render(
	<Router history={history}>
		<App />
	</Router>,
	document.getElementById('root')
)
registerServiceWorker()
