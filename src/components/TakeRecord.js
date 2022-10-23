import { useEffect, useState } from "react";
import DisplayRecord from "./DisplayRecord";

const TakeRecord = () => {
  // using the use states to get the required data from the form
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("BA");
  const [dob, setdob] = useState();
  const [gender, setGender] = useState("Male");

  // for holding all the user data as an object
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("storedData")) || []);
  console.log(typeof userData);

  // adding the name to it's respective variable
  const newName = (event) => {
    setName(event.target.value);
  };

  // adding the department to it's respective variable
  const newDept = (event) => {
    setDepartment(event.target.value);
  };

  // adding the date of birth to it's respective variable
  const newDOB = (event) => {
    setdob(event.target.value);
  };

  // function to add the record
  const addRecord = (event) => {
    event.preventDefault();
    let newData = {
      name: name,
      dep: department,
      dob,
      gender,
    };
    let myData = [...userData, newData];
    setUserData(myData);

    // resetting the form value
    event.target.reset();
  };
  
   // function to clear all the stored data
   const clearStorage = () => {
    localStorage.removeItem("storedData");
     setUserData([]);
  }
    
    useEffect(() => {
      localStorage.setItem("storedData", JSON.stringify(userData));
    }, [userData])

  return (
    <>
      <form className="flex items-center justify-around text-white font-semibold bg-cyan-600 py-2" onSubmit={addRecord}>
        <section>
          <span>Name : </span>
          <input
            className="bg-transparent outline-none border border-white px-2"
            placeholder="Student Name"
            required
            onChange={newName}
            itemRef={name}
          ></input>
        </section>

        <section>
          <span>Department : </span>
          <select className="bg-cyan-600 cursor-pointer" required onChange={newDept}>
            <option>BA</option>
            <option>BSc</option>
            <option>BCom</option>
            <option>BCA</option>
            <option>BTech</option>
          </select>
        </section>

        <section>
          <span>DOB : </span>
          <input
            className="bg-transparent cursor-pointer"
            type="date"
            required
            onChange={newDOB}
          ></input>
        </section>

        <section>
          <span>Gender : </span>
          <select className="bg-cyan-600 cursor-pointer" required>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </section>

        <button type="submit" className="border border-white px-6 rounded hover:bg-cyan-800">
          Add
        </button>
          </form>
          

      {/* using the display record to display all the data on the dom */}
      <DisplayRecord data={userData} />
      
      <button type="submit" className="border border-white text-white font-bold mt-6 px-2 rounded hover:bg-cyan-600 relative left-[45%]" onClick={clearStorage}>
          Clear All Record
        </button>
    </>
  );
};

export default TakeRecord;
