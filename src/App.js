import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from './logo.svg';
import './App.css';
import {useInterval} from './hooks/useInterval'
import { ThemeProvider, Box, Grid, Heading, Button, Badge, Stack, Image, CSSReset } from '@chakra-ui/core'
import begger from '../src/assets/images/begger.jpg'

function App() {
  const [pocketMoney, setPocketMoney] = useState(0)
  const [earningsPerSecond, setEarningsPerSecond] = useState(0)

  const [weedDealerPrice, setWeedDealerPrice] = useState(15)
  const [weedDealers, setWeedDealers] = useState(0)

  const [organDealerPrice, setOrganDealerPrice] = useState(100)
  const [organDealers, setOrganDealers] = useState(0)

  const [blackHatPrice, setBlackHatPrice] = useState(1000)
  const [blackHatHackers, setBlackHatHackers] = useState(0)

  const [showBegAmount, setShowBegAmount] = useState(false)

  const [begAmount, setBegAmount] = useState(0.5)

  useInterval(() => {
    setPocketMoney(pocketMoney + earningsPerSecond)
  }, 10)

  const increasePocketMoney = () => {
    setShowBegAmount(true)
    return setPocketMoney(pocketMoney + begAmount)
  }

console.log(pocketMoney)

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

  //  const onTapStart = (event, info) => {
  //     console.log(event)
  //     if (event.type === 'pointerdown') {
  //       setShowBegAmount(true)
  //     } else {
  //       setShowBegAmount(false)
  //     }
  //  }
   const onClick = (event) => {
    setShowBegAmount(true)
   }
   const onMouseUp = (event) => {
      console.log(event)
    setShowBegAmount(false)
   }

   console.log(showBegAmount)
  return (
    <ThemeProvider>
      <CSSReset />
         <Heading textAlign="center" style={{color: 'green'}}>Cash Clicker</Heading>
      <Grid gridTemplateColumns="repeat(1, 1fr)" gap={6} justifyItems="center">
        <Box mt={6}>
          <Heading>Pocket Money</Heading>
          <h1>${formatMoney(pocketMoney)}</h1>
          <h4>Earnings per hour: <span>${formatEarnings(earningsPerSecond)}</span></h4>
        </Box>


        <Box  borderWidth="1px" rounded="lg" padding={8}>
          <h1>Beg</h1>
          <motion.div whileTap={{ scale: 0.92 }}  onMouseDown={onClick} onMouseUp={onMouseUp}>
            {showBegAmount && <h1>{begAmount}</h1>}
            <img onClick={increasePocketMoney} src={begger} style={{width: '200px', height: '200px'}}/>

          </motion.div>

        </Box>

        <Box w="50%" borderWidth="1px" rounded="lg" padding={8}>

          <h1>Low-Level Weed Dealer </h1>
          <h3>Earnings: $1/Hour</h3>
          <h3>Quantity: <span>{weedDealers}</span></h3>
          <Badge variantColor="green">Price: ${formatMoney(weedDealerPrice)}</Badge>
          <Button onClick={hireWeedDealers}>
            Hire
          </Button>
        </Box>

        <Box w="50%" borderWidth="1px" rounded="lg" padding={8}>

          <h1>Black Market Organ Dealer</h1>
          <h3>Earnings: $5/Hour</h3>
          <h3>Quantity: <span>{organDealers}</span></h3>
          <Badge variantColor="green">Price: ${formatMoney(organDealerPrice)}</Badge>
          <Button onClick={hireOrganDealers}>
            Hire
          </Button>
        </Box>
        <Box w="50%" borderWidth="1px" rounded="lg" padding={8}>
          <h1>Black Hat Hacker</h1>
          <h3>Earnings: $10/Hour</h3>
          <h3>Quantity: <span>{blackHatHackers}</span></h3>
            <Badge variantColor="green">Price: <span>${formatMoney(blackHatPrice)}</span></Badge>
          <Button onClick={hireBlackHatHackers}>
            Hire
          </Button>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
