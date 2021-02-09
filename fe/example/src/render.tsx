import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import type { Render } from 'sku';

import { App } from './App/App';
import { UserProvider } from './hooks/user';
import type { ClientContext } from './types';

interface RenderContext {
  basename: string;
  html: string;
}

const skuRender: Render<RenderContext> = {
  renderApp: ({ SkuProvider, route, site }) => {
    const isGitHubPages = Boolean(process.env.IS_GITHUB_PAGES);

    const basename = isGitHubPages ? 'wingman' : '';

    const html = ReactDOM.renderToString(
      <SkuProvider>
        <UserProvider server={true}>
          <StaticRouter basename={basename} location={route}>
            <App site={site} />
          </StaticRouter>
        </UserProvider>
      </SkuProvider>,
    );

    return {
      basename,
      html,
    };
  },

  provideClientContext: ({ app, site }): ClientContext => ({
    basename: app.basename,
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
        <div id="app">${app.html}</div>
        ${bodyTags}
      </body>
    </html>
  `,
};

export default skuRender;
