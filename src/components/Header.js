import React, { Component } from 'react';

import logo from '../images/logo.png';
import search from '../images/search.svg';
import mobile from '../images/phone.svg';
import tablet from '../images/tablet.svg';
import laptop from '../images/laptop.svg';
import audio from '../images/audio.svg';
import sw from '../images/smart-watch.svg';
import cart from '../images/cart.svg';
import menu from '../images/menu.svg';

import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

import * as actions from '../actions/index';

const menus = [
    {
        name: 'ĐIỆN THOẠI',
        active: 'nav-active',
        icon: `${mobile}`,
        to: '/practice-03/phone',
        exact: false
    },
    {
        name: 'TABLET',
        active: 'nav-active',
        icon: `${tablet}`,
        to: '/practice-03/tablet',
        exact: false
    },
    {
        name: 'LAPTOP',
        active: 'nav-active',
        icon: `${laptop}`,
        to: '/practice-03/laptop',
        exact: false
    },
    {
        name: 'PHỤ KIỆN',
        active: 'nav-active',
        icon: `${audio}`,
        to: '/practice-03/phu-kien',
        exact: false
    },
    {
        name: 'ĐỒNG HỒ',
        active: 'nav-active',
        icon: `${sw}`,
        to: '/practice-03/watch',
        exact: false
    },
    {
        name: 'GIỎ HÀNG',
        count: `(${0})`,
        active: 'nav-active',
        icon: `${cart}`,
        to: '/practice-03/cart',
        exact: false
    }
]

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword:'',
            displayForm: 'none',
            hiddenList:true
        }
    }

    onBlur = () => {
        this.setState({
            displayForm: 'none'
        })
    }

    onChange = (event) => {
        if(event.target.value === ''){
            this.setState({
                keyword : event.target.value,
                displayForm: 'none'
            })
        }
        else {
            this.setState({
                keyword : event.target.value,
                displayForm: 'block'
            })
        }
    }

    hiddenList = () => {
        this.setState({
            hiddenList:!this.state.hiddenList
        })
    }

    onChangeNavigation = (count) => {
        this.props.onChangeNavigation(count);
    }

    render() {
        let { keyword,displayForm } = this.state;
        let { searchProduct, list } = this.props;

        //search
        let searchResult = searchProduct.map((item,index) => {
            if(item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1){
                return  <li className="search__item" key={index}>
                            <a className="search__link">
                                <img src={item.img} alt={item.name}></img>
                                <div className="search__info">
                                    <h5>{item.name}</h5>
                                    <p>{item.price}$</p>
                                </div>
                            </a>
                        </li>
            }
        });
        //end search

        let count = 0;
        for (let i = 0; i < list.length; i++) {
            count+= list[i].count;
        }
        for (let i = 0; i < menus.length; i++) {
            if (menus[i].count) {
                menus[i].count = `(${count.toString()})`;
            }
        }
        let result = null;
        if (menus.length > 0) {
            result = menus.map((item, index) => {
                return <li className="nav__item" key={index} onClick={this.hiddenList}>
                    <NavLink activeClassName={item.active} to={item.to} className="nav__link" exact={item.exact} onClick={() => this.onChangeNavigation(-10)}>
                        <img src={item.icon} alt={item.name}></img>
                        <span>{item.count}</span>
                        <p>{item.name}</p>
                    </NavLink>
                </li>
            })
        }
        return (
            <header className="header">
                <div className="grid">
                    <div className="wide">
                        <div className="row sm-gutter">
                            <div className="col sm-gutter l-4 m-12 c-10">
                                <div className="header__control">
                                    <NavLink activeClassName="nav-active" to="/practice-03/" exact  onClick={() => this.onChangeNavigation(-10)}>
                                        <img src={logo} alt="logo"></img>
                                    </NavLink>
                                    <div className="search">
                                        <input
                                            placeholder="Bạn tìm gì..."
                                            value={keyword}
                                            onChange={this.onChange}
                                            onBlur={this.onBlur}
                                        />
                                        <span>
                                            <img src={search} alt=""></img>
                                        </span>
                                        <div className="search__wrapper" style={{display:`${displayForm}`}}>
                                            <ul className="search__list">
                                                { searchResult }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col sm-gutter l-8 m-12 c-0">
                                <nav className="navbar">
                                    <ul className="nav__list">
                                        {result}
                                    </ul>
                                </nav>
                            </div>
                            <div className="col sm-gutter l-0 m-0 c-2">
                                <div className="menu__btn" onClick={this.hiddenList}>
                                    <img src={menu} alt=""></img>
                                    <span>Menu</span>
                                </div>
                                <div className="nav__wrapper" style={this.state.hiddenList ? {height:0,opacity:0} : {height:'auto',opacity:1}}>
                                    <ul className="nav__list" style={this.state.hiddenList ? {display:'none'} : {display:'block'}}>
                                        {result}
                                    </ul>
                                </div>
                                <div 
                                className="collapse__bg" 
                                onClick ={this.hiddenList}
                                style={this.state.hiddenList ? {display:'none'} : {display:'block',position:'fixed',top:'5.5rem',right:0,bottom:0,left:0,zIndex:9,backgroundColor:'rgba(0,0,0,0.5)'}}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchProduct: state.products,
        list: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeNavigation: (count) => {
            dispatch(actions.changeNavition(count));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);