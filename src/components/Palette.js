import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} key={color.name} />
    ));
    return (
      <div className="Palette">
        {/* navbar here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}
