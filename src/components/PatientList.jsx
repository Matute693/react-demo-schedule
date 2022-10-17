import { useEffect } from 'react'
import Patient from "./Patient";

export const PatientList = ( { patients, setPacient, deletePatient }) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            { patients && patients.length ? (
              <>
                <h2 className="font-black text-3xl text-center">List of pacient</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                Manage your {''}
                    <span className="text-indigo-600 font-bold" >patients and appointments</span>
                </p>
                {patients.map( (paciente) => (
                    <Patient
                        key={ paciente.id }
                        patient={ paciente }
                        setPacient={ setPacient }
                        deletePatient= { deletePatient }
                    />
                ))}
              </>
              
            ) : (
                <>
                <h2 className="font-black text-3xl text-center">The are no patient</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Start adding patients and they will appear in this place.{''}
                    <span className="text-indigo-600 font-bold" >patients and appointments</span>
                </p>
                </>
            )} 
           
        </div>
    );
};

export default PatientList;