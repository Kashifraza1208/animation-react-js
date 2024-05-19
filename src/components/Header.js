import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div
      className="flex items-center justify-between h-14 p-5 bg-[#262626]   overflow-hidden w-full"
      style={{
        zIndex: "10",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
      }}
    >
      <div className="w-40 bg-transparent">
        <img src={logo} alt="" className="bg-transparent" />
      </div>

      <button class=" items-center px-5 py-2 bg-[rgb(130,180,64)] hover:bg-[rgb(130,180,64)] text-white text-sm font-medium rounded-md">
        Buy Now
      </button>
    </div>
  );
};

export default Header;
