import React from "react";
import "../styles/HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
	const navigate = useNavigate();

    const handleLogin = () => {
      navigate("/login");
    };

	const handleSignUp = () => {
      navigate("/signup");
    };


  return (
    <div className="homepage-container">
      {/* Header */}
      <header className="homepage-header">
        <h1>bookshelf</h1>
      </header>

      {/* Announcement Banner */}
      <div className="announcement-banner">
        <h2>One stop destination for your favourite Books!!!!!!!</h2>
      </div>

      <div className="homepage-content">
        {/* Discover Section */}
        <div className="discover-section">
          <h3>Discover & read more</h3>
          <button className="btn btn-amazon">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon logo"
              className="btn-icon"
            />
            Continue with Amazon
          </button>
          <button className="btn btn-apple">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple logo"
              className="btn-icon"
            />
            Continue with Apple
          </button>
		  
          <button className="btn btn-email" onClick={handleSignUp}>Sign up with email</button>
          <p className="terms">
            By creating an account, you agree to the Bookshelf{" "}
            <a href="/terms">Terms of Service</a> and{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
          <p className="signin-link">
            Already a member? <a href="/login">Sign In</a>
          </p>
        </div>

        {/* Info Section */}
        <div className="info-section">
          <div className="info-box">
            <h4>Deciding what to read next?</h4>
            <p>
              You’re in the right place. Tell us what titles or genres you’ve
              enjoyed in the past, and we’ll give you surprisingly insightful
              recommendations.
            </p>
          </div>
          <div className="info-box">
            <h4>What are your friends reading?</h4>
            <p>
              Chances are your friends are discussing their favorite (and least
              favorite) books on Bookshelf.
            </p>
          </div>
        </div>

        {/* Recommendation Section */}
        <div className="recommendation-section">
          <h3>What will you discover?</h3>
          <p>Because ♥Meagan♥ liked...</p>
          <div className="book-carousel">
            <img
              src="https://via.placeholder.com/100x150"
              alt="Book Cover 1"
              className="book-card"
            />
            <img
              src="https://via.placeholder.com/100x150"
              alt="Book Cover 2"
              className="book-card"
            />
            <img
              src="https://via.placeholder.com/100x150"
              alt="Book Cover 3"
              className="book-card"
            />
            <img
              src="https://via.placeholder.com/100x150"
              alt="Book Cover 4"
              className="book-card"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
