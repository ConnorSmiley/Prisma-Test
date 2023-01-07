import React from "react";
import styled from "styled-components";
import tw from "twin.macro"
import { useEffect } from "react";

const LinkedInContainer = styled.div`
    ${tw`
    h-10
    w-10
    
    `}
`

const LinkedInStyle = styled.div`
    ${tw`
    
    `}
`

export interface ILinkedInProps {

}

const LinkedIn: React.FC<ILinkedInProps> = (url, selector = 'body', async = true) => {

    // useEffect(() => {
    //     const element = document.querySelector(selector)
    //     const script = document.createElement('script')
    //     script.src = url
    //     script.async = async
    //     element.appendChild(script)
    //     return () => {
    //         element.removeChild(script)
    //     }
    // }, [url])

    return(
       <>
        <LinkedInContainer>
            <LinkedInStyle>

            </LinkedInStyle>
        </LinkedInContainer>
       </>
    )
}

export default LinkedIn
