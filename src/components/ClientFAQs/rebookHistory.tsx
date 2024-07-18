import React, { useState } from "react";
import LoadingIndicator from "../loadingIndicator";

const RebookHistory: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <div className="relative">
      {isIframeLoading && (
        <div className="mt-10">
          <LoadingIndicator />
        </div>
      )}
      <iframe
        src="https://scribehow.com/embed/Rebook_from_history__t_G713xCSmy1ow3WU3RBaA?skipIntro=true&removeLogo=true"
        width="100%"
        height="640"
        allowFullScreen
        onLoad={() => setIsIframeLoading(false)}
      ></iframe>
    </div>
  );
};

export default RebookHistory;

