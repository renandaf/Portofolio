"use client"

import { TOOLS } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import ToolsDetails from '@/components/data-display/tools-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ToolsSection = () => {

    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(0);
    const perPage = 3;

  const start = page * perPage;
  const currentData = TOOLS.slice(start, start + perPage);
  const totalPages = Math.ceil(TOOLS.length / perPage);

  // Variants untuk animasi
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    if (page < totalPages - 1) {
      setDirection(1);
      setPage((p) => p + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setDirection(-1);
      setPage((p) => p - 1);
    }
  };
  return (
    <Container id="tools" className="bg-gray-1000">
      <div className="flex flex-col items-center gap-1">
        <div className="self-center">
          <Tag label="Tools/Shaders" classFont='text-black' />
        </div>
        <Typography variant="subtitle" className="max-w-5xl text-center text-gray-200">
         Some of the tools and shaders I make are to learn by following a tutorial and reading references. There is also some tools and shaders that I make for my game project: 
        </Typography>
      </div>

      <div className="flex flex-col items-center gap-6 w-full overflow-hidden">
      {/* Card Container dengan animasi */}
      <div className="relative w-full px-5 py-4">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page} // reset animasi setiap ganti page
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex gap-12 max-md:flex-col md:max-lg:flex-wrap justify-center"
          >
            {currentData.map((tools, index) => (
              <ToolsDetails key={index} {...tools} id={index}  />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      <div className="flex gap-6 mt-4">
        <button
          className="px-4 py-2 bg-black rounded disabled:bg-gray-300 transition-colors duration-200 hover:bg-gray-100 active:bg-gray-100"
          onClick={handlePrev}
          disabled={page === 0}
        >
          Prev
        </button>
        <span>
          Page {page + 1} / {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-black rounded disabled:bg-gray-300 transition-colors duration-200 hover:bg-gray-100 active:bg-gray-100"
          onClick={handleNext}
          disabled={page === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
    </Container>
  );
};

export default ToolsSection;
