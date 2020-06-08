export interface BrowserToken {
  authorization: string;
  expiry: string;
}

export type GetBrowserToken = (scope: string) => Promise<BrowserToken>;
