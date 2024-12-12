import React from "react";

const StoreRackIcon = ({ size = 24, color = "#191A1B" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M12.369 13.5h3.893l-.32-2.154c-.128-.886-.8-1.174-1.867-1.216l-1.215-.043v-.342l1.109-.106c1.184-.118 1.91-.704 1.91-1.91V7.42c0-1.13-.79-1.92-1.92-1.92H7.75v8h3.776v-2.678h.438zm-.267-4.373h-.576V7.474h.576z"
        clipRule="evenodd"
      ></path>
      <path
        fill={color}
        fillRule="evenodd"
        d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 0h16v16h-3v-4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v4H4zm5 16h2v-3H9zm4 0h2v-3h-2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default StoreRackIcon;
