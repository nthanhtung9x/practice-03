import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';


class Products extends Component {
    constructor(props) {
        super(props);
    }

    AddToCart = (item) => {
        if (item.quanlity <= 0) {

        } else {
            this.props.onAddToCart(item);
        }
    }

    render() {
        let { list } = this.props;
        let url = this.props.match.url;
        let result = null;
		if(url === '/practice-03/'){
			result = list.map((item, index) => {
            return <div className="col l-2-4 m-4 c-6" key={index}>
                        <div className="product">
                            <a href=" ">
                                <img src={item.img} alt=""></img>
                            </a>
                            <article className="product__name">{item.name}</article>
                            <p className="product__price">{item.price}$</p>
                            <p className="product__price-old">{item.old_price}$</p>
                            <p className="product__text">{item.description}</p>
                            <span className="product__quanlity">Số lượng: {item.quanlity}</span>
                            <button
                                className="product__add"
                                disabled={item.quanlity === 0 ? true : false}
                                style={item.quanlity === 0 ? { backgroundColor: '#DC3545' } : { backgroundColor: '#007BFF' }}
                                onClick={() => this.AddToCart(item)}
                            >
                                {item.quanlity === 0 ? "Hết hàng" : "Thêm vào giỏ"}
                            </button>
                        </div>
                    </div>
			});
		}
        else if (url === '/practice-03/phone') {
            result = list.map((item, index) => {
                if (item.type.indexOf(url.slice(-5)) !== -1) {
                    return <div className="col l-2-4  m-4 c-6" key={index}>
                        <div className="product">
                            <a href="">
                                <img src={item.img} alt=""></img>
                            </a>
                            <article className="product__name">{item.name}</article>
                            <p className="product__price">{item.price}$</p>
                            <p className="product__price-old">{item.old_price}$</p>
                            <p className="product__text">{item.description}</p>
                            <span className="product__quanlity">Số lượng: {item.quanlity}</span>
                            <button
                                className="product__add"
                                disabled={item.quanlity === 0 ? true : false}
                                style={item.quanlity === 0 ? { backgroundColor: '#DC3545' } : { backgroundColor: '#007BFF' }}
                                onClick={() => this.AddToCart(item)}
                            >
                                {item.quanlity === 0 ? "Hết hàng" : "Thêm vào giỏ"}
                            </button>
                        </div>
                    </div>
                }
            });
        }
        else if (url === '/practice-03/tablet') {
            result = list.map((item, index) => {
                if (item.type.indexOf(url.slice(-6)) !== -1) {
                    return <div className="col l-2-4  m-4 c-6" key={index}>
                        <div className="product">
                            <a href="">
                                <img src={item.img} alt=""></img>
                            </a>
                            <article className="product__name">{item.name}</article>
                            <p className="product__price">{item.price}$</p>
                            <p className="product__price-old">{item.old_price}$</p>
                            <p className="product__text">{item.description}</p>
                            <span className="product__quanlity">Số lượng: {item.quanlity}</span>
                            <button
                                className="product__add"
                                disabled={item.quanlity === 0 ? true : false}
                                onClick={() => this.AddToCart(item)}
                                style={item.quanlity === 0 ? { backgroundColor: '#DC3545' } : { backgroundColor: '#007BFF' }}
                            >
                                {item.quanlity === 0 ? "Hết hàng" : "Thêm vào giỏ"}
                            </button>
                        </div>
                    </div>
                }
            });
        }
        else if (url === '/practice-03/laptop') {
            result = list.map((item, index) => {
                if (item.type.indexOf(url.slice(-6)) !== -1) {
                    return <div className="col l-2-4  m-4 c-6" key={index}>
                        <div className="product">
                            <a href="">
                                <img src={item.img} alt=""></img>
                            </a>
                            <article className="product__name">{item.name}</article>
                            <p className="product__price">{item.price}$</p>
                            <p className="product__price-old">{item.old_price}$</p>
                            <p className="product__text">{item.description}</p>
                            <span className="product__quanlity">Số lượng: {item.quanlity}</span>
                            <button
                                className="product__add"
                                disabled={item.quanlity === 0 ? true : false}
                                style={item.quanlity === 0 ? { backgroundColor: '#DC3545' } : { backgroundColor: '#007BFF' }}
                                onClick={() => this.AddToCart(item)}
                            >
                                {item.quanlity === 0 ? "Hết hàng" : "Thêm vào giỏ"}
                            </button>
                        </div>
                    </div>
                }
            });
        }
        else if (url === '/practice-03/phu-kien') {
            result = list.map((item, index) => {
                if (item.type.indexOf(url.slice(-8)) !== -1) {
                    return <div className="col l-2-4  m-4 c-6" key={index}>
                        <div className="product">
                            <a href="">
                                <img src={item.img} alt=""></img>
                            </a>
                            <article className="product__name">{item.name}</article>
                            <p className="product__price">{item.price}$</p>
                            <p className="product__price-old">{item.old_price}$</p>
                            <p className="product__text">{item.description}</p>
                            <span className="product__quanlity">Số lượng: {item.quanlity}</span>
                            <button
                                className="product__add"
                                disabled={item.quanlity === 0 ? true : false}
                                style={item.quanlity === 0 ? { backgroundColor: '#DC3545' } : { backgroundColor: '#007BFF' }}
                                onClick={() => this.AddToCart(item)}
                            >
                                {item.quanlity === 0 ? "Hết hàng" : "Thêm vào giỏ"}
                            </button>
                        </div>
                    </div>
                }
            });
        }
        else if (url === '/practice-03/watch') {
            result = list.map((item, index) => {
                if (item.type.indexOf(url.slice(-5)) !== -1) {
                    return <div className="col l-2-4  m-4 c-6" key={index}>
                        <div className="product">
                            <a href="">
                                <img src={item.img} alt=""></img>
                            </a>
                            <article className="product__name">{item.name}</article>
                            <p className="product__price">{item.price}$</p>
                            <p className="product__price-old">{item.old_price}$</p>
                            <p className="product__text">{item.description}</p>
                            <span className="product__quanlity">Số lượng: {item.quanlity}</span>
                            <button
                                className="product__add"
                                disabled={item.quanlity === 0 ? true : false}
                                style={item.quanlity === 0 ? { backgroundColor: '#DC3545' } : { backgroundColor: '#007BFF' }}
                                onClick={() => this.AddToCart(item)}
                            >
                                {item.quanlity === 0 ? "Hết hàng" : "Thêm vào giỏ"}
                            </button>
                        </div>
                    </div>
                }
            });
        }
        else if (url === '/practice-03/cart') {
        }

        return (
            <div className="products">
                <div className="grid">
                    <div className="wide">
                        <div className="row sm-gutter">
                            {result}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.products

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (item) => {
            dispatch(actions.addToCart(item));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);