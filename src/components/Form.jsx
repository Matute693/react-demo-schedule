import { useState, useEffect } from 'react';
import Error from './Error';

const Form = ( {patients, setPatients} ) => {

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptom, setSymptom] = useState('');

  const [error, setError] = useState(false);

  const generateId = () => {
    let date = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 9)
    return date + random
  }
  
  const handleSubmit = (e) => {
  e.preventDefault()


    //Validacion del formulario
    if([ name, owner, email, date, symptom ].includes('')) {
      console.log('Hay al menos un campo vacio')
      setError(true)
      return;
    } 
    setError(false)

    // objeto paciente
    const objectPatient = {
      name,
      owner,
      email,
      date,
      symptom,
      id: generateId()
    }
    setPatients([...patients, objectPatient])

    //Reiniciar el formulario
    setName('')
    setOwner('')
    setEmail('')
    setDate('')
    setSymptom('')
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h3 className="font-black text-3xl text-center">Patient follow-up</h3>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold"> Manage them</span>
      </p>
    
    {/* Formula */}
      <form 
        onSubmit={ handleSubmit }
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        { error &&  <Error message='All fields are required'/> }
        {/* name */}
        <div className="mb-5">
          <label htmlFor="name" className="block text-gray-700 uppercase font-bold">
            Pet's name { name }
          </label>
          <input 
            type="text"
            id="name"
            placeholder="pet's name" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ name } 
            onChange={ (e) => setName(e.target.value) }
            />
        </div>
        
        {/* Owner pet */}
        <div className="mb-5">
          <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
            Owner's name
          </label>
          <input 
            type="text"
            id="owner"
            placeholder="Owner's name" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ owner }
            onChange={ (e) => setOwner(e.target.value)}
            />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input 
            type="email"
            id="email"
            placeholder="Contact email" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ email }
            onChange={ e => setEmail(e.target.value) }
            />
        </div>

        {/* Alta medica */}
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            High medical
          </label>
          <input 
            type="date"
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ date }
            onChange={ e => setDate(e.target.value) }
            />
        </div>

        <textarea 
          id="symptom"
          className="border-2 w-full p-2 mt-2 mb-2 placeholder-gray-400 rounded-md"
          placeholder="Describe the symptom"
          value={ symptom }
          onChange={ e => setSymptom(e.target.value) }>
          </textarea>
          
          {/* Botton */}
          <input 
            type="submit" 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value='Add patient'
          />
      </form>
    </div>

  )
}

export default Form