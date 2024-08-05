import React from 'react'
import '@leenguyen/react-flip-clock-countdown'
import '@leenguyen/react-flip-clock-countdown/dist/index.css'
import videoBg from '../src/assets/video.mp4'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'
const App = () => {
  return (
    <section className='page'>
<video src={videoBg} autoPlay muted loop></video>
<div className='page__content'>
  <h1>Launching soon</h1>
  <h3>Leave your email and we'll let you know once the site goes live</h3>
  <FlipClockCountdown
  to={new Date().getTime()+24*3600*1000+5000}
  className='flip-clock'
/>
<button className='btn'>Notify me</button>
</div>
    </section>
  )
}
export default App
