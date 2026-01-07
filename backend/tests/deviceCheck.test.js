const { validateDevice } = require("../deviceCheck");

test("Повністю коректний пристрій", () => {
  expect(
    validateDevice({
      name: "Switch-01",
      ip: "192.168.1.1",
      sshPort: 22,
      login: "admin"
    })
  ).toBe(true);
});

test("Некоректний IP", () => {
  expect(
    validateDevice({
      name: "Switch-01",
      ip: "999.999.9.9",
      sshPort: 22,
      login: "admin"
    })
  ).toBe(false);
});