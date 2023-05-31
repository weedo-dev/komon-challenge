import createConnection from "../utils/createConnection";

export default function newConnection() {
  createConnection({
    username: "usuario",
    name: "crack",
    platform: "tu-vieja",
  });
  return;
}
