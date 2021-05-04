//function to featch correct connection for all users
export async function getUsers(url = "http://localhost:8080/users") {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
  });
  return response.json();
}

//function to featch correct connection for one specific user
export async function getUser(
  userId = "",
  url = "http://localhost:8080/users/"
) {
  console.log(url);
  const response = await fetch(url + userId, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
  });
  return response.json();
}

//function to featch correct connection for one specific user so we can delete
export async function deleteUser(
  userId = "",
  url = "http://localhost:8080/users/"
) {
  const response = await fetch(url + userId, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
  });
  return response.json();
}

//function to featch correct connection so we can update specific user
export async function putUser(
  userId = "",
  data = {},
  url = "http://localhost:8080/users/"
) {
  console.log(data);
  const response = await fetch(url + userId, {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

//function to featch correct connection so we can add new user
export async function postUser(data = {}, url = "http://localhost:8080/users") {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
