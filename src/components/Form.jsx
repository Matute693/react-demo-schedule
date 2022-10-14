const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h3 className="font-black text-3xl text-center">Patient follow-up</h3>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold"> Manage them</span>
      </p>
    
    
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="name" className="block text-gray-700 uppercase font-bold">
            Pet's name
          </label>
          <input 
            type="text"
            id="name"
            placeholder="pet's name" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
            Owner's name
          </label>
          <input 
            type="text"
            id="owner"
            placeholder="Owner's name" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input 
            type="email"
            id="email"
            placeholder="Contact email" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            High medical
          </label>
          <input 
            type="date"
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <textarea 
          id="symptom"
          className="border-2 w-full p-2 mt-2 mb-2 placeholder-gray-400 rounded-md"
          placeholder="Describe the symptom">
          </textarea>
          <input 
            type="submit" 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value='Add pacient'
          />
      </form>
    </div>

  )
}

export default Form