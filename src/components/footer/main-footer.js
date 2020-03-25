import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

        }
	}
	render() {
		return (
		<>
            <footer className="width-100 center-all sample-footer">
                &copy; example.com
            </footer>
		</>
		)
	}
}
const mapStateToProps = state => {
	return {}
}

const mapDispatchToProps = {}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(App));