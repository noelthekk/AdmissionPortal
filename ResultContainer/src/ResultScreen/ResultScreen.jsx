import React from 'react'
import { AiFillPrinter } from 'react-icons/ai';
function ResultScreen() {


  var allotmentList = [
    {schoolName:"abc",courseName:"CS",lastRank:121,currRank:100,wgpa:7.44,wgpaDetails:"aaa"},
    {schoolName:"abc",courseName:"CS",lastRank:121,currRank:100,wgpa:7.44,wgpaDetails:"aaa"},
    {schoolName:"abc",courseName:"CS",lastRank:121,currRank:100,wgpa:7.44,wgpaDetails:"aaa"},
    {schoolName:"abc",courseName:"CS",lastRank:121,currRank:100,wgpa:7.44,wgpaDetails:"aaa"},
];

  return (
    <div className='bg-white h-max mt-20 rounded-lg px-20 py-10'>
        <div className='text-center font-medium text-xl uppercase'>Allotment Result</div><br/>
        <div className='grid grid-cols-2 bg-gray-200 px-10 py-4 rounded-md shadow-md grid-col-2 gap-2' >
            <div >Name : Ravi</div>
            <div className='justify-self-end'>Application Number : 123456789</div><div/>
            <div className='justify-self-end text-blue-600 hover:text-cyan-400'><AiFillPrinter className='inline'/> Print Allotment Slip</div>            
        </div>

        {/* Allotment result table */}
  <table className="mt-10 table-auto border-collapse border-2 border-blue-300 min-w-full text-center rounded-lg">
  <thead className='bg-blue-300'>
    <tr>
      <th className='py-2'>Option No</th>
      <th className='py-2'>School Name</th>
      <th className='py-2'>Course Name</th>
      <th className='py-2'>Last Rank</th>
      <th className='py-2'>Rank</th>
      <th className='py-2'>WGPA</th>
      <th className='py-2'>WGPA Details</th>
    </tr>
  </thead>
  <tbody>
  {allotmentList.map((value,i)=><tr key={i}>
    <td className='py-2'>{i}</td>
    <td className='py-2'>{value.schoolName}</td>
    <td className='py-2'>{value.courseName}</td>
    <td className='py-2'>{value.lastRank}</td>
    <td className='py-2'>{value.currRank}</td>
    <td className='py-2'>{value.wgpa}</td>
    <td className='py-2'>{value.wgpaDetails}</td>
  </tr>)}
  </tbody>
  </table>
    </div>
        
  )
}

export default ResultScreen