import { DashboardBar } from "../components/DashboardBar";

export function ChangePin() {
  return (
    <div>
      <DashboardBar />
      <div className="text-4xl font-semibold text-blue8 font-roboto flex flex-col gap-4 items-center">
        <p>Update Pin</p>

        <input
          type="number"
          placeholder="New Pin"
          className="outline-0 border-[1px] border-blue6 focus:border-[2px] w-[300px] pl-[10px] rounded-2xl te"
          name=""
          id=""
        />
        <button className="signin bg-blue2 w-fit text-blue8 text-3xl font-bold pl-3 pr-3 pt-2 pb-2  rounded-full hover:bg-blue8 hover:text-white hover:font-semibold transition-colors duration-300 mt-5">
          Submit
        </button>
      </div>
    </div>
  );
}
