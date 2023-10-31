import { useState,useEffect } from 'react'
import Create from './routes/Create';
import Update from './routes/Update';
import Delete from './routes/Delete';
import Cards from './components/Cards';
import { createClient } from '@supabase/supabase-js';

import './App.css'
import { BrowserRouter, Route, Routes, Outlet, useParams, Link } from "react-router-dom";

const supabaseUrl = 'https://orsdgqfqbphouqsnsymn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yc2RncWZxYnBob3Vxc25zeW1uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODU2Mjg1NSwiZXhwIjoyMDE0MTM4ODU1fQ.4TbD26Pc2o64D4DcrPt6vhXk_oHwRtnvEBnf-sMU-Gc';

const supabase = createClient(supabaseUrl, supabaseKey)

function App() {
  let params = useParams();
 

  const Cr = () => {
    return (
      <Create />
    )
  }

  const Up = () => {
    params = useParams();
    return (
      <Update id ={params.id1} />
    )
  }

  const De = () => {
    params = useParams();
    return (
      <Delete  id ={params.id2} />
    )

  }

//   const UpdateCrew = () => {
//     const id = params.id1;

//     const [crewmate, setCrewmate] = useState({ name: "", speed: 0 })
    

//     const handleChange = (event) => {
//     const {name, value} = event.target;
//     setCrewmate( (prev) => {
//         return {
//             ...prev,
//             [name]:value,
//         }
//     })

// }
// const changeName = async () => {
//   console.log('id: ', params.id1, " name: ", crewmate.name, " speed: ", crewmate.speed);

//   const { data, error } = await supabase.from("AmongUs").update([{ name: crewmate.name, speed: crewmate.speed }]).eq("id", id);
//   console.log('data: ', data);
//   console.log('error: ', error);
// }

// return (
//   <div className='fl'>
//         <div className='dis '>
//             <h2><Link className="dis" to="/">🏠 Home</Link></h2>
//             <h><Link className="dis" to="/create">Create a Crewmate!</Link> </h>
//             <h2><Link className="dis" to="/update">Crewmate Gallery 🖼️</Link> </h2>
//             <img src="../peeking.png" className='last' alt='crewmate peeking' />
//         </div>
//             <div className='Side '>
            
//               <h1>Update</h1>
//               <div className="mid"> 

//                   <div className='card'>
//         <div className='cards'>
//         <h2>Name:</h2><input type="text" name="name" placeholder='Name' onChange={handleChange}  />
//         </div>
//         <br></br>
//         <div className='cards'>
//         <h2>Speed:</h2><input type="numbers" name="speed" placeholder='Speed'onChange={handleChange}/>
//         </div>
//         <br></br>
//         <div className='cards'>
//         {/* <h2></h2><input type="hidden" name="id" value={id} placeholder='ID'onChange={handleChange}/> */}
//         </div>
        
//         <button onClick={changeName}>Update Crewmate</button>
//         </div>


//               </div>
//             </div>
          
        
//       </div>
// );

//   }
  const Detail = () => {
    params = useParams();
    const id = params.id;
    const [crewmate, setCrewmate] = useState({ name: "", speed: 0})


    const getData = async () => {
      const {data, error} = await supabase.from("AmongUs").select().eq('id', id).single();
      setCrewmate({name: data.name, speed: data.speed});
      console.log('data: ', data);
    }

    useEffect(() => {
      getData();

    }, []);

    return (
      <div className='fl'>
      <div className='dis '>
              <h2><Link className="dis" to="/">🏠 Home</Link></h2>
              <h><Link className="dis" to="/create">Create a Crewmate!</Link> </h>
              <h2><Link className="dis" to="/CrewMates">List Crewmates  🖼️</Link> </h2>
              <img src="../peeking.png" className='last' alt='crewmate peeking' />
          </div>
      <div className='card'>
        <h1>This is the info page.</h1>
        <h1>Name: {crewmate.name}</h1>
        <h1>Speed: {crewmate.speed}</h1>
      </div>
      </div>
    )


  }

  const CrewMates = () => {
   
    const [crewData, setCrewData] = useState([]);
    
    useEffect(() => {
    const readAllData = async () => {
      const { data, error } = await supabase.from("AmongUs").select('*');
      console.log('data: ', data);
      for (let i = 0; i < data.length; i++) {
        console.log(`Name: ${data[i].name}, Speed: ${data[i].speed}`);
      }
      setCrewData(data);
    }
      readAllData(); 
    }, []);

    return (
      <div className='fl'>
        <div className='dis '>
              <h2><Link className="dis" to="/">🏠 Home</Link></h2>
              <h><Link className="dis" to="/create">Create a Crewmate!</Link> </h>
              <h2><Link className="dis" to="/CrewMates">List Crewmates  🖼️</Link> </h2>
              <img src="../peeking.png" className='last' alt='crewmate peeking' />
          </div>
      <div>
       {crewData.map((crewMate, index) => (
        <Cards key={index} id={crewMate.id} name={crewMate.name} speed={crewMate.speed} />
      ))}
      </div>
      </div>
      
    )

  }
  
  const Home = () => {
      return (
        <div className='fl'>
          <div className='dis '>
              <h2><Link className="dis" to="/">🏠 Home</Link></h2>
              <h><Link className="dis" to="/create">Create a Crewmate!</Link> </h>
              <h2><Link className="dis" to="/CrewMates">List Crewmate  🖼️</Link> </h2>
              <img src="../peeking.png" className='last' alt='crewmate peeking' />
          </div>
              <div className='Side'>
                <h1> Welcome to the Crewmate Creator! </h1>
                <p>Here is where you can create your very own set of crewmates before sending them off into space!</p>
                <img src="../crewmates.png" className='pic' alt='crewmate peeking' />
                <img src="../spaceship.png" className='pic' alt='crewmate peeking' />
              </div>
            
          
        </div>
      ) 

  }
  const NoMatch = () => ( <h1>No Match</h1>)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" caseSensitive={true} element={<Home />}/>
      <Route path="/create" element={<Cr />}/>
      <Route path="/delete" element={<De />}/>
        <Route path="/delete/:id2" Component={De}>
        </Route>
      <Route path="/update" element={<Up />}/>
      <Route path="/update/:id1" Component={Up} />
        
      <Route path="/crewMates" element={<CrewMates />} />
      <Route path="/crewMates/:id" Component={Detail} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </BrowserRouter>
  </>
    
  )
}

export default App
