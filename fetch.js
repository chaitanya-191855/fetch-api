//fetch given text
document
  .querySelector("#get-text")
  .addEventListener("click", async function () {
    //document.getElementById("output").innerHTML = "hello everyone";
    const res = await fetch("sample.txt");
    const data = await res.text();
    document.querySelector("#output").innerHTML = data;
  });

//fetch json file
document.querySelector("#get-json").addEventListener("click", async () => {
  const res = await fetch("json-file.json");
  const data = await res.json();
  let output = "<h1>demo</h1>";
  data.forEach(function (user) {
    output += `
              <p>${user.title}</p>
              `;
  });
  document.querySelector("#output").innerHTML = output;
  output = "";
});

//fetch json file by url
document.querySelector("#get-api-data").addEventListener("click", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
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
