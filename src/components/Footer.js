import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="grid">
                    <div className="wide">
                        <div className="row">
                            <div className="col l-4 m-4 c-12">
                                <ul className="f__list">
                                    <li className="f__item">
                                        <a href=" " className="f__link">
                                            Tìm hiểu về mua trả góp
                                        </a>
                                    </li>
                                    <li className="f__item">
                                        <a href=" " className="f__link">
                                            Chính sách bảo hành
                                        </a>
                                    </li>
                                    <li className="f__item">
                                        <a href=" " className="f__link">
                                            Chính sách đổi trả
                                        </a>
                                    </li>
                                    <li className="f__item">
                                        <a href=" " className="f__link">
                                            Giao hàng & Thanh toán
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col l-4 m-4 c-12">
                                <ul className="f__list">
                                    <li className="f__item">
                                        <a href=" " className="f__link">
                                            Giới thiệu công ty
                                        </a>
                                    </li>
                                    <li className="f__item">
                                        <a href=" " className="f__link">
                                            Tuyển dụng
                                        </a>
                                    </li>
                                    <li className="f__item">
                                        <a href=" " className="f__link">
                                            Gửi góp ý, khiếu nại
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col l-4 m-4 c-12">
                                <ul className="f__list">
                                    <li className="f__item">
                                        Gọi mua hàng:
                                        <a className="f__link f__tel" href="tel:0921848825">
                                            0921.848.825
                                        </a>
                                        (7:30 - 22:00)
                                    </li>
                                    <li className="f__item">
                                        Gọi khiếu nại:
                                        <a  className="f__link f__tel" href="tel:0921848825">
                                            0921.848.825
                                        </a>
                                        (8:00 - 21:30)
                                    </li>
                                    <li className="f__item">
                                        Gọi bảo hành:
                                        <a  className="f__link f__tel" href="tel:0921848825">
                                            0921.848.825
                                        </a>
                                        (8:00 - 21:00)
                                    </li>
                                    <li className="f__item">
                                        Gọi kỹ thuật:
                                        <a  className="f__link f__tel" href="tel:0921848825">
                                            0921.848.825
                                        </a>
                                        (7:30 - 22:00)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;