import { formatDistance } from 'date-fns';
import { Fragment, useState } from 'react';

interface Props {
  date: Date;
}

export const RelativeDate = ({ date }: Props) => {
  // TODO: refresh date on an interval
  const [currentDate] = useState(new Date());

  return (
    <Fragment>
      {formatDistance(date, currentDate, {
        addSuffix: true,
      })}
    </Fragment>
  );
};
