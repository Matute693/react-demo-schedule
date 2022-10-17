import { React, useEffect, useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PatientList from './components/PatientList'

const App = () => {
  const [patients, setPatients] = useState([]);
  const [patient, setPacient] = useState({});

  useEffect(() => {
    const getStorage = () => {
      const storage = JSON.parse(localStorage.getItem('patients'));
      setPatients(storage)
    }
    getStorage()
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify( patients ))
  }, [ patients ])


  const deletePatient = ( id ) => {
    const updatedPatients = patients.filter( patient => patient.id !== id)
    setPatients(  updatedPatients )
  }
  
  return (
    <div className='container mx-auto mt-10'>
      <Header />
      <div className='mt-12 md:flex'>
        <Form 
          patients={ patients }
          setPatients={ setPatients }
          patient={ patient }
          setPacient={ setPacient }
        />
        <PatientList 
          patients={ patients }
          setPacient={ setPacient }
          deletePatient={ deletePatient }
        />
      </div>
    </div>
  )
}

export default App