import aboutus from "../img/about.svg";
import logo from "../img/eye-100.png";
export function About() {
  return (
    <div className="flex flex-cols justify-around mr-[50px] items-center">
      <img
        src={aboutus}
        alt=""
        className="rounded-md w-[50%]  max-h-[525.4px]"
      />
      <div className="max-w-[440px] w-[40%] text-blue8 text-xl font-semibold">
        <img src={logo} className="w-[50px] h-[50px]" />
        Blink is a payment app designed for speed, security, and ease. With just
        a few taps, send and receive money or pay bills instantly, all protected
        by industry-leading safeguards. Use Blink and simplify your financial
        life.
      </div>
    </div>
  );
}
