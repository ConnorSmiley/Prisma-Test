import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaBars } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";
import Link from "next/link";


const HamburgerMenuContainer = styled.div`
  ${tw`
    h-full
    lg:hidden flex
    z-50
    `}
`;

const HamburgerMenuStyle = styled.div`
  ${tw`
    right-2
    top-2
    overflow-hidden
    `}
`;


const FaBarsIcon = styled(FaBars)`
  ${tw`
  absolute
  w-10
  h-10
    z-50
    text-white
    fill-current
    right-4
    top-4
    `}
`;

const CgCloseOIcon = styled(CgCloseO)`
  ${tw`
  absolute
    fill-current
    text-white
    h-10
    w-10
    z-50
    right-6
    top-6
    `}
`;


const HamburgerList = styled.div` 
  ${tw`
  bg-black
   h-screen
   w-2/3
   tracking-widest
   right-0
   absolute
   flex
   flex-col
   font-extrabold
   uppercase
   items-center
   justify-evenly
   text-white
   text-3xl
   pb-[40%]
   pt-[20%]
   z-10
   hover:text-red-500
   
   sm:text-3xl
   sm:pb-[20%]
   sm:pt-[10%]
   sm:font-extrabold
   sm:hover:text-blue-500
   
   md:text-4xl
   md:pb-[20%]
   md:pt-[10%]
   md:font-extrabold
   md:hover:text-green-500
   
   lg:text-2xl

    `}
`;


export interface IHamburgerMenuProps {
}

const HamburgerMenu: React.FC<IHamburgerMenuProps> = () => {
  const [open, setOpen] = useState(false);

  const openClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <HamburgerMenuContainer>
        <HamburgerMenuStyle
          onClick={openClose}
        >
          {open ? <CgCloseOIcon /> : <FaBarsIcon />}
          {open && (
            <HamburgerList>
              <Link href="/">
                Home
              </Link>
              <Link href="/Design/">
                Design
              </Link>
              <Link href="/Coding">
               Coding
              </Link>
              <Link href="/Cloud">
                cloud
              </Link>
              <Link href="/Photos">
                Photos
              </Link>
              <Link href="/About">
                about
              </Link>
            </HamburgerList>)
          }
        </HamburgerMenuStyle>
      </HamburgerMenuContainer>
    </>
  );
};

export default HamburgerMenu;
