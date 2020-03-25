import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';


class App extends Component {
    render() {
        return (
            <>
                {
                    this.props.loading === true ? 
                    (
                        <div className="bcd-main-loader-ctnr center-all">
                            <CircularProgress className="bcd-normal-loader"/>
                        </div>
                    ) : null
                }
            </>
        );
    }
};

const mapStateToProps = (state) => ({
    loading : state.appReducer.loading
})

const mapDispatchToProps = {

}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(App));