import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [tyontekijat, setTyontekijat] = useState([]) 


  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/tyontekijat')
      .then(response => {
        console.log('promise fulfilled')
        setTyontekijat(response.data)
      })
  }, [])
  console.log('render', tyontekijat.length, 'tyontekijat')
  
 const renderTableData=() =>{
   
    return tyontekijat.map((tyontekijat) => {
       const { firstName, lastName, osoite, puhelinNumero, tyoNro } = tyontekijat //destructuring
       return (
         <tbody>
         <tr>
           <th>Etunimi</th>
           <th>Sukunimi</th>
           <th>Osoite</th>
           <th>Puhelinnumero</th>
           <th>Työnumero</th>
         </tr>
          <tr>
             <td>{firstName}</td>
             <td>{lastName}</td>
             <td>{osoite}</td>
             <td>{puhelinNumero}</td>
             <td>{tyoNro}</td>
          </tr>
          </tbody>
       )
    })
 }
  return (
    <div>
      <h1>Työnekijät</h1>
      <table>
          {renderTableData()}
      </table>
    </div>
  )}

export default App;