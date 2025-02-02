"use client";
import { useState, MouseEvent } from "react";
import Image, { StaticImageData } from "next/image";

import './Carousel.scss'

export const ProjectCarousel = ({ images }: { images: StaticImageData[] }) => {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | string>(images[0]);

    const clearActive = () => {
        const imagesOptions = document.querySelectorAll('.image_options img')
        imagesOptions.forEach(img => {
            img.classList.remove('active')
        })
    }


  const selectImage = (e: MouseEvent<HTMLImageElement>) => {
    setSelectedImage(e.currentTarget.src);
    clearActive()
    e.currentTarget.classList.add('active')
  };

  return (
    <div className="carousel_div">
      <Image src={selectedImage} alt="Selected Image" width={500} height={500}/>

      <div className="image_options">
        {images.map((image, index) => (
          <Image
            src={image}
            alt={`Image 0${index}`}
            key={index}
            onClick={selectImage}
            width={100} height={100}
          />
        ))}
      </div>
    </div>
  );
};
