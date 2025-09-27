import { stagger, motion } from "motion/react";

const steps = [
  "Purchase BNB from CEX and transfer to your Web3 wallet address",
  "Copy token contract address from telegram and swap BNB for BBCAT on PancakeSwap",
  "Receive BBCAT directly in your wallet and start enjoying Billicat (BCAT) rewards as you hold",
];

const container = {
  hidden: { opacity: 0, transform: "translateY(100px)" },
  show: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: {
      delayChildren: stagger(0.3),
    },
  },
};

const item = {
  hidden: { opacity: 0, transform: "translateY(100px)" },
  show: { opacity: 1, transform: "translateY(0px)" },
};

function HowToBuy() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative rounded-2xl bg-[#f88904] flex-center p-10 max-w-4xl mx-auto w-full flex flex-col gap-10 my-8"
    >
      <motion.img
        animate="visible"
        initial="hidden"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0,
          },
          visible: {
            opacity: 1,
            scale: [1, 1.1, 1],
          },
        }}
        transition={{ delay: 0.4 }}
        src="/logo.webp"
        className="w-28 h-32 object-contain absolute -top-12 -left-12"
      />

      <motion.p
        animate="visible"
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
        className="text-2xl md:text-3xl"
      >
        How To Buy!
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, i) => (
          <motion.div
            variants={item}
            className="text-center flex flex-col items-center gap-4"
            key={i}
          >
            <span className="bg-[#a73913] rounded-full flex-center text-3xl size-10">
              {i + 1}
            </span>
            <p>{step}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default HowToBuy;
