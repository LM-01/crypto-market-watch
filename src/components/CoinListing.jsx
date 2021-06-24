import React from 'react';

export default function CoinListing(props){
    console.log(props)
    return (
    <>
        <div className='listing-coin-row'>
          <span><img src={props.image} className='coin-img' alt={props.name} /></span>
          <span>{props.name}</span>
          <span>{props.current_price.toLocaleString("en-US")}</span>
          <span>{props.circulating_supply.toLocaleString("en-US")}</span>
          <span>{props.max_supply !== null ? props.max_supply.toLocaleString("en-US"): 'Uncapped'}</span>
          <span style={props.market_cap_change_percentage_24h > 0 ? {color:'green'}: {color:'red'}}>
              {`${props.market_cap_change_percentage_24h.toFixed(2)}%`}</span>
          <span style={props.price_change_percentage_1y_in_currency > 0 ? {color:'green'}: {color:'red'}}>
              {props.price_change_percentage_1y_in_currency !== null ?
              `${props.price_change_percentage_1y_in_currency.toFixed(2)}%` :
              'N/A'}
              </span>
          <span>{props.market_cap.toLocaleString("en-US")}</span>     
        </div>
    </>
    )
}