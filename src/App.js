import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, CSSReset, Button, Heading, Box, Grid, Badge, ColorModeProvider, useColorMode } from '@chakra-ui/core';



function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const [pocketMoney, setPocketMoney] = useState(0)
  const [earningsPerSecond, setEarningsPerSecond] = useState(0)

  const [weedDealerPrice, setWeedDealerPrice] = useState(10)
  const [weedDealers, setWeedDealers] = useState(0)

  const [organDealerPrice, setOrganDealerPrice] = useState(100)
  const [organDealers, setOrganDealers] = useState(0)

  const [blackHatPrice, setBlackHatPrice] = useState(1000)
  const [blackHatHackers, setBlackHatHackers] = useState(0)

  const bgColor = { light: "red.500", dark: "red.400" };

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
    <ThemeProvider>
      <ColorModeProvider>
    <CSSReset />
    <div>
      <h1 style={{color: 'green'}}>Cash Clicker</h1>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>

      <Heading textAlign="center" as="h1">Pocket Money</Heading>
      <Heading textAlign="center" as="h1" color="green.500">${pocketMoney}</Heading>
      <Grid templateColumns="repeat(1, 1fr)" justifyItems="center" gap={6} >

      <Box w="50%" borderWidth="1px" rounded="lg" padding={8}>
        <Heading>Welfare Line</Heading>
        <Badge color={bgColor}>Earnings per second</Badge> <span>${earningsPerSecond}</span>
        <Button onClick={increasePocketMoney}>
          Click me
        </Button>
      </Box>
      <Box w="50%"  borderWidth="1px" rounded="lg" padding={8}>
        <Heading>Low-Level Weed Dealer </Heading>
        <Badge color={bgColor}>Earnings Per Second</Badge> <span>$2</span>
        <h3>Quantity: <span>{weedDealers}</span></h3>
        <h3 style={{color: 'green'}}>Price: ${weedDealerPrice} </h3>
        <Button onClick={hireWeedDealers}>
          Hire
        </Button>
      </Box>

      <Box w="50%" borderWidth="1px" rounded="lg" padding={8}>
        <Heading>Black Market Organ Dealer</Heading>
        <Badge color={bgColor}>Earnings Per Second</Badge> <span>$10</span>
        <h3>Quantity: <span>{organDealers}</span></h3>
        <h3 style={{color: 'green'}}>Price: ${organDealerPrice}</h3>
        <Button onClick={hireOrganDealers}>
          Hire
        </Button>
      </Box>

    <Box w="50%" borderWidth="1px" rounded="lg" padding={8}>
      <Heading>Black Hat Hacker</Heading>
      <Badge color={bgColor}>Earnings Per Second</Badge> <span>$30</span>
      <h3>Quantity: <span>{blackHatHackers}</span></h3>
      <h3 style={{color: 'green'}}>Price: ${blackHatPrice}</h3>
      <Button onClick={hireBlackHatHackers}>
        Hire
      </Button>
    </Box>
    </Grid>
    </div>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
