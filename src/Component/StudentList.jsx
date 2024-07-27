// import { collection, getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { db } from "../firebase";
import StudentTable from "./StudentTable";

// import StudentTable from './Component/StudentTable'

function StudentList({student, setStudent}) {
 
  
  return (
    <>
      <h1>Students List</h1>
      <StudentTable student={student} setStudent={setStudent}/>
    </>
  );
}

export default StudentList;
