function configurePort(port, mode, vlanId) {
  if (!port.startsWith("Gi")) {
    throw new Error("Invalid port name");
  }

  if (mode === "Access" && !Number.isInteger(vlanId)) {
    throw new Error("Invalid VLAN ID");
  }

  return {
    port,
    mode,
    vlan: mode === "Trunk" ? "all" : vlanId
  };
}

module.exports = { configurePort };
