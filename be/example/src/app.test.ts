describe('app', () => {
  it('exports createApp', () =>
    expect(import('./app')).resolves.toHaveProperty('createApp'));
});
