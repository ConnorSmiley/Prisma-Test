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


// export const getStaticPaths = async () => {
//     const { data: SnackleMouth } = await supabase.from("SnackleMouth").select("id");
//     const { data: Seal } = await supabase.from("Seal").select("id");
//     const { data: ProBar } = await supabase.from("ProBar").select("id");
//     const { data: MyFont } = await supabase.from("MyFont").select("id");
//     const { data: MountainHigh } = await supabase.from("MountainHigh").select("id");
//     const { data: Leap } = await supabase.from("Leap").select("id");
//     const { data: GoLite } = await supabase.from("GoLite").select("id");
//     const sealPaths = Seal?.map(({ id }) => ({
//         params: {
//             id: id?.toString()
//         }
//     }));
//     const proBarPaths = ProBar?.map(({ id }) => ({
//         params: {
//             id: id?.toString()
//         }
//     }));
//     const myFontPaths = MyFont?.map(({ id }) => ({
//         params: {
//             id: id?.toString()
//         }
//     }));
//     const mountainHighPaths = MountainHigh?.map(({ id }) => ({
//         params: {
//             id: id?.toString()
//         }
//     }));
//     const leapPaths = Leap?.map(({ id }) => ({
//         params: {
//             id: id?.toString()
//         }
//     }));
//     const goLitePaths = GoLite?.map(({ id }) => ({
//         params: {
//             id: id?.toString()
//         }
//     }));
//     const snackleMouthPaths = SnackleMouth?.map(({ id }) => ({
//         params: {
//             id: id?.toString()
//         }
//     }));
//
//     return {
//         sealPaths,
//         proBarPaths,
//         myFontPaths,
//         mountainHighPaths,
//         leapPaths,
//         goLitePaths,
//         snackleMouthPaths,
//         fallback: false
//     };
// };
//
// export const getStaticProps = async ({ params: { id } }) => {
//     const { data: snackleMouthPost } = await supabase.from("SnackleMouth").select("*").eq("id", id).single();
//     const { data: sealPost } = await supabase.from("Seal").select("*").eq("id", id).single();
//     const { data: probarPost } = await supabase.from("ProBar").select("*").eq("id", id).single();
//     const { data: myFontPost } = await supabase.from("MyFont").select("*").eq("id", id).single();
//     const { data: mountainHighPost } = await supabase.from("MountainHigh").select("*").eq("id", id).single();
//     const { data: leapPost } = await supabase.from("Leap").select("*").eq("id", id).single();
//     const { data: goLitePost } = await supabase.from("GoLite").select("*").eq("id", id).single();
//     return {
//         props: {
//             snackleMouthPost,
//             sealPost,
//             probarPost,
//             myFontPost,
//             mountainHighPost,
//             leapPost,
//             goLitePost,
//         }
//     };
// };
