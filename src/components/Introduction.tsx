import { stagger, motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.3),
    },
  },
};

const item = {
  hidden: { opacity: 0, transform: "translateY(100px)" },
  show: { opacity: 1, transform: "translateY(0px)" },
};

function Introduction() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="text-[#a73913] max-w-3xl mx-auto text-center space-y-5"
    >
      <motion.p
        variants={item}
        className="font-medium text-3xl md:text-4xl lg:text-5xl"
      >
        Introduction
      </motion.p>
      <motion.p
        variants={item}
        className="text-base sm:text-lg md:text-xl lg:text-2xl"
      >
        Baby Billicat was born out of one simple vision, which is to stand
        behind and foster the growth of Billicatcoin. While many tokens chase
        empty promises of “utilities,” Baby Billicat strips away the noise and
        focuses on what truly matters in this space, which is community,
        fairness, and support.
      </motion.p>
    </motion.section>
  );
}

export default Introduction;
