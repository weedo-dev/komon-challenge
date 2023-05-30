import { ArrowSmallRightIcon } from "@/app/global/components/icons";

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
          className="cursor-not-allowed font-euclid text-xs font-medium underline decoration-sky-500 hover:text-slate-500 hover:decoration-slate-500 "
          href={undefined}
        >
          Explore Analytics
          <ArrowSmallRightIcon className="ml-0.5 inline h-4 w-4" />
        </a>
      </span>
    </div>
  );
}
