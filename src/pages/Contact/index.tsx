import React, { useState, useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
// import { contactIcon, emailIcon, messageBubble, nameIcon, sendIcon }  from "../Icons/Export.js";
// import contactIcon from "../Icons/contact-us.svg";
// import emailIcon from "../Icons/emailIcon.svg"
// import messageBubble from "../Icons/messageBubble.svg"
// import nameIcon from "../Icons/nameIcon.svg"
// import sendIcon from "../Icons/messageIcon.svg"


const Background = styled.div`
  ${tw`
    absolute
    flex
    w-full
    h-full
    justify-evenly
    py-80
    overflow-hidden
    bg-black
    
    `}
`;
const GlowBoxPurple = styled.div`
  //x-offset y-offset blur spread
  box-shadow: 0px 0px 10000px 200px rgba(148, 97, 255, 1);
  ${tw`
  opacity-40
    `}
`;

const GlowBoxPink = styled.div`
  box-shadow: 0px 0px 1000px 200px #fe017a;
  ${tw`
  opacity-40
    `}
`;


const ContactStyles = styled.div`
  background-color: black;
  ${tw`
      h-full
      w-full
      overflow-hidden
      
     sm:pt-10 
        `}
`;

const ContactContainer = styled.div`
  ${tw`
      pt-24
        h-full
        w-[98%]
        flex
        flex-col
        justify-center
        overflow-hidden
        pb-60
        
        sm:w-full
        sm:items-center
        `}
`;

const FormContainer = styled.form`
  ${tw`
        grid
        z-10
        h-full
        w-full
        justify-center
        
        shadow-2xl
        
        sm:w-full
        sm:flex
        sm:items-center
        sm:justify-center
        sm:flex-col
        sm:w-[95%]
        
        `}
`;
const Blur = styled.div`
  //box-shadow: 0px 0px 40px 20px deeppink;
  ${tw`
        h-full
        w-full
        flex
        items-center
        justify-center
        opacity-40
        overflow-hidden
        `}
`;

const ContactTitle = styled.div`
  ${tw`
      text-pink-500
        text-5xl
        font-extrabold
        flex
        flex-row-reverse
        items-center
        py-2
        pr-6
        bg-gradient-to-l from-black to-transparent
        
        xl:text-7xl
        `}
`;

const FormFields = styled.div`
  ${tw`
      flex
      flex-col
      pl-2
      z-10
      w-full
      h-full
      overflow-hidden
     
     
      sm:px-6
      md:px-8
      lg:px-10
        `}
`;

const LabelName = styled.label`
  ${tw`
        text-white
        text-xl
        font-bold
        mb-2
        pt-2
        
        sm:text-2xl
        sm:pt-4
        md:text-2xl
        md:pt-4
        lg:text-2xl
        lg:pt-4
        
        xl:text-3xl
        `}
`;

const NameInput = styled.input`
  ${tw`
     h-12
     w-auto
     rounded-md
     px-2
     border-2
     shadow-2xl
     
     focus:ring-white
     focus:border-4
     focus:border-pink-500
          
     placeholder: text-4xl
     placeholder-pink-500/50
     focus: border-pink-500
     focus: ring-pink-500
     
     // sm:h-20
     // sm:text-xl
     // md:h-20
     // md:text-xl
     // lg:h-20
     // lg:text-xl
     // xl:h-24
     // xl:text-2xl
        `}
`;
const MessageInput = styled.textarea`
  ${tw`
     h-60
     w-auto
     rounded-md
     shadow-2xl
     placeholder: text-4xl
     placeholder-pink-500/50
     
     px-2
     border-2
     
     focus:ring-white
     focus:border-4
     focus:border-pink-500
     
     sm:h-40
        `}
`;

const ButtonContainer = styled.div`
  ${tw`
      w-full
        flex
        justify-center
        items-center
        py-4
        `}
`;
const SubmitButton = styled(motion.button)`
  ${tw`
      bg-gradient-to-r from-pink-600 to-pink-700
      text-white
       h-10 
       w-1/2
       rounded-md
       font-bold
       mx-4
       border-2
       border-pink-400
       flex
       items-center
       justify-center
       pl-4
       shadow-2xl
       hover:border-white
       hover:text-black
       
       md:w-2/4
       lg:w-1/4
       
       xl:h-16
       xl:text-2xl
       xl:border-4
        `}
`;

// const SendIcon = styled(sendIcon)`
//   ${tw`
//         h-6
//         w-6
//         fill-current
//         text-white
//
//         `}
// `;
//
// const SendIcon2 = styled(sendIcon)`
//   ${tw`
//         h-12
//         w-12
//         fill-current
//         text-white
//
//         `}
// `;
//
// const EmailIcon = styled(emailIcon)`
//   ${tw`
//         h-6
//         mr-2
//         -mt-1
//         fill-current
//         text-white
//         items-center
//         inline
//         text-pink-500
//
//         `}
// `;
//
// const MessageBubble = styled(messageBubble)`
//   ${tw`
//         h-6
//         mr-2
//         -mt-1
//         fill-current
//         text-white
//         items-center
//         inline
//         text-pink-500
//
//         `}
// `;
// const NameIcon = styled(nameIcon)`
//   ${tw`
//         h-8
//         mr-3
//         -mt-1
//         fill-current
//         text-white
//         items-center
//         inline
//         text-pink-500
//
//         `}
// `;
// const ContactIcon = styled(contactIcon)`
//   ${tw`
//         h-6
//         pl-4
//         mt-2
//         fill-current
//         items-center
//         inline
//         text-pink-500
//
//         sm:h-10
//         sm:pr-0
//         sm:pl-6
//         sm:mt-1
//
//         md:h-10
//         md:pr-0
//         md:pl-8
//         md:mt-1
//
//         lg:h-10
//         lg:pr-0
//         lg:pl-8
//         lg:mt-1
//
//         xl:h-14
//         xl:pr-2
//         xl:pl-10
//         xl:mt-1
//         `}
// `;

const Backdrop = styled(motion.div)`
  ${tw`
    w-full
    h-full
    absolute
    bg-black
    bg-opacity-60
    items-center
    flex
    flex-col
    justify-center
    z-20
    `}
`;

const ModalSubmit = styled(motion.div)`
  ${tw`
    w-5/6
    h-2/6
    relative
    bg-pink-500
    rounded-lg
    text-center
    flex
    flex-col
    items-center
    justify-center
    space-y-6
    
    lg:w-4/6
    lg:h-3/6
    lg:rounded-xl
    `}
`;

const TopText = styled.div`
  ${tw`
    text-4xl
    font-extrabold
    
    lg:text-8xl
    `}
`;

const BottomText = styled.div`
  ${tw`
    text-3xl
    
    lg:mt-20
    lg:mb-10
    `}
`;

const BackDropAnimation = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 1
    }
  },
  exit: {}
};


