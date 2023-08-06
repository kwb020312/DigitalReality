import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

const serviceData = [
  {
    icon: <RxCrop />,
    title: "서칭",
    description:
      "원하는 검색 결과를 조회하고, 빠른 시간 내에 결과물을 산출하는 능력",
  },
  {
    icon: <RxPencil2 />,
    title: "디자인",
    description:
      "애니메이션, UI 구성 및 다양한 효과를 동적으로 활용할 수 있는 능력",
  },
  {
    icon: <RxDesktop />,
    title: "개발",
    description: "알고리즘의 효율성을 생각하여 최적의 방안을 통한 개발 능력",
  },
  {
    icon: <RxReader />,
    title: "문서화",
    description:
      "나의 기술을 정리하고, 문제를 해결한 후기를 기록해 복습하는 능력",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "프로젝트를 완료한 후, 배포하고 SEO를 최적화하는 능력",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">{item.icon}</div>
            {/* title & desc */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
