import TitleH2 from "../utils/TitleH2";

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
                <div className="cursor-pointer overflow-hidden rounded-md bg-cover">
                  <div className=" bottom-0 left-0 right-0 top-0 z-0 ">
                    <img
                      className="h-full w-full object-cover bg-blend-multiply"
                      height="100"
                      width="100"
                      src="https://storage.googleapis.com/komon-client-production/h6at0g949ebikme8tby4lti16ah4"
                      alt="Rocio Ramos"
                    />
                  </div>

                  {/* <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-gradient-to-b from-transparent to-[#000000CC]"></div>
                  <div className="absolute bottom-0 left-0 right-0 z-10 grid gap-y-5 px-5 py-4">
                    <span className="font-euclid-flex text-2xl text-white">
                      Rocio Ramos
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="bg-dark-08 text-dark-100 inline-flex items-center rounded-md px-2 py-[2px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="stroke-dark-100 h-3.5 w-3.5 stroke-1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Discover
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 97 96"
                        className="h-6 w-auto"
                      >
                        <title>Komon Logo Light Horizontal</title>
                        <path
                          fill="#fff"
                          fill-opacity=".5"
                          d="m0 59.46 49.882-36.72v26.363L0 85.822V59.458Z"
                        ></path>
                        <path fill="#fff" d="M0 10.5h96v19.584H0V10.5Z"></path>
                        <path
                          fill="#fff"
                          d="M17.883 27.448 96 80.172V53.81L48.941 21.798l-31.058 5.65Z"
                        ></path>
                      </svg>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
