
import React from 'react';

const nft_body = () => {
    return (
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
    );
};

export default nft_body;