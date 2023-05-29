import { ArrowSmallRightIcon } from "@/app/utils/icons";

export default function MembersVariationHint({
  members_variation,
}: {
  members_variation: number;
}) {
  return (
    <div>
      {/* Changing style and message depending on members variation */}
      <p className={`mt-2  font-euclid text-base font-medium `}>
        There are{" "}
        <span
          className={members_variation > 0 ? "text-green-600" : "text-red-600"}
        >
          {members_variation}
          {members_variation > 0 ? " more" : " fewer"}
        </span>{" "}
        members than last month!
      </p>
      <span>
        <a
          className="text-xs font-euclid font-medium cursor-not-allowed hover:text-slate-500 "
          href="#"
        >
          Explore Analytics <ArrowSmallRightIcon className="h-4 w-4 inline" />
        </a>
      </span>
    </div>
  );
}
