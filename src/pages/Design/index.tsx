import React  from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DesignThumb from "@/pages/Design/DesignThumb";
import { supabase } from "@/utils/supabase";
import Link from "next/link";

const DesignContainer = styled.div`
  ${tw`
    w-screen
    h-full
    bg-gradient-to-r from-pink-500 to-purple-900
 
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

const PictureContainer = styled.div`
  ${tw`
    // aspect-w-16
    // aspect-h-12
    h-full
    w-full
    
    `}
`;

const PictureAnchor = styled.a`
  ${tw`
    
    w-auto
    h-auto
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
