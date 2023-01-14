import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DesignThumb from "@/pages/Design/DesignThumb";
import { supabase } from "@/utils/supabase";
import Link from "next/link";


const Background = styled.div`
  ${tw`
    absolute
    flex
    w-full
    h-full
    items-center  
    justify-evenly
    `}
`;
const GlowBoxPurple = styled.div`
  //x-offset y-offset blur spread
  box-shadow: 0px 0px 10000px 200px rgba(148, 97, 255, 1);
  ${tw`
    
    `}
`;

const GlowBoxPink = styled.div`
  box-shadow: 0px 0px 1000px 200px #fe017a;
  ${tw`
    
    `}
`;

const DesignContainer = styled.div`
  ${tw`
    w-screen
    h-full
    bg-black
    relative
 
    `}
`;

const DesignStyle = styled.div`
  ${tw`
  w-full
  h-full
  pt-20
 
    `}
`;

const GridWidth = styled.div`
  ${tw`
   justify-center
   
    `}
`;

const MainGrid = styled.div`
  
  ${tw`
    grid
    grid-cols-1
    gap-4
    place-items-center
    justify-center
    
    sm:grid-cols-2
    md:grid-cols-2
    lg:grid-cols-3
    
    `}
`;


export interface IDesignProps {
  thumbnails: any;
}


const Design: React.FC<IDesignProps> = ({ thumbnails }) => {


  const filteredThumbs = [...thumbnails]?.map((posts: any) => (
    <>
      <Link key={posts.id} href={`Design/${posts.id}`}>
        <DesignThumb key={posts.id} posts={posts} />
      </Link>
    </>
  ));


  return (
    <>
      <DesignContainer>
        <Navbar />

        <DesignStyle>
          <Background>
            <GlowBoxPurple />
            <GlowBoxPink />
          </Background>

          <GridWidth>
            <MainGrid>

              {filteredThumbs}


            </MainGrid>

          </GridWidth>

        </DesignStyle>



      </DesignContainer>

      <Footer />
    </>
  );
};

export default Design;


export const getStaticProps = async () => {
  const { data: thumbnails } = await supabase.from("DesignThumbnails").select("*");
  return {
    props: {
      thumbnails
    }
  };
};
