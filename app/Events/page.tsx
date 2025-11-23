"use client";
import { useEffect } from "react";
import event1 from "../../public/event1.jpeg";
import event2 from "../../public/event2.jpeg";
import Image from "next/image";

export default function Events() {
  useEffect(() => {
    // fade-in animation on page load
    const cards = document.querySelectorAll(".fade-card");
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.remove("opacity-0", "translate-y-6");
      }, i * 150);
    });
  }, []);

  const events = [
    {
      title: "Corporate Event Management",
      desc: "We specialize in corporate events that leave a lasting impression. Whether it's high-profile conferences, team-building retreats, or award ceremonies, we bring expertise and innovation to every aspect of planning and execution.",
      img: "/event1.jpeg", // replace with your image
      reverse: false,
    },
    {
      title: "Wedding Planners & Management",
      desc: "Your wedding is one of the most cherished events of your life. Our team ensures your day becomes truly unforgettable with personalized planning and beautiful memories that last forever.",
      img: "/event2.jpeg",
      reverse: true,
    },
  ];

  return (
    <div className="min-h-screen mt-10 bg-white px-6 sm:px-10 lg:px-20 py-16">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          Who We Are
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We are a professional event management team dedicated to making your
          occasions memorable and stress-free. With a passionate team and years
          of experience, we ensure every detail is handled with perfection.
        </p>
      </div>

      {/* Events Section */}
      <div className="space-y-12">
        {events.map((item, i) => (
          <div
            key={i}
            className={`fade-card opacity-0 translate-y-6 flex flex-col ${
              item.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-8 bg-[#F7FBFF] border border-sky-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300`}
          >
            {/* Image */}
            <Image
              src={item.img}
              alt={item.title}
              width={600}
              height={400}
              className="w-full md:w-1/2 rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-300"
            />

            {/* Text Section */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-black mb-3">
                {item.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>

              <button className="mt-5 px-5 py-2 rounded-full bg-[#38BDF8] text-white font-semibold hover:bg-black transition-all duration-300 hover:scale-105 shadow-md">
                Explore More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
