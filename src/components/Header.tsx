import { stagger, motion } from "motion/react";
import Button from "../ui/Button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.3),
    },
  },
};

function Header() {
  return (
    <header className="overflow-hidden top-0 left-0 right-0 sticky z-50">
      <div className="bg-black/35 absolute inset-0 z-10" />
      <div
        className="absolute inset-0 bg-no-repeat bg-[100%_20%] bg-cover transform -scale-x-100"
        style={{
          backgroundImage: "url(/header-bg.png)",
        }}
      />

      <motion.nav
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-9/10 md:max-w-7xl items-center justify-between flex"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center"
        >
          <img
            src="/logo.png"
            className="w-10 h-12 md:w-28 md:h-32 object-contain"
          />
          <p className="text-lg md:text-2xl lg:text-3xl">Baby Billicat</p>
        </motion.div>

        <div className="flex gap-3 items-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/*NB: If the button is a link just pass a "to" prop which links to the actual webpage  */}

            <Button
              size="xs"
              variant={"primary_outline"}
              className="md:hidden"
              to="https://t.me/babybillicat"
            >
              Join Us
            </Button>
            <Button
              size="md"
              variant={"primary_outline"}
              className="hidden md:block"
              to="https://t.me/babybillicat"
            >
              Join Us
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Button
              size="xs"
              className="md:hidden"
              to="https://baby-billicat.gitbook.io/baby-billicat/"
            >
              Whitepaper
            </Button>
            <Button
              size="md"
              className="hidden md:block"
              to="https://baby-billicat.gitbook.io/baby-billicat/"
            >
              Whitepaper
            </Button>
          </motion.div>
        </div>
      </motion.nav>
    </header>
  );
}

export default Header;

{
  /*
    return (
    <header className="relative overflow-hidden flex justify-center">

      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-top transform -scale-x-100"
        style={{
          backgroundImage: "url(/header-bg.webp)",
        }}
      />

      <nav className="relative z-10 mx-auto w-9/10 md:max-w-7xl items-center justify-between flex">
        <div className="flex items-center">
          <img src="/logo.webp" className="w-44 h-[264px] object-contain" />
          <p className="text-[64px]">Baby Billicat</p>
        </div>
        <div className="flex items-center gap-x-2">
          <Button size="lg" variant={"primary"}>
            Join Us
          </Button>
        </div>
      </nav>
    </header>
     */
}
