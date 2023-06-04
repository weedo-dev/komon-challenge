import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

type FormData = {
  username: string;
  platform: string;
  name: string;
};

function setConnectionData(formData: FormData, userData: User | undefined) {
  // detect max id
  const maxConnectionId = (): number => {
    if (!userData) {
      return 0;
    }
    return userData?.connections.reduce((maxId, connection) => {
      return Math.max(maxId, connection.id);
    }, 0);
  };

  // set new connection data structure

  const connectionData = {
    id: maxConnectionId() + 1,
    posts: [
      {
        id: 1,
        copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor aliquam lectus id lobortis. Proin non nisi bibendum, lacinia mi vel, luctus lorem.",
        image: "https://placekitten.com/300/300",
      },
      {
        id: 2,
        copy: "In gravida mi at quam ultrices, nec aliquam enim rutrum. Phasellus vestibulum metus vel mauris feugiat cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vehicula tempor erat.",
        image: "https://placebear.com/300/300",
      },
      {
        id: 3,
        copy: "Morbi fermentum, ipsum eu ultrices efficitur, ligula risus pulvinar tellus, eget tincidunt lorem enim in odio. Donec ut orci at lacus laoreet varius.",
        image: "https://picsum.photos/300/300",
      },
      {
        id: 4,
        copy: "Pellentesque feugiat felis sed arcu auctor malesuada. Maecenas vel erat id leo aliquam vestibulum. Curabitur aliquet tristique augue, eget ullamcorper enim iaculis id.",
        image: "https://placekitten.com/300/300",
      },
      {
        id: 5,
        copy: "Nulla tempus rutrum lorem, in gravida neque luctus a. Curabitur ullamcorper fermentum lectus, at faucibus ligula ultrices ac. Maecenas eget felis eget mauris scelerisque consequat.",
        image: "https://placebear.com/300/300",
      },
      {
        id: 6,
        copy: "Vivamus nec justo aliquet, vestibulum ligula ac, pretium enim. Suspendisse blandit eleifend metus, vel tincidunt turpis finibus at. Duis at justo ut dolor vehicula eleifend.",
        image: "https://picsum.photos/300/300",
      },
      {
        id: 7,
        copy: "Cras nec velit et dolor pretium posuere. Integer lacinia, eros et volutpat sollicitudin, odio tortor dignissim orci, eu cursus velit neque a augue.",
        image: "https://placekitten.com/300/300",
      },
      {
        id: 8,
        copy: "Phasellus sollicitudin nisi ac quam scelerisque lobortis. Ut nec hendrerit quam, ac dignissim mauris. Proin gravida libero velit, at scelerisque mi lobortis in.",
        image: "https://placebear.com/300/300",
      },
      {
        id: 9,
        copy: "Suspendisse id malesuada mauris. Nam luctus placerat nisl, id rhoncus dui vulputate et. Mauris gravida rutrum tellus, nec congue orci egestas sit amet.",
        image: "https://picsum.photos/300/300",
      },
    ],
    name: formData.name,
    platform: formData.platform,
    profile_picture: "https://placebeard.it/300x300",
  };

  return connectionData;
}

function getUserDataByUsername(username: string, existingData: UsersData) {
  return existingData.find((user: User) => user.username === username);
}

async function saveNewConnection(formData: FormData) {
  const usersFilePath = path.join("app/data", "users.json");

  // read the file to get current data
  const jsonData = fs.readFileSync(usersFilePath, "utf-8");
  const existingData = JSON.parse(jsonData);

  const userData = getUserDataByUsername(formData.username, existingData);
  const connectionData = setConnectionData(formData, userData);
  userData?.connections.push(connectionData);

  // Write new data to file
  fs.writeFileSync(usersFilePath, JSON.stringify(existingData));
}

export async function POST(request: Request) {
  const rawBody = await request.text();
  const formData: FormData = JSON.parse(rawBody);
  await saveNewConnection(formData);
  return NextResponse.json({ message: "Data saved successfully" });
}
