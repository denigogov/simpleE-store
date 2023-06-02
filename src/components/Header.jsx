import testHeroImg from "../assets/beer-svgrepo-com.svg";

const Header = () => {
  return (
    <header className="max-w-full h-screen 	 flex justify-center items-center	border-b border-titlePrimaryLight  ">
      <img
        className="object-cover w-40 h-40 animate-pulse			"
        src={testHeroImg}
        alt=""
      />
    </header>
  );
};

export default Header;
