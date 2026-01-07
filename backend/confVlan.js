const {
  validateVlanId,
  validateVlanName
} = require("./vlanCheck");

function createVlan(vlan) {
  if (!validateVlanId(vlan.id)) {
    throw new Error("Invalid VLAN ID");
  }

  if (!validateVlanName(vlan.name)) {
    throw new Error("Invalid VLAN name");
  }

  return {
    id: vlan.id,
    name: vlan.name,
    status: "active"
  };
}

module.exports = { createVlan };
