import { newSpecPage } from '@stencil/core/testing';
import { LocaleProvider } from '../ikun-locale-provider';

describe('ikun-locale-provider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LocaleProvider],
      html: `<ikun-locale-provider></ikun-locale-provider>`,
    });
    expect(page.root).toEqualHtml(`
      <ikun-locale-provider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ikun-locale-provider>
    `);
  });
});
