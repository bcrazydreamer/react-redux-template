import { connect } from 'react-redux';
import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { withRouter } from 'react-router';
import Header from '../components/header/main-header';
import Footer from '../components/footer/main-footer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time : ""
		}
	}

	componentWillMount() {
		var self = this;
		setInterval(function(){
			var d = new Date();
			var hh = d.getHours();
			var mm = d.getMinutes();
			var ss = d.getSeconds();
			hh = (hh < 10) ? "0" + String(hh) : hh;
			hh = (mm < 10) ? "0" + String(mm) : mm;
			ss = (ss < 10) ? "0" + String(ss) : ss;
			self.setState({time : hh + " : " + mm + " : " + ss});
		}, 1000);
	}

	render() {
		return (
		<>
			<Helmet>
				<title>BCD Clock {this.state.time}</title>
			</Helmet>
			<Header/>
            <div className="width-100">
                <header className="sample-layout-ctnr center-all">
					{this.state.time}
                </header>
            </div>
			<Footer/>
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