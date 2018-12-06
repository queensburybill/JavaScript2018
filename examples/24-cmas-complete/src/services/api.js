import axios from "axios";

const api = "http://localhost:7001";

const send = (url, data = null, method = "POST") => {
  const token = localStorage.getItem("token");
  return axios(url, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : ""
    },
    data: data ? JSON.stringify(data) : null
  }).then(response => response.data);
};

export const signinRequest = (memberId, pinNumber) => {
  return send(`${api}/signin`, { memberId, pinNumber }).then(response => {
    if (response.token) localStorage.token = response.token;
    return response;
  });
};

export const fetchAllNomineesRequest = () => {
  return send(`${api}/nominees`, null, "GET");
};

export const voteRequest = (categoryId, nomineeIndex) => {
  return send(`${api}/vote`, { categoryId, nomineeIndex });
};

export const completeVotingRequest = () => {
  return send(`${api}/complete`);
};
