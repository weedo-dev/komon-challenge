import TitleH2 from "../../utils/components/TitleH2";
import {
  CalendarDaysIcon,
  ChevronDoubleUpIcon,
} from "../../utils/components/Icons";

export default function CreateSection() {
  return (
    <div className="w-full font-euclid">
      <TitleH2 title="Share with your community" />
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="group cursor-not-allowed rounded-lg border bg-slate-900 px-2 py-2 hover:bg-slate-300">
          <p className="text-center text-white group-hover:text-slate-500">
            Create Post{" "}
            <ChevronDoubleUpIcon className="ml-0.5 inline h-5 w-5" />
          </p>
        </div>
        <div className="group cursor-not-allowed rounded-lg border bg-slate-900 px-2 py-2 hover:bg-slate-300">
          <p className="text-center text-white group-hover:text-slate-500">
            Create Event <CalendarDaysIcon className="ml-0.5 inline h-5 w-5" />
          </p>
        </div>
      </div>
    </div>
  );
}
