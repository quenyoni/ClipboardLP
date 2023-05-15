import google from '../assets/images/logo-google.png'
import ibm from '../assets/images/logo-ibm.png'
import ms from '../assets/images/logo-microsoft.png'
import hp from '../assets/images/logo-hp.png'
import vg from '../assets/images/logo-vector-graphics.png'




const SectionSix = () => {

  const icons = [
    {id:1,s:google},
    {id:2,s:ibm},
    {id:3,s:ms},
    {id:4,s:hp},
    {id:5,s:vg},
   
  
  ]
  
  return (
    <section >
      <div className="container ">
        <div className='icons'>

        {
            icons.map(icon => {
              return (   
              
                
                  <div key={icon.id}> 
            <img   src={icon.s} alt="" />
                  </div>
            
             
         )
          })
        }
        </div>
    


    </div>
  </section>
  )
}

export default SectionSix