import React, { PureComponent } from "react";

export default class loadingSpinner extends PureComponent {
  render() {
    return (
      <div>
          <div class="ui active dimmer">
            <div class="ui text loader">Loading</div>
          </div>
          <p />
        </div>
    );
  }
}
