function buildCli({ vlanId, name, ip, mask }) {
  return [
    `vlan ${vlanId}`,
    `name ${name}`,
    `interface vlan ${vlanId}`,
    `ip address ${ip} ${mask}`,
    `no shutdown`
  ];
}

module.exports = { buildCli };
