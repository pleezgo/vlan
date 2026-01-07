function isValidIPv4(ip) {
  const regex =
    /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
  return regex.test(ip);
}

function validateDevice(device) {
  if (!device) return false;

  const { name, ip, sshPort, login } = device;

  if (!/^[A-Za-z0-9-]{2,32}$/.test(name)) return false;
  if (!isValidIPv4(ip)) return false;
  if (!Number.isInteger(sshPort) || sshPort < 1 || sshPort > 65535)
    return false;
  if (!login || login.length < 3) return false;

  return true;
}

module.exports = { validateDevice };
