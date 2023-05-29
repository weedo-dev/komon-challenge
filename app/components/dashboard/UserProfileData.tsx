import { ArrowSmallRightIcon, UserGroupIcon } from "@/app/utils/icons";
import MembersVariationHint from "./MembersVariationHint";
import ClipPathProfilePicture from "./ClipPathProfilePicture";
import ActionableQuote from "./ActionableQuote";

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
    <div className="flex justify-between w-full text-black">
      <div className="grow-0">
        <h1 className="text-2xl font-euclid font-bold md:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-purple-600 to-pink-500">
          Hey! {username}
        </h1>
        <div className="md:max-w-[330px] mt-8">
          <div className="flex gap-2 ">
            <UserGroupIcon className="h-12 w-12 inline" />
            <div>
              <p className="font-euclid font-normal text-2xl ">
                There are{" "}
                <span className="font-medium">{members_quantity}</span> members
                in your community!
              </p>
              <MembersVariationHint members_variation={members_variation} />
            </div>
          </div>
        </div>
      </div>
      <ClipPathProfilePicture profile_picture={profile_picture} />
    </div>
  );
}
