import logo from "../public/image-logo.png";
import React from "react";

 function ContactSection() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT SIDE - INFO SECTION */}
        <div className="relative p-10 rounded-3xl overflow-hidden bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-xl">
          {/* Overlay Blur Circles */}
          <div className="absolute inset-0 backdrop-blur-sm opacity-40"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-sky-300/30 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-white/90 mb-6">
              Have any questions? Reach out to us and we’ll get back to you
              shortly.
            </p>

            <ul className="space-y-3 text-white">
              <li>
                📍 <span className="font-medium">Pune, Maharashtra</span>
              </li>
              <li>📧 support@codingclub.com</li>
              <li>📞 +91 99999 88888</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="bg-white rounded-3xl p-10 shadow-xl">
          <h3 className="text-2xl font-bold text-black mb-6">Contact Us</h3>

          <form className="space-y-4">
            <div>
              <label className="text-black font-medium">Your Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-xl border border-gray-300 mt-1 outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-black font-medium">Email Address</label>
              <input
                type="email"
                className="w-full p-3 rounded-xl border border-gray-300 mt-1 outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="text-black font-medium">Message</label>
              <textarea
               
                className="w-full p-3 rounded-xl border border-gray-300 mt-1 outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-xl transition-all"
            >
              Send Message
            </button>
          </form>

          <p className="text-center mt-5 text-gray-600 text-sm">
            We respect your privacy. Your information is secure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const features = [
    {
      icon: "⬜",
      title: "Business Growth",
      desc: "Unlock your full potential with strategic tools and smarter scaling.",
     
    },
    {
      icon: "⭕",
      title: "Smart Solutions",
      desc: "Optimize your workflow with automation and clean system control.",
     
    },
    {
      icon: "⚙️",
      title: "Seamless Integration",
      desc: "Connect smoothly with existing tools without interruptions.",
    
    },
  ];

  return (
    <div className="mt-10">
      <div className="min-h-screen w-full flex items-center justify-center px-4 py-10 bg-gradient-to-b from-sky-100 to-sky-200">
        <div className="w-full max-w-4xl rounded-[40px] p-10 md:p-16 bg-white/40 backdrop-blur-xl shadow-2xl border border-white/30">
          {/* LOGO */}
          <div className="flex flex-col items-center justify-center">
            <img
              src={logo.src}
              alt="Coding Club Logo"
              className="w-20 h-20 mb-2"
            />
            <h2 className="text-xl font-semibold text-black">Coding Club</h2>
          </div>

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-center mt-8 text-black leading-tight">
            Stop searching. <br />
            You just found your{" "}
            <span className="text-sky-600">tech partner.</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-center text-gray-700 max-w-2xl mx-auto mt-6 text-lg">
            We help students grow faster by building real-world projects,
            collaborating with developers, and participating in coding events.
          </p>

          {/* PRIMARY BUTTON */}
          <div className="flex justify-center mt-10">
            <button className="px-6 py-3 bg-sky-600 text-white font-medium rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
              Join the Club
            </button>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="max-w-6xl my-5 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((item, i) => (
          <div
            key={i}
            className="relative group p-6 rounded-3xl border border-black/10 bg-white 
                 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                 overflow-hidden animate-fadeIn"
          >
       
            

            {/* CONTENT */}
            <div className="relative z-10">
              <div className="text-black   text-2xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-bold text-black">{item.title}</h3>

              <p className="text-black/80 mt-2">{item.desc}</p>

              <a className="text-[#38BDF8] mt-4 inline-block hover:underline cursor-pointer transition-all">
                View →
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* contactus */}
      <ContactSection />
    </div>
  );
}
