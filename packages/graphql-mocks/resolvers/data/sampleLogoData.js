const logoData = (parent, args) => {
  if (args.logoId === "id_1") {
    return { name: "avatar__adult--125-enabled.svg", logoId: "id_1" };
  }
  return { name: "avatar__child--125-enabled.svg", logoId: "id_2" };
};

module.exports = { logoData };
