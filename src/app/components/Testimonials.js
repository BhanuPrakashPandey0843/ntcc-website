"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "This service saved me so much time! I received my project along with complete documentation and a presentation, everything was smooth and professional.",
    name: "Aarav Sharma",
    role: "Final Year Student",
    img: "https://static.vecteezy.com/system/resources/previews/012/971/549/non_2x/unknown-person-with-paper-bag-on-hand-feel-confused-and-frustrated-man-or-woman-with-package-with-face-expression-feeling-doubts-illustration-free-vector.jpg",
    color: "#4BB04F",
  },
  {
    text: "Super affordable and high quality. They helped me build a project that boosted my resume instantly. Highly recommended!",
    name: "Sophia Johnson",
    role: "CS Graduate",
    img: "https://tse2.mm.bing.net/th/id/OIP.tXjqeJqt56RD_rcnh9rSFwHaH_?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
    color: "#48407D",
  },
  {
    text: "Amazing support team! They delivered on time via email with a proper PPT and report. Truly student-friendly prices.",
    name: "Rahul Verma",
    role: "Engineering Student",
    img: "https://tse2.mm.bing.net/th/id/OIP.tXjqeJqt56RD_rcnh9rSFwHaH_?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
    color: "#F98531",
  },
  {
    text: "The personalized guidance helped me prepare for interviews with strong projects in my portfolio. Couldn’t ask for more!",
    name: "Emily Carter",
    role: "Job Seeker",
    img: "https://images.pexels.com/photos/5728888/pexels-photo-5728888.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    color: "#FFB800",
  },
];

// Reusable card
const TestimonialCard = ({ t }) => (
  <div className="min-w-[320px] max-w-[350px] bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between mx-4 transition-transform duration-300 hover:scale-105">
    <i className="ri-double-quotes-l text-4xl mb-4" style={{ color: t.color }} />
    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
      {t.text}
    </p>
    <div className="flex items-center gap-4 mt-auto">
      <img
        src={t.img}
        alt={t.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <p className="text-base font-semibold text-[#120B06]">{t.name}</p>
        <p className="text-sm text-gray-500">{t.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="font-[Rubik] bg-[#F9FFF9] text-[#120B06] px-6 py-20 overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        What Our <span className="text-[#4BB04F]">Clients Say</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center text-gray-600 mb-16 text-lg leading-relaxed"
      >
        Real feedback from students and professionals who trusted us with their
        projects, resumes, and presentations.
      </motion.p>

      {/* Row 1 → left to right */}
      <motion.div
        className="flex whitespace-nowrap mb-10 group"
        animate={{ x: ["-100%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={`row1-${i}`} t={t} />
        ))}
      </motion.div>

      {/* Row 2 → right to left */}
      <motion.div
        className="flex whitespace-nowrap group"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={`row2-${i}`} t={t} />
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
