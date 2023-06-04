import React from 'react'
import { tech } from '../data/TechData';

import {

    MDBCardImage,
    MDBContainer,
    MDBCard,
    MDBTypography,
    MDBCardBody,
    MDBBtn
     
} from 'mdb-react-ui-kit';

export default function skills() {
  return (
    <div>

    <h1 className="mt-5 mb-5 text-xl font-bold uppercase leading-none text-center">Familiar Technolgies</h1>

  
        <MDBContainer  style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: "space-around", justifyContent: 'center'}}>
        {tech.map((skill) => (
            <MDBCard className='ml-2 mr-2 mt-3'  style={{width: '230px', height: '230px', cursor: 'pointer'}} >
            <MDBCardBody>
            <MDBCardImage
              src={skill.img} alt="Hey"
              fluid className="rounded-3" 
              style={{height: '150px'}}
             />

            <MDBTypography className="small mt-2 text-center p-2">
              {skill.title}
            </MDBTypography>
            </MDBCardBody>
            </MDBCard>
         ))}
        </MDBContainer>

        <MDBBtn tag="h5" 
            className="mt-5 mb-5 ml-5 bg-info sm items-center font-bold justify-content-center"
            style={{height: '50px', justifyContent: 'center', marginLeft: '35%', marginBottom: '20px'}}

            target="_blank"
            rel="noreferrer"
            href="https://wa.me/254714845504"
             
            >
              <p style={{lineHeight: '30px', fontWeight: 'bold'}}>Hire Me</p> 
        </MDBBtn>

    </div>
  )
}
