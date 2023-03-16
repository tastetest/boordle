import react from 'react';
import Picture from '../assets/BoordleLogoFinal.png';
import './logo.css';

const Logo = () => {
	// do some magic here
	return (
		<div>

		      <img className="logo" src={Picture} alt="Boordle Logo" />
		</div>
	)
}

export default Logo;
