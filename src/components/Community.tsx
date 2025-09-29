import { useEffect, useRef } from "react";
import Button from "../ui/Button";
import { useAnimation, useInView, motion } from "motion/react";

function Community() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

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
      className="relative max-w-4xl mx-auto w-full space-y-8"
    >
      <div className="flex justify-center">
        <motion.img
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
          transition={{ delay: 0.5 }}
          src="/bbcat.png"
          alt="billicat-logo"
          className="w-40 md:w-72 lg:w-80 relative z-30 transform hover:scale-105 transition duration-300 ease-in-out"
        />
        {/* transform hover:scale-105 transition duration-300 ease-in-out */}
        <motion.img
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
            },
            visible: {
              opacity: 1,
              y: 1,
            },
          }}
          transition={{ delay: 0.7 }}
          src="/bbcat.png"
          alt="billicat-logo"
          className="w-72 lg:w-80 -ml-16 relative z-20 hidden md:block transform hover:scale-105 transition duration-300 ease-in-out"
        />
        <motion.img
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
            },
            visible: {
              opacity: 1,
              y: 1,
            },
          }}
          transition={{ delay: 0.9 }}
          src="/bbcat.png"
          alt="billicat-logo"
          className="w-72 lg:w-80 -ml-16 relative z-30 hidden md:block transform hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>

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
            scale: 1,
          },
        }}
        transition={{ delay: 1 }}
        className="border-4 rounded-2xl border-[#a73913]  w-full p-10 text-black flex items-center justify-center flex-col gap-8"
      >
        <motion.p
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              scale: 0,
            },
            visible: {
              opacity: 1,
              scale: 1,
            },
          }}
          transition={{ delay: 1.5 }}
          className="text-2xl lg:text-3xl text-center"
        >
          Join Baby Billicat Community
        </motion.p>
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
          <motion.div
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: {
                opacity: 0,
                x: -100,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{ delay: 2 }}
          >
            <Button
              size="md"
              className="text-2xl rounded-xl px-6 gap-3"
              variant={"neutral_outline"}
              to="https://t.me/babybillicat"
            >
              <img
                src="/telegram.png"
                className="object-contain size-6"
                alt="telegram_logo"
              />
              Join Telegram
            </Button>
          </motion.div>
          <motion.div
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: {
                opacity: 0,
                x: 100,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{ delay: 2.2 }}
          >
            <Button
              size="md"
              className="text-2xl rounded-xl px-6  gap-3"
              variant={"neutral_outline"}
              to="https://x.com/BBillicat"
            >
              <img
                src="/twitter.png"
                className="object-contain size-6"
                alt="x_logo"
              />
              Follow on X
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Community;
