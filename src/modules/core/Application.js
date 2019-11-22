import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Home as HomePage } from '../home'
import { Auth } from '../auth'

const Application = () => (
	<div>
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/auth" component={Auth} />
			<Redirect to="/" />
		</Switch>
	</div>
)
export default Application
