import Link from "next/link";

import {RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine} from 'react-icons/ri'

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.youtube.com/channel/UCN_8EpWS7bYSfKmb4-oBUfQ'} className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine />
    </Link>
    <Link href={'https://www.facebook.com/profile.php?id=100009366848919'} className="hover:text-accent transition-all duration-300">
      <RiFacebookLine />
    </Link>
    <Link href={'https://www.instagram.com/chob_0312/'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiDribbbleLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiBehanceLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiPinterestLine />
    </Link>
  </div>;
};

export default Socials;
