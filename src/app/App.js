import React, { Component } from 'react';

import Content from '../content/Content';

export const className = 'app';

class App extends Component {

	componentDidMount() {

		setTimeout(() => this.props.appTitleSplashToggle(false), 3000);

	}

	render() {

		const { titleSplashVisible } = this.props;
		const styleClass = titleSplashVisible ? `${className} ${className}--splashVisible` : className;

		return (

			<div className={styleClass}>

				<Content />

				<div className={`${className}__stars`} />

				<div className={`${className}__stars2`} />

				<div className={`${className}__stars3`} />

			</div>

		);

	}

}

export default App;
