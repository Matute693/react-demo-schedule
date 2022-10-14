import Patient from "./Patient";

export const PatientList = ( { patients }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            
            <h2 className="font-black text-3xl text-center">List of pacient</h2>
            <p className="text-xl mt-5 mb-10 text-center">
            Manage your {''}
                <span className="text-indigo-600 font-bold" >patients and appointments</span>
            </p>
            {patients.map( (paciente) => (
                <Patient
                    key={ paciente.id }
                    patient={ paciente }
                />
            ))}
        </div>
    );
};

export default PatientList;