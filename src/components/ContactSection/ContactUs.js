import React, {useRef, useEffect, useCallback} from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import {useSpring, animated} from 'react-spring';
import './ContactUscss.css';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
`

const ModalWrapper = styled.div`
  width: 55vw;
  height: 60vh;
  justify-content: center;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  background: #fff;
  color: #000;
  display: flex;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  width: 80%;
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`

const ContactForm = ({showModal, setShowModal}) => {

  const api_key = process.env.REACT_APP_API_KEY;

  function sendEmail(e) {
    e.preventDefault();

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

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

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
      <animated.div style={animation}>
      <ModalWrapper showModal={showModal}>
        <ModalContent>
        <form className="contact-form" id="messageForm" onSubmit={sendEmail}>
          <div id="contactMe">
            Contact Me
          </div>
          <div id="subjectBox">
            <label>Subject</label>
            <input type="text" name="subject" id="subject" maxlength="50"/>
          </div>
          <div id="emailBox">
            <label>Email</label>
            <input type="email" name="email" id="email" maxlength="40"/>
          </div>
          <div id="messageBox">
            <label>Message</label>
            <textarea name="message" id="message" maxlength="500"/>
          </div>
          <div id="submitBox">
            <input type="submit" value="Send" id="submitBtn" />
          </div>
        </form>
        </ModalContent>
        <CloseModalButton aria-label='Close modal'
        onClick={() => setShowModal(prev => !prev)} />
      </ModalWrapper>
      </animated.div>
    </Background>
    ) : null}
  </>
}

export default ContactForm;