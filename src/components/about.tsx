import footer from "../img/footer.svg";
export function About() {
  return (
    <div className="relative flex items-center pt-[30px]">
      <img src={footer} className="absolute" />

      <div className="rows grid grid-cols-3 gap-y-[20px] gap-x-[60px] text-blue9 font-bold ml-[30px] mt-[50px] z-10 text-md">
        <a href="">About Us</a>
        <a href="">Careers</a>
        <a href="">Security</a>
        <a href="">Terms & Conditions</a>
        <a href="">Privacy Policy</a>

        <a href="">Blog</a>
        <a href="">Social Media</a>
      </div>
    </div>
  );
}
