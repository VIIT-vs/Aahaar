import React from 'react';

function Home() {
  return (
    <div>
      <header>Aahaar</header>
      <nav>
        <a href="Home">Home</a>
        <a href="About">About</a>
        <a href="SignIn">Sign in</a>
        <a href="SignUp">Sign Up</a>
      </nav>
      <div className="food-message"> I Need Some Food <span className="emoji">🍛</span></div>
      <img src='/food.webp' alt='' width={1000} height={400}></img>
      
    </div>
  );
}

export default Home;

