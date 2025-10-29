import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const orbitItems = ["Event Production", "Music Production", "DJing", "Running"];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % orbitItems.length);
    }, 1800); // medium pace: 1.8s per word
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] w-full md:w-2/3 px-4 py-6 md:py-10 bg-vivid-red text-center md:text-left animate-fade-in-p7">
      <img
        src="./images/5.jpeg"
        alt="Me :)"
        className="mb-4 md:mb-0 md:mr-10 w-full max-w-[300px] md:max-w-[450px] xl:max-w-[550px] rounded-lg shadow-lg"
      />

      <div className="flex flex-col justify-center items-center md:items-start w-full md:w-2/3">
        <h1 className="font-Helvetica font-bold text-3xl md:text-6xl text-dark-grayish-blue mb-3 animate-fade-in-1s">
          TRISTAN SIZIK –
        </h1>
        <p className="font-Helvetica font-bold text-sm md:text-xl text-dark-grayish-blue mb-5">
          A passionate, eclectic creative sharing his adventures in this cozy digital nook
        </p>

        <div className="font-Helvetica font-bold text-sm md:text-base text-dark-grayish-blue">
          <p>Currently In My Orbit:</p>
          <div className="h-6 md:h-8 relative overflow-hidden mt-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={orbitItems[currentIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }} // floaty cubic-bezier
                className="absolute w-full"
              >
                {orbitItems[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}