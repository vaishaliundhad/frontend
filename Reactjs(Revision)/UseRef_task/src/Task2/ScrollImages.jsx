// import React, { useRef, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Image1 from '../Task2/assets/image1.jpg';
// import Image2 from '../Task2/assets/image2.jpg';
// import Image3 from '../Task2/assets/image3.jpg';

// const ScrollImages = () => {
//     const sliderRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);

//     const images = [
//         { src: Image1, alt: 'Cake1' },
//         { src: Image2, alt: 'Cake2' },
//         { src: Image3, alt: 'Cake3' },
//     ];

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         beforeChange: (current, next) => setActiveIndex(next),
//     };

//     const scrollToIndex = (index) => {
//         if (sliderRef.current) {
//             sliderRef.current.slickGoTo(index);
//         }
//     };

//     return (
//         <div className="max-w-4xl mx-auto mt-10 ">
//             <Slider ref={sliderRef} {...settings}>
//                 {images.map((image, index) => (
//                     <div key={index} className="px-2">
//                         <img src={image.src} alt={image.alt}  className="w-full h-48 object-cover rounded-md"/>
//                     </div>
//                 ))}
//             </Slider>

//             <nav className="flex gap-4 mb-4 ml-[320px] mt-10">
//                 {images.map((image, index) => (
//                     <button key={index} onClick={() => scrollToIndex(index)} className={`${activeIndex === index ? 'bg-gray-700' : `bg-blue-500`} text-white text-center px-4 py-2 rounded`}> {image.alt}</button>
//                 ))}
//             </nav>


//         </div>
//     );
// };

// export default ScrollImages;

// // import React from 'react'
// // import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';
// // import Image1 from '../Task2/assets/image1.jpg'
// // import Image2 from '../Task2/assets/image2.jpg'
// // import Image3 from '../Task2/assets/image3.jpg'
// // import { useState } from 'react';


// // const sliderRef = ref(null);
// // const [scrollindex , sl]=useState(0)

// // const ScrollImages = () => {
// //   return (
// //     <div>

// //     </div>
// //   )
// // }

// // export default ScrollImages

import { useRef } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../Task2/assets/image1.jpg';
import Image2 from '../Task2/assets/image2.jpg';
import Image3 from '../Task2/assets/image3.jpg';

export default function CatFriends() {
    const listRef = useRef(null);

    function scrollToIndex(index) {
        const listNode = listRef.current;

        const imgNode = listNode.querySelectorAll('li > img')[index];
        imgNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
        console.log(imgNode);

    }

    return (
        <>
            <div className='  border border-black'>
                <nav className='flex justify-evenly'>
                    <button onClick={() => scrollToIndex(0)} className='p-2 bg-yellow-500 rounded px-4'>
                        Cake1
                    </button>
                    <button onClick={() => scrollToIndex(1)} className='p-2 bg-yellow-500 rounded px-4'>
                        Cake2
                    </button>
                    <button onClick={() => scrollToIndex(2)} className='p-2 bg-yellow-500 rounded px-4'>
                        Cake3
                    </button>
                </nav>

                <ul ref={listRef}>

                    <li className=''>
                        <img
                            src={Image1}
                            alt="Neo"
                            className='h-96 w-96 mx-auto'
                        />
                    </li>
                    <li className=''>
                        <img
                            src={Image2}
                            alt="Millie"
                            className='h-96 w-96 mx-auto'
                        />
                    </li>
                    <li className=''>
                        <img
                            src={Image3}
                            alt="Bella"
                            className='h-96 w-96 mx-auto'
                        />
                    </li>
                </ul>
            </div>

        </>
    );
}
