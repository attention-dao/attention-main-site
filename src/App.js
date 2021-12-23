import './styles/App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header.js';
import Landing from './components/Landing.js';
import Mint from './components/Mint.js';
import Footer from './components/Footer.js';
import React from 'react';
import { ethers } from 'ethers';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      distanceFromTop: 950,
      wallet: null,
    }

    this.walletHandler = this.walletHandler.bind(this);
    this.connectToMetaMask = this.connectToMetaMask.bind(this);
  }

  // componentDidMount() {
  //   window.addEventListener('load', () => this.connectToMetaMask())
  // }

  scrollHandler(e) {
    this.setState({
      ...this.state,
      distanceFromTop:  e.target.scrollHeight - e.target.scrollTop,
      wallet: this.state.wallet,
    })
  }

  walletHandler = async (connect) => {
    if (connect) {
      return this.connectToMetaMask();
    }
    return this.disconnectFromMetaMask();
  }

  connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable()
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const wallet = await signer.getAddress();
        if (wallet) {
          return this.setState({
            ...this.state,
            wallet: wallet,
          })
        }
        return this.setState({
          ...this.state,
          wallet: null,
        })
      } catch (err) {
        // Handle Error differently
        console.error(err)
      }
    } else if (window.web3) {
      // Handle this differently
      alert("Use MetaMask");

      return this.setState({
        ...this.state,
        wallet: null,
      })
    } else {
      // Handle this differently.
      alert("Could not connect. Make sure you're using Metamask")

      return this.setState({
        ...this.state,
        wallet: null,
      })
    }
  }

  disconnectFromMetaMask = async () => {
    this.setState({
      ...this.state,
      wallet: null,
    }, () => {
      return setTimeout(() => {
        window.location.reload();
      }, 1)
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App"
          onScroll={(ev) => this.scrollHandler(ev)}>
          <Header 
            wallet={this.state.wallet}
            walletHandler={this.walletHandler}
          />  
          <Routes>
            <Route path="/" element={<Landing distance={this.state.distanceFromTop} />} />
            <Route 
              path="/mint" 
              element={
                <Mint 
                  distance={this.state.distanceFromTop}
                  wallet={this.state.wallet}
                />
              }  
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
