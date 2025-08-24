import { Github, MoveUpRight } from "lucide-react";
import React from "react";

const GithubButton = () => {
  return (
    <div className="fixed bottom-2 left-4 max-sm:hidden ">
      <a
        href="https://github.com/hemanth5055/Read-Less"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-4 rounded-full"
      >
        <MoveUpRight size={18} />
      </a>
    </div>
  );
};

export default GithubButton;
