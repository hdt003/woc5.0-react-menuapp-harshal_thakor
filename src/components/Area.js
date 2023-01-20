import React, { useState } from 'react'
import Item from './Item'
import Spinner from './Spinner'
export default function Area() {
  const [loading,setloading]=useState(true)
  return (
    <div>

      <div className="container my-4">
            <h1><u>Top Headlines</u></h1>

          {loading && <Spinner/>}
            
            <div className="container">
            <div className="row">
                   <div className="col-6"><Item/></div>
                   <div className="col-6"><Item/></div>
            </div>
            </div>
        </div>
    </div>
  )
}
