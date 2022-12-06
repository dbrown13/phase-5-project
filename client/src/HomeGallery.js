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


// {/* <div id="indicators-carousel" className="relative" data-carousel="static">
      
// <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    
//     <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
//         <img src="/jeep1.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//     </div>

//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//         <img src="/jeep5.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//     </div>
    
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//         <img src="/jeep2.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//     </div>
   
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//         <img src="/jeep3.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//     </div>
  
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//         <img src="/jeep4.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//     </div>

//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//         <img src="/jeep7.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//     </div>

//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//         <img src="/jeep8.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//     </div>

//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//         <img src="/jeep6.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//     </div>
// </div>

// <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//     <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//     <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//     <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//     <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//     <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//     <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
//     <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>
//     <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 8" data-carousel-slide-to="7"></button>
// </div>

// <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//     <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//         <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 stroke-current fill-none stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 19l-7-7 7-7"></path></svg>
//         <span className="sr-only">Previous</span>
//     </span>
// </button>
// <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//     <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//         <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 stroke-current fill-none stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M9 5l7 7-7 7"></path></svg>
//         <span className="sr-only">Next</span>
//     </span>
// </button>
// </div>
// )
// }
// export default HomeGallery; */}