import footer from "../img/footer.svg";
export function About() {
  return (
    <div className="relative flex items-center justify-around pt-[30px]">
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
      <p className="text-blue9 font-semibold self-end z-10 ">
        @Copyright{" "}
        <a href="https://github.com/bhatia4404" target="__blank__">
          Shivam Bhatia
        </a>{" "}
        & <a href="#">Hrithik Garg</a>
      </p>
    </div>
  );
}
