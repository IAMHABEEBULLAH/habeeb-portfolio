import { useState, useEffect } from "react";

const PROFILE_IMAGE = "https://res.cloudinary.com/da1sbjmvm/image/upload/v1779306600/file_000000003a687243b4cf4a8a48a65d4f_hwtjmd.png";

const PROJECTS = [
  {
    title: "ChickenFarm.com.ng",
    desc: "Production-grade poultry business platform for a Nigerian farm brand.",
    url: "https://chickenfarm.com.ng",
    year: "2024"
  },
  {
    title: "NearbyPro",
    desc: "Service discovery platform connecting users to nearby professionals.",
    url: "https://nearbypro.vercel.app",
    year: "2024"
  },
  {
    title: "BookTrust Kaduna",
    desc: "Official website for BookTrust Kaduna literacy NGO.",
    url: "https://booktrust-kaduna-website.vercel.app",
    year: "2024"
  },
  {
    title: "Tic Tac Toe",
    desc: "Interactive Tic Tac Toe game built with React.",
    url: "https://tictactoe-ten-kohl.vercel.app",
    year: "2023"
  }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Habeeb.dev</h1>
          
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-emerald-400 transition">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
          </div>

          <button 
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center hero-bg pt-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-emerald-400 text-lg mb-4">Frontend Developer</p>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              Habeebullah<br />Sulyman
            </h1>
            <p className="text-xl text-zinc-400 mb-10 max-w-lg">
              I build clean, modern, and responsive websites with React and Tailwind CSS. 
              Based in Kaduna, Nigeria.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-zinc-200 transition">
                View My Work
              </a>
              <a href="https://wa.me/2349042541264" target="_blank" className="px-8 py-4 border border-zinc-700 rounded-2xl hover:border-zinc-400 transition">
                WhatsApp Me
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-80 h-96 rounded-3xl overflow-hidden border-4 border-zinc-700 shadow-2xl">
              <img 
                src={PROFILE_IMAGE}
                alt="Habeebullah Sulyman"
                className="w-full h-full object-cover"
