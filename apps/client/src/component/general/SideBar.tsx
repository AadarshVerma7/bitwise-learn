"use client";

import { useEffect, useRef, useState } from "react";

const MIN_WIDTH = 220;
const MAX_WIDTH = 420;

function SideBar() {
  const [width, setWidth] = useState(280);
  const isResizing = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;

      const newWidth = e.clientX;
      if (newWidth >= MIN_WIDTH && newWidth <= MAX_WIDTH) {
        setWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      isResizing.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <aside
      style={{ width }}
      className="relative h-screen border-r border-white/10 bg-primary-bg text-white shrink-0"
    >
      {/* Content */}
      <div className="p-4">content</div>

      {/* Resize Handle */}
      <div
        onMouseDown={() => (isResizing.current = true)}
        className="
          absolute top-0 right-0 h-full w-1
          cursor-col-resize
          bg-transparent
          hover:bg-white/20
        "
      />
    </aside>
  );
}

export default SideBar;