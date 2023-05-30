import Image from "next/image";
import TitleH2 from "../../global/components/TitleH2";

export default function TopCommunitiesSection({
  communities,
}: {
  communities: Community[];
}) {
  return (
    <div className="w-full">
      <TitleH2 title="Top Communities of the Week" />
      <div className="grid grid-cols-3 gap-8">
        {communities.map((community) => {
          return (
            <div
              key={community.id}
              className="flex flex-col items-center gap-1"
            >
              <div>
                <div className="group relative cursor-not-allowed overflow-hidden rounded-md bg-cover">
                  <div className="relative">
                    <Image
                      src={community.image}
                      alt={`${community.name} cover photo`}
                      width={600}
                      height={600}
                    ></Image>
                  </div>
                  <div className="invisible absolute bg-black opacity-50 group-hover:visible"></div>
                  <div className="invisible absolute inset-0 flex flex-col items-center justify-center text-white group-hover:visible">
                    <h3 className="text-center text-2xl font-medium text-white">
                      {community.name}
                    </h3>
                    <p className="text-center text-xs">{community.category}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
