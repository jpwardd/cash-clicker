import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';



function App() {
  const [pocketMoney, setPocketMoney] = useState(0)
  const [weedDealerPrice, setWeedDealerPrice] = useState(10)
  const [earningsPerSecond, setEarningsPerSecond] = useState(0)
  const [weedDealers, setWeedDealers] = useState(0)

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
      setPocketMoney(pocketMoney - weedDealerPrice);
      setEarningsPerSecond(earningsPerSecond + 2)
      setWeedDealerPrice(weedDealerPrice * 1.5)
      setWeedDealers(weedDealers + 1)
    }
  }

  const hireOrganDealers = () => {
    if (pocketMoney > organDealerPrice) {
      setPocketMoney(pocketMoney - weedDealerPrice);
      setEarningsPerSecond(earningsPerSecond + 2)
      setWeedDealerPrice(weedDealerPrice * 1.5)
      setWeedDealers(weedDealers + 1)
    }
  }

  true && false = false
  false && true = false




  return (
    <div>
      <h1>Cash Clicker</h1>

      <h1>Pocket Money</h1>
      <h1>${pocketMoney}</h1>
      <h1>Revenue</h1>
      <h6>earnings per second</h6>
      <h1>Welfare line</h1>
      <button onClick={increasePocketMoney}>
        click me
      </button>
      <hr />
      <h1>Low level Weed Dealer <span>{weedDealers}</span></h1>
      <h3 style={{color: 'green'}}>Price: ${weedDealerPrice}</h3>
        <button onClick={hire}>
        hire
      </button>

      <hr />

      <h1>Black market organ dealer</h1>
      <button>
        click me
      </button>
      <hr />
      <h1>Black Hat Hacker</h1>
      <button>
        click me
      </button>
      <hr />
    </div>
  );
}

export default App;
