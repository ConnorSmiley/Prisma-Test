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
    right-4
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
    right-8
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
    right-4
    top-4
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
   text-4xl
   pb-[40%]
   pt-[20%]
   z-10
   
   sm:text-4xl
   sm:pb-[20%]
   sm:pt-[10%]
   sm:font-extrabold
   
   md:text-5xl
   md:pb-[20%]
   md:pt-[10%]
   md:font-extrabold
   
   lg:text-2xl

    `}
`;

const Hover = styled.div`
  ${tw`
  hover:cursor-pointer
  hover:text-pink-500
    
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
                <Hover>
                  Home
                </Hover>
              </Link>
              <Link href="/Design/">
                <Hover>
                  Design
                </Hover>
              </Link>
              <Link href="/Coding">
                <Hover>
                  Coding
                </Hover>
              </Link>
              <Link href="/Cloud">
                <Hover>
                  Cloud
                </Hover>
              </Link>
              <Link href="/Photos">
                <Hover>
                  Photos
                </Hover>
              </Link>
              <Link href="/About">
                <Hover>
                  About
                </Hover>
              </Link>
            </HamburgerList>)
          }
        </HamburgerMenuStyle>
      </HamburgerMenuContainer>
    </>
  );
};

export default HamburgerMenu;
