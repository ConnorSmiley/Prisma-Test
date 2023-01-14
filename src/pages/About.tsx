import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";


const AboutContainer = styled.div`
    ${tw`
       w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
    overflow-hidden 
    `}
`

const AboutStyle = styled.div`
    ${tw`
    mt-20
    
    `}
`

const LinkS = styled.div`
    ${tw`
    
    `}
`

export default function About () {
    return (
    <>
        <AboutContainer>
            <AboutStyle>
                <Navbar />
                <div>
                    Work in progress
                </div>

            </AboutStyle>
        </AboutContainer>
    </>
    )
}
