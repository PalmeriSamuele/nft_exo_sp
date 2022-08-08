import React from 'react';
import Nft_img from './nft/Nft_img';
import Nft_body from './nft/Nft_body';
import Nft_autor from './nft/Nft_autor';

const NFT_card = () => {
    return (
        <div className='nft_card rounded d-flex flex-column align-items-center p-4 col-md-7 gap-2'>
            <Nft_img />
            <Nft_body />
            <Nft_autor />
        </div>

    );

};

export default NFT_card;