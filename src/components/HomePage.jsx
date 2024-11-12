import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigator = useNavigate(); 

    function showAllItems(){
        navigator('/collections')
    }
  return (
    <div className='home container-fluid'>
        <div className='home-content'>
            <h1 className='display-3'>SHOP NOW
                <span><i class="bi bi-cart"></i></span>
            </h1>
            <button className='btn btn-outline-info' onClick={showAllItems}><h3 className='discover'>Discover collections</h3></button>
        </div>
    </div>
  )
}

export default HomePage