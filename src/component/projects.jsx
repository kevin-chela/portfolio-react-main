import React, {useState, useEffect} from 'react'
import { profiles } from '../data/Data';

import Skillpage  from './skills' 


import {

  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardImage,
  MDBTypography,
  MDBBtn,
  MDBContainer
   
  } from 'mdb-react-ui-kit';

  import empty from '../assets/images/empty.png'

export default function projects() {

  const [data, setData] = useState(profiles);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  console.log(searchTerm)
  console.log(profiles)

  useEffect(() => {
    const results = data.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [data, searchTerm]);

  console.log(data)
  
  return (
    <div className='h-100'>

      <div>

      <h1 className="mt-5 mb-5 text-xl font-bold uppercase leading-none text-center">Projects</h1>

      <MDBContainer   style={{ width: '400px', justifyContent: "center",}}>
      <MDBInput  wrapperClass='mb-4 ' label='Search Title' id='formControlLg' type='text' size="lg"
        style={{height: 50}}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        />
      </MDBContainer>
       
      </div>

       {profiles.length > 0 ? (

        <div  style={{marginLeft: '5%', marginTop: '60px'}}>

        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: "space-around", marginLeft: '20px'}}>
              
        {searchResults.map((profile) => (
          <>
               
          <MDBCard className="mb-3 shadow-lg"   style={{width: '500px', height: '45%', marginLeft: '20px'}}>
          <MDBCardBody>
            <MDBRow>
            <MDBCol lg="5">
            <MDBCardImage
              src={profile.img} alt="Hey"
              fluid className="rounded-3" 
              style={{height: '150px'}}
             />
            </MDBCol>
            <MDBCol lg="7">
            <div className="d-flex justify-content-between">
            <MDBTypography tag="h5" className="m-0 text-lg font-bold  leading-none ">
              {profile.title}
            </MDBTypography>
            
            </div>
            
            <div>
            <MDBTypography className="small mt-2">
              {profile.details}
            </MDBTypography>
            </div>

            <div className="d-flex justify-content-around mt-4">
           

            <MDBBtn tag="h5" 
            className="mt-2 ml-5 bg-info sm"
            style={{height: '50px'}}
            target="_blank"
            rel="noreferrer"
            as="a"
            href={profile.link}
             
            >
              <p style={{lineHeight: '30px'}} onClick="window.open({profile.link})">Live Preview</p> 
            </MDBBtn>
            </div>

          </MDBCol>
          </MDBRow>
            
        </MDBCardBody>
      </MDBCard>
          
      </>
      ))}

      </div>

    </div>

    ):(

    <>
    
    <div><img src={empty} style={{marginLeft: '20%'}} width="500px"/> No Project matches your Search criteria</div>
  
    </>
    )}

    <Skillpage/>

    </div>
  )
}
