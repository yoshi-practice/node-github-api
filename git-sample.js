const request = axios.create({
  baseURL: "https://api.github.com"
});

const user = "yoshi1125hisa";

request.get(`/users/${user}/events`)
  .then(res => res.data)
  .then(console.log)
