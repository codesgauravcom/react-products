import React, { Component } from 'react'
import '../Mycss/mystyle3.css'


export default class Pricing extends Component {
    render() {
        return (
            <div>
            <div class="background">
  <div class="container">
    <div class="panel pricing-table">
      
      <div class="pricing-plan">
        <img className="pp" src="https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNuZWFrZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="loading" class="pricing-img"/>
        <h2 class="pricing-header">Nike</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">30% OFF</li>
          <li class="pricing-features-item">Just Do It Variations
Just do it! Every damn day</li>
        </ul>
        <span class="pricing-price">$5</span>
        <a href="/" class="pricing-button">Sign up</a>
      </div>
      
      <div class="pricing-plan">
        <img className="pp" src="https://images.unsplash.com/photo-1606297255627-c58c609140e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGFkaWRhcyUyMHNuZWFrZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" width="400px"  alt="Loading" class="pricing-img"/>
        <h2 class="pricing-header">Adidas</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">50%OFF</li>
          <li class="pricing-features-item"> “Impossible Is Nothing”</li>
        </ul>
        <span class="pricing-price">$8</span>
      </div>
      
      <div class="pricing-plan">
        <img className="pp" src="https://images.unsplash.com/photo-1558457663-43bc46ee2a04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHB1bWElMjBzaG9lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" width="300px" alt="error loading"/>
        <h2 class="pricing-header">Puma</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">60%OFF</li>
          <li class="pricing-features-item">PUMA always looks to do better </li>
        </ul>
        <span class="pricing-price">$12</span>
      </div>
      
    </div>
  </div>
</div>
                
            </div>
        )
    }
}
