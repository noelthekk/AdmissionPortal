import React from 'react'

function CandidatePassword() {
    function handleSubmit(event){
        console.log('ss')
        event.preventDefault();
    }
  return (
    <div>
      <form className="pt-8 space-y-6 " onSubmit={handleSubmit} >
          <div>
            
            <div className="formFieldDiv">
                <label htmlFor="password" className="w-2/5">
                    Enter Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                   
                    className="formFieldClass">                   
                </input>
            </div>
            <div className="formFieldDiv">
                <label htmlFor="repassword" className="w-2/5">
                    Re-Enter Password
                </label>
                <input
                    type="password"
                    id="repassword"
                    name="repassword"
                   
                    className="formFieldClass">                   
                </input>
            </div>
          
          </div>
          <div className='formFieldDiv'><input type="submit" className="btn"   value="Conirm Password" /></div>
          
      </form>
    </div>
  )
}

export default CandidatePassword