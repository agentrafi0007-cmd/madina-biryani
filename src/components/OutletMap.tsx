import React from "react";

type Outlet = {
  id: number;
  name: string;
  address: string;
  phone: string;
  timings: string;
  mapLink: string;
};

type OutletMapProps = {
  outlets: Outlet[];
};

const OutletMap = ({ outlets }: OutletMapProps) => {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg border-4 border-orange-500">
      {/* 1. THE MAP (Paste your specific src link below) */}
      <iframe
        src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>

      {/* 2. THE PRIVACY COVER (Hides the Google Header) */}
      <div className="absolute top-0 left-0 w-full h-[55px] bg-gray-900 z-10 flex items-center px-4 justify-between">
        <div className="flex items-center gap-3">
          {/* Map Icon */}
          <span className="text-orange-500 text-2xl">📍</span>
          {/* Title */}
          <span className="text-white font-bold text-lg">Our Locations</span>
        </div>

        {/* Optional: Add a subtle text like "Hyderabad" */}
        <span className="text-gray-400 text-sm hidden sm:block">
          Hyderabad & Secunderabad
        </span>
      </div>
    </div>
  );
};

export default OutletMap;
