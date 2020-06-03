import contentDisposition from 'content-disposition';

const parseFilename = (headers: Headers) => {
  const header = headers.get('content-disposition');

  if (header === null) {
    return undefined;
  }

  const disposition = contentDisposition.parse(header);

  return disposition.parameters.filename as string;
};

const fetchBlob = async ({
  headers,
  url,
}: {
  headers: Record<string, string>;
  url: string;
}) => {
  const response = await fetch(url, { headers });

  const blob = await response.blob();

  const filename = parseFilename(response.headers);

  return { blob, filename };
};

export const download = async (request: {
  headers: Record<string, string>;
  url: string;
}) => {
  const { blob, filename } = await fetchBlob(request);

  const objectUrl = URL.createObjectURL(blob);

  const anchor = document.createElement('a');

  if (typeof filename !== 'undefined') {
    anchor.download = filename;
  }
  anchor.href = objectUrl;
  anchor.type = 'hidden';

  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  window.URL.revokeObjectURL(objectUrl);
};
