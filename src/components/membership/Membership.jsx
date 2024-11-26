import React from "react";
import "./membership.css";
import { Fade } from "react-awesome-reveal";
import CLICK from '../../assets/logos/click.png'

const Membership = () => {
  return (
    <section id="membership">
      <div className="membership-container">
        <Fade bottom triggerOnce="true">
          <h1>
            It's your time to <span>Push your limits!</span>
          </h1>
          <h2 className="plans-h2">Membership plans</h2>
        </Fade>

        <Fade bottom triggerOnce="true">
        <div className="membership-cards">
          <div className="membership-card">
            <p className="price">10$</p>
            <p className="per_month">Per month</p>
            <ul>
            <li> - 5 Day / Week</li>
              <li> - 45 min session</li>
              <li> - Access to spinning</li>
            </ul>
            <div className="btn-basic">Uni Gym</div>
          </div>

          <div className="membership-card-strike">
            <p className="price">20$</p>
            <p className="per_month">Per month</p>
            <ul>
            <li> - Unlimited access</li>
              <li> - Ladies zone</li>
              <li> - Access to boxing </li>
              <li> - Gym lessons</li>
              <li> - Snacks and drinks</li>
              <li> - Uni-Mall merchandise</li>
            </ul>
            <div className="btn-strike">Fitness Edge</div>
          </div>

          <div className="membership-card">
            <p className="price">15$</p>
            <p className="per_month">Per month</p>
            <ul>
            <li> - 7 Day / Week</li>
              <li> - 60 min session</li>
              <li> - Access to boxing</li>
              <li> - Access to spinning</li>
              <li> - Group lessons</li>
              <li> - Free drinks</li>
            </ul>
            <div className="btn-pro">Absolute  Fit</div>
          </div>

        </div>
        </Fade>
        
        <Fade bottom triggerOnce="true">
          <h2 className="voucher-h2">Still not sure?</h2>
          <div className="btn-voucher">Get 1 free entry<img src={CLICK} alt="click" className="voucher-click" /></div>
        </Fade>
      </div>
    </section>
  );
};

export default Membership;
