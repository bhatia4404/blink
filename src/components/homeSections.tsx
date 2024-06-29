import { LeftService, RightService } from "./homePageService";

export function HomeSection1() {
  return (
    <div className="home-section-1">
      <div className=" flex justify-around">
        <div className="imageNintro flex flex-col gap-6">
          <img
            src="https://blink-frontend8.s3.eu-north-1.amazonaws.com/eye-100.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCmV1LW5vcnRoLTEiRzBFAiEA8SZzLR7T%2F%2BBdR4k0uEA70FQDhqu4T2Y1bin3hlu5zX8CIHFbuSdYDdIxdj%2BnWDpnkiAc4yy9FO6LAZhyM9X8eG9VKuQCCCwQABoMOTkyMzgyNTg1MDg5Igx7xXuFjNPV8NVOgx4qwQKxqflxABPeXnoDXLPDed5QO6luq%2FYlCDftZUD9AQXF%2FpvRJn0U3SKiUcVnsgan6Ez7NI%2FQ8JYDWEhB91WKo1TAfEGtrn8YJlXlkqnxw27iidDAQ5y7TCyMVoF%2FWhDg6fEZ%2FGJIjV300LwdWRFavOcDbLq6vhJhWya05CARIQJDMtP7ZoyjcSHklj4iQtZ6L3FBCHlrelYXxAl8GWz4%2Fou5QEZIK%2B%2BTJupbsgX1yO2LqoIyevSUA5DLDVijLASy0HI5HYZgXuRpsd8u0a%2Be4ed7MyeDzXtx7AfqhWHKryYfN%2FepTaFU%2BlVlLCtpQSxIaJE559S2Gu61gIoXFg1lMMsg%2F8%2Flh1ZbNZ7bh4CyMPJfLG8n5zjIiuWsT3PTjyNhr12NLp0HG1gE9uckwqSIbeodyqHsEAl0EpPzLivo%2BDt3FxQw18b%2FswY6swI6Crh3oS4yfJJSWxxhhFZFLerOxlYqh7EVb%2F7F60jS%2FpXTyM5HsiQaBNm1EI2%2FkUxHNDyOc977ip19QSn4rG2DaLUtguidyIDD28DcEWnMuXcPCO0pD1waNnQ7Qb8Mpv9TUh5Mo50Bx95UAB7PElJfRryA%2FadGBodPnEygTkv2bSI0IwsDdrFlzdPBZ4%2Bkf%2FewWukNef6osUTIGvPwW5fvG%2B9%2FTbMjCKK6IFc%2FOzrap1YkPbeF9eNH6Z%2FhtLnRgcTm505%2BRlExcJn7TVePAPvrhi9eDIkdlhLQqKLPTTVdQkTx7lsOSESVbinvETR73fP3V%2FXt6BDsevvDyLW6MSK80n1toANT2C%2B8hTl0aMCWzwrduWwC4njkOvBTsx2eqgXuK4i%2FGddbrwx8RL2QTwS0xkrA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240629T183347Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIA6ODU4REA7R75THOI%2F20240629%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=2e80f5123849a03e245020eaab86343a8d25fc08fba340d6570ff36df2533b1e"
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
            src="https://blink-frontend8.s3.eu-north-1.amazonaws.com/blinkbanner.svg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCmV1LW5vcnRoLTEiRzBFAiEA8SZzLR7T%2F%2BBdR4k0uEA70FQDhqu4T2Y1bin3hlu5zX8CIHFbuSdYDdIxdj%2BnWDpnkiAc4yy9FO6LAZhyM9X8eG9VKuQCCCwQABoMOTkyMzgyNTg1MDg5Igx7xXuFjNPV8NVOgx4qwQKxqflxABPeXnoDXLPDed5QO6luq%2FYlCDftZUD9AQXF%2FpvRJn0U3SKiUcVnsgan6Ez7NI%2FQ8JYDWEhB91WKo1TAfEGtrn8YJlXlkqnxw27iidDAQ5y7TCyMVoF%2FWhDg6fEZ%2FGJIjV300LwdWRFavOcDbLq6vhJhWya05CARIQJDMtP7ZoyjcSHklj4iQtZ6L3FBCHlrelYXxAl8GWz4%2Fou5QEZIK%2B%2BTJupbsgX1yO2LqoIyevSUA5DLDVijLASy0HI5HYZgXuRpsd8u0a%2Be4ed7MyeDzXtx7AfqhWHKryYfN%2FepTaFU%2BlVlLCtpQSxIaJE559S2Gu61gIoXFg1lMMsg%2F8%2Flh1ZbNZ7bh4CyMPJfLG8n5zjIiuWsT3PTjyNhr12NLp0HG1gE9uckwqSIbeodyqHsEAl0EpPzLivo%2BDt3FxQw18b%2FswY6swI6Crh3oS4yfJJSWxxhhFZFLerOxlYqh7EVb%2F7F60jS%2FpXTyM5HsiQaBNm1EI2%2FkUxHNDyOc977ip19QSn4rG2DaLUtguidyIDD28DcEWnMuXcPCO0pD1waNnQ7Qb8Mpv9TUh5Mo50Bx95UAB7PElJfRryA%2FadGBodPnEygTkv2bSI0IwsDdrFlzdPBZ4%2Bkf%2FewWukNef6osUTIGvPwW5fvG%2B9%2FTbMjCKK6IFc%2FOzrap1YkPbeF9eNH6Z%2FhtLnRgcTm505%2BRlExcJn7TVePAPvrhi9eDIkdlhLQqKLPTTVdQkTx7lsOSESVbinvETR73fP3V%2FXt6BDsevvDyLW6MSK80n1toANT2C%2B8hTl0aMCWzwrduWwC4njkOvBTsx2eqgXuK4i%2FGddbrwx8RL2QTwS0xkrA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240629T183228Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA6ODU4REA7R75THOI%2F20240629%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=540d6c345c5c1976323ac1e0065b81c0b7bfdcf5f177e20ad87562c64b37fc90"
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
          text="Blink puts you in control of your money with a range of features designed for ease and convenience. Send and receive money instantly with anyone on Blink, regardless of their bank."
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
          text="Blink's secure wallet lets you manage everything in one place. Add your bank account for easy payments and top-ups. Send and receive money instantly with other Blink users, all with industry-leading security protecting your information. Track your spending with clear transaction history. Blink is always innovating to make your wallet even more useful."
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
          text="Link your bank to Blink in minutes for effortless money management. No new accounts needed! Enjoy secure integration, send and receive money with ease, and keep track of everything from a single hub."
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

        <RightService
          heading="Card"
          text="Think of it as a secure and powerful digital twin of your traditional debit card. It lives conveniently within the app, allowing you to make purchases online and in-store (contactless payments) without ever needing a physical card."
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="serviceSvg"
              fill="#023e8a"
              viewBox="0 -960 960 960"
            >
              <path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z" />
            </svg>
          }
        />
      </div>
    </div>
  );
}

export function HomeSection3() {
  return (
    <div className="home-section-3 mt-[100px]">
      <h1 className="text-blue9 font-bold text-6xl text-center mb-[50px]">
        FAQs
      </h1>
      <div className="questions flex justify-around">
        <div className="question">
          <h2 className="font-bold text-[30px] text-blue7">
            Q. How can I reset my password?
          </h2>
          <ul className="answer list-[square] ml-[50px] text-[20px] l-[100px] text-blue8 font-semibold">
            <li className="">Go to Sign in page.</li>
            <li className="">Click on 'Forgot Password'.</li>
          </ul>
        </div>
        <div className="question flex flex-col gap-3">
          <h2 className="font-bold text-[30px] text-blue7">
            Q.How do I deactivate my virtual card?
          </h2>
          <ul className="answer list-[square] ml-[50px] text-[20px] l-[100px] text-blue8 font-semibold">
            <li className="">Log into your account.</li>
            <li className="">Click on Profile Icon.</li>
            <li className="">Click on 'Disable Card' button.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
