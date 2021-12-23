import React from "react";
import HeaderLogo from "../assets/header_main.png"
import TwitterLogo from "../assets/links/twitter_icon.png"; 
import DiscordLogo from "../assets/links/discord_icon.png"; 
import Web3 from "web3"
import "../styles/header.css";

import "react-native-get-random-values"
import "@ethersproject/shims"
// import { ethers } from "ethers";

class Header extends React.Component {
  renderMint = () => {
    const onMintPage = window.location.pathname === "/mint";
    return onMintPage
      ? this.renderMintWallet()
      : this.renderMintLink()
  }

  renderMintLink = () => {
    return (
      <a href="/mint" className="wallet">
        <div className="mint-link">
          Mint
        </div>
      </a>
    )
  }

  renderMintWallet = () => {
    return this.props.wallet !== null
      ? (
        <div
          // On Hover Show Disconnect?
          onClick={() => this.disconnectWallet()} 
          className="wallet wallet-connected">
          {this.displayWalletAddress(this.props.wallet)}
        </div>
      )
      : (
        <div 
          className="wallet wallet-disconnected"
          onClick={(e) => this.connectWallet()}>
          Connect Wallet
        </div>
      )
  }

  connectWallet = async () => {
    this.props.walletHandler(true);
  }

  disconnectWallet = async () => {
    this.props.walletHandler(false);
  }

  renderSocials = () => {
    return (
      <div className="sub-header-socials">
        <a href="https://discord.gg/HtzUAaNAsk"
          target="_blank" rel="noreferrer">
          <img src={DiscordLogo} alt="Discord" />
        </a>
        <a href="https://twitter.com/Attention_fi"
          target="_blank" rel="noreferrer">
          <img src={TwitterLogo} alt="Twitter" />
        </a>
      </div>
    )
  }

  displayWalletAddress = (address) => {
    console.log(address)
    if (address != null) {
      return address.substr(0, 4) + "..." + address.substr(address.length - 4, address.length)
    }
    // Handle error differently
    return "0x0"
  }

  render() {
    return (
      <div className="header">
        <div className="sub-header sub-header-left">
          <a href="/">
            <img src={HeaderLogo} alt="_" />
          </a>
        </div>
        <div className="sub-header sub-header-right">
          {this.renderSocials()}
          {this.renderMint()}
        </div>
      </div>
    );
  }
}
  
  export default Header;
  