export default function Contact() {
  const initialValues = { username: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_t6exrzj", "template_4az8qmq", form.current, "7npzpsfjUZOAhQjYA")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setSubmitted(true);
    e.target.reset();
  };


  return (
    <>
      <Navbar />
      <ContactStyles name="/Contact">
        {submitted &&
          <Backdrop
            animate={{ opacity: 0, transition: { delay: 2.5, duration: 0.5 } }}
          >
            <ModalSubmit
              variants={BackDropAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <TopText>Submitted.</TopText>
              <BottomText>Thanks</BottomText>
              {/*<SendIcon2 />*/}
            </ModalSubmit>
          </Backdrop>
        }


        <ContactContainer>
          <FormContainer ref={form} onSubmit={sendEmail}>
            <FormFields>
              <ContactTitle>
                {/*<ContactIcon />*/}
                Contact
              </ContactTitle>
              <LabelName>
                {/*<NameIcon />*/}
                Name
              </LabelName>

              <NameInput type="text" placeholder="Name" name="from_name" values={formValues.username}
                         required />
              <LabelName>
                {/*<EmailIcon />*/}
                Email
              </LabelName>

              <NameInput type="email" placeholder="Email" name="user_email" values={formValues.email}
                         required />
              <LabelName>
                {/*<MessageBubble />*/}
                Message
              </LabelName>

              <MessageInput type="text" placeholder="Message" name="message" values={formValues.message}
                            required />
              <ButtonContainer>
                <SubmitButton type="submit"
                              whileHover={{ scale: 0.9 }}
                              whileTap={{ scale: 0.8 }}
                >
                  Submit
                  {/*<SendIcon />*/}
                </SubmitButton>

              </ButtonContainer>

            </FormFields>
            <Blur />
          </FormContainer>

          <Background>
            <GlowBoxPurple />
            <GlowBoxPink />
          </Background>


        </ContactContainer>
      </ContactStyles>
    </>
  );
}
