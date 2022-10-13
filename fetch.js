//fetch given text
document.querySelector("#get-text").addEventListener("click", () => {
  //document.getElementById("output").innerHTML = "hello everyone";
  fetch("sample.txt")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      document.querySelector("#output").innerHTML = data;
    });
});

//fetch json file
document.querySelector("#get-json").addEventListener("click", () => {
  fetch("json-file.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "<h1>demo</h1>";
      data.forEach(function (user) {
        output += `
              <p>${user.title}</p>
              `;
      });
      document.querySelector("#output").innerHTML = output;
      output = "";
    });
});

//fetch json file by url
document.querySelector("#get-api-data").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "";
      data.forEach(function (post) {
        output += `
              <tr><td>${post.userId}</td>
                <td>${post.id}</td>
                <td>${post.title}</td>
                </tr>
              `;
      });
      document.querySelector("#output-table").innerHTML = output;
    });
});
