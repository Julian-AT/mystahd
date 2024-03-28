"use client";

import React from "react";
import GradientWrapper from "../gradient-wrapper";
import YouTube from "react-youtube";

const PromoVideo = () => {
  return (
    <GradientWrapper
      className="mt-16 sm:mt-28"
      wrapperClassName="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]"
    >
      <YouTube
        videoId="4g8G2lFM2I8"
        opts={{
          width: "100%",
          height: "100%",
        }}
        className="h-[250px] sm:h-[300px] lg:h-[650px]"
      />
    </GradientWrapper>
  );
};

export default PromoVideo;
