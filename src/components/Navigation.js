import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Navigation extends Component {

    changeNavigation = (count) => {
        this.props.onChangeNavigation(count);
    };

    render() {
        return (
            <div className="navigation">
                <div className="grid">
                    <div className="wide">
                        <button className="navigation__btn" onClick={() => this.changeNavigation(10)}>
                            Xem Thêm
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeNavigation: (count) => {
            dispatch(actions.changeNavition(count));
        }
    }
}

export default connect(null,mapDispatchToProps)(Navigation);