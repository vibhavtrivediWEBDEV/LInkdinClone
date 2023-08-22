import React, { useState } from 'react';
import './StickyNav.scss'; // Import your CSS file
import MoreVertIcon from '@mui/icons-material/MoreVert';

const StickyNav = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleItemClick = (index) => {
    // Set the active index when an item is clicked
    setActiveIndex(index);
  };

  return (
    <div className="sticky-nav">
      <ul>
        {[0, 1, 2, 3, 4].map((index) => (
          <li
            key={index}
            className={index === activeIndex ? 'active' : '' }
            onClick={() => handleItemClick(index)} // Handle the click event
          >
            <a href="#">
              <span>
                <MoreVertIcon />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StickyNav;
