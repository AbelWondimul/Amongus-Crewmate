import { useState } from 'react'
import {Link } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';





function Read(props) {
  const supabaseUrl = 'https://orsdgqfqbphouqsnsymn.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yc2RncWZxYnBob3Vxc25zeW1uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODU2Mjg1NSwiZXhwIjoyMDE0MTM4ODU1fQ.4TbD26Pc2o64D4DcrPt6vhXk_oHwRtnvEBnf-sMU-Gc';
  
  const supabase = createClient(supabaseUrl, supabaseKey)

  const [id, setId] = useState("")
  const [crewmate, setCrewmate] = useState({ name: "", speed: 0})

  const readData = async () => {
    const { data, error } = await supabase.from("AmongUs").select('*');
    console.log('data: ', data);
  }

  const readAllData = async () => {
    const { data, error } = await supabase.from("AmongUs").select('*');
    console.log('data: ', data);
    for (let i = 0; i < data.length; i++) {
      console.log(`Name: ${data[i].name}, Speed: ${data[i].speed}`);
    }
  }
  const getData = async () => {
    const {data, error} = await supabase.from("AmongUs").select().eq('id', id).single();
    setCrewmate({name: data.name, speed: data.speed});
    console.log('data: ', data);
  }

  // const handleChange = (event) => {
  //   const {name, value} = event.target;
  //   setCrewmate( (prev) => {
  //       return {
  //           ...prev,
  //           [name]:value,
  //       }
  //   })
  // }

  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log("Name: ", name, " value: ", value);
    setId(value);
}
  
  return (
    <div className="Read"> 
        {/* <button onClick={readData}>Display books in console</button>
      <br /> */}
      <div className='card'>
          {/* <div className='cards'>
          <h2>Name:</h2><input type="text" name="name" placeholder='Name' onChange={handleChange}/>
          </div>
          <br></br>
          <div className='cards'>
          <h2>Speed:</h2><input type="numbers" name="speed" placeholder='Speed'onChange={handleChange}/>
          </div>
          <br></br> */}
          <div className='cards'>
          <h2>ID:</h2><input type="numbers" name="id" placeholder='ID' value={id} onChange={handleChange}/>
          </div>
          <br></br>
          <button onClick={getData}>Get Data</button>
        </div>
        
    </div>
    
  );
}

export default Read;