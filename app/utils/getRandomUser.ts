export default function getRandomUser(users: User[]): User {
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
}
