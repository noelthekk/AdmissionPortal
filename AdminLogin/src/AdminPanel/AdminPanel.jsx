import React from 'react'
import './AdminPanel.css'
import { AiFillPrinter } from 'react-icons/ai';
function AdminPanel() {


  var allotmentList = [
    {
      Name: "Noel",
      RegisterNo: "123450",
      schoolName: "Rajeev School",
      courseName: "CS",
      lastRank: 121,
      currRank: 11,
      wgpa: 7.94,
      wgpaDetails: "A+",
    },
    {
      Name: "Nandu",
      RegisterNo: "123451",
      schoolName: "Don School",
      courseName: "CS",
      lastRank: 121,
      currRank: 15,
      wgpa: 6.44,
      wgpaDetails: "B",
    },
    {
      Name: "Poulo",
      RegisterNo: "123452",
      schoolName: "Able School",
      courseName: "CS",
      lastRank: 121,
      currRank: 20,
      wgpa: 5.44,
      wgpaDetails: "C",
    },
    {
      Name: "Rejath",
      RegisterNo: "123453",
      schoolName: "Arm School",
      courseName: "CS",
      lastRank: 121,
      currRank: 10,
      wgpa: 7.2,
      wgpaDetails: "A",
    },
  ];

  return (
    <div className='bg-white h-max rounded-lg px-20 pd-10'>
        
        <div className='grid grid-cols-2 bg-gray-200 px-10 py-4 rounded-md shadow-md grid-col-2 gap-2' >
            <div className='justify-self-end text-xl '>Student List </div><div/>          
        </div>

        {/* Allotment result table */}
  <table className="mt-10 table-auto border-collapse border-2 border-blue-300 min-w-full text-center rounded-lg">
  <thead className='bg-blue-300'>
    <tr>
      <th>Name</th>
      <th>Register No</th>
      <th>School Name</th>
      <th>Course Name</th>
      <th>Last Rank</th>
      <th>WGPA</th>
      <th>WGPA Details</th>
    </tr>
  </thead>
  <tbody>
  {allotmentList.map((value,i)=><tr key={i}>
    <td>{value.Name}</td>
    <td>{value.RegisterNo}</td>
    <td>{value.schoolName}</td>
    <td>{value.lastRank}</td>
    <td>{value.currRank}</td>
    <td>{value.wgpa}</td>
    <td>{value.wgpaDetails}</td>
  </tr>)}
  </tbody>
  </table>
    </div>
        
  )
}

export default AdminPanel