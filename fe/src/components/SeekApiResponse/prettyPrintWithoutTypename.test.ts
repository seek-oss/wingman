import { prettyPrintWithoutTypename } from './prettyPrintWithoutTypename';

describe('prettyPrintWithoutTypename', () => {
  it.each`
    description                         | input
    ${'empty object'}                   | ${{}}
    ${'object without __typenames'}     | ${{ id: { value: 123 } }}
    ${'object with nested __typenames'} | ${{ __typename: 'Event', id: { __typename: 'ObjectIdentifier', value: 123 } }}
  `('$description', ({ input }) =>
    expect(prettyPrintWithoutTypename(input)).toMatchSnapshot(),
  );
});
