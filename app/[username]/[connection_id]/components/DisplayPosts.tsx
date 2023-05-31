import Image from "next/image";
import TitleH2 from "../../../global/components/TitleH2";

export default function DisplayPosts({
  posts,
  username,
}: {
  posts: Post[];
  username: string;
}) {
  return (
    <div className="w-full">
      <TitleH2 title="Last Posts" />
      <div className="grid grid-cols-3 gap-8">
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              className="flex flex-col items-center gap-1 overflow-hidden rounded-md"
            >
              <Image
                src={post.image}
                alt={`${username} post`}
                width={300}
                height={300}
              />
              <div>{excerptCopy(post.copy)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function excerptCopy(copy: string) {
  const maxLength = 150;

  if (copy.length <= maxLength) {
    return copy;
  }
  return copy.slice(0, maxLength) + "..";
}
