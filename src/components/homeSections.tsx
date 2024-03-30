import { LeftService, RightService } from "./homePageService";

export function HomeSection1() {
  return (
    <div className="home-section-1">
      <div className=" flex justify-around">
        <div className="imageNintro flex flex-col gap-6">
          <img
            src="src/img/eye-100.png"
            className="h-[100px] w-[100px]"
            alt=""
          />
          <h1 className="text-[48px] font-bold ">
            Payments so fast,
            <br /> they'll blink by.
          </h1>

          <p className="text-[20px] font-semibold text-blue9">
            Payments, open saving account, debit card, offers and deals and a
            lot more.
          </p>
        </div>
        <div className="bannerImage">
          <img
            src="src/img/banner.png"
            alt=""
            className="h-[476px] w-[528px]"
          />
        </div>
      </div>
    </div>
  );
}

export function HomeSection2() {
  return (
    <div className="home-section-2 mt-[100px]">
      <h1 className="text-blue9 font-bold text-6xl text-center mb-[50px]">
        Services
      </h1>
      <div className="services flex flex-col">
        <LeftService
          heading="All in One"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae
          explicabo velit. Facilis, laboriosam omnis ducimus dolorum impedit hic
          sequi necessitatibus quisquam architecto autem doloremque assumenda eius
          reprehenderit consequuntur consectetur!"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="serviceSvg"
              fill="#023e8a"
            >
              <path d="M220-260q-92 0-156-64T0-480q0-92 64-156t156-64q37 0 71 13t61 37l68 62-60 54-62-56q-16-14-36-22t-42-8q-58 0-99 41t-41 99q0 58 41 99t99 41q22 0 42-8t36-22l310-280q27-24 61-37t71-13q92 0 156 64t64 156q0 92-64 156t-156 64q-37 0-71-13t-61-37l-68-62 60-54 62 56q16 14 36 22t42 8q58 0 99-41t41-99q0-58-41-99t-99-41q-22 0-42 8t-36 22L352-310q-27 24-61 37t-71 13Z" />
            </svg>
          }
        />
        <RightService
          heading="Wallet"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium consectetur distinctio veniam, sit repellendus a dicta, exercitationem nisi mollitia ea possimus delectus deserunt vel neque nesciunt odit aliquid quia. Quis!"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="serviceSvg"
              fill="#023e8a"
              viewBox="0 -960 960 960"
            >
              <path d="M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-160-60q25 0 42.5-17.5T700-480q0-25-17.5-42.5T640-540q-25 0-42.5 17.5T580-480q0 25 17.5 42.5T640-420Z" />
            </svg>
          }
        />
        <LeftService
          heading="Add a Bank Account"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae
        explicabo velit. Facilis, laboriosam omnis ducimus dolorum impedit hic
        sequi necessitatibus quisquam architecto autem doloremque assumenda eius
        reprehenderit consequuntur consectetur!"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="serviceSvg"
              fill="#023e8a"
            >
              <path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z" />
            </svg>
          }
        />
      </div>
    </div>
  );
}
