import React, { Component } from "react";
import Carousel from "./Carousel";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

class BaiTap extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default BaiTap;
