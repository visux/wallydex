import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
})
export class ExchangePage implements OnInit {
  exchanges: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('./../../assets/json/exchanges.json').subscribe((data: any) => {
      this.exchanges = data;
    });
  }
  

}



  /*
  

  <a class="single-post-wrapper-browser flex flex-center" href="https://pancakeswap.finance/" target="_blank">
    <img class="single-post-image ls-is-cached lazyloaded" alt="Pancake Swap" src="https://alphawallet.com/wp-content/uploads/2021/04/Pancake-Swap.png" data-src="https://alphawallet.com/wp-content/uploads/2021/04/Pancake-Swap.png" loading="lazy"><noscript><img class="single-post-image" alt="Pancake Swap" src="https://alphawallet.com/wp-content/uploads/2021/04/Pancake-Swap.png" data-eio="l"></noscript>
    <div>
      <div class="post-title">
        Pancake Swap	
      </div>
      <div class="post-description">
        <p>Decentralized Exchange on BSC</p>
      </div>
    </div>
    
  </a>
  

  <a class="single-post-wrapper-browser flex flex-center" href="https://quickswap.exchange/#/swap" target="_blank">
    <img class="single-post-image ls-is-cached lazyloaded" alt="QuickSwap" src="https://alphawallet.com/wp-content/uploads/2021/04/Quickswap.png" data-src="https://alphawallet.com/wp-content/uploads/2021/04/Quickswap.png" loading="lazy"><noscript><img class="single-post-image" alt="QuickSwap" src="https://alphawallet.com/wp-content/uploads/2021/04/Quickswap.png" data-eio="l"></noscript>
    <div>
      <div class="post-title">
        QuickSwap	
      </div>
      <div class="post-description">
        <p>Most Popular DEX on Polygon</p>
      </div>
    </div>
    
  </a>
  

  <a class="single-post-wrapper-browser flex flex-center" href="https://balancer.exchange/" target="_blank">
    <img class="single-post-image lazyloaded" alt="Balancer" src="https://alphawallet.com/wp-content/uploads/2021/01/Balancer.png" data-src="https://alphawallet.com/wp-content/uploads/2021/01/Balancer.png" loading="lazy"><noscript><img class="single-post-image" alt="Balancer" src="https://alphawallet.com/wp-content/uploads/2021/01/Balancer.png" data-eio="l"></noscript>
    <div>
      <div class="post-title">
        Balancer	
      </div>
      <div class="post-description">
        <p>Protocol for programmable liquidity</p>
      </div>
    </div>
    
  </a>
  

  <a class="single-post-wrapper-browser flex flex-center" href="http://www.cofix.io/" target="_blank">
    <img class="single-post-image ls-is-cached lazyloaded" alt="CoFiX" src="https://alphawallet.com/wp-content/uploads/2020/10/CoFiX.png" data-src="https://alphawallet.com/wp-content/uploads/2020/10/CoFiX.png" loading="lazy"><noscript><img class="single-post-image" alt="CoFiX" src="https://alphawallet.com/wp-content/uploads/2020/10/CoFiX.png" data-eio="l"></noscript>
    <div>
      <div class="post-title">
        CoFiX	
      </div>
      <div class="post-description">
        <p>On-Chain Market Making</p>
      </div>
    </div>
    
  </a>
  

  <a class="single-post-wrapper-browser flex flex-center" href="https://synthetix.exchange/" target="_blank">
    <img class="single-post-image ls-is-cached lazyloaded" alt="Synthetix" src="https://alphawallet.com/wp-content/uploads/2020/09/Synthetix.png" data-src="https://alphawallet.com/wp-content/uploads/2020/09/Synthetix.png" loading="lazy"><noscript><img class="single-post-image" alt="Synthetix" src="https://alphawallet.com/wp-content/uploads/2020/09/Synthetix.png" data-eio="l"></noscript>
    <div>
      <div class="post-title">
        Synthetix	
      </div>
      <div class="post-description">
        <p>On-chain exposure to any asset</p>
      </div>
    </div>
    
  </a>
  

  <a class="single-post-wrapper-browser flex flex-center" href="https://sushiswap.fi/" target="_blank">
    <img class="single-post-image lazyloaded" alt="Sushiswap" src="https://alphawallet.com/wp-content/uploads/2021/02/SushiSwap.png" data-src="https://alphawallet.com/wp-content/uploads/2021/02/SushiSwap.png" loading="lazy"><noscript><img class="single-post-image" alt="Sushiswap" src="https://alphawallet.com/wp-content/uploads/2021/02/SushiSwap.png" data-eio="l"></noscript>
    <div>
      <div class="post-title">
        Sushiswap	
      </div>
      <div class="post-description">
        <p>Vampire fork of Uniswap</p>
      </div>
    </div>
    
  </a>
  

  <a class="single-post-wrapper-browser flex flex-center" href="https://exchange.loopring.io/" target="_blank">
    <img class="single-post-image lazyloaded" alt="Loopring" src="https://alphawallet.com/wp-content/uploads/2021/01/Loopring.png" data-src="https://alphawallet.com/wp-content/uploads/2021/01/Loopring.png" loading="lazy"><noscript><img class="single-post-image" alt="Loopring" src="https://alphawallet.com/wp-content/uploads/2021/01/Loopring.png" data-eio="l"></noscript>
    <div>
      <div class="post-title">
        Loopring	
      </div>
      <div class="post-description">
        <p>zkRollup Exchange</p>
      </div>
    </div>
    
  </a>
  

  <a class="single-post-wrapper-browser flex flex-center" href="https://trade.dydx.exchange/" target="_blank">
    <img class="single-post-image lazyloaded" alt="Dydx" src="https://alphawallet.com/wp-content/uploads/2020/09/Dydx.png" data-src="https://alphawallet.com/wp-content/uploads/2020/09/Dydx.png" loading="lazy"><noscript><img class="single-post-image" alt="Dydx" src="https://alphawallet.com/wp-content/uploads/2020/09/Dydx.png" data-eio="l"></noscript>
    <div>
      <div class="post-title">
        Dydx	
      </div>
      <div class="post-description">
        <p>Non-custodial trading platform</p>
      </div>
    </div>
    
  </a>
  

  <a class="single-post-wrapper-browser flex flex-center" href="https://app.bancor.network/eth/data" target="_blank">
    <img class="single-post-image lazyloaded" alt="Bancor" src="https://alphawallet.com/wp-content/uploads/2021/01/Bancor.png" data-src="https://alphawallet.com/wp-content/uploads/2021/01/Bancor.png" loading="lazy"><noscript><img class="single-post-image" alt="Bancor" src="https://alphawallet.com/wp-content/uploads/2021/01/Bancor.png" data-eio="l"></noscript>
    <div>
      <div class="post-title">
        Bancor	
      </div>
      <div class="post-description">
        <p>Exchange for ERC20 tokens</p>
      </div>
    </div>
    
  </a>
  

  <a class="single-post-wrapper-browser flex flex-center" href="https://kyberswap.com/" target="_blank">
    <img class="single-post-image lazyloaded" alt="KyberSwap" src="https://alphawallet.com/wp-content/uploads/2020/09/Swap.png" data-src="https://alphawallet.com/wp-content/uploads/2020/09/Swap.png" loading="lazy"><noscript><img class="single-post-image" alt="KyberSwap" src="https://alphawallet.com/wp-content/uploads/2020/09/Swap.png" data-eio="l"></noscript>
    <div>
      <div class="post-title">
        KyberSwap	
      </div>
      <div class="post-description">
        <p class="p1"><span class="s1">One Exchange. Unlimited Trading</span></p>
      </div>
    </div>
    
  </a>
  

  <a class="single-post-wrapper-browser flex flex-center" href="https://tokenlon.im/instant" target="_blank">
    <img class="single-post-image lazyloaded" alt="Tokenlon" src="https://alphawallet.com/wp-content/uploads/2021/01/Tokenlon.png" data-src="https://alphawallet.com/wp-content/uploads/2021/01/Tokenlon.png" loading="lazy"><noscript><img class="single-post-image" alt="Tokenlon" src="https://alphawallet.com/wp-content/uploads/2021/01/Tokenlon.png" data-eio="l"></noscript>
    <div>
      <div class="post-title">
        Tokenlon	
      </div>
      <div class="post-description">
        <p>DEX powered by 0x protocol.</p>
      </div>
    </div>
    
  </a>
  

  <a class="single-post-wrapper-browser flex flex-center" href="https://ddex.io/margin/" target="_blank">
    <img class="single-post-image lazyloaded" alt="DDEX Margin" src="https://alphawallet.com/wp-content/uploads/2020/09/ddex.png" data-src="https://alphawallet.com/wp-content/uploads/2020/09/ddex.png" loading="lazy"><noscript><img class="single-post-image" alt="DDEX Margin" src="https://alphawallet.com/wp-content/uploads/2020/09/ddex.png" data-eio="l"></noscript>
    <div>
      <div class="post-title">
        DDEX Margin	
      </div>
      <div class="post-description">
        <p class="p1"><span class="s1">Trade with levarage</span></p>
<div id="gtx-trans" style="position: absolute; left: 173px; top: 48px;">
<div class="gtx-trans-icon"></div>
</div>
      </div>
    </div>
    
  </a>
  

  <a class="single-post-wrapper-browser flex flex-center" href="https://instant.airswap.io/swap" target="_blank">
    <img class="single-post-image lazyloaded" alt="AirSwap" src="https://alphawallet.com/wp-content/uploads/2020/09/Airswap.png" data-src="https://alphawallet.com/wp-content/uploads/2020/09/Airswap.png" loading="lazy"><noscript><img class="single-post-image" alt="AirSwap" src="https://alphawallet.com/wp-content/uploads/2020/09/Airswap.png" data-eio="l"></noscript>
    <div>
      <div class="post-title">
        AirSwap	
      </div>
      <div class="post-description">
        <p>Automated trading for ETH tokens</p>
      </div>
    </div>
    
  </a>
  

  <a class="single-post-wrapper-browser flex flex-center" href="https://app.nuo.network/" target="_blank">
    <img class="single-post-image lazyloaded" alt="Nuo" src="https://alphawallet.com/wp-content/uploads/2021/01/Nuo.png" data-src="https://alphawallet.com/wp-content/uploads/2021/01/Nuo.png" loading="lazy"><noscript><img class="single-post-image" alt="Nuo" src="https://alphawallet.com/wp-content/uploads/2021/01/Nuo.png" data-eio="l"></noscript>
    <div>
      <div class="post-title">
        Nuo	
      </div>
      <div class="post-description">
        <p>Seamless DeFi Swap</p>
      </div>
    </div>
    
  </a>
  </div>
**/


  

  