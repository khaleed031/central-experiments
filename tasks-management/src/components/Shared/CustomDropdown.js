import React from "react";

export const CustomToggle = React.forwardRef(({ children, onClick, className, id }, ref) => (
    <a
      href=""
      id={id}
      className={className}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  )
);
