const bankBalance = { balance: 10000 };

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(bankBalance);
    }, 3000);
  });
};
