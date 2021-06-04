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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
