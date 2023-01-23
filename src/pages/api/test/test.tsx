import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const TestContainer = styled.div`
    ${tw`
    
    `}
`

const TestStyle = styled.div`
    ${tw`
    
    `}
`

export interface ItestProps {

}

const Test: React.FC<ItestProps> = () => {

    return(
       <>
        <TestContainer>
            <TestStyle>

            </TestStyle>
        </TestContainer>
       </>
    )
}

export default Test
