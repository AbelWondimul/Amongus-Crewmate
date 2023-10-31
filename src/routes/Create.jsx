import { useState } from 'react'
import { Link } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';





function Create() {
  const supabaseUrl = 'https://orsdgqfqbphouqsnsymn.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yc2RncWZxYnBob3Vxc25zeW1uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODU2Mjg1NSwiZXhwIjoyMDE0MTM4ODU1fQ.4TbD26Pc2o64D4DcrPt6vhXk_oHwRtnvEBnf-sMU-Gc';
  
  const supabase = createClient(supabaseUrl, supabaseKey)

  const [crewmate, setCrewmate] = useState({ name: "", speed : 0 })

  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log("Name: ", name, " value: ", value);
    setCrewmate( (prev) => {
        return {
            ...prev,
            [name]:value,
        }
    })
}

  const createCrewmate = async () => {
    
    console.log("CrewMate: ", crewmate);
    console.log('Name: ', crewmate.name, " Speed: ", crewmate.speed);
    const { data, error } = await supabase.from("AmongUs").insert([{ name: crewmate.name, speed: crewmate.speed }]);
    console.log('data: ', data);
    console.log('error: ', error);
    alert('Crewmate Created!')
  }


  
  return (
    <div className='fl'>
    <div className='dis '>
              <h2><Link className="dis" to="/">🏠 Home</Link></h2>
              <h><Link className="dis" to="/create">Create a Crewmate!</Link> </h>
              <h2><Link className="dis" to="/CrewMates">List Crewmate  🖼️</Link> </h2>
              <img src="../peeking.png" className='last' alt='crewmate peeking' />
          </div>
        <div className='Side mid'>
          <h1>Create a New Crewmate</h1>
          <img src="../crewmates.png" className='pic' alt='crewmate peeking' />
          
          <div className='card'>
          <div className='cards'>
          <h2>Name:</h2><input type="text" name="name" placeholder='Name' onChange={handleChange}  />
          </div>
          <br></br>
          <div className='cards'>
          <h2>Speed:</h2><input type="numbers" name="speed" placeholder='Speed'onChange={handleChange}/>
          </div>
          <br></br>
          <button onClick={createCrewmate}>Create Crewmate</button>
          </div>
          
          
        </div>
      
    
  </div>
  );
}

export default Create;