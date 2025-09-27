import { useAnimation, useInView, motion } from "motion/react";
import { useEffect, useRef } from "react";

const tokenData = [
  "100M Total Supply",
  "5/5 Buy and Sell Tax",
  "20% Initial Burn",
  "2% Auto Liquidity",
  "2% Billicat Rewards",
  "1% Auto Burn",
];

function Tokenomics() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

  return (
    <section
      ref={containerRef}
      className="flex-center md:p-10  mx-auto w-full flex flex-col gap-14"
    >
      <motion.p
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{ delay: 0.5 }}
        className="font-medium text-3xl md:text-4xl lg:text-5xl text-center text-[#a73913]"
      >
        Tokenomics
      </motion.p>
      <motion.div className="grid grid-cols-2 md:grid-cols-3 md:gap-10 lg:gap-14 gap-5 text-black text-lg ">
        {tokenData.map((token, i) => (
          <motion.div
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: {
                opacity: 0,
                y: 100,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              delay: 0.7 + i * 0.15,
              //   duration: 0.5,
            }}
            className="border-3 text-sm md:text-base text-center rounded-xl px-6 py-3 hover:-translate-y-2 shadow duration-300 ease-in-out hover:shadow-2xl w-full line-clamp-2"
            key={i}
          >
            {token}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Tokenomics;
