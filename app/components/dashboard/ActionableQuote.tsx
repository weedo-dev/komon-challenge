import { ArrowSmallRightIcon } from "@/app/utils/icons";

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
    <div className="pt-8">
      <p className="font-euclid font-medium text-center text-xl">{`"${quote?.quote}"`}</p>
      <p className="font-euclid text-center text-sm pt-2">
        {`By "${quote?.author}" `}
        <span>
          <a
            className="text-xs font-euclid font-medium cursor-not-allowed hover:text-slate-500 "
            href={quote?.url}
          >
            Learn more <ArrowSmallRightIcon className="h-4 w-4 inline" />
          </a>
        </span>
      </p>
    </div>
  );
}
