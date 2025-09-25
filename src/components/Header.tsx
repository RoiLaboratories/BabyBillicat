import Button from "../ui/Button";

function Header() {
  return (
    <header className="relative overflow-hidden flex justify-center">
      {/* background layer */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-top transform -scale-x-100"
        style={{
          backgroundImage: "url(/header-bg.webp)",
        }}
      />

      {/* content layer */}
      <nav className="relative z-10 mx-auto w-9/10 md:max-w-7xl items-center justify-between flex">
        {/* logo */}
        <div className="flex items-center">
          <img src="/logo.webp" className="w-44 h-[264px] object-contain" />
          <p className="text-[64px]">Baby Billicat</p>
        </div>

        {/*btns */}
        <div className="flex items-center gap-x-2">
          <Button size="lg" variant={"primary"}>
            Join Us
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
