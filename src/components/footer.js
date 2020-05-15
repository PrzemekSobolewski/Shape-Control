import React from 'react'
import { FaLeaf, FaAward} from 'react-icons/fa';
import { BsShieldShaded } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className={"footer"}>
            <div className={"footer_desc"}>
                    <span><FaLeaf/> W pełni naturalny skład</span>
                    <span><BsShieldShaded/> Trwałe efekty</span>
                    <span><FaAward id="award"/> 100% gwarancja rezultatów</span>
                </div>    
        </div>    
    );
};

export default Footer;