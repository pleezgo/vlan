const { configurePort } = require("../confPort");

test("Конфігурація access порту", () => {
  const port = configurePort("Gi0/1", "Access", 10);
  expect(port.vlan).toBe(10);
});

test("Некоректний port name", () => {
  expect(() => configurePort("Eth0", "Access", 10)).toThrow();
});
