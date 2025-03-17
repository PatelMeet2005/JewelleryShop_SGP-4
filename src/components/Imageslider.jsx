import { useEffect, useState } from "react";

export function ImageSlider() {
  const images = ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex-1 overflow-hidden relative rounded-lg shadow-md">
      <img src={images[index]} alt="Jewellery" className="w-full h-130 object-cover rounded-lg" />
    </div>
  );
}
