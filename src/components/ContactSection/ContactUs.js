import React, {useRef, useEffect, useCallback} from 'react';
import emailjs from 'emailjs-com';
// import {useSpring, animated} from 'react-spring';
import {Background, ModalWrapper, ModalContent,
        CloseModalButton} from './ContactElements';
import './ContactUscss.css';

const ContactForm = ({showModal, setShowModal}) => {

  // const animation = useSpring({
  //   config: {
  //     duration: 250
  //   },
  //   opacity: showModal ? 1 : 0,
  //   transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  // });

  const api_key = process.env.REACT_APP_API_KEY;

  function sendEmail(e) {

    e.preventDefault();

    // if(document.getElementById("subject").value === "" ||
    // document.getElementById("email").value === "" ||
    // document.getElementById("message").value === ""){
    //   alert("Please fill out the form completely!");
    //   return false;
    // };

    emailjs.sendForm('service_ibsibnf', 'template_cq1nmj8', e.target, api_key)
      .then((result) => {
          console.log(result.text);
          document.getElementById("messageForm").reset();
          alert("The message was sent! Thank you for your interest!");
          setShowModal(prev => !prev);
      }, (error) => {
          console.log(error.text);
          alert("There was an error. Please fill out the form completely!");
      });
  }

  const modalRef = useRef()

  const closeModal = e => {
    if(modalRef.current === e.target){
      setShowModal(false)
    }
  };

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showModal){
      setShowModal(false);
    }
  }, [setShowModal, showModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return <>
    {showModal ? (
    <Background ref={modalRef} onClick={closeModal}>
      {/* <animated.div style={animation}> */}
      <ModalWrapper showModal={showModal}>
        <ModalContent>
        <form className="contact-form" id="messageForm" onSubmit={sendEmail}>
          <div id="contactMe">
            Contact Me
          </div>
          <div id="subjectBox">
            <label>Subject</label>
            <input type="text" name="subject" placeholder="Subject" id="subject" maxlength="50" required/>
          </div>
          <div id="emailBox">
            <label>Email</label>
            <input type="email" name="email" id="email" placeholder="abc@email.com" maxlength="40" required/>
          </div>
          <div id="messageBox">
            <label>Message</label>
            <textarea name="message" id="message" placeholder="Write your message here!" maxlength="500" required/>
          </div>
          <div id="submitBox">
            <input type="submit" value="Send" id="submitBtn" />
          </div>
        </form>
        </ModalContent>
        <CloseModalButton aria-label='Close modal'
        onClick={() => setShowModal(prev => !prev)} />
      </ModalWrapper>
      {/* </animated.div> */}
    </Background>
    ) : null}
  </>
}

export default ContactForm;