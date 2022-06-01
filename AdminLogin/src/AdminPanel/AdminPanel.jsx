import React from 'react'
import './AdminPanel.css'
import { AiFillPrinter } from 'react-icons/ai';
function AdminPanel() {


  var allotmentList = [
    {schoolName:"abc",courseName:"CS",lastRank:121,currRank:100,wgpa:7.44,wgpaDetails:"aaa"},
    {schoolName:"abc",courseName:"CS",lastRank:121,currRank:100,wgpa:7.44,wgpaDetails:"aaa"},
    {schoolName:"abc",courseName:"CS",lastRank:121,currRank:100,wgpa:7.44,wgpaDetails:"aaa"},
    {schoolName:"abc",courseName:"CS",lastRank:121,currRank:100,wgpa:7.44,wgpaDetails:"aaa"},
];

  return (
    <div className='bg-white h-max rounded-lg px-20 pd-10'>
        
        <div className='grid grid-cols-2 bg-gray-200 px-10 py-4 rounded-md shadow-md grid-col-2 gap-2' >
            <div >Name : Ravi</div>
            <div className='justify-self-end'>Application Number : 123456789</div><div/>
            <div className='justify-self-end text-blue-600 hover:text-cyan-400'><AiFillPrinter className='inline'/> Print Allotment Slip</div>            
        </div>

        {/* Allotment result table */}
  <table className="mt-10 table-auto border-collapse border-2 border-blue-300 min-w-full text-center rounded-lg">
  <thead className='bg-blue-300'>
    <tr>
      <th>Option No</th>
      <th>School Name</th>
      <th>Course Name</th>
      <th>Last Rank</th>
      <th>Rank</th>
      <th>WGPA</th>
      <th>WGPA Details</th>
    </tr>
  </thead>
  <tbody>
  {allotmentList.map((value,i)=><tr key={i}>
    <td>{i}</td>
    <td>{value.schoolName}</td>
    <td>{value.courseName}</td>
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