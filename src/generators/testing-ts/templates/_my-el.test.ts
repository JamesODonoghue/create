import { html, fixture, expect } from '@open-wc/testing';
import {<%= className %>} from '../<%= tagName %>.js';
import '../<%= tagName %>.js';
import { ignore } from '../../../../babel.config.js';

describe('<%= className %>', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el: <%= className %> = await fixture(html`
      <<%= tagName %>></<%= tagName %>>
    `);

    expect(el.title).to.equal('title');
  });

  it('increases the counter on button click', async () => {
    const el: <%= className %> = await fixture(html`
      <<%= tagName %>></<%= tagName %>>
    `);
    el.shadowRoot!.querySelector('button')!.click();

  });

  it('can override the title via attribute', async () => {
    const el: <%= className %> = await fixture(html`
      <<%= tagName %> title="attribute title"></<%= tagName %>>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el: <%= className %> = await fixture(html`
      <<%= tagName %>></<%= tagName %>>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
