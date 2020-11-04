import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';



function App() {
  const [pocketMoney, setPocketMoney] = useState(0)
  const [earningsPerSecond, setEarningsPerSecond] = useState(0)

  const [weedDealerPrice, setWeedDealerPrice] = useState(10)
  const [weedDealers, setWeedDealers] = useState(0)

  const [organDealerPrice, setOrganDealerPrice] = useState(100)
  const [organDealers, setOrganDealers] = useState(0)

  const [blackHatPrice, setBlackHatPrice] = useState(1000)
  const [blackHatHackers, setBlackHatHackers] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPocketMoney(pocketMoney + earningsPerSecond)
    }, 1000);
    return () => clearInterval(interval);
  }, [earningsPerSecond, pocketMoney]);


  const increasePocketMoney = () => {
    return setPocketMoney(pocketMoney + 1)

  }


console.log(pocketMoney)
  const hireWeedDealers = () => {
    if (pocketMoney > weedDealerPrice) {
      setPocketMoney(pocketMoney - weedDealerPrice);
      setEarningsPerSecond(earningsPerSecond + 2)
      setWeedDealerPrice(weedDealerPrice * 1.5)
      setWeedDealers(weedDealers + 1)
    }
  }

  const hireOrganDealers = () => {
    if (pocketMoney > organDealerPrice) {
      setPocketMoney(pocketMoney - organDealerPrice);
      setEarningsPerSecond(earningsPerSecond + 10)
      setOrganDealerPrice(organDealerPrice * 1.5)
      setOrganDealers(organDealers + 1)
    }
  }

  const hireBlackHatHackers = () => {
    if (pocketMoney > blackHatPrice) {
      setPocketMoney(pocketMoney - blackHatPrice);
      setEarningsPerSecond(earningsPerSecond + 30)
      setBlackHatPrice(blackHatPrice * 1.5)
      setBlackHatHackers(blackHatHackers + 1)
    }
  }

  return (
    <div>
      <h1 style={{color: 'green'}}>Cash Clicker</h1>

      <h1>Pocket Money</h1>
      <h1>${pocketMoney}</h1>
      <h4>Earnings per second: <span>${earningsPerSecond}</span></h4>
      <h1>Welfare Line</h1>
      <button onClick={increasePocketMoney}>
        Click me
      </button>
      <hr />

      <h1>Low-Level Weed Dealer </h1>
      <h3>Earnings: $2/Second</h3>
      <h3>Quantity: <span>{weedDealers}</span></h3>
      <h3 style={{color: 'green'}}>Price: ${weedDealerPrice} </h3>
      <button onClick={hireWeedDealers}>
        Hire
      </button>
      <hr />

      <h1>Black Market Organ Dealer</h1>
      <h3>Earnings: $10/Second</h3>
      <h3>Quantity: <span>{organDealers}</span></h3>
      <h3 style={{color: 'green'}}>Price: ${organDealerPrice}</h3>
      <button onClick={hireOrganDealers}>
        Hire
      </button>
      <hr />

      <h1>Black Hat Hacker</h1>
      <h3>Earnings: $30/Second</h3>
      <h3>Quantity: <span>{blackHatHackers}</span></h3>
      <h3 style={{color: 'green'}}>Price: ${blackHatPrice}</h3>
      <button onClick={hireBlackHatHackers}>
        Hire
      </button>
      <hr />
    </div>
  );
}

export default App;
