import React, { ReactNode } from 'react';

import { TextLinkButton } from '..';

import { download } from './download';

interface Props {
  children: ReactNode;
  href: string;
}

export const DownloadLink = ({ children, href }: Props) => {
  const [downloading, setDownloading] = React.useState(false);

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();

    if (downloading) {
      return;
    }

    setDownloading(true);

    try {
      await download({ headers: {}, url: href });
    } finally {
      setDownloading(false);
    }
  };
  return (
    <TextLinkButton disabled={downloading} onClick={handleClick}>
      {children}
      {downloading ? '...' : ''}
    </TextLinkButton>
  );
};
