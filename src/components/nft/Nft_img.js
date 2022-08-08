import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from "@fortawesome/free-solid-svg-icons";

const nft_img = () => {
    return (
        <div className='position-relative'>
            <img className='nft_img rounded' src="../images/image-equilibrium.jpg" alt="" />
            <FontAwesomeIcon className='eye_icon fa-2xl ' icon={faEye} />
            <div className='filter rounded'></div>
        </div>
    );
};

export default nft_img;