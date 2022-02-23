import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="313" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="280" rx="6" ry="6" width="279" height="18" />
      <rect x="0" y="418" rx="6" ry="6" width="101" height="30" />
      <rect x="211" y="433" rx="0" ry="0" width="0" height="3" />
      <rect x="130" y="413" rx="20" ry="20" width="150" height="40" />
      <circle cx="140" cy="135" r="125" />
    </ContentLoader>
  );
};

export default LoadingBlock;
