import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faTimes } from '@fortawesome/free-solid-svg-icons';
import './BirthdaySection.css'; 

const BirthdaySection = () => {
    const [isVisible, setIsVisible] = useState(true);

    const closeBirthdaySection = () => {
        setIsVisible(false);
        console.log('Close birthday section');
    };
    
    if (!isVisible) {
        return null;
    }
    return (
        <div className="birthday-section">
            <FontAwesomeIcon icon={faBirthdayCake} className="birthday-icon" />
            <span className="birthday-text">Add Your Birthday</span>
            <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={closeBirthdaySection} />
        </div>
    );
}

export default BirthdaySection;
