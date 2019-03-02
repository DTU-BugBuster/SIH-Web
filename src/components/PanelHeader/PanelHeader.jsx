import React from "react";

class PanelHeader extends React.Component {
  render() {
    return (
      <div style={{height:"550px",marginLeft:"30px"}}
        className={
          "panel-header " +
          (this.props.size !== undefined
            ? "panel-header-" + this.props.size
            : "")
        }
      >
        {this.props.content}
      </div>
    );
  }
}

export default PanelHeader;
