import { ArrowSmallRightIcon } from "@/app/components/utils/icons";

type Quote = {
  id: number;
  quote: string;
  author: string;
  url: string;
};

export default function ActionableQuote({
  quote,
}: {
  quote: Quote | undefined;
}) {
  return (
    <div className="group select-none rounded-3xl border-4 border-gray-300 px-16 py-8 hover:border-black">
      <p className="bg-gradient-to-br from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-center font-euclid text-xl font-bold text-transparent group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:via-purple-600 group-hover:to-pink-500">{`"${quote?.quote}"`}</p>
      <p className="pt-2 text-center font-euclid text-sm text-gray-300 group-hover:text-black">
        {`By "${quote?.author}" `}
        <span>
          <a
            className="cursor-not-allowed font-euclid text-xs font-medium underline hover:text-slate-500 hover:decoration-slate-500 group-hover:decoration-sky-500  "
            href={undefined}
          >
            Learn more
            <ArrowSmallRightIcon className="ml-0.5 inline h-4 w-4" />
          </a>
        </span>
      </p>
    </div>
  );
}
