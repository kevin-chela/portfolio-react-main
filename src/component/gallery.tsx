import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

import Projects from './projects'

import image1 from '../assets/images/image1.jpeg'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import chatbot from '../assets/images/chatbot.jpg'
import image4 from '../assets/images/image4.jpg'
import logo from '../assets/images/logo.jpg'

export default function Gallery() {
  return (
    <div>
    <MDBRow className="mt-5 w-100" style={{padding: '50px'}}>

        <div>
          <h1 className="mt-5 mb-5 text-xl font-bold uppercase leading-none text-center">Gallery</h1>
       
        </div>
        
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <img
          src={image3}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />

        <img
          src={image1}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={image4}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
          src={chatbot}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={image2}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />

        <img
          src={logo}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
      </MDBCol>
    </MDBRow>

     
     <Projects/>
   
    </div>
  );
}