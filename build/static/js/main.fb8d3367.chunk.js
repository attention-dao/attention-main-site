(this.webpackJsonpAttentionDAO=this.webpackJsonpAttentionDAO||[]).push([[0],{247:function(A,t,e){},250:function(A,t,e){},265:function(A,t){},267:function(A,t){},271:function(A,t){},272:function(A,t){},299:function(A,t){},301:function(A,t){},311:function(A,t){},313:function(A,t){},323:function(A,t){},325:function(A,t){},341:function(A,t){},375:function(A,t){},376:function(A,t){},446:function(A,t){},448:function(A,t){},453:function(A,t){},455:function(A,t){},462:function(A,t){},474:function(A,t){},477:function(A,t){},482:function(A,t){},555:function(A,t,e){},557:function(A,t,e){},558:function(A,t,e){},559:function(A,t,e){},560:function(A,t,e){"use strict";e.r(t);var n=e(10),a=e.n(n),r=e(235),s=e.n(r),c=(e(247),e(248),e(33)),i=e(3),o=e.n(i),l=e(45),u=e(4),b=e(5),d=e(11),f=e(7),h=e(6),j=(e(250),e(240)),p=e(17),v=e.p+"static/media/header_main.688d5946.png",g=e.p+"static/media/twitter_icon.57573394.png",O=e.p+"static/media/discord_icon.497f2167.png",m=(e(251),e(555),e(131),e(132),e(9)),w=function(A){Object(f.a)(e,A);var t=Object(h.a)(e);function e(){var A;Object(u.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(A=t.call.apply(t,[this].concat(a))).renderMint=function(){return"/mint"===window.location.pathname?A.renderMintWallet():A.renderMintLink()},A.renderMintLink=function(){return Object(m.jsx)("a",{href:"/mint",className:"wallet",children:Object(m.jsx)("div",{className:"mint-link",children:"Mint"})})},A.renderMintWallet=function(){return null!==A.props.wallet?Object(m.jsx)("div",{onClick:function(){return A.disconnectWallet()},className:"wallet wallet-connected",children:A.displayWalletAddress(A.props.wallet)}):Object(m.jsx)("div",{className:"wallet wallet-disconnected",onClick:function(t){return A.connectWallet()},children:"Connect Wallet"})},A.connectWallet=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:A.props.walletHandler(!0);case 1:case"end":return t.stop()}}),t)}))),A.disconnectWallet=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:A.props.walletHandler(!1);case 1:case"end":return t.stop()}}),t)}))),A.renderSocials=function(){return Object(m.jsxs)("div",{className:"sub-header-socials",children:[Object(m.jsx)("a",{href:"https://discord.gg/HtzUAaNAsk",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{src:O,alt:"Discord"})}),Object(m.jsx)("a",{href:"https://twitter.com/Attention_fi",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{src:g,alt:"Twitter"})})]})},A.displayWalletAddress=function(A){return console.log(A),null!=A?A.substr(0,4)+"..."+A.substr(A.length-4,A.length):"0x0"},A}return Object(b.a)(e,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("div",{className:"sub-header sub-header-left",children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)("img",{src:v,alt:"_"})})}),Object(m.jsxs)("div",{className:"sub-header sub-header-right",children:[this.renderSocials(),this.renderMint()]})]})}}]),e}(a.a.Component),x=w,k=e.p+"static/media/bw_main.2bc90d10.png",C=(e(557),function(A){Object(f.a)(e,A);var t=Object(h.a)(e);function e(){var A;return Object(u.a)(this,e),(A=t.call(this)).rightArrow=function(){return Object(m.jsx)("img",{className:"right_arrow",style:{height:"auto",maxWidth:"18px"},src:"data:image/png;base64,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",alt:"right_arrow"})},A.renderDescription=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"description",children:[Object(m.jsx)("h2",{children:"Your Attention is in your hands"}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:Object(m.jsxs)("strong",{children:["It is the divine currency",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"A truly limited resource",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Rebase DAO with APR Booster from NFT",Object(m.jsx)("br",{}),"NFT PoC ",A.rightArrow()," NFT Mint ",A.rightArrow()," Whitepaper and Token Launch ",A.rightArrow()," Selective Rebase DAO Launch"]})})]})})},A.state={offset:0},A}return Object(b.a)(e,[{key:"componentDidMount",value:function(){this.startCounter()}},{key:"startCounter",value:function(){var A=Object(l.a)(o.a.mark((function A(){var t,e,n;return o.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:t=0,e=!0,n=!0;case 3:if(!0!==e){A.next=12;break}return n?this.setState({offset:t+=.3}):this.setState({offset:t-=.3}),t<1&&(n=!0),t>199&&(n=!1),(t<0||t>200)&&(e=!1),A.next=10,new Promise((function(A){return setTimeout(A,100)}));case 10:A.next=3;break;case 12:case"end":return A.stop()}}),A,this)})));return function(){return A.apply(this,arguments)}}()},{key:"render",value:function(){var A=this.state.offset+Math.floor(this.props.distance/20),t=this.state.offset+Math.floor(this.props.distance/16),e=this.state.offset+90-Math.floor(this.props.distance/4),n=this.state.offset+225+Math.floor(this.props.distance/16),a=this.state.offset+239-Math.floor(this.props.distance/16),r={backgroundImage:"linear-gradient(".concat(e,"deg, rgba(253,201,").concat(t,",1), rgba(155,0,206,1) ").concat(A,"%, rgba(33,").concat(n,",").concat(a,",1) 100%)")},s={backgroundImage:"linear-gradient(".concat(e,"deg, rgba(33,").concat(n,",").concat(a,",1), rgba(155,0,206,1) ").concat(e,"%, rgba(253,201,").concat(t,",1) 100%)")};return Object(m.jsxs)("div",{style:r,className:"content",children:[Object(m.jsx)("img",{src:k,alt:"_"}),Object(m.jsx)("div",{className:"coming-soon",style:s,children:"COMING SOON"}),this.renderDescription()]})}}]),e}(a.a.Component)),N=C,B=(e(558),function(A){Object(f.a)(e,A);var t=Object(h.a)(e);function e(){var A;return Object(u.a)(this,e),(A=t.call(this)).renderDescription=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"description invert-me",children:[Object(m.jsx)("h2",{children:"Your Attention is in your hands"}),Object(m.jsx)("p",{children:"NFT Mint Q1 2022"}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"Rebase DAO Staking Booster"}),Object(m.jsx)("p",{children:"Details TBA"}),Object(m.jsx)("br",{}),Object(m.jsxs)("p",{children:["Your MetaMask wallet does not need to be connected until the mint is live.",Object(m.jsx)("br",{}),"We will not be running stealth launches of the NFT or DAO."]})]})})},A.handleMintClick=function(){alert("Mint has not begun. Check the Discord for more information.")},A.handleButtonEnabled=function(){return null!=A.props.wallet},A.state={offset:0},A}return Object(b.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var A=this,t=this.state.offset+Math.floor(this.props.distance/20),e=this.state.offset+Math.floor(this.props.distance/16),n=this.state.offset+90-Math.floor(this.props.distance/4),a=this.state.offset+225+Math.floor(this.props.distance/16),r=this.state.offset+239-Math.floor(this.props.distance/16),s={backgroundImage:"linear-gradient(".concat(n,"deg, rgba(253,201,").concat(e,",1), rgba(155,0,206,1) ").concat(t,"%, rgba(33,").concat(a,",").concat(r,",1) 100%)")},c={backgroundImage:"linear-gradient(".concat(n,"deg, rgba(33,").concat(a,",").concat(r,",1), rgba(155,0,206,1) ").concat(n,"%, rgba(253,201,").concat(e,",1) 100%)")};return console.log(this.handleButtonEnabled()),Object(m.jsxs)("div",{style:s,className:"content-mint",children:[Object(m.jsx)("img",{src:k,alt:"_"}),Object(m.jsx)("button",{onClick:function(){return A.handleMintClick()},disabled:this.handleButtonEnabled()?"":"disabled",className:this.handleButtonEnabled()?"coming-soon enabled":"coming-soon disabled",style:this.handleButtonEnabled()?c:{color:"white"},children:"MINT"}),this.renderDescription()]})}}]),e}(a.a.Component)),M=(e(559),e.p+"static/media/github_icon.c584a873.png");e.p;var H=function(){return Object(m.jsxs)("div",{className:"footer",children:["Stay tuned",Object(m.jsx)("div",{className:"footer-links",children:Object(m.jsx)("a",{href:"https://github.com/attention-dao/attention-main-site",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{src:M,alt:"GitHub"})})})]})},y=e(239),P=function(A){Object(f.a)(e,A);var t=Object(h.a)(e);function e(){var A;return Object(u.a)(this,e),(A=t.call(this)).walletHandler=function(){var t=Object(l.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",A.connectToMetaMask());case 2:return t.abrupt("return",A.disconnectFromMetaMask());case 3:case"end":return t.stop()}}),t)})));return function(A){return t.apply(this,arguments)}}(),A.connectToMetaMask=Object(l.a)(o.a.mark((function t(){var e,n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=21;break}return t.prev=1,t.next=4,window.ethereum.enable();case 4:return e=new y.a.providers.Web3Provider(window.ethereum),t.next=7,e.getSigner();case 7:return n=t.sent,t.next=10,n.getAddress();case 10:if(!(a=t.sent)){t.next=13;break}return t.abrupt("return",A.setState(Object(c.a)(Object(c.a)({},A.state),{},{wallet:a})));case 13:return t.abrupt("return",A.setState(Object(c.a)(Object(c.a)({},A.state),{},{wallet:null})));case 16:t.prev=16,t.t0=t.catch(1),console.error(t.t0);case 19:t.next=28;break;case 21:if(!window.web3){t.next=26;break}return alert("Use MetaMask"),t.abrupt("return",A.setState(Object(c.a)(Object(c.a)({},A.state),{},{wallet:null})));case 26:return alert("Could not connect. Make sure you're using Metamask"),t.abrupt("return",A.setState(Object(c.a)(Object(c.a)({},A.state),{},{wallet:null})));case 28:case"end":return t.stop()}}),t,null,[[1,16]])}))),A.disconnectFromMetaMask=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:A.setState(Object(c.a)(Object(c.a)({},A.state),{},{wallet:null}),(function(){return setTimeout((function(){window.location.reload()}),1)}));case 1:case"end":return t.stop()}}),t)}))),A.state={distanceFromTop:950,wallet:null},A.walletHandler=A.walletHandler.bind(Object(d.a)(A)),A.connectToMetaMask=A.connectToMetaMask.bind(Object(d.a)(A)),A}return Object(b.a)(e,[{key:"scrollHandler",value:function(A){this.setState(Object(c.a)(Object(c.a)({},this.state),{},{distanceFromTop:A.target.scrollHeight-A.target.scrollTop,wallet:this.state.wallet}))}},{key:"render",value:function(){var A=this;return Object(m.jsx)(j.a,{children:Object(m.jsxs)("div",{className:"App",onScroll:function(t){return A.scrollHandler(t)},children:[Object(m.jsx)(x,{wallet:this.state.wallet,walletHandler:this.walletHandler}),Object(m.jsxs)(p.c,{children:[Object(m.jsx)(p.a,{path:"/",element:Object(m.jsx)(N,{distance:this.state.distanceFromTop})}),Object(m.jsx)(p.a,{path:"/mint",element:Object(m.jsx)(B,{distance:this.state.distanceFromTop,wallet:this.state.wallet})})]}),Object(m.jsx)(H,{})]})})}}]),e}(a.a.Component),U=P;s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root"))}},[[560,1,2]]]);
//# sourceMappingURL=main.fb8d3367.chunk.js.map