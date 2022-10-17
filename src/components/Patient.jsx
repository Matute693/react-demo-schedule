const Patient = ( { patient, setPacient, deletePatient }) => {
const { name, owner, email, date, symptom, id } = patient;

 const handleDelete = () => {
        const response = confirm('Do you want to delete it ?');
        if(response) {
            deletePatient(id)
        }
 }

 
  return (
    <div className="my-10 mx-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 textgray-700 uppercase">Name: {''}
            <span className="font-normal normal-case">{ name }</span>
        </p>
        <p className="font-bold mb-3 textgray-700 uppercase">Owner: {''}

            <span className="font-normal normal-case">{ owner }</span>
        </p>
        <p className="font-bold mb-3 textgray-700 uppercase">Email: {''}

            <span className="font-normal normal-case"> { email}</span>
        </p>
        <p className="font-bold mb-3 textgray-700 uppercase">High date: {''}

            <span className="font-normal normal-case">{ date }</span>
        </p>
        <p className="font-bold mb-3 textgray-700 uppercase">Symptoms: {''}

            <span className="font-normal normal-case">{ symptom }</span>
        </p>

        <div className="flex justify-between">
            <button onClick={ () => setPacient(patient) }  className="bg-indigo-600 py-1 px-4 rounded-md text-white" >Edit</button>
            <button className="bg-red-700 py-1 px-4 rounded-md text-white"
                    onClick={ handleDelete } >Delete</button>
        </div>
    </div>
  )
}

export default Patient