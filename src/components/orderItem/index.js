import React, { Component, Fragment } from "react";
import "./style.css";
export default class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: true,
      stars: 4
    };
  }
  render() {
    const { shop, picture, product, price, ifCommented } = this.props.data;
    return (
      <Fragment>
        <div className="OrderItem">
          <div className="OrderItem__picContainer">
            <img className="OrderItem__pic" src={picture} />
          </div>
          <div className="OrderItem__content">
            <h2 className="OrderItem__goodsname">{product}</h2>
            <h3 className="OrderItem__shop">{shop}</h3>
            <div className="OrderItem__detail">
              <span className="OrderItem__price">￥{price}</span>
              <p>
                {ifCommented ? (
                  <button className="OrderItem__btn OrderItem__btn--grey">
                    已评价
                  </button>
                ) : (
                  <button className="OrderItem__btn OrderItem__btn--red">
                    评价
                  </button>
                )}
              </p>
            </div>
          </div>
        </div>
        {this.state.editting ? this.getEditItem() : null}
      </Fragment>
    );
  }
  getEditItem() {
    return (
      <div className="orderItem__editContainer">
        <textarea className="orderItem__text" />
        {this.getItemStar()}
        <div className="orderItem__editBtn">
          <button className="OrderItem__btn OrderItem__btn--red"> 提交</button>
          <button className="OrderItem__btn OrderItem__btn--grey">取消</button>
        </div>
      </div>
    );
  }
  getItemStar() {
    const { stars } = this.state;
    return (
      <div className="orderItem__editStars">
        {[1, 2, 3, 4, 5].map((item, index) => {
          const light = stars >= item ? "orderItem__start--light" : "";
          console.log(light);
          return (
            <span key={index} className={light}>
              ★
            </span>
          );
        })}
      </div>
    );
  }
}
