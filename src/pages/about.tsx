import aboutus from "../img/about.svg";
export function About() {
  return (
    <div className="flex flex-cols justify-around mr-[50px] items-center">
      <img
        src={aboutus}
        alt=""
        className="rounded-md w-[50%]  max-h-[525.4px]"
      />
      <div className="max-w-[440px] w-[40%] text-blue8 text-xl font-semibold">
        <img
          src="https://blink-frontend8.s3.eu-north-1.amazonaws.com/eye-100.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCmV1LW5vcnRoLTEiRzBFAiEA8SZzLR7T%2F%2BBdR4k0uEA70FQDhqu4T2Y1bin3hlu5zX8CIHFbuSdYDdIxdj%2BnWDpnkiAc4yy9FO6LAZhyM9X8eG9VKuQCCCwQABoMOTkyMzgyNTg1MDg5Igx7xXuFjNPV8NVOgx4qwQKxqflxABPeXnoDXLPDed5QO6luq%2FYlCDftZUD9AQXF%2FpvRJn0U3SKiUcVnsgan6Ez7NI%2FQ8JYDWEhB91WKo1TAfEGtrn8YJlXlkqnxw27iidDAQ5y7TCyMVoF%2FWhDg6fEZ%2FGJIjV300LwdWRFavOcDbLq6vhJhWya05CARIQJDMtP7ZoyjcSHklj4iQtZ6L3FBCHlrelYXxAl8GWz4%2Fou5QEZIK%2B%2BTJupbsgX1yO2LqoIyevSUA5DLDVijLASy0HI5HYZgXuRpsd8u0a%2Be4ed7MyeDzXtx7AfqhWHKryYfN%2FepTaFU%2BlVlLCtpQSxIaJE559S2Gu61gIoXFg1lMMsg%2F8%2Flh1ZbNZ7bh4CyMPJfLG8n5zjIiuWsT3PTjyNhr12NLp0HG1gE9uckwqSIbeodyqHsEAl0EpPzLivo%2BDt3FxQw18b%2FswY6swI6Crh3oS4yfJJSWxxhhFZFLerOxlYqh7EVb%2F7F60jS%2FpXTyM5HsiQaBNm1EI2%2FkUxHNDyOc977ip19QSn4rG2DaLUtguidyIDD28DcEWnMuXcPCO0pD1waNnQ7Qb8Mpv9TUh5Mo50Bx95UAB7PElJfRryA%2FadGBodPnEygTkv2bSI0IwsDdrFlzdPBZ4%2Bkf%2FewWukNef6osUTIGvPwW5fvG%2B9%2FTbMjCKK6IFc%2FOzrap1YkPbeF9eNH6Z%2FhtLnRgcTm505%2BRlExcJn7TVePAPvrhi9eDIkdlhLQqKLPTTVdQkTx7lsOSESVbinvETR73fP3V%2FXt6BDsevvDyLW6MSK80n1toANT2C%2B8hTl0aMCWzwrduWwC4njkOvBTsx2eqgXuK4i%2FGddbrwx8RL2QTwS0xkrA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240629T183347Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIA6ODU4REA7R75THOI%2F20240629%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=2e80f5123849a03e245020eaab86343a8d25fc08fba340d6570ff36df2533b1e"
          className="w-[50px] h-[50px]"
        />
        Blink is a payment app designed for speed, security, and ease. With just
        a few taps, send and receive money or pay bills instantly, all protected
        by industry-leading safeguards. Use Blink and simplify your financial
        life.
      </div>
    </div>
  );
}
