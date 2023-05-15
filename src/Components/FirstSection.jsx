import comp  from '../assets/images/image-computer.png'
import Benefits from './Benefits'


const FirstSection = () => {
  return (
    <section>
      <div className="container">
        <h2 className="sub-heading">
          Keep track of your snippets
        </h2>
        <p className="para">
        Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.
        </p>
        <div className="benefits">
          <div className="comp">

          <img data-aos="fade-right" className='computer' src={comp} alt="" />
          </div>
          <Benefits/>

        </div>  
      </div>
    </section>
  )
}

export default FirstSection