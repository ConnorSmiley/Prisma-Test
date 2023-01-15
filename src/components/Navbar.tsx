import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";
import HamburgerMenu from "@/components/HamburgerMenu";
import { useRouter } from "next/router";


const NavbarBG = styled.div`
  ${tw`
    w-screen
    h-16
    absolute
    top-0
    z-50
    
    sm:h-20
    `}
`;

const NavbarStyle = styled.div`
  ${tw`
    w-screen
    h-full
    pl-[20%]
    pr-[20%]
    z-50
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
  z-50
  
 hidden lg:flex
    `}
`;


const NavbarTextBottomBorder = styled.div`
  ${tw`
  absolute
  w-28
  border-pink-700
  border-b-8
  flex
  justify-center
  pb-14
  rounded-lg
  z-50
  
 hidden lg:flex
    `}
`;


const HoverStyle = styled.div`
  ${tw`
  flex
  flex-col
  items-center
  justify-center
  
  hover:text-pink-500
 
    `}
`;

export interface IProps {
}

const Navbar: React.FC<IProps> = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <NavbarBG>
        <NavbarStyle>
          <HamburgerMenu />
          <NavbarText>

            {currentRoute === "/" ?
              <>
                <HoverStyle>
                  <Link href="/">
                    Home
                  </Link>
                  <NavbarTextBottomBorder />
                </HoverStyle>
              </>
              :
              <HoverStyle>
                <Link href="/">
                  Home
                </Link>
              </HoverStyle>
            }

            {currentRoute === "/Design" ?
              <>
                <HoverStyle>
                  <Link href="/Design">
                   Design
                  </Link>
                  <NavbarTextBottomBorder />
                </HoverStyle>
              </>
              :
              <HoverStyle>
                <Link href="/Design">
                 Design
                </Link>
              </HoverStyle>
            }

            {currentRoute === "/Coding" ?
              <>
                <HoverStyle>
                  <Link href="/Coding">
                   Coding
                  </Link>
                  <NavbarTextBottomBorder />
                </HoverStyle>
              </>
              :
              <HoverStyle>
                <Link href="/Coding">
                  Coding
                </Link>
              </HoverStyle>
            }

            {currentRoute === "/Cloud" ?
              <>
                <HoverStyle>
                  <Link href="/Cloud">
                    Cloud
                  </Link>
                  <NavbarTextBottomBorder />
                </HoverStyle>
              </>
              :
              <HoverStyle>
                <Link href="/Cloud">
                 Cloud
                </Link>
              </HoverStyle>
            }

            {currentRoute === "/Photos" ?
              <>
                <HoverStyle>
                  <Link href="/Photos">
                   Photos
                  </Link>
                  <NavbarTextBottomBorder />
                </HoverStyle>
              </>
              :
              <HoverStyle>
                <Link href="/Photos">
                 Photos
                </Link>
              </HoverStyle>
            }

            {currentRoute === "/Contact" ?
              <>
                <HoverStyle>
                  <Link href="/Contact">
                   Contact
                  </Link>
                  <NavbarTextBottomBorder />
                </HoverStyle>
              </>
              :
              <HoverStyle>
                <Link href="/Contact">
                Contact
                </Link>
              </HoverStyle>
            }

          </NavbarText>
        </NavbarStyle>
      </NavbarBG>
    </>
  );
};

export default Navbar;

