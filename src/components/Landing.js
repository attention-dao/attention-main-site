import React from "react";
import MAINIMG from "../assets/bw_main.png";
import "../styles/content.css";
import RightArrow from "../assets/right_arrow.png";

import "react-native-get-random-values"
import "@ethersproject/shims"
// import { ethers } from "ethers";

class Landing extends React.Component {
    constructor() {
        super()
        this.state = {
            offset: 0,
        }
    }
    componentDidMount() {
        this.startCounter()
    }

    async startCounter() {
        var count = 0;
        var run = true;
        var up = true;
        while (run === true) {
            if (up) {
                this.setState({
                    offset: count += .3,
                }) 
            } else {
                this.setState({
                    offset: count -= .3,
                }) 
            }
            
            if (count < 1) {
                up = true;
            }
            if (count > 199) {
                up = false;
            }
            
            if (count < 0 || count > 200) {
                run = false;
            }
            await new Promise(resolve => setTimeout(resolve, 100))
        } 
    }

    rightArrow = () => {
        const rightArrowStyling = {
          height: "auto",
          maxWidth: "18px",
        }
        return (
          <img 
            className="right_arrow"
            style={rightArrowStyling}
            src={RightArrow} 
            alt="right_arrow" 
          />
        )
    }
    renderDescription = () => {
        return (
            <div className="description-wrapper">
                <div className="description">          
                    <h2>Your Attention is in your hands</h2>
                    <br />
                    <p>
                        <strong>
                            It is the divine currency
                            <br />
                            <br />
                            A truly limited resource
                            <br />
                            <br />
                            Rebase DAO with APR Booster from NFT
                            <br />
                            <br />
                            NFT PoC {this.rightArrow()} NFT Mint {this.rightArrow()} Whitepaper and Token Launch {this.rightArrow()} Selective Rebase DAO Launch 
                        </strong>
                    </p>
                </div>
            </div>
        )
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

        return (
            <div 
            style={contentStyle} 
            className="content">
                <div className="content-img-wrapper">
                    <img src={MAINIMG} alt="_" />
                </div>
                <div 
                    className="coming-soon" 
                    style={invertContentStyle}>
                    COMING SOON
                </div>
                {this.renderDescription()}
            </div>
    );
    }
}

export default Landing;
