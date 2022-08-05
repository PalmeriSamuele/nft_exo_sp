import React from 'react';


const NFT_card = () => {
    return (
        <div className='nft_card rounded d-flex flex-column align-items-center p-4 col-md-7'>
            <img className='nft_img' src="../images/image-equilibrium.jpg" alt="" />
            <div>
                <h4>Equilibrium #3429</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, labore.</p>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex gap-2 align-items-center'>
                        <img src="../images/icon-ethereum.svg" alt="" />
                        <p className='nft_value'>0.0041</p>
                    </div>
                    <p>3 days left</p>
                </div>
            </div>
            <div className='d-flex align-items-center  gap-3 border-top border-light p-2'>
                <img className='col-2 border border-2 border-light rounded-circle' src="../images/image-avatar.png" alt="" />
                <p>Creation de <span>Jules Wyvern</span></p>
            </div>
        </div>
    );
};

export default NFT_card;