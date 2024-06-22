import React  from "react";

const AddLoginReg = ({}) => {
    
    return (
      
              <div>
                <button onClick={()=>setShowLogin(true)}className=" text-white border-2 border-white px-3 py-1 rounded-md">
                  Login
                </button>
                <button className=" text-white border-2 border-white px-3 py-1 rounded-md">
                  Register
                </button>
              </div>
            
    );
  };
  
  export default AddLoginReg;
  