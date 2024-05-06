import img24 from "../img/business-people-office_24908-55485-removebg-preview.png";
import imgg1 from "../img/apple_731985.png";
import imgg2 from "../img/playstore_300218.png";
import imgg3 from "../img/twitter_5968958.png";
export function About() {
  return (
    <div className=" w-full h-full flex flex-row p-4 ">
      <div className="w-[40%] flex items-center justify-center p-4 ">
        <img src={img24} alt="" className="rounded-md" />
      </div>
      <div className="w-[60%] p-4 flex flex-col items-center justify-center space-y-8 ">
        <h1 className="text-6xl text-blue9 font-semibold text-center font-roboto underline tracking-light ">
          ABOUT US
        </h1>
        <p className="text-xl text-blue6 font-roboto  ">
          Blink is a payment app designed for speed, security, and ease. With
          just a few taps, send and receive money or pay bills instantly, all
          protected by industry-leading safeguards. Download Blink and simplify
          your financial life.
        </p>
        <div className="w-full flex flex-row justify-evenly ">
          <img src={imgg1} alt="" className=" w-[50px] h-[50px] " />
          <img src={imgg2} alt="" className=" w-[50px] h-[50px] " />
          <img src={imgg3} alt="" className=" w-[50px] h-[50px] " />
        </div>
      </div>
    </div>
  );
}
