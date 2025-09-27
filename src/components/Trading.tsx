import { Icon } from "@iconify/react";
import Button from "../ui/Button";
import {
  motion,
  useInView,
  useAnimation,
  // useScroll,
  // useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

function Trading() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end end"],
  // });

  // const paragraphOne = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  return (
    <motion.section
      ref={containerRef}
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
      transition={{ delay: 0.3 }}
      className="relative rounded-2xl bg-[#a73913] flex-center p-10 max-w-4xl mx-auto w-full flex flex-col gap-8 my-8"
    >
      <motion.img
        animate={mainControls}
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
        className="text-2xl md:text-3xl flex items-center gap-1"
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
      >
        <Icon icon="material-symbols:lab-profile" />
        Trading is Live!
      </motion.p>

      <motion.div
        animate={mainControls}
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
        transition={{ delay: 0.7 }}
        className="border-3 rounded-2xl border-red-200 px-7 py-5 flex flex-col gap-4 md:flex-row items-center justify-between w-full"
      >
        <p className="text-sm text-center sm:text-base md:text-lg">
          Buy BBCAT from PancakeSwap DEX
        </p>
        <Button
          size="xs"
          className="text-xl rounded-xl md:hidden"
          variant={"secondary"}
        >
          <img src="/pcs.webp" className="object-contain size-10" />
          Buy BBCAT
        </Button>
        <Button
          size="lg"
          className="text-2xl rounded-xl hidden md:flex"
          variant={"secondary"}
        >
          <img src="/pcs.webp" className="object-contain size-10" />
          Buy BBCAT
        </Button>
      </motion.div>

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
        transition={{ delay: 1.5 }}
        className="text-base md:text-lg text-center"
      >
        Enjoy BILLICAT reflections as reward for holding this gem!{" "}
      </motion.p>
    </motion.section>
  );
}

export default Trading;
