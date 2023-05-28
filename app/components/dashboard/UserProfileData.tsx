type Quote = {
  id: number;
  quote: string;
  author: string;
  url: string;
};

type UserProfileDataProps = {
  username: string;
  members_quantity: number;
  members_variation: number;
  profile_picture: string;
  quote: Quote | undefined;
};

export default function UserProfileData({
  username,
  members_quantity,
  members_variation,
  profile_picture,
  quote,
}: UserProfileDataProps): JSX.Element {
  return (
    <div className="grid grid-cols-3 w-full">
      <div className=" col-span-2">
        <h1 className="text-2xl font-semibold md:text-5xl">{username}</h1>
        <p>Members: {members_quantity}</p>
        <p>Members Variation: {members_variation}</p>

        <p>Quote: {quote?.quote}</p>
        <p>
          Author: {quote?.author} <a href={quote?.url}>Read more</a>
        </p>
      </div>
      <div className="col-span-1 border">
        <img src={profile_picture} alt="Profile Picture" />
      </div>
    </div>
  );
}
