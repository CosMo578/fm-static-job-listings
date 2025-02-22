/* eslint-disable react/prop-types */

const Header = ({ children }) => {
  return (
    <header className="relative bg-[#5ba4a4]">
      <img
        className="hidden h-auto w-full lg:inline-block"
        src="/bg-header-desktop.svg"
        alt="header image"
      />
      <img
        className="h-auto w-full lg:hidden"
        src="/bg-header-mobile.svg"
        alt="header image"
      />

      {children}
    </header>
  );
};

export default Header;
