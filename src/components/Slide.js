import React, { Component } from 'react';

// slide
import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import arrowLeft from '../images/left-arrow.svg';
import arrowRight from '../images/right-arrow.svg';


class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
          active : 0,
          percent: 0
        }
      }

    componentDidMount() {
        this.auto(this.state.active, this.state.percent);
    }

    slideShow = (value, transfer) => {
        let percent = this.state.percent;
        let count = this.state.active;

        if (value === -1) {
            count += value;
            if (count >= 0) {
                this.setState({
                    active: count,
                    percent: percent + transfer
                })
            }
            else {
                this.setState({
                    active: 2,
                    percent: -200
                })
            }
        } else if (value === 1) {
            count += value;
            if (count < 3) {
                this.setState({
                    active: count,
                    percent: percent + -transfer
                })
            }
            else {
                this.setState({
                    active: 0,
                    percent: 0
                })
            }
        }
    }


    auto = (count, transfer) => {
        this.setState({
            active: count,
            percent: transfer
        });
        if (count > 2) {
            count = 0;
            transfer = 0;
            this.setState({
                active: count,
                percent: transfer
            });
        }
        if (count < 0) {
            count = 2;
            transfer = -200;
            this.setState({
                active: count,
                percent: transfer
            })
        }
    }

    render() {
        let { percent } = this.state; 
        let changeSlide = percent;
        return (
            <div className="slide">
                <div className="grid">
                    <div className="wide">
                        <div className="slide__container">
                            <div className="slide__wrapper">
                                <div className="slide__item" style={{ transform: `translateX(${changeSlide}%)` }}>
                                    <a href="">
                                        <img className="slide__img" src={slide1} alt=""></img>
                                    </a>
                                </div>
                                <div className="slide__item" style={{ transform: `translateX(${changeSlide}%)` }}>
                                    <a href="">
                                        <img className="slide__img" src={slide2} alt=""></img>
                                    </a>
                                </div>
                                <div className="slide__item" style={{ transform: `translateX(${changeSlide}%)` }}>
                                    <a href="">
                                        <img className="slide__img" src={slide3} alt=""></img>
                                    </a>
                                </div>
                            </div>
                            <button className="slide__button-prev" onClick={() => this.slideShow(-1, 100)}>
                                <img src={arrowLeft} alt=""></img>
                            </button>
                            <button className="slide__button-next" onClick={() => this.slideShow(1, 100)}>
                                <img src={arrowRight} alt=""></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slide;