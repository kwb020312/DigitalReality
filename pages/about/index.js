import { useState } from "react";

import {FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma} from 'react-icons/fa'

import {SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop} from 'react-icons/si'

export const aboutData = [
  {
    title: '스킬',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: '자격증',
    info: [
      {
        title: '정보처리기능사',
        stage: '',
      },
      {
        title: '정보처리산업기사',
        stage: '',
      },
      {
        title: 'SW L3'
      },
      {
        title: 'SW L5'
      },
      {
        title: '컴퓨터 활용능력'
      },

    ],
  },
  {
    title: '주요 프로젝트',
    info: [
      {
        title: 'ChobbyRoom',
        link: "https://chobby-room.vercel.app/"
      },
      {
        title: '3D_Fortfolio_Introduce',
        link: 'https://3-d-fortfolio-introduce.vercel.app/'
      },
      {
        title: '3D_Car_Show',
        link: 'https://3-d-car-show.vercel.app/',
      },
      {
        title: 'ArcGIS_KeyongCheonSazi',
        link: 'https://github.com/kwb020312/ArcGIS_KeyongCheonSazi'
      },
      {
        title: 'Introduce_Iphone',
        link: 'https://introduce-iphone.vercel.app/'
      },
      {
        title: '3D_Product_WebSite',
        link: 'https://3-d-product-web-site.vercel.app/'
      },
    ],
  },
];

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

import CountUp from 'react-countup'

const About = () => {
  const [index, setIndex] = useState(0)
  return <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles />
    {/* Avatar 이미지 */}
    <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[370px]">
      <Avatar />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      {/* text */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2">개성있는 <span className="text-accent">디자인을</span> 창작합니다.</motion.h2>
        <motion.p variants={fadeIn('right', 0.4)} initial="hidden" animate="show" exit="hidden" className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">새로운 기술, 경험해보지 못한 프레임워크 및 디자인을 끊임없이 배워나갑니다.</motion.p>
        {/* counters */}
        <motion.div variants={fadeIn('right', 0.6)} initial="hidden" animate="show" exit="hidden" className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
          <div className="flex flex-1 xl:gap-x-6">
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={4} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">개발 경험(year)</div>
            </div>
            {/* clients */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={115} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">생성된 저장소</div>
            </div>
            {/* projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={650} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                풀이된 알고리즘
              </div>
            </div>
            {/* awards */}
            <div className="relative flex-1">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={15} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                완료한 프로젝트
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* info */}
      <motion.div variants={fadeIn('left', 0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
            return <div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)}>
              {item.title}
              </div>
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                {/* title */}
                <div className="font-light mb-2 cursor-pointer hover:text-accent" onClick={() => {
                  if(item.link) {
                    window.location = item.link
                  }
                }}>{item.title}</div>
                {/* <div className="hidden md:flex">-</div> */}
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* 아이콘 */}
                  {item.icons?.map((icon) => (
                    <div className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;
