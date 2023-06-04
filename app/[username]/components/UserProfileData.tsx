import { UserGroupIcon } from "@/app/utils/components/Icons";
import MembersVariationHint from "./MembersVariationHint";
import ClipPathProfilePicture from "./ClipPathProfilePicture";

type UserProfileDataProps = {
  username: string;
  members_quantity: number;
  members_variation: number;
  profile_picture: string;
};

export default function UserProfileData({
  username,
  members_quantity,
  members_variation,
  profile_picture,
}: UserProfileDataProps): JSX.Element {
  return (
    <div className="flex w-full items-center justify-between text-black">
      <div className="grow-0">
        <h1 className="bg-gradient-to-br from-pink-500 via-purple-600 to-pink-500 bg-clip-text font-euclid text-2xl font-bold text-transparent md:text-5xl">
          Hey! <br /> {username}
        </h1>
        <div className="mt-4 md:max-w-[330px]">
          <div className="flex gap-2 ">
            <UserGroupIcon className="inline h-12 w-12" />
            <div>
              <p className="font-euclid text-2xl">
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
