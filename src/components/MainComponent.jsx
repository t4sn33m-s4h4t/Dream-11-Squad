import React, { useState } from 'react'
import Navbar from './header/navbar'
import Body from './body/body'
import Footer from './footer/Footer'
const MainComponent = () => {
  const [balance, setBalance] = useState(0);
  return (
    <div>
      <div className="md:mx-12 lg:mx-32 mx-2">
      <Navbar balance={balance}></Navbar>
      <Body balance={balance} setBalance={setBalance}></Body>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MainComponent
