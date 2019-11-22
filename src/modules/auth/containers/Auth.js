import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Auth = () => (
	<div>
		<Switch>
			<Route path="/auth/register" component={() => <>Register</>} />
			<Route path="/auth" component={() => <>login</>} />
		</Switch>
	</div>
)

export default Auth
