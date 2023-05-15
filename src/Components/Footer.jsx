import logo2 from '../assets/images/logo.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faCcVisa
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  const links =  [
    'FAQs',
    'Contact Us',
    'Privacy Policy',
    'Press Kit',
    'Install Guide' 

  ]

  const icos = [
    {id:1, thing: faFacebook},
    {id:2, thing: faTwitter},
    {id:3, thing: faInstagram},
  ]

  const link = icos.map((el,index) => {
    return (<a className='links'  key={index} href={el.url}><FontAwesomeIcon icon={el.thing} size="2x" /></a>)
  })

  const lnk = links.map((el,index) => {
    return (

      <a className='l' key={index}>{el}</a>
    )
    
  }) 
  


  return (
    <footer className='footer'>
      <div className="container">
        
        <div className='
        footer-con'>

       
        <img className='main-logo2' src={logo2} alt="" />
          
          <div className="footer-grid">
          {lnk}
            
          </div>
          <div className="move">

        {link}
          </div>
        </div>

      </div>


    </footer>
  )
}

export default Footer