// App types

type Platform = {
  name: string;
  base_url: string;
};

type Quote = {
  id: number;
  quote: string;
  author: string;
  url: string;
};

type Community = {
  id: number;
  name: string;
  category: string;
  image: string;
};

type AppData = {
  quotes: Quote[];
  top_communities: Community[];
  platforms: Platform[];
};

// Connection types

type Connection = {
  id: number;
  platform: string;
  name: string;
  profile_picture: string;
  posts: Post[];
};

type Post = {
  image: string;
  copy: string;
  id: number;
};

// User types

type User = {
  ID: number;
  username: string;
  name: string;
  email: string;
  members_quantity: number;
  members_variation: number;
  profile_picture: string;
  connections: Connection[];
};

type UsersData = User[];
