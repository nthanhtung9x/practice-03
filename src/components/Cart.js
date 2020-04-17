import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../actions/index';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            back: false,
            isChecked: false
        }
    }

    changeCount = (item, count) => {
        if (item.quanlity < item.count + count) {
        } else {
            this.props.onChangeCount(item, count);
        }
    }

    backHome = () => {
        this.setState({
            back: true
        })
    }

    onPurchase(e,cart) {
        this.setState({
            isChecked: e
        })
        if (e) {
            alert('Đặt hàng thành công !!! Tiếp tục mua sắm nào');
            this.props.onDonePurchase(cart);
        }
    }


    render() {
        let { cart } = this.props;
        let { back, isChecked } = this.state;

        //next shopping
        if (back) {
            return <Redirect to="/" />
        }
        //end next shopping

        let result = null;
        let totalPrice = 0;
        // purchase 
        if (isChecked) {
            result = [];
        }
        else {
            result = cart.map((item, index) => {
                return <div className="cart__item" key={index}>
                    <img src={item.img} alt={item.name}></img>
                    <div className="item__info">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <span>Giá <strong>{item.old_price}$</strong> Giảm còn <strong>{item.price}$</strong></span>
                    </div>
                    <div className="item__price">
                        <p>{item.price}$</p>
                        <p>Số lượng:{item.count}</p>
                        <div className="item__control">
                            <button onClick={() => this.changeCount(item, -1)}>-</button>
                            <button
                                onClick={() => this.changeCount(item, 1)}
                                disabled={item.quanlity < item.count + 1 ? true : false}
                                style={item.quanlity < item.count + 1 ? { opacity: 0.7 } : { opacity: 1 }}
                            >+
                            </button>
                        </div>
                    </div>
                </div>
            })

            //total price

            cart.map((item) => {
                return totalPrice += item.price * item.count;
            })
            //end total price
        }

        let total = null;
        if (result.length > 0) {
            total = <div className="cart__wrapper">
                        {result}
                        <div className="cart__total">
                            <span>Cần Thanh Toán:</span>
                            <span className="total__price">{totalPrice}$</span>
                        </div>
                        <div className="cart__purchase">
                            <button
                                className="btn__purchase"
                                onClick={() => {
                                    let e = window.confirm('Xác nhận đơn hàng của bạn')
                                    this.onPurchase(e,cart);
                                }}>
                                Mua hàng
                            </button>
                            <button className="btn__next" onClick={this.backHome}>Mua thêm sản phẩm</button>
                        </div>;
                    </div>
        } else if (result.length <= 0 && !isChecked) {
            total = <div className="cart__wrapper">
                <h4 className="no-items">Chưa có sản phẩm nào trong giỏ hàng</h4>
            </div>
        } else if (isChecked) {
            total = <div className="cart__wrapper">
                <h4 className="no-items">Đặt mua thành công</h4>
            </div>
        }

        return (
            <div className="cart">
                <div className="grid">
                    <div className="wide">
                        {total}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.products,
        cart: state.cart
    }
}

const mapdispatchToProps = (dispatch, props) => {
    return {
        onChangeCount: (item, count) => {
            dispatch(actions.updateCount(item, count));
        },
        onDonePurchase: (cart) => {
            dispatch(actions.donePurchase(cart));
        }
    }
}

export default connect(mapStateToProps, mapdispatchToProps)(Cart);