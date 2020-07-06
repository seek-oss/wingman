import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Render } from 'sku';

import { App } from './App/App';
import { ClientContext } from './types';

interface RenderContext {
  appHtml: string;
}

const skuRender: Render<RenderContext> = {
  renderApp: ({ SkuProvider, route, site }) => {
    const appHtml = ReactDOM.renderToString(
      <SkuProvider>
        <StaticRouter location={route}>
          <App site={site} />
        </StaticRouter>
      </SkuProvider>,
    );

    return {
      appHtml,
    };
  },

  provideClientContext: ({ site }): ClientContext => ({
    site,
  }),

  renderDocument: ({ app, bodyTags, headTags }) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${headTags}
      </head>
      <body>
        <div id="app">${app.appHtml}</div>
        ${bodyTags}
      </body>
    </html>
  `,
};

export default skuRender;
