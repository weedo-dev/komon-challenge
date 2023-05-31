import Link from "next/link";

export default function YouAreLost() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="m-w-[600px] text-center font-euclid text-4xl font-medium uppercase ">
        <span className="bg-gradient-to-br from-pink-500  via-purple-600 to-pink-500 bg-clip-text font-bold text-transparent ">
          you are lost!
        </span>
        <br />
        <Link
          href="/"
          className="text-medium text-center font-euclid text-base text-sky-500 underline hover:text-black"
        >
          Click here to return to Komon place{" "}
        </Link>
      </h1>
    </div>
  );
}
