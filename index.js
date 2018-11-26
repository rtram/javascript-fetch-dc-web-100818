const token = `77907b346ff32e83a597473b728fbd7f49d020df`
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
