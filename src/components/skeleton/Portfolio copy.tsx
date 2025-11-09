import { motion } from "framer-motion";
import NavBarTitle from '@/components/NavBarTitle'


export default function Portfolio() {
  const sections = [
    {
      id: "intro",
      title: "Welcome to My Voyage",
      color: "bg-vivid-red",
      content: (
        <p className="max-w-2xl text-center text-lg">
          Every craft I pursue adds a new color to my world. Scroll to explore the creative realms that define me.
        </p>
      ),
    },
    {
      id: "music",
      title: "Music Producer & DJ",
      color: "bg-black",
      content: (
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-300 text-center max-w-xl">
            I chase rhythms that make people feel free. Every set is an experiment in connection and atmosphere.
          </p>
          <div className="w-3/4 h-64 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-500">
            [ Visual / Music Embed Placeholder ]
          </div>
        </div>
      ),
    },
    {
      id: "photo",
      title: "Photography",
      color: "bg-gray-900",
      content: (
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-300 text-center max-w-xl">
            Capturing candid, unposed moments — real emotion and rhythm frozen in light.
          </p>
          <div className="grid grid-cols-3 gap-3 w-3/4">
            <div className="bg-gray-700 h-48 rounded-xl"></div>
            <div className="bg-gray-700 h-48 rounded-xl"></div>
            <div className="bg-gray-700 h-48 rounded-xl"></div>
          </div>
        </div>
      ),
    },
    {
      id: "design",
      title: "Graphic Design",
      color: "bg-coral",
      content: (
        <div className="flex flex-col items-center gap-4">
          <p className="text-dark-grayish-blue text-center max-w-xl">
            Crafting visuals that blend DIY energy with modern polish — posters, flyers, and identities that pulse with music.
          </p>
          <div className="grid grid-cols-2 gap-3 w-3/4">
            <div className="bg-white h-48 rounded-xl shadow-inner"></div>
            <div className="bg-white h-48 rounded-xl shadow-inner"></div>
          </div>
        </div>
      ),
    },
    {
      id: "code",
      title: "Coding Projects",
      color: "bg-dark-gray",
      content: (
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-300 text-center max-w-xl">
            Building reliable, maintainable systems with C++, Python, and scalable architectures.
          </p>
          <div className="w-3/4 h-64 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-500">
            [ Code Screenshot or Snippet Placeholder ]
          </div>
        </div>
      ),
    },
    {
      id: "runner",
      title: "Runner",
      color: "bg-vivid-red",
      content: (
        <p className="max-w-2xl text-center text-lg">
          Running clears my head — every stride, a rhythm like a beat. Movement fuels creativity.
        </p>
      ),
    },
    {
      id: "outro",
      title: "The Voyage Continues",
      color: "bg-black",
      content: (
        <p className="text-gray-400 text-center max-w-2xl">
          Each craft sharpens the next. Every sound, photo, and design tells part of my story — and the journey never stops.
        </p>
      ),
    },
  ];


  return (
    <div className="overflow-x-hidden font-Helvetica">
      <NavBarTitle/>
      {sections.map((section, i) => (
        <motion.section
          key={section.id}
          className={`min-h-screen flex flex-col justify-center items-center text-white ${section.color} px-8`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
        >
          <h2 className="text-5xl font-bold mb-8 text-center">{section.title}</h2>
          {section.content}
        </motion.section>
      ))}
    </div>
  );
}
