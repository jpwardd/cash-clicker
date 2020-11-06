import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import {useInterval} from './hooks/useInterval'

function App() {
  const [pocketMoney, setPocketMoney] = useState(0)
  const [earningsPerSecond, setEarningsPerSecond] = useState(0)

  const [weedDealerPrice, setWeedDealerPrice] = useState(25)
  const [weedDealers, setWeedDealers] = useState(0)

  const [organDealerPrice, setOrganDealerPrice] = useState(100)
  const [organDealers, setOrganDealers] = useState(0)

  const [blackHatPrice, setBlackHatPrice] = useState(1000)
  const [blackHatHackers, setBlackHatHackers] = useState(0)
  useInterval(() => {
    setPocketMoney(pocketMoney + earningsPerSecond)
  }, 10)

  const increasePocketMoney = () => {
    return setPocketMoney(pocketMoney + 0.25)
  }

  const hireWeedDealers = () => {
    if (pocketMoney >= weedDealerPrice) {
      setPocketMoney(pocketMoney - weedDealerPrice);
      setEarningsPerSecond(earningsPerSecond + 0.01)
      setWeedDealerPrice (weedDealerPrice * 1.2)
      setWeedDealers(weedDealers + 1)
    }
  }

  const hireOrganDealers = () => {
    if (pocketMoney >= organDealerPrice) {
      setPocketMoney(pocketMoney - organDealerPrice);
      setEarningsPerSecond(earningsPerSecond + 0.05)
      setOrganDealerPrice (organDealerPrice * 1.2)
      setOrganDealers(organDealers + 1)
    }
  }

  const hireBlackHatHackers = () => {
    if (pocketMoney >= blackHatPrice) {
      setPocketMoney(pocketMoney - blackHatPrice);
      setEarningsPerSecond(earningsPerSecond + 0.1)
      setBlackHatPrice (blackHatPrice * 1.2)
      setBlackHatHackers(blackHatHackers + 1)
    }
  }

  const formatMoney = (number) => {
   return number.toFixed(2);
  }

  const formatEarnings = (number) => {
    return (number * 100).toFixed(2);
   }

  return (
    <div>
      <h1 style={{color: 'green'}}>Cash Clicker</h1>

      <h1>Pocket Money</h1>
      <h1>${formatMoney(pocketMoney)}</h1>
      <h4>Earnings per hour: <span>${formatEarnings(earningsPerSecond)}</span></h4>
      <h1>Beg</h1>
      <button onClick={increasePocketMoney}>
        Click me
      </button>
      <hr />

      <h1>Low-Level Weed Dealer </h1>
      <h3>Earnings: $1/Hour</h3>
      <h3>Quantity: <span>{weedDealers}</span></h3>
      <h3 style={{color: 'green'}}>Price: ${formatMoney(weedDealerPrice)}</h3>
      <button onClick={hireWeedDealers}>
        Hire
      </button>
      <hr />

      <h1>Black Market Organ Dealer</h1>
      <h3>Earnings: $5/Hour</h3>
      <h3>Quantity: <span>{organDealers}</span></h3>
      <h3 style={{color: 'green'}}>Price: ${formatMoney(organDealerPrice)}</h3>
      <button onClick={hireOrganDealers}>
        Hire
      </button>
      <hr />

      <h1>Black Hat Hacker</h1>
      <h3>Earnings: $10/Hour</h3>
      <h3>Quantity: <span>{blackHatHackers}</span></h3>
      <h3 style={{color: 'green'}}>Price: ${formatMoney(blackHatPrice)}</h3>
      <button onClick={hireBlackHatHackers}>
        Hire
      </button>
      <hr />
    </div>
  );
}

export default App;
