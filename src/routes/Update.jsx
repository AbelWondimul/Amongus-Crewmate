import { useState } from 'react'
import {Link } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import React from "react";






function Update(props) {

  const id = props.id;
  console.log('id: ', id);

  const supabaseUrl = 'https://orsdgqfqbphouqsnsymn.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yc2RncWZxYnBob3Vxc25zeW1uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODU2Mjg1NSwiZXhwIjoyMDE0MTM4ODU1fQ.4TbD26Pc2o64D4DcrPt6vhXk_oHwRtnvEBnf-sMU-Gc';
  
  const supabase = createClient(supabaseUrl, supabaseKey)

  const [crewmate, setCrewmate] = useState({ name: "", id : 0, speed: 0 })

  const handleChange = (event) => {
    const {name, value} = event.target;
    setCrewmate( (prev) => {
        return {
            ...prev,
            [name]:value,
        }
    })
}

  const changeName = async () => {
    console.log('id: ', crewmate.id, " name: ", crewmate.name, " speed: ", crewmate.speed);

    const { data, error } = await supabase.from("AmongUs").update([{ name: crewmate.name, speed: crewmate.speed }]).eq("id", id);
    console.log('data: ', data);
    console.log('error: ', error);
    alert('Crewmate Updated!')
  }
  
  return (
    <div className='fl'>
          <div className='dis '>
              <h2><Link className="dis" to="/">🏠 Home</Link></h2>
              <h><Link className="dis" to="/create">Create a Crewmate!</Link> </h>
              <h2><Link className="dis" to="/update"> List Crewmate 🖼️</Link> </h2>
              <img src="../peeking.png" className='last' alt='crewmate peeking' />
          </div>
              <div className='Side '>
              
                <h1>Update</h1>
                <div className=""> 

                    {/* <input type="text" placeholder='' name="name" onChange={handleChange}/>
                    <br></br>
                    <input type="number" name="id" onChange={handleChange}/>
                    <br></br>
                    <input type="number" name="id" onChange={handleChange}/>
                    <br></br>
                    <button onClick={changeName}>Update Crewmate</button> */}

                    <div className='card'>
          <div className='cards'>
          <h2>Name:</h2><input type="text" name="name" placeholder='Name' onChange={handleChange}  />
          </div>
          <br></br>
          <div className='cards'>
          <h2>Speed:</h2><input type="numbers" name="speed" placeholder='Speed'onChange={handleChange}/>
          </div>
          <br></br>
          {/* <div className='cards'>
          <h2>ID:</h2><input type="numbers" name="id" placeholder='ID'onChange={handleChange}/>
          </div> */}
          <br></br>
          <button onClick={changeName}>Update Crewmate</button>
          </div>


                </div>
              </div>
            
          
        </div>
  );
}

export default Update;
