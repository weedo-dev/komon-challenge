import fs from "fs";

export default async function saveNewConnection(formData: {
  username: string;
  platform: string;
  name: string;
}) {
  fetch("/api/saveConnection", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
