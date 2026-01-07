const { createVlan } = require("../confVlan");

test("Створює коректний VLAN", () => {
  const vlan = createVlan({ id: 10, name: "Users" });
  expect(vlan.status).toBe("active");
});

test("Некоректний VLAN ID видає помилку", () => {
  expect(() => createVlan({ id: 5000, name: "Users" })).toThrow();
});
