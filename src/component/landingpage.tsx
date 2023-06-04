import React, {useState, useEffect} from 'react'

import Gallery from '../component/gallery'

import profile from '../assets/images/profiler.jpeg'
import background from '../assets/images/background.jpg'
import cv from '../assets/images/cv.pdf'

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,

  //Table

   MDBTable,
   MDBTableHead,
   MDBTableBody,

  } from "mdb-react-ui-kit";

export default function Landingpage() {

  const [value, setValue] = useState('Kevin Chela')
  const [title, setTitle] = useState('name')
  const [description, setDescription] = useState('I am a Front End Developer')

  const handleValue = (e) => {
   
    if (e.target.classList.contains('icon')) {

      const newValue = e.target.dataset.label
      const newValue1 = e.target.dataset.label1
      const newValue2 = e.target.dataset.label2
      setTitle(newValue)
      setValue(newValue1)
      setDescription(newValue2)

    }
  }

  return (
    <div className=" h-full w-full absolute mb-5" style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
    
    }}>
  
    <MDBContainer className="w-1/2 text-center"  style={{marginTop: '-10px'}} 
  >

    <MDBCard className=" "
    style={{
      background: "rgba(255, 255, 255, 0.8)" ,
      justifyContent: "center",
      
    }} >

          <MDBCardBody>

            <MDBRow>

            <MDBTypography tag="h1" className="m-0 text-xl font-bold text-white  leading-none text-left">
                PORTFOLIO
            </MDBTypography>

            </MDBRow>

            <MDBRow style={{justifyContent: "center",
               }}>
            <MDBCardImage
              src={profile} alt="background"
              fluid className="rounded-5 justify-center" 
              style={{
                cursor: 'pointer',
                height: '130px',
                width: '130px',
                backgroundSize: "contain",
              }}
              
             />

            </MDBRow>

            <MDBRow className="mt-2"  style={{justifyContent: "center", lineHeight: '2px'
               }}>
                 
                <MDBTypography tag="h5" className="m-0 text-lg p-3  leading-none text-center">
                 My {title} is
                </MDBTypography>
                <MDBTypography tag="h5" className="m-0 text-xl p-3 leading-none text-center">
                 {value}
                </MDBTypography>
                <MDBTypography tag="h5" className="m-0 text-xl p-3 leading-none text-center">
                {description}
                </MDBTypography>
               

            </MDBRow>

            <MDBCol className="justify-between text-center p-3 " style={{justifyContent: "center", cursor: 'pointer'
               }}>
                 
            <MDBIcon fas icon="user-circle" className="mx-3 icon" size="2x"
            data-label='name'
            data-label1='Kevin Chela'
            data-label2='I am a Front End Developer'
            onMouseOver={handleValue} /> 
            <MDBIcon fas icon="at" className="mx-3 icon" size="2x"
             data-label='email'
             data-label1='kevinchela714@gmail.com'
             data-label2='Databases MongoDB, Firebase, MySQL & API'
             onMouseOver={handleValue}/> 
            <MDBIcon fab icon="whatsapp-square" className="mx-3 icon" size="2x"
             data-label='whatsapp'
             data-label1='0714845504'
             data-label2='Linux administration '
             onMouseOver={handleValue}/> 
            <MDBIcon fab icon="linkedin" className="mx-3 icon" size="2x"
             data-label='linkedin page'
             data-label1='kevin chela'
             data-label2='Social Platform'
           
             onMouseOver={handleValue}/> 
            <MDBIcon fab icon="github " className="mx-3 icon cursor" size="2x"
             data-label='github page'
             data-label1='kevin-chela'
             data-label2='Team work platform'
             onMouseOver={handleValue}/> 

            </MDBCol>

            <MDBRow
             style={{
              justifyContent: "center",
               }}>
            
            <a href= {cv} download className="btn-info text-white font-bold mt-4 mb-0 bg-info sm"
             style={{
              height: '50px',
              width: '200px',
              borderRadius: '4px',
            }}>
              <p className="font-sm" style={{lineHeight: '50px', fontWeight: 'bold'}}>
              DOWNLOAD CV</p> 
            </a>

            </MDBRow>
      
        </MDBCardBody>
        </MDBCard>

    </MDBContainer>

    <Gallery/>

    </div>

   
  )
}
