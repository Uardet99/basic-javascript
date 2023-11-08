let array_mix = [
  "abcdef",
  2,
  2.1,
  2.9e3,
  2e-3,
  0x23af,
  true,
  [1, 2, 3],
  { a: 1, b: 2 },
];
for (let i = 0; i < array_mix.length; i++) {
  console.log(typeof array_mix[i]);
}
