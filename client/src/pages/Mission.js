import React from 'react';
import '../App.css';
import './Mission.css';

export default function Mission() {
  return (
    <div  className="services">
      <div className="row">
        <div className ="col-6">
          <div className="card how">
            <div className="card-header">
              <h2>How We Do It</h2>
              <blockquote className="blockquote">
                <p className="">“Not all those who wander are lost.”</p>
                <footer className="blockquote-footer">J.R.R. Tolkien</footer>
              </blockquote>
            </div>
            <div className="card-body">
              <p>
                Don't let the unknown deter your adventurous spirit. By enlisting the expertise of our guides, you can be confident that you are prepared with the knowledge and skills that you will need to make your adventure a success.
                By connecting users to campgrounds where they want to go, and guides to lead them on their adventure, we allow you to explore to your hearts content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
        <div className="card why">
            <div className="card-header">
              <h2>Why We Care</h2>
              <blockquote className="blockquote">
                <p className="">“I felt my lungs inflate with the onrush of scenery—air, mountains, trees, people.<br></br>I thought, ‘This is what it is to be happy.’”</p>
                <footer className="blockquote-footer">Sylvia Plath</footer>
              </blockquote>
            </div>
            <div className="card-body">
              <p>
                Our mission is to connect people with people, and bring them to nature. Our guides have a passion for adventure, and the sensibility to lead you in your journey to ensure security and enjoyment.
                We care about you, nature, and your experience in it. Helping everyone enjoy their Avendtures is what fuels us, and sharing the wonder of the unkowns is was keeps the fuel burning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
