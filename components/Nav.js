import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

export const links = [
  { name: "홈", path: "/", icon: <HiHome /> },
  { name: "프로필", path: "/about", icon: <HiUser /> },
  { name: "경력", path: "/services", icon: <HiRectangleGroup /> },
  { name: "작업", path: "/work", icon: <HiViewColumns /> },
  {
    name: "호칭",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "연락처",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

import Link from "next/link";

import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {links.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname &&
                "text-accent transition-all duration-300"
              } relative flex items-center group hover:text-accent`}
              key={index}
              href={link.path}
            >
              {/* 툴팁 */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* 도형 */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/* 아이콘 */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
