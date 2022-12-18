import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const FooterContainer = styled.div`
    ${tw`
    h-20
    w-full
    bottom-0
    text-base
    bg-black
    flex
    items-center
    justify-center
    font-light
    opacity-80
    
    `}
`

const FooterStyle = styled.div`
    ${tw`
    
    `}
`

export interface IFooterProps {

}

const Footer: React.FC<IFooterProps> = () => {

    return(
       <>
        <FooterContainer>
            <FooterStyle>
              footer
            </FooterStyle>
        </FooterContainer>
       </>
    )
}

export default Footer