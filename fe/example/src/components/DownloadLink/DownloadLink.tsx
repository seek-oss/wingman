import { TextLinkButton } from 'braid-design-system';
import React, { type ReactNode } from 'react';

import { download } from './download';

interface Props {
  children: ReactNode;
  getAuthorization: () => Promise<string>;
  href: string;
}

export const DownloadLink = ({ children, getAuthorization, href }: Props) => {
  const [downloading, setDownloading] = React.useState(false);

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();

    if (downloading) {
      return;
    }

    setDownloading(true);

    try {
      await download({
        headers: {
          Authorization: await getAuthorization(),
        },
        url: href,
      });
    } finally {
      setDownloading(false);
    }
  };
  return (
    <TextLinkButton onClick={handleClick}>
      {children}
      {downloading ? '...' : ''}
    </TextLinkButton>
  );
};
