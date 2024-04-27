import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="t">Заголовок</div>
      <div className="bAll">
        <div className="left">
          <div className="l l1"></div>
          <div className="l l2"></div>
          <div className="l l3"></div>
        </div>
        <div className="right">
          {/* <div className="r1"><img src="https://www.shutterstock.com/shutterstock/videos/1046312335/thumb/10.jpg?ip=x480" className='i1'/></div>
          <div className="r2"><img src="https://www.shutterstock.com/image-illustration/neon-3d-font-blue-pink-260nw-1682463859.jpg" className='i2'/></div>
          <div className="r3"><img src="https://i.cbc.ca/1.6979706.1695828636!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/1890767731.jpg" className='i3'/></div> */}
        </div>
      </div>
    </>
  )
}

export default App
