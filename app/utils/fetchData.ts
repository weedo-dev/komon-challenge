import usersData from "../data/users.json";
import platformsData from "../data/platforms.json";
import dashboardData from "../data/dashboard.json";

type DataType = "users" | "platforms" | "dashboard";

export default function fetchData(type: DataType): any {
  switch (type) {
    case "users":
      return usersData;
    case "platforms":
      return platformsData;
    case "dashboard":
      return dashboardData;
    default:
      throw new Error("Invalid data type");
  }
}
