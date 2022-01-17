import React from "react";

const MainContents = ({ children }) => {
  return (
    <div className="col-span-12 md:col-span-9 lg:col-span-10 glass-effect h-full overflow-hidden">
      <div className="h-full overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-secondary overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

export default MainContents;
