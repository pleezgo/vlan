function validateVlanId(vlanId) {
  if (!Number.isInteger(vlanId)) return false;
  return vlanId >= 1 && vlanId <= 4094;
}

function validateVlanName(name) {
  if (typeof name !== "string") return false;
  return /^[A-Za-z]{2,32}$/.test(name);
}

module.exports = {
  validateVlanId,
  validateVlanName
};
