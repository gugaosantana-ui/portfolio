import { useState } from "react";
import img1 from "../../assets/images/blog/image1.png";
import img2 from "../../assets/images/blog/image2.png";
import img3 from "../../assets/images/blog/image3.png";
import img4 from "../../assets/images/blog/image4.png";
import img5 from "../../assets/images/blog/image5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import ImageViewer from "../imageViewer/ImageViewer";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  { id: 1, image: img1, link: "#!" },
  { id: 2, image: img2, link: "#!" },
  { id: 3, image: img3, link: "#!" },
  { id: 4, image: img4, link: "#!" },
  { id: 5, image: img5, link: "#!" },
  { id: 6, image: img1, link: "#!" },
  { id: 7, image: img2, link: "#!" },
];

const Blog = () => {
  const [viewerIndex, setViewerIndex] = useState(null);
  const images = blogData.map((i) => i.image);

  const openModal = (index) => setViewerIndex(index);

  const closeModal = () => setViewerIndex(null);

  const prevImage = () =>
    setViewerIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () =>
    setViewerIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Portfolio</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Uma seleção dos meus projetos recentes, refletindo meu
          foco em usabilidade, estética e experiência significativa.
        </p>
      </div>

      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10"
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} onOpen={() => openModal(index)} />
          </SwiperSlide>
        ))}
      </Swiper>

      <ImageViewer
        images={images}
        index={viewerIndex}
        onClose={closeModal}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </div>
  );
};

export default Blog;
