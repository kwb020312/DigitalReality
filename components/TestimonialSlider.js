import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "1yoouoo",
    position: "velog 알고리즘 풀이",
    message: "개발자로서 성장하는 데 큰 도움이 된 글이었습니다. 감사합니다.",
  },
  {
    image: "/kimsojeong01.png",
    name: "kimsojeong01",
    position: "velog 알고리즘 풀이",
    message:
      "와.. 정말 멋지세요 이거보고 수학공부를 해야겠다는.. 다짐을 하게된것같아요...",
  },
  {
    image: "/xoxojw.jpg",
    name: "xoxojw",
    position: "velog 알고리즘 풀이",
    message:
      "안녕하세요 JS로 프로그래머스 문제 풀면서 모르는 거 나올 때마다 쵸비님 벨로그 많이봐서 혼자만의 내적 친밀감이 생긴 1인입니다",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image src={person.image} width={100} height={100} alt="" />
                </div>
                {/* name */}
                <div className="text-lg">{person.name}</div>
                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>
            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>
              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
