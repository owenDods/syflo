import React, { Component } from 'react';
import PropTypes from 'prop-types';

import config from '../config';

export const initialState = {
	focus: false
};
export const className = 'textInput';

class TextInput extends Component {

	constructor(props) {

		super(props);

		this.state = initialState;

	}

	componentDidMount() {

		if (this.props.delayedFocus) {

			const { transitionTime } = config;

			setTimeout(() => this.input.focus(), transitionTime);

		}

	}

	render() {

		const { label, placeholder, maxLength, onChange, value } = this.props;
		const { focus } = this.state;
		const inputRef = (el) => {

			this.input = el;

		};
		const styleClass = focus ? `${className} ${className}--focus` : className;

		return (

			<div className={styleClass} onClick={() => this.input.focus()}>

				<label>{label}</label>

				<input
					type="text"
					maxLength={maxLength}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					ref={inputRef}
					onFocus={() => this.setState({ focus: true })}
					onBlur={() => this.setState({ focus: false })}
				/>

			</div>

		);

	}

}

TextInput.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	maxLength: PropTypes.number,
	onChange: PropTypes.func,
	value: PropTypes.string,
	delayedFocus: PropTypes.bool
};

export default TextInput;
