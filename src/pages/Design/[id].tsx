import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { supabase } from "@/utils/supabase";
import Navbar from "@/components/Navbar";

const IdContainer = styled.div`
  ${tw`
    w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
    
    `}
`;

const IdStyle = styled.div`
  ${tw`
    
    `}
`;

export interface IidProps {
  post: any;
}

const DesignID: React.FC<IidProps> = ({ post }) => {
  const [fetcherror, setFetcherror] = useState();
  const [table, setTable] = useState<any>();


  useEffect(() => {
    const fetchTable = async () => {
      const { data, error } = await supabase
        .from("DesignThumbnails")
        .select("Company, GoLite(url)")
        .eq('GoLite', table)

      ;

      if (error) {
        setFetcherror("error");
        setTable(null);
        console.log(error);
      }
      if (data) {
        setTable(data);
        setFetcherror(null)
      }

    };
    fetchTable()
  },[]);


  return (
    <>
      <IdContainer>
        <Navbar />
        <IdStyle>
          {fetcherror && (<p>{fetcherror}</p>)}

          {table && (
            <div>
              {table.map(data => (
                <div>{data.title}</div>
              ))}
            </div>
          )}

        </IdStyle>
      </IdContainer>
    </>
  );
};


export default DesignID;

// export const getStaticPaths = async () => {
//   const { data: posts } = await supabase.from("").select("id");
//
//   const paths = posts?.map(({ id }) => ({
//     params: {
//       id: id?.toString()
//     }
//   }));
//   return {
//     paths,
//     fallback: false
//   };
// };
//
// export const getStaticProps = async ({ params: { id } }) => {
//   const { data: post } = await supabase.from("GoLite").select("*").eq("id", id).single();
//
//   return {
//     props: {
//       post
//     }
//   };
// };


