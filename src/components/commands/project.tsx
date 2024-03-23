import React from 'react';
import './style.css'; // Assuming you have the CSS in a separate file named styles.css

function project() {
  return (
    <section>
      {/* <h1>Our team</h1> */}
      <div className="avatars">
       <a href="https://debojyoti.netlify.app/"> <img className="avatar" src="/portfolio.jpg" alt="" /></a>
       <a href="https://github.com/debu4natsu/headlines"> <img className="avatar" src="/news.jpg" alt="" /></a>
       <a href="https://github.com/debu4natsu/Car-Rental-System"> <img className="avatar" src="/car.jpg" alt="" /></a>
        
      </div>
    </section>
  );
}

export default project;
