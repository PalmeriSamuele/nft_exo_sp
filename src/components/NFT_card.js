import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from "@fortawesome/free-solid-svg-icons";

const NFT_card = () => {
    return (
        <div className='nft_card rounded d-flex flex-column align-items-center p-4 col-md-7 gap-2'>
            <div className='position-relative'>
                <img className='nft_img rounded' src="../images/image-equilibrium.jpg" alt="" />
                <FontAwesomeIcon className='eye_icon fa-2xl ' icon={faEye} />
                <div className='filter rounded'></div>
            </div>
           
            <div>
                <h5 className='nft_title fw-bold mt-2'>Equilibrium #3429</h5>
                <p className='eq-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, labore.</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex gap-2 align-items-center justify-content-center text-center'>
                        <img src="../images/icon-ethereum.svg" alt="" />
                        <p className='nft_value fw-bold '>0.0041 ETH</p>
                    </div>
                    <p className='days_left'>3 days left</p>
                </div>
            </div>
            <div className='d-flex align-items-center  gap-3 border-top border-light p-2'>
                <img className='col-2 border border-2 border-light rounded-circle' src="../images/image-avatar.png" alt="" />
                <p className='creation_p'>Creation de <span className='nft_autor'>Jules Wyvern</span></p>
            </div>
        </div>
    );
};

export default NFT_card;