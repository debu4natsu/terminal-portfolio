import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export default function BackgroundVideo() {
  return (
	//
    <div className="absolute top-0 w-full h-screen -z-10">
      <div className="overlay"></div>
	  <LazyLoadComponent>
        <video autoPlay muted loop className="h-full w-full object-cover object-center">
          <source src="/videoBg.mp4" type="video/mp4" />
          {/* Add additional <source> elements for other video formats if needed */}
          Your browser does not support the video tag.
        </video>
      </LazyLoadComponent>
	  
    </div>
	
  );
}
