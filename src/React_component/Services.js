import React from 'react';
import Card from "../React_component/Card";

const Services = () => {
  return (
    <>
    <div className='my-5'>
      <h1 className='text-center'>Our Sevices </h1>
    </div>
    <div className='container-fluid mb-5'>
      <div className='row'>
        <div className='col-10 mx-auto'>
          <div className='row gy-3'>
           <Card/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services