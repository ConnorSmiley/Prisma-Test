import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const BlogContainer = styled.div`
    ${tw`
    w-screen
    h-full
    
    `}
`

const BlogStyle = styled.div`
    ${tw`
    h-full
    w-full
    
    `}
`

export interface IBlogProps {

}

const Blog: React.FC<IBlogProps> = () => {

    return(
       <>
        <BlogContainer>
            <BlogStyle>
djfdkflafjdlk
            </BlogStyle>
        </BlogContainer>
       </>
    )
}

export default Blog
