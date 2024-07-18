import React, { useState } from "react";
import LoadingIndicator from "../loadingIndicator";

const EmailSetting: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <div className="relative">
      {isIframeLoading && (
        <div className="mt-10">
          <LoadingIndicator />
        </div>
      )}
      <iframe
        src="https://scribehow.com/embed/Set_Up_Email_Settings__sEy93dCFQbC59HGx0oFw_A?skipIntro=true&removeLogo=true"
        width="100%"
        height="640"
        allowFullScreen
        onLoad={() => setIsIframeLoading(false)}
      ></iframe>
    </div>
  );
};

export default EmailSetting;
