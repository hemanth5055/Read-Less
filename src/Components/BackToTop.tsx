"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-6 p-3 rounded-full bg-black text-white shadow-lg bg-gradient-to-br from-[#8068de] to-[#4b99d9] transition-all duration-300 cursor-pointer"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
