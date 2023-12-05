describe('Health', () => {
  test('Reservations', async () => {
    const response = await fetch('http://reservations:3000');
    expect(response.ok).toBeTruthy();
  });

  // describe('Auth', async () => {
  //   const response = await fetch('http://reservations:3001');
  //   expect(response.ok).toBeTruthy();
  // });
});
