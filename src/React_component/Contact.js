import React from 'react';
import { useState } from 'react';


const Contact = () => {
  const [data,setdata] = useState({fullname:'',
  phone:'',
  email:'',
  msg:''});
  const inputEvent=(e)=>
{
  const {name,value}=e.target;
  setdata((preval)=>
  {
    return{
       ...preval,
       [name]:value
    }
  })
}

const formSubmit=(e)=>
{
  e.preventDefault();
  alert(`User name is ${data.fullname} and email is ${data.email} and phone number ${data.phone} and meassage typed ${data.msg}`);
}
  return (
    <>
    <div className='my-5'>
      <h1 className="text-center">Contact us</h1>
    </div>
    <div className='container container_div'>
      <div className='row'>
        <div className='col-md-6 col-10 mx-auto'>
          <form onSubmit={formSubmit}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" required name="fullname" value={data.fullnem} onChange={inputEvent} />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
            <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="enter your number" required name="phone" value={data.phone} onChange={inputEvent}/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required name="email" value={data.email} onChange={inputEvent}/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Enter your Experience</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={inputEvent}></textarea>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Submit</button>
       </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact