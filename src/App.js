import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'

function App () {
        
      const [result, setresult] = useState()


  useEffect(() => {
    axios.get('https://dummyjson.com/products')
   .then(res => {
     setresult(res.data.products);
     console.log(res)
   })

   .catch(err => {
    console.log(err)
   })
  
  })

    function deleteFetchedData (id) {
     let task = result.filter(t  => {
       return t.id !== id

     })
     setresult(task)
    }         

   return (
    <div className='App'>

      <div className="container text-end  p-4">
        <a className='mx-2'>Home</a>
        <a className='mx-2'>About</a>
        <a className='mx-2'> Service</a>
        <a className='mx-2'>Tools</a>
      </div>

     <div>
            <div>{result && result.map((el) => {
              return  <div  onClick={deleteFetchedData} className='' style={{boxShadow: '2px 2px 2px 2px', margin:'10px 35px 10px 35px', padding:'15px'}}>
                 <p>{el.id}</p>
                <p> {el.title} </p>
                <p> {el.description}
                </p>
              </div>
            })}</div>
              
     </div>


    </div>
   )
}
export default App;