import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/project_1.png",
          href: "https://chobby-room.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/project_2.png",
          href: "https://3-d-fortfolio-introduce.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/project_3.png",
          href: "https://3-d-car-show.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/project_4.png",
          href: "https://github.com/kwb020312/ArcGIS_KeyongCheonSazi",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/project_5.png",
          href: "https://introduce-iphone.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/project_6.png",
          href: "https://3-d-product-web-site.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/project_7.png",
          href: "https://mario-game-wheat.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/project_8.png",
          href: "https://pokemon-game-blond.vercel.app/",
        },
      ],
    },
  ],
};

// icons
import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[500px]"
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-row flex-wrap justify-center items-center">
            {slide.images.map((image, index) => (
              <Link key={index} href={image.href}>
                <div className="relative rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer">
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    {/* image */}
                    <Image src={image.path} width={500} height={300} alt="" />
                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    {/* title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        {/* title part */}
                        <div className="delay-100">LIVE</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          PROJECT
                        </div>
                        {/* icon */}
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
