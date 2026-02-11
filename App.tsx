
import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  BarChart3,
  Globe,
  Store,
  ShoppingBag,
  Target,
  TrendingUp,
  Zap,
  ArrowUp,
  Play,
  Users,
  Briefcase,
} from "lucide-react";

/**
 * Single-file React portfolio (Netlify-ready)
 * - Keeps your layout + images
 * - Copy tone: UNIQLO JP style (short, clear, store-first)
 * - Includes CSS helpers for `*-uniqlo` utility classes (no Tailwind config needed)
 */

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "philosophy", "experience", "impact", "contact"];

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection("contact");
        return;
      }

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return 300 >= rect.top && rect.bottom >= 300;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Data ---

  const experiences = [
    {
      year: "2026 - Present",
      company: "LG Household & Health Care",
      role: "Global Marketing Team — North America",
      location: "Seoul, Korea",
      description:
        "Own the weekly execution loop for Amazon US: plan → launch → review → improve. Align creators, content, and PDP assets to keep the message clear and the next action simple.",
      metrics: [
        { label: "Scope", value: "End-to-End", desc: "Plan → Execute → Review" },
        { label: "Market", value: "NA", desc: "Amazon US Focus" },
        { label: "System", value: "Weekly", desc: "Routines & Checklists" },
      ],
      skills: ["Execution Rhythm", "Amazon Ops", "Cross-team Alignment", "Performance Review"],
      logo: "https://i.ibb.co/mCvjRyHK/images.png",
    },
    {
      year: "2025",
      company: "CJ Olive Young",
      role: "Shutterbrity PRO — Official Creator",
      location: "Seoul, Korea",
      description:
        "Produced 40+ pieces with one goal: make the value obvious. Tested hooks and copy fast, then kept what worked — without breaking brand tone.",
      metrics: [
        { label: "Reach", value: "169K", desc: "Total Views" },
        { label: "Output", value: "40+", desc: "Contents Delivered" },
        { label: "Impact", value: "+15%", desc: "Sales Contribution" },
      ],
      skills: ["Customer Signals", "Content Ops", "Conversion Thinking"],
      logo: "https://i.ibb.co/dyzwDb5/OY-web-thumbnail.jpg",
    },
    {
      year: "2025",
      company: "Australian Cruise Group",
      role: "Global Marketing Intern",
      location: "Sydney, Australia",
      description:
        "Improved the booking path by removing friction. Ran structured A/B tests on landing copy and flow to lift conversion.",
      metrics: [
        { label: "Efficiency", value: "1.25x", desc: "CTR Improvement" },
        { label: "Sales", value: "+20%", desc: "Conversion Lift" },
        { label: "Method", value: "A/B", desc: "Test → Learn → Apply" },
      ],
      skills: ["Experiment Design", "UX Copy", "Analytics", "Figma"],
      logo: "https://i.ibb.co/VYmSvgyh/2026-01-31-12-51-48.png",
    },
    {
      year: "2024",
      company: "Amorepacific",
      role: "B.READY Marketing Supporter",
      location: "Seoul, Korea",
      description:
        "Turned VOC and observations into simple messages for Gen Z men. Built routines people could actually follow, then refined based on response.",
      metrics: [
        { label: "Growth", value: "2x", desc: "View Lift" },
        { label: "Response", value: "+10%", desc: "Engagement Lift" },
        { label: "Projects", value: "12", desc: "Campaign Deliverables" },
      ],
      skills: ["VOC", "Segmentation", "Messaging"],
      logo: "https://i.ibb.co/0p5WwLQ1/img.jpg",
    },
  ];

  const strategicPillars = [
    {
      title: "Shop-floor first",
      heading: "The Floor is the Answer",
      description:
        "Plans look good on slides. Results happen in stores. I want to learn standards, team rhythm, and service — where the truth is.",
      icon: <Store className="w-8 h-8 text-uniqlo" />,
      tags: ["Shop Floor", "Standards", "Service"],
    },
    {
      title: "Simple decisions",
      heading: "Speed & Clarity",
      description:
        "Retail moves fast. I use data to make choices simpler: what to keep, what to fix, and what to repeat.",
      icon: <Briefcase className="w-8 h-8 text-uniqlo" />,
      tags: ["Prioritization", "Rhythm", "Execution"],
    },
    {
      title: "Team",
      heading: "Build to Scale",
      description:
        "Scale comes from people and routines. I like clean handoffs, clear ownership, and a system the team can run every week.",
      icon: <Users className="w-8 h-8 text-uniqlo" />,
      tags: ["Ownership", "Handoffs", "Repeatable"],
    },
  ];

  // --- Components ---

  const CustomLogo = ({ size = "w-10 h-10", fontSize = "text-[9px]" }) => (
    <div
      className={`${size} bg-uniqlo text-white flex flex-col justify-between p-[15%] shadow-sm hover:bg-black transition-colors duration-300`}
    >
      <div className={`flex justify-between w-full leading-none ${fontSize} font-bold`}>
        <span>W</span>
        <span>O</span>
        <span>O</span>
      </div>
      <div className={`flex justify-between w-full leading-none ${fontSize} font-bold`}>
        <span>J</span>
        <span>I</span>
        <span>N</span>
      </div>
      <div className={`flex justify-between w-full leading-none ${fontSize} font-bold`}>
        <span>C</span>
        <span>H</span>
        <span>O</span>
        <span>I</span>
      </div>
    </div>
  );

  const FloatingNav = () => {
    const navItems = [
      { id: "hero", icon: <ArrowUp size={18} />, label: "Top" },
      { id: "philosophy", icon: <span className="text-[10px] font-bold">01</span>, label: "Philosophy" },
      { id: "experience", icon: <span className="text-[10px] font-bold">02</span>, label: "Career" },
      { id: "impact", icon: <span className="text-[10px] font-bold">03</span>, label: "Results" },
      { id: "contact", icon: <span className="text-[10px] font-bold">04</span>, label: "Contact" },
    ];

    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 print:hidden">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-uniqlo hover:text-white hover:border-uniqlo transition-all duration-300 shadow-lg group relative ${
              activeSection === item.id ? "bg-uniqlo text-white border-uniqlo" : ""
            }`}
            aria-label={item.label}
          >
            {item.icon}
            <span className="absolute right-full mr-3 bg-black text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none rounded-sm">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-uniqlo selection:text-white overflow-x-hidden relative">
      <style>{`
        :root { --uniqlo: #ED1D24; }
        .text-uniqlo{ color: var(--uniqlo); }
        .bg-uniqlo{ background: var(--uniqlo); }
        .border-uniqlo{ border-color: var(--uniqlo); }
        .selection\:bg-uniqlo::selection{ background: var(--uniqlo); }
        .selection\:text-white::selection{ color: #fff; }

        .fade-in-up{animation: fadeInUp 700ms ease-out both;}
        @keyframes fadeInUp{from{opacity:0; transform: translateY(14px);}to{opacity:1; transform: translateY(0);}}
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-black/5 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="flex items-center gap-3 group">
              <CustomLogo />
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-black group-hover:text-uniqlo transition-colors">GMP 2026</span>
                <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Candidate Portfolio</span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {["Philosophy", "Experience", "Impact", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:-translate-y-0.5 ${
                    activeSection === item.toLowerCase() ? "text-uniqlo" : "text-gray-400 hover:text-black"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <FloatingNav />

      {/* Hero */}
      <section id="hero" className="min-h-screen pt-20 flex items-center bg-white relative overflow-hidden">
        <div className="absolute -right-20 top-40 opacity-[0.02] text-[20rem] font-bold leading-none select-none pointer-events-none">GMP</div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center border-t border-black pt-12 lg:pt-0 lg:border-t-0">
            <div className="lg:col-span-7 space-y-10 order-2 lg:order-1 fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-uniqlo text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                <Zap size={12} fill="currentColor" /> Candidate No. 2026-GMP
              </div>

              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold uppercase font-sans leading-[0.9] tracking-tighter text-black">
                Future
                <br />
                Retail
                <br />
                <span className="text-uniqlo">Manager</span>
              </h1>

              <div className="border-l-4 border-uniqlo pl-6 py-2">
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-black">"To change clothes is to change the world."</p>
                <p className="text-sm md:text-base text-gray-500 mt-3 font-normal max-w-lg leading-relaxed">
                  I simplify what’s noisy into what teams can run.
                  Now I want to learn UNIQLO’s store-first system — standards, rhythm, and execution.
                </p>
              </div>

              <div className="flex divide-x divide-gray-200 border border-gray-200 w-full max-w-lg bg-white shadow-sm">
                {[
                  { val: "Store", label: "First" },
                  { val: "160K", label: "Monthly Views" },
                  { val: "Data", label: "To Decisions" },
                ].map((stat, i) => (
                  <div key={i} className="flex-1 p-5 text-center group hover:bg-black hover:text-white transition-colors cursor-default duration-300">
                    <div className="text-2xl font-bold font-sans text-uniqlo group-hover:text-white transition-colors">{stat.val}</div>
                    <div className="text-[9px] uppercase font-bold tracking-widest mt-1 text-gray-400 group-hover:text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end relative order-1 lg:order-2 mb-12 lg:mb-0">
              <div className="relative w-full max-w-[340px] group cursor-pointer">
                <div className="absolute top-4 -right-4 w-full h-full border-2 border-uniqlo z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />

                <div className="bg-white border border-gray-200 shadow-2xl relative z-10 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="aspect-[3/4] w-full bg-gray-100 relative overflow-hidden">
                    <img
                      src="https://i.ibb.co/wNvv79rw/2026-01-31-12-47-31.png"
                      alt="Woojin Choi"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-[1.1] group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                      <div className="inline-block bg-uniqlo text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider mb-2">UNIQLO GMP 2026</div>
                      <div className="text-white text-xl font-bold uppercase tracking-tight leading-none">Woojin Choi</div>
                      <div className="text-white/70 text-[10px] uppercase tracking-widest mt-1">Seoul, South Korea</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-32 bg-[#111] text-white px-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 sticky top-32 h-fit">
              <h2 className="text-uniqlo text-xs font-bold uppercase tracking-[0.2em] mb-6">01. Philosophy</h2>
              <h3 className="text-5xl font-bold uppercase font-sans leading-[0.9] mb-8">Management
                <br />DNA</h3>
              <div className="w-12 h-1 bg-uniqlo mb-8" />
              <p className="text-gray-400 leading-relaxed font-light text-lg">
                <span className="text-white font-medium">Store-first. People-first. Standards-first.</span>
                <br />
                Make it simple. Make it repeatable.
              </p>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
              {strategicPillars.map((item, i) => (
                <div
                  key={i}
                  className={`border border-white/10 bg-white/5 p-10 hover:bg-uniqlo transition-colors duration-500 group relative overflow-hidden flex flex-col justify-between min-h-[300px] ${
                    i === 2 ? "md:col-span-2" : ""
                  }`}
                >
                  <div>
                    <div className="mb-8 p-4 bg-black/30 w-fit rounded-full text-white group-hover:bg-white group-hover:text-uniqlo transition-colors">{item.icon}</div>
                    <h4 className="text-2xl font-bold uppercase font-sans mb-4 leading-tight">{item.heading}</h4>
                    <p className="text-sm text-gray-400 group-hover:text-white/90 leading-relaxed transition-colors max-w-sm">{item.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-8">
                    {item.tags.map((t, k) => (
                      <span
                        key={k}
                        className="text-[9px] border border-white/20 px-3 py-1 font-bold uppercase tracking-wider group-hover:border-white group-hover:bg-white group-hover:text-uniqlo transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-8 border-b border-black gap-8">
            <div>
              <h2 className="text-uniqlo text-xs font-bold uppercase tracking-[0.2em] mb-4">02. Experience</h2>
              <h3 className="text-5xl md:text-6xl font-bold uppercase font-sans leading-none">Career Trajectory</h3>
            </div>

            <div className="hidden md:block text-right">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Total Career</div>
              <div className="text-xl font-bold">2024 — Present</div>
            </div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative pl-0 md:pl-8 border-l-0 md:border-l border-gray-200 hover:border-uniqlo transition-colors duration-500"
              >
                <div className="hidden md:block absolute -left-[5px] top-0 w-[9px] h-[9px] bg-white border-2 border-gray-200 rounded-full group-hover:border-uniqlo group-hover:bg-uniqlo transition-colors" />

                <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 border border-gray-100 bg-white shadow-sm p-2 flex items-center justify-center overflow-hidden">
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold font-sans text-gray-300 group-hover:text-uniqlo transition-colors">{exp.year.split(" ")[0]}</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1 flex items-center gap-1">
                          <Globe size={10} /> {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <h4 className="text-2xl font-bold uppercase font-sans mb-3 group-hover:text-uniqlo transition-colors flex items-center gap-2">
                      {exp.company}
                      <ArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-uniqlo" size={20} />
                    </h4>
                    <span className="inline-block bg-black text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 mb-5">{exp.role}</span>

                    <p className="text-gray-600 leading-relaxed font-medium mb-8 max-w-2xl border-l-2 border-gray-100 pl-4 group-hover:border-uniqlo transition-colors">
                      {exp.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {exp.metrics.map((m, i) => (
                        <div
                          key={i}
                          className="bg-gray-50 p-4 border border-transparent group-hover:border-gray-200 group-hover:bg-white transition-all shadow-sm"
                        >
                          <div className="text-2xl font-bold font-sans text-uniqlo">{m.value}</div>
                          <div className="text-[9px] font-bold uppercase tracking-widest mt-1 text-black">{m.label}</div>
                          <div className="text-[9px] text-gray-400 mt-1">{m.desc}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white border border-gray-200 text-[10px] font-bold uppercase tracking-wide text-gray-500 rounded-full group-hover:border-uniqlo group-hover:text-uniqlo transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="py-32 px-6 bg-uniqlo text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden opacity-10 pointer-events-none">
          <div className="whitespace-nowrap text-[15rem] font-bold leading-none select-none">RESULTS RESULTS RESULTS</div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 sticky top-32">
              <h2 className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] mb-8">03. Impact</h2>
              <h3 className="text-6xl lg:text-7xl font-bold uppercase font-sans leading-[0.8] mb-10">
                Proven
                <br />
                Business
                <br />
                Results
              </h3>
              <div className="border-l-4 border-white pl-8 py-2 mb-16">
                <p className="text-2xl font-medium max-w-md leading-tight">"Make the next step obvious."</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Market Reach", val: "200K+", icon: <Globe size={20} /> },
                  { label: "Conversion Lift", val: "+20%", icon: <TrendingUp size={20} /> },
                  { label: "Engagement Rate", val: "5.0%", icon: <Target size={20} /> },
                  { label: "Partnerships", val: "15+", icon: <ShoppingBag size={20} /> },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 flex flex-col justify-between hover:bg-white hover:text-uniqlo transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      {stat.icon}
                      <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold font-sans tracking-tight">{stat.val}</div>
                      <div className="text-[9px] font-bold uppercase tracking-widest mt-1 opacity-70 group-hover:opacity-100">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-8 mt-12 lg:mt-0">
              <div className="bg-white text-black p-8 shadow-2xl relative overflow-hidden group">
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Case Study</div>
                    <h4 className="text-2xl font-bold font-sans">Growth Through Iteration</h4>
                  </div>
                  <div className="text-4xl font-bold text-uniqlo">+240%</div>
                </div>
                <div className="h-64 w-full bg-gray-50 relative overflow-hidden border border-gray-200">
                  <img
                    src="https://i.ibb.co/6Js1sSyf/2026-02-11-3-14-06.png"
                    alt="Growth chart"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <span>Launch</span>
                  <span>Review</span>
                  <span>Improve</span>
                </div>
              </div>

              <div className="relative h-[400px] w-full flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-full scale-75 blur-3xl" />

                <div className="relative w-[220px] bg-black rounded-[3rem] border-8 border-black shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 z-10">
                  <div className="bg-gray-800 w-full h-full min-h-[400px] relative">
                    <img
                      src="https://i.ibb.co/PSBnnRD/2026-02-11-3-13-28.png"
                      className="w-full h-full object-cover opacity-60"
                      alt="Strategy Visual"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                        <Play fill="white" className="text-white ml-1" size={20} />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-white text-xs font-bold mb-1">@lune_seo2</div>
                      <div className="text-white/80 text-[10px] leading-tight">POV: Listen fast. Decide faster. Execute weekly.</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-10 right-10 bg-white text-black p-4 shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Customer Reach</div>
                  <div className="text-3xl font-bold font-sans text-uniqlo">169K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 bg-white border-b border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-uniqlo text-xs font-bold uppercase tracking-[0.2em] mb-6">04. Contact</h2>
          <h3 className="text-5xl lg:text-7xl font-bold uppercase font-sans mb-12">Ready to Lead</h3>
          <p className="text-xl font-medium text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            I want to lead how work runs — with clear standards, steady rhythm, and respect for the shop floor.
          </p>

          <div className="grid md:grid-cols-2 border-2 border-black divide-y md:divide-y-0 md:divide-x divide-black bg-white">
            <div className="p-16 hover:bg-black hover:text-white transition-colors duration-500 group cursor-pointer flex flex-col items-center">
              <Mail className="mb-6 text-uniqlo" size={40} />
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-400 mb-3">Email</div>
              <a
                href="mailto:cwj02180218@gmail.com"
                className="text-2xl font-bold font-sans decoration-uniqlo underline-offset-4 group-hover:underline"
              >
                cwj02180218@gmail.com
              </a>
            </div>
            <div className="p-16 hover:bg-black hover:text-white transition-colors duration-500 group cursor-pointer flex flex-col items-center">
              <Phone className="mb-6 text-uniqlo" size={40} />
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-400 mb-3">Phone</div>
              <a
                href="tel:+821079385612"
                className="text-2xl font-bold font-sans decoration-uniqlo underline-offset-4 group-hover:underline"
              >
                +82 10-7938-5612
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-12 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left flex items-center gap-6">
            <CustomLogo size="w-12 h-12" fontSize="text-[10px]" />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest">Woojin Choi</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">UNIQLO Global Management Program 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">© 2026 Portfolio</span>
            <a
              href="#hero"
              className="text-[10px] font-bold uppercase tracking-widest hover:text-uniqlo transition-colors border border-black px-6 py-3 hover:bg-black hover:text-white hover:border-black"
            >
              Back to Top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
