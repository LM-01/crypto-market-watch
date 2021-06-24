import React from 'react';

export default function CoinListing(props){
    console.log(props)
    return (
    <>
        <div className='listing-coin-row'>
          <span><img src={props.image} className='coin-img' alt={props.name} /></span>
          <span>name</span>
          <span>price</span>
          <span>circulating-supply</span>
          <span>max-supply,</span>
          <span>price-change-24h</span>
          <span>price-change-1y</span>
          <span>market_cap</span>     
        </div>
    </>
    )
}