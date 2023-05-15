import logo from "../assets/images/logo.svg";
import { useEffect } from "react";


const Hero = () => {


	useEffect(() => {
		const handleLoad = () => {
			const  log = document.querySelector('.main-logo')
			console.log(log.classList.add('rotate'))
		};
	
		window.addEventListener('load', handleLoad);
	
		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('load', handleLoad);
		};
	}, []);






	return (
		<header className="header">
			<div className="container">
				<div className="main-content">
					<img
						className="main-logo"
						src={logo}
						alt=""
					/>

					<h1 className="main-heading">
						A history of everything you
						copy
					</h1>
					<p className="para">
						Clipboard allows you to
						track and organize
						everything you copy.
						Instantly access your
						clipboard on all your
						devices.
          </p>
          <div className="btn-group">
						<a className="btn pri" href="">
							Download for iOS
						</a>
						<a className="btn sec" href="">
							Download for Mac
						</a>
					</div>
				 
        </div>
        
        
			</div>
		</header>
	);
};

export default Hero;
