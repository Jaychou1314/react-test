import React, { Component } from "react";
import OrderItem from "../orderItem";

export default class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("/mock/orders.json").then(res => {
      if (res.ok) {
        res.json().then(data => {
          this.setState({
            data
          });
        });
      }
    });
  }
  render() {
    return (
      <div className="orderList">
        {this.state.data.map(item => {
          return <OrderItem key={item.id} data={item} />;
        })}
      </div>
    );
  }
}
