import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";
import HamburgerMenu from "@/components/HamburgerMenu";


const NavbarBG = styled.div`
  ${tw`
    w-screen
    h-16
    bg-black
    absolute
    top-0
    
    sm:h-20
    `}
`;

const NavbarStyle = styled.div`
  ${tw`
    w-screen
    h-full
    pl-[45%]
    pr-[1%]
    `}
`;

const NavbarText = styled.div`
  ${tw`
  flex
  w-auto
  h-full
  justify-evenly
  text-white
  font-bold
  uppercase
  text-xl
  items-center
  
 hidden lg:flex
    `}
`;

const HoverStyle = styled.div`
  ${tw`
  hover:text-blue-500
    `}
`;


export interface IProps {

}

const Navbar: React.FC<IProps> = () => {

  return (
    <>
      <NavbarBG>
        <NavbarStyle>
          <HamburgerMenu />
          <NavbarText>
            <HoverStyle>
              <Link href="/">
                Home
              </Link>
            </HoverStyle>
            <HoverStyle>
              <Link href="/Design">
                Design
              </Link>
            </HoverStyle>
            <HoverStyle>
              <Link href="/Coding">
                Coding
              </Link>
            </HoverStyle>
            <HoverStyle>
              <Link href="/Cloud/Cloud">
                CLOUD
              </Link>
            </HoverStyle>
            <HoverStyle>
              <Link href="/Photos">
                Photos
              </Link>
            </HoverStyle>
            <HoverStyle>
              <Link href="/About">
                about
              </Link>
            </HoverStyle>
          </NavbarText>
        </NavbarStyle>
      </NavbarBG>
    </>
  );
};

export default Navbar;

