const {
  validateVlanId,
  validateVlanName
} = require("../vlanCheck");

test("Коректний VLAN ID", () => {
  expect(validateVlanId(10)).toBe(true);
});

test("Некоректний VLAN ID", () => {
  expect(validateVlanId(5000)).toBe(false);
});

test("Коректний VLAN name", () => {
  expect(validateVlanName("Users")).toBe(true);
});

test("Некоректний VLAN name", () => {
  expect(validateVlanName("1!")).toBe(false);
});