const api = `http://localhost:7002`;

const send = (url, data = null, method = "GET") => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      // return reject(); // Uncomment this to fake an AJAX error
      resolve({
        isSuccess: 1,
        message: "Success",
        profiles: [
          {
            name: "Jane Doe"
          }
        ]
      });
    }, 500);
  });
};

export const getProfiles = () => {
  return send(`${api}/get`);
};
