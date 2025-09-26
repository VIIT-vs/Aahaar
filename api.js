const API = "http://localhost:5000/api"; 


export const signup = async (data) => {
  const res = await fetch(`${API}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const signin = async (data) => {
  const res = await fetch(`${API}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};


export const addDonation = async (data) => {
  const res = await fetch(`${API}/donations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};


export const getDonations = async () => {
  const res = await fetch(`${API}/donations`);
  return res.json();
};


export const addRequest = async (data) => {
  const res = await fetch(`${API}/requests`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};


export const getRequests = async () => {
  const res = await fetch(`${API}/requests`);
  return res.json();
};
