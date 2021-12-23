import React from "react";
import MAINIMG from "../assets/bw_main.png";
import "../styles/mint.css";
import RightArrow from "../assets/right_arrow.png";

import "react-native-get-random-values"
import "@ethersproject/shims"
// import { ethers } from "ethers";

class Mint extends React.Component {
    constructor() {
        super()
        this.state = {
            offset: 0,
        }
    }
    componentDidMount() {
        // Mint page should be as stable as possible
        // this.startCounter()
    }

    renderDescription = () => {
        return (
            <div>
                <div className="description invert-me">          
                    <h2>Your Attention is in your hands</h2>
                    <p>
                        NFT Mint Q1 2022
                    </p>
                    <br />
                    <p>
                        Rebase DAO Staking Booster
                    </p>
                    <p>
                        Details TBA
                    </p>
                    <br />
                    <p>
                        Your MetaMask wallet does not need to be connected until the mint is live.
                        <br />
                        We will not be running stealth launches of the NFT or DAO.
                    </p>
                </div>
            </div>
        )
    }

    handleMintClick = () => {
        // if (this.props.wallet != null) {
            
        // }
        alert("Mint has not begun. Check the Discord for more information.")
    }

    handleButtonEnabled = () => {
        // Add Check for Mint Open
        // App Level will hold all state.
        // Avoid needing to prop drill, and avoid use of context
        // if (this.props.mintOpen && this.props.wallet != null
        //     this.props.mintSupplyAvailable) {
        // return true
        // }
        if (this.props.wallet != null) {
            return true;
        }
        return false;
    }

    render() {
        // "linear-gradient(90deg, rgba(253,201,29,1) 0%, rgba(155,0,206,1) 61%, rgba(33,225,239,1) 100%);"
        const r1 = this.state.offset + Math.floor(this.props.distance / 20);
        const r2 = this.state.offset + Math.floor(this.props.distance / 16);
        const r3 = this.state.offset + 90 - Math.floor(this.props.distance / 4);
        const r4 = this.state.offset + 225 + Math.floor(this.props.distance / 16);
        const r5 = this.state.offset + 239 - Math.floor(this.props.distance / 16);
        let newGradient = `linear-gradient(${r3}deg, rgba(253,201,${r2},1), rgba(155,0,206,1) ${r1}%, rgba(33,${r4},${r5},1) 100%)`
        let invertNewGradient = `linear-gradient(${r3}deg, rgba(33,${r4},${r5},1), rgba(155,0,206,1) ${r3}%, rgba(253,201,${r2},1) 100%)`
        
        const contentStyle = {
            backgroundImage: newGradient
        };
        const invertContentStyle = {
            backgroundImage: invertNewGradient
        }

        console.log(this.handleButtonEnabled())
        return (
            <div 
            style={contentStyle} 
            className="content-mint">
                <img src={MAINIMG} alt="_"></img>
                <button 
                    onClick={() => this.handleMintClick()}
                    disabled={this.handleButtonEnabled() ? "" : "disabled"}
                    className={this.handleButtonEnabled() 
                        ? "coming-soon enabled" 
                        : "coming-soon disabled"}
                    style={this.handleButtonEnabled() ? invertContentStyle : { color: "white" }}>
                    MINT
                </button>
                {this.renderDescription()}
            </div>
    );
    }
}

export default Mint;
