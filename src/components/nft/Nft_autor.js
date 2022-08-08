import React from 'react';

const nft_autor = () => {
    return (
        <div className='avatar_box d-flex align-items-center  gap-3 border-top border-light p-2'>
            <img className='col-2 border border-2 border-light rounded-circle' src="../images/image-avatar.png" alt="" />
            <p className='creation_p'>Creation de <span className='nft_autor'>Jules Wyvern</span></p>
        </div>
    );
};

export default nft_autor;