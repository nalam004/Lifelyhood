import React, { Component } from "react";
import "../../styles/textEditor.css";
import Toolbar from "../../components/EditorToolbar/toolbar";
import PrivateLayout from "../../Layout/Private";
class Fitness extends Component {
  render() {
    return (
      <PrivateLayout title="Fitness Notes">
        <div className="pg">
          <Toolbar />
        </div>
      </PrivateLayout>
    );
  }
}
export default Fitness;