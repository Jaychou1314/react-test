import React from "react";
import "./style.css";
import OrderList from "../orderList";
import Header from "../Header";
class todolist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <OrderList />
      </div>
    );
  }
}

export default todolist;
