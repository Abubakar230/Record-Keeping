import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function InputData() {
// use state

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [data,setData] = useState([])

// to combine all data on button ...data   
const addData = ()=>{
    setData([
        ...data,{
            name,email
        }
    ])
    setName('')
    setEmail('')
}
// to remove particular data
// const removeItem = (index)=>{  
//     data.splice(index,1);
//     setData([...data]);
// }
const removeItem = (index)=>{
    let arr= data;
    arr.splice(index,1);
    setData([...arr]);
}

  return (
    <div className='page'>
      <Stack spacing={2} direction="row">
        <TextField value={name} multiline maxRows={2} onChange={(element)=>setName(element.target.value)} id="outlined-basic" label="Name" variant="outlined" />
        <TextField value={email} multiline maxRows={2} onChange={(element)=>setEmail(element.target.value)} id="outlined-basic" label="Email" variant="outlined" />

        {/*  onclick function to add previous add new data    */}
         <Button variant="contained" onClick={addData} /* onClick={(e)=>setData([...data,{name,email}])}*/ ><AddIcon/></Button> 
      </Stack>

      {/* data storage headings */}
      <div className='data'>
        <div className="dataValue1">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
        </div>

        {/* To store any amount of data like name and email
            one by one multipal times and class name add new box */}
    {data.map((element,index)=>{
      
        return(
            <div key={index} className='dataValue'> 
             <h4> {index+1}. {element.name} </h4>
             <h4>{element.email}</h4>
            <h4> <Button onClick={()=>removeItem(index) } variant="contained" color="error"><DeleteIcon/></Button></h4>
            </div>
        )
    })}

      </div>
    </div>
  )
}

export default InputData
