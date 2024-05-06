import sidesvg from "../img/3641599.jpg";
import card from "../img/credit-card_2169862.png";
import secure from "../img/bank-transfer_13483188.png";
import wallet from "../img/mobile_11514284.png";
export function Services() {
  return (
    <div className="flex justify-around items-center">
      <div className="services flex flex-col gap-[30px] w-[40%] border-blue5 border-[1px] p-[20px] rounded-3xl max-w-[500px]">
        <h1 className="text-5xl text-blue8 font-roboto font-semibold border-[3px] border-blue8 w-fit pl-[30px] pr-[30px] pt-[10px] pb-[10px] text-center rounded-full self-center ">
          Services
        </h1>
        <ul className="services_list flex flex-col gap-[20px]">
          <li className="flex items-center justify-around">
            <img src={card} className="w-[100px]" />
            <p className="text-3xl text-blue8 font-roboto font-semibold">
              Debit Card
            </p>
          </li>
          <li className="flex items-center justify-around">
            <img src={secure} className="w-[100px]" />
            <p className="text-3xl text-blue8 font-roboto font-semibold">
              Secure Banking
            </p>
          </li>
          <li className="flex items-center justify-around">
            <img src={wallet} className="w-[100px]" />
            <p className="text-3xl text-blue8 font-roboto font-semibold">
              Wallet Feature
            </p>
          </li>
        </ul>
      </div>
      <img src={sidesvg} alt="" className="w-[40%] h-[60%]" />
    </div>
  );
}
