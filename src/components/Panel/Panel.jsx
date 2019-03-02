import React from "react";

class Panel extends React.Component {
  render() {
    return (
      <div
        className={
          "panel " +
          (this.props.size !== undefined
            ? "panel-" + this.props.size
            : "")
        }
      >
        {this.props.content}
      </div>
    );
  }
}

export default Panel;
