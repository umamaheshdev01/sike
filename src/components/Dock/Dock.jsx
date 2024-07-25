import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./dock.css";
import {
  FaHome,
  FaPalette,
  FaFolderOpen,
  FaCamera,
  FaTwitter,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { FaFile } from "react-icons/fa6";

const DockItem = ({
  IconComponent,
  path,
  isHovered,
  isNeighbor,
  onMouseEnter,
  external,
}) => {
  const scale = isHovered ? 2.5 : isNeighbor ? 2 : 1;
  const margin = isHovered || isNeighbor ? "28px" : "4px";
  const linkStyle = { transform: `scale(${scale})`, margin: `0 ${margin}` };

  return (
    <div className="dock-item" style={linkStyle} onMouseEnter={onMouseEnter}>
      {external ? (
        <a href={path} target="_blank" rel="noopener noreferrer">
          <div className="dock-item-link-wrap">
            <IconComponent size="14px" style={{ color: "hsl(0, 0%, 50%)" }} />
          </div>
        </a>
      ) : (
        <Link to={path}>
          <div className="dock-item-link-wrap">
            <IconComponent size="14px" style={{ color: "hsl(0, 0%, 50%)" }} />
          </div>
        </Link>
      )}
    </div>
  );
};

// Dock component
const Dock = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [hoverEffectsEnabled, setHoverEffectsEnabled] = useState(
    window.innerWidth >= 900
  );

  useEffect(() => {
    const checkScreenSize = () => {
      const isEnabled = window.innerWidth >= 900;
      console.log(
        "Window width:",
        window.innerWidth,
        "Hover effects enabled:",
        isEnabled
      );
      setHoverEffectsEnabled(isEnabled);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleMouseEnter = (index) => {
    if (hoverEffectsEnabled) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (hoverEffectsEnabled) {
      setTimeout(() => {
        console.log(hoverEffectsEnabled);
        setHoveredIndex(-100);
      }, 50);
    }
  };

  useEffect(() => {
    console.log("Component mounted, hoveredIndex:", hoveredIndex);
    setTimeout(() => {
      setHoveredIndex(-100);
    }, 50);
  }, []);

  const icons = [
    { icon: FaHome, path: "/" },
    { icon: FaFolderOpen, path: "/projects" },
    { icon: FaPalette, path: "/work" },

    { icon: FaCamera, path: "/photos" },
    {
      icon: FaFile,
      path: "./Resume.pdf",
      external: true,
    },
    { icon: FaGithub, path: "https://github.com/umamaheshdev01", external: true },
    {
      icon: FaEnvelope,
      path: "mailto:umamaheshdev01@gmail.com",
      external: true,
    },
  ];

  return (
    <div className="dock-container" onMouseLeave={handleMouseLeave}>
      <div className="dock">
        {icons.map((item, index) => (
          <DockItem
            key={index}
            IconComponent={item.icon}
            path={item.path}
            isHovered={index === hoveredIndex}
            isNeighbor={Math.abs(index - hoveredIndex) === 1}
            onMouseEnter={() => handleMouseEnter(index)}
            external={item.external}
          />
        ))}
      </div>
    </div>
  );
};

export default Dock;
