import { html, css, LitElement, property, customElement } from 'lit-element';
import { styles } from './<%= tagName %>.css.js';

@customElement('<%= tagName %>')
export class <%= className %> extends LitElement {
    @property() title:string = 'title';
    
    static get styles() {
        return css`
            ${styles}
        `;
    }

    render() {
        return html``
    }
}
declare global {
    interface HTMLElementTagNameMap {
        '<%= tagName %>': <%= className %>;
    }
}