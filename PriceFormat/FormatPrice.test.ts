import formatPrice from './FormatPrice'

test('should print number in WoW format', () => {
  expect(formatPrice(211987)).toEqual('21g 19s 87c');
});
test('should print a larger number in WoW format', () => {
    expect(formatPrice(2111987)).toEqual('211g 19s 87c');
});

test('should print a small number in WoW format', () => {
    expect(formatPrice(987)).toEqual('9s 87c');
})

  test('should return when passed string', () => {
      // We could allow this or we could raise an error at the function
    expect(formatPrice('1')).toEqual('1c');
  });

  test('should return 0c string on bad param', () => {
    // We could allow this or we could raise an error at the function
  expect(formatPrice(null)).toEqual('0c');
});  