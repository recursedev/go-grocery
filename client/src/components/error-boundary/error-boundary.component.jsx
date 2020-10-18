import React from "react";

import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles'

class errorBoundary extends React.Component {
	constructor() {
		super();

		this.state = {
			hasErrored: false,
		};
	}

	static getDerivedStateFromError(error) {
		return { hasErrored: true };
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={'https://i.imgur.com/oEUksmz.png'}/>
          <ErrorImageText>Don’t Cry Over Spilled Page</ErrorImageText>     
        </ErrorImageOverlay>
      )
		}
		return this.props.children;
	}
}

export default errorBoundary;
