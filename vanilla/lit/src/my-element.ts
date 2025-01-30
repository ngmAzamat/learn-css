import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("the-battle")
export class MyElement extends LitElement {
  @property({ type: String }) name = "Unknown";
  @property({ type: String }) Winner = "Draw";

  @state({ type: Number }) count = 0;

  render() {
    return html` <h1>${this.name}</h1>
      <slot></slot>`;
  }

  static styles = css`
    :host {
      display: block;
      background-color: red;
    }
  `;
}
