import React from "react";
import styled from "styled-components";
import tw from "twin.macro"
import { supabase } from "@/utils/supabase";
import Navbar from "@/components/Navbar";

const IdContainer = styled.div`
    ${tw`
    w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
    
    `}
`

const IdStyle = styled.div`
    ${tw`
    
    `}
`

export interface IidProps {
    post:any
}

const DesignID: React.FC<IidProps> = ({snackleMouthPost}) => {
    console.log(snackleMouthPost)

    return(
       <>
        <IdContainer>
            <Navbar />
            <IdStyle>

            </IdStyle>
        </IdContainer>
       </>
    )
}


export default DesignID



