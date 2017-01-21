import React from 'react';
import $ from 'jquery';
import urlJoin from 'url-join';

class Increment extends React.Component {
	constructor(props) {
		super();
		this.state = {
			incValue: -1,
			hasError: false
		};
	}

	render() {
        console.log("increment: render");
		if (this.state.hasError) {
			return <p>Error. API server may be down.</p>;
		}
		if (this.state.incValue < 0) {
			return <p>Fetching...</p>;
		}
		else {
			return <p>Incremented value is {this.state.incValue}.</p>;
		}
	}

	componentDidMount() {
    console.log("increment: componentDidMount");
		$.ajax({
			url: urlJoin(global.__apiUrl__, 'json-test'),
			method: 'GET',
			success: (res) => {
        console.log("increment: ajax result:", res.incResult);
				this.setState({
					incValue: res.incResult
				});
			},
			error: () => {
				console.log(...arguments);
				this.setState({
					hasError: true
				});
			}
		});
	}
}

export default Increment;
