export function LeftService({
  heading,
  text,
  svg,
}: {
  heading: string;
  text: string;
  svg: any;
}) {
  return (
    <div className="service flex">
      <div className="bubble relative">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[500px]"
        >
          <defs>
            {" "}
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              {" "}
              <stop
                id="stop1"
                stopColor="rgba(0, 150, 199, 1)"
                offset="0%"
              ></stop>{" "}
              <stop
                id="stop2"
                stopColor="rgba(142, 209, 252, 1)"
                offset="100%"
              ></stop>{" "}
            </linearGradient>{" "}
          </defs>{" "}
          <path
            fill="url(#sw-gradient)"
            d="M26.5,-28.6C31.4,-21.6,30.3,-10.8,28.4,-1.9C26.5,7,23.7,13.9,18.8,19.3C13.9,24.6,7,28.3,-1.6,30C-10.2,31.6,-20.4,31.1,-28.7,25.8C-36.9,20.4,-43,10.2,-43.1,0C-43.1,-10.2,-36.9,-20.5,-28.7,-27.4C-20.5,-34.4,-10.2,-38,0.3,-38.3C10.8,-38.6,21.6,-35.5,26.5,-28.6Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            className="transition: all 0.3s ease 0s;"
          ></path>{" "}
        </svg>
        {svg}
      </div>
      <div className="service-details mt-[120px]">
        <h1 className="font-bold text-[40px] text-blue7">{heading}</h1>
        <p className="text-[#555555] font-semibold text-[20px]">{text}</p>
      </div>
    </div>
  );
}

export function RightService({
  heading,
  text,
  svg,
}: {
  heading: string;
  text: string;
  svg: any;
}) {
  return (
    <div className="service flex ml-[20px] mr-[20px]">
      <div className="service-details mt-[120px]">
        <h1 className="font-bold text-[40px] text-blue7">{heading}</h1>
        <p className="text-[#555555] font-semibold text-[20px]">{text}</p>
      </div>
      <div className="bubble relative">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 80 100"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[500px]"
        >
          {" "}
          <defs>
            {" "}
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              {" "}
              <stop
                id="stop1"
                stopColor="rgba(0, 150, 199, 1)"
                offset="0%"
              ></stop>{" "}
              <stop
                id="stop2"
                stopColor="rgba(142, 209, 252, 1)"
                offset="100%"
              ></stop>{" "}
            </linearGradient>{" "}
          </defs>{" "}
          <path
            fill="url(#sw-gradient)"
            d="M26.5,-28.6C31.4,-21.6,30.3,-10.8,28.4,-1.9C26.5,7,23.7,13.9,18.8,19.3C13.9,24.6,7,28.3,-1.6,30C-10.2,31.6,-20.4,31.1,-28.7,25.8C-36.9,20.4,-43,10.2,-43.1,0C-43.1,-10.2,-36.9,-20.5,-28.7,-27.4C-20.5,-34.4,-10.2,-38,0.3,-38.3C10.8,-38.6,21.6,-35.5,26.5,-28.6Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            className="transition: all 0.3s ease 0s;"
          ></path>{" "}
        </svg>
        {svg}
      </div>
    </div>
  );
}
