"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import phone1 from "./assets/phoneone.png"; 
import phone2 from "./assets/phonet.png"; 
import phone3 from "./assets/phoneth.png"; 

export default function Services() {
  const features = [
    {
      img: phone1,
      title: "Easy Registration & Login",
      desc: "Get started quickly with our simple sign-up process. Register using email, phone number, or social media accounts.",
      layout: "text-top", // text above image
    },
    {
      img: phone2,
      title: "Quick Add to Cart",
      desc: "Shopping has never been this fast and convenient. Add items with a tap and checkout instantly.",
      layout: "text-bottom", // text below image
    },
    {
      img: phone3,
      title: "Smart Search & Filters",
      desc: "Find exactly what you need in seconds with powerful search and advanced filters.",
      layout: "text-top-right", // right card → text above image
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.25, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="services"
      className="relative py-20 bg-white text-center font-[Rubik]"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-[#120B06] mb-4"
      >
        Key <span className="text-[#4BB04F]">Features</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-2xl mx-auto text-gray-600 mb-16 text-lg leading-relaxed"
      >
        Our grocery app is designed to make your shopping experience faster,
        smarter, and more enjoyable. From easy registration to quick checkout,
        everything is at your fingertips.
      </motion.p>

      {/* Features grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {features.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="group relative bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-all hover:scale-[1.03] hover:shadow-2xl"
          >
            {/* Text above image (left + right card) */}
            {(item.layout === "text-top" || item.layout === "text-top-right") && (
              <>
                <h3 className="text-xl font-semibold text-[#120B06] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-[220px] md:w-[250px] lg:w-[260px] drop-shadow-2xl rounded-xl"
                  />
                </motion.div>
              </>
            )}

            {/* Text below image (middle card) */}
            {item.layout === "text-bottom" && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-[220px] md:w-[250px] lg:w-[260px] drop-shadow-2xl rounded-xl mb-4"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold text-[#120B06] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
