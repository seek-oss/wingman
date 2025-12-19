import { IconChevron } from 'braid-design-system';
import { Fragment } from 'react';
import { SmartTextLink } from 'scoobie';

type Crumb =
  | string
  | {
      label: string;
      to: string;
    };

interface Props {
  children: Crumb[];
  trailingChevron?: boolean;
}

export const Breadcrumbs = ({ children, trailingChevron }: Props) => (
  <Fragment>
    {children.map((child, index) => {
      const label = typeof child === 'string' ? child : child.label;
      const to = typeof child === 'string' ? undefined : child.to;

      return (
        <Fragment key={label}>
          {to ? <SmartTextLink href={to}>{label}</SmartTextLink> : label}

          {index === children.length - 1 && !trailingChevron ? undefined : (
            <Fragment>
              {' '}
              <IconChevron direction="right" />{' '}
            </Fragment>
          )}
        </Fragment>
      );
    })}
  </Fragment>
);
