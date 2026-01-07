const { buildCreateVlanCommands, buildCli } = require('../buildCli');

test('генерує CLI команди для створення VLAN', () => {
  const result = buildCli({
    vlanId: 10,
    name: 'Users',
    ip: '192.168.10.1',
    mask: '255.255.255.0'
  });

  expect(result).toEqual([
    'vlan 10',
    'name Users',
    'interface vlan 10',
    'ip address 192.168.10.1 255.255.255.0',
    'no shutdown'
  ]);
});
