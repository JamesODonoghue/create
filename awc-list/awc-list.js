import { __decorate } from "tslib";
import { html, css, LitElement, property, customElement } from 'lit-element';
let AwcList = class AwcList extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Hey there';
        this.counter = 5;
    }
    __increment() {
        this.counter += 1;
    }
    render() {
        return html `
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
    }
};
AwcList.styles = css `
    :host {
      display: block;
      padding: 25px;
      color: var(--awc-list-text-color, #000);
    }
  `;
__decorate([
    property({ type: String })
], AwcList.prototype, "title", void 0);
__decorate([
    property({ type: Number })
], AwcList.prototype, "counter", void 0);
AwcList = __decorate([
    customElement('awc-list')
], AwcList);
export { AwcList };
//# sourceMappingURL=awc-list.js.map