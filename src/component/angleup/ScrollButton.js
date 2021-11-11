import React, {useState} from 'react';
import {FaChevronCircleUp} from 'react-icons/fa';
import { Button } from './Styles';
import "./ScrollButton.css";
const ScrollButton = () =>{
	

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<Button>
	<FaChevronCircleUp  onClick={scrollToTop}
	style={{ size:'4x',display: visible ? 'initial' : 'none'}} />
	</Button>
);
}

export default ScrollButton;
