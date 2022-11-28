import React from 'react';

function HomeGallery() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
      <img
        className="object-cover w-full border-white border-2 rounded-lg"
        alt="jeep1"
        src="/jeep1.jpeg"
      />
      <img
        className="object-cover w-full  border-white border-2 rounded-lg"
        alt="jeep5"
        src="/jeep5.jpeg"
      />
      <img
        className="object-cover w-full  border-white border-2 rounded-lg"
        alt="jeep2"
        src="/jeep2.jpeg"
      />
      <img
        className="object-cover w-full  border-white border-2 rounded-lg"
        alt="jeep3"
        src="/jeep3.jpeg"
      />
      <img
        className="object-cover w-full  border-white border-2 rounded-lg"
        alt="jeep4"
        src="/jeep4.jpeg"
      />
      <img
        className="object-cover w-full  border-white border-2 rounded-lg"
        alt="jeep7"
        src="/jeep7.jpeg"
      />
      <img
        className="object-cover w-full  border-white border-2 rounded-lg"
        alt="jeep8"
        src="/jeep8.jpeg"
      />
      <img
        className="object-cover w-full  border-white border-2 rounded-lg"
        alt="jeep6"
        src="/jeep6.jpeg"
      />
    </div>
  );
}

export default HomeGallery;
