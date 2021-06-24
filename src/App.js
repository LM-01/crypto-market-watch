import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import CoinListing from './components/CoinListing';

//TODO
// [X] - Request Data
// [X] - Page Layout
// [X] - Styling
// [X] - Search
// [] - Attribution and details
// [] - Export to CSV feature

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  const baseUrl = 'https://api.coingecko.com/api/v3'
  const marketUrl = '/coins/markets'
  //https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
  useEffect(()=> {
    const url = baseUrl+marketUrl
    console.log(url)
    axios
      .get(url, {
        params: {
          vs_currency:'usd',
          order:'market_cap',
          per_page:100,
          price_change_percentage: '24h,1y'
        }
      })
      .then(res => {
        setCoins(res.data)
        console.log(res.data)
      })
      .catch(error => console.log(error))
  },[])

  // useEffect(()=> {
  //   console.log(search)
  // },[search])

  function handleSearch(e){
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
    <div className='container'>
      <div className='header'>
        <h1>Crypto Market Watch</h1>
      </div>
      <div className='search-container'>
        <input placeholder='Search' value={search} onChange={handleSearch}></input>
      </div>
      <div className='listing-container'>
        <div className='listing-header-row'>
          <span>Icon</span>
          <span>Name</span>
          <span>Current Price</span>
          <span>circulating supply</span>
          <span>Max Supply</span>
          <span>% Change 24h</span>
          <span>% Change 1 Year</span>
          <span>Market Cap</span>     
        </div>
        <div>
          {filteredCoins.map(coin => {
            return (
              <CoinListing {...coin} key={coin.id} />
            )
          })}
          
        </div>
      </div>
      
    </div>
    </>
  );
}

export default App;
