import React, { useState } from "react";
import LoadingIndicator from "../loadingIndicator";

const ViewSingleStaff: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <div className="relative">
      {isIframeLoading && (
        <div className="mt-10">
          <LoadingIndicator />
        </div>
      )}
      <iframe
       src="https://scribehow.com/embed/View_single_staff__MaJdqAllR-mmsyHr5JPP7w?skipIntro=true&removeLogo=true"
        width="100%"
        height="640"
        allowFullScreen
        onLoad={() => setIsIframeLoading(false)}
      ></iframe>
    </div>
  );
};

export default ViewSingleStaff;

