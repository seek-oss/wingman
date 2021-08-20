import { componentId } from './componentId';

describe('componentId', () => {
  it('handles no values', () => expect(componentId('prefix')).toBe('prefix'));

  it('handles alphanumerics', () => {
    expect(componentId('component', 'abc')).toMatchInlineSnapshot(
      `"component-2p2q2r"`,
    );

    expect(componentId('component', 'aaa')).toMatchInlineSnapshot(
      `"component-2p2p2p"`,
    );

    expect(componentId('component', '123', 'ABC')).toMatchInlineSnapshot(
      `"component-1d1e1f-1t1u1v"`,
    );
  });

  it('handles special characters', () => {
    expect(componentId('component', '🙈')).toMatchInlineSnapshot(
      `"component-16pp17wo"`,
    );

    expect(
      componentId('component', '!!! super valid ID *** 🙈'),
    ).toMatchInlineSnapshot(
      `"component-xxxw3739342t36w3a2p302x2sw211ww161616w16pp17wo"`,
    );
  });
});
