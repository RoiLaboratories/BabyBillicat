import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "motion/react";

const data = [
  {
    title: "phase one",
    items: [
      {
        name: "Fair launch",
        isSelected: true,
      },
      {
        name: "Liquidity burnt",
        isSelected: true,
      },
      {
        name: "Contract renounced",
        isSelected: true,
      },
      {
        name: "Community building",
        isSelected: true,
      },
    ],
  },
  {
    title: "Phase Two",
    items: [
      {
        name: "DexScreener listings",
        isSelected: true,
      },
      {
        name: "Meme/raid campaigns",
      },
      {
        name: "Audit",
      },
      {
        name: "Social media growth and collaborations",
      },
      {
        name: "CG and CMC Listing",
      },
    ],
  },
  {
    title: "Phase Three",
    items: [
      {
        name: "Stronger community marketing",
      },
      {
        name: "CEX listings discussions",
      },
      {
        name: "Establish Baby Billicat as the official community-backed companion to Billicatcoin",
      },
      {
        name: "Whitepaper V2",
      },
    ],
  },
];

function Roadmap() {
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
      className="flex-center p-5 md:p-10  mx-auto w-full flex flex-col gap-14"
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
        Baby Billicat Roadmap
      </motion.p>

      <motion.div
        // animate={mainControls}
        className="grid grid-cols-1 md:grid-cols-3 gap-10  text-black w-full"
      >
        {data.map((items, i) => (
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
            }}
            className="border-3 rounded-2xl p-8 space-y-3 map-card"
            key={i}
          >
            <p className="text-xl text-center capitalize">{items.title}</p>

            <ul className="space-y-3">
              {items.items.map((item, i) => (
                <li
                  className="gap-3 flex items-center text-xs capitalize"
                  key={i}
                >
                  <input
                    type="checkbox"
                    checked={item.isSelected}
                    className="accent-black"
                    readOnly
                    disabled={!item.isSelected}
                  />
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Roadmap;
