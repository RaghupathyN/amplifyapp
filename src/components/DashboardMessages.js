import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const DashboardMessages = () => {
  let mes = 'Good'
  let element = <h2>H2 tag</h2>
  var initialTime = ""
  function timerUpdate() {
    initialTime = new Date().toLocaleTimeString()
    console.log(`timer called: ${initialTime}` )
    setTime(initialTime)
  }
  const [time, setTime] = useState(initialTime)
  setInterval(timerUpdate, 1000)
  return (
    <>
        <div className='moveFromLeft'>
            <h5>DashboardMessages { time } </h5>
            {element}
        </div>
    <Outlet />
    </>
  )

}



export default DashboardMessages
