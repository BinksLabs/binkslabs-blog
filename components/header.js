import { Component } from "react";

export default class extends Component {
  render() {
    return (
      <header className="header-wrapper">
        <div className="header-container">
          <div className="header-logo">
            <a href="/">
          
              <span className="header-logo-icon"><img src="/android-chrome-192x192.png"></img></span>
              <span className="header-logo-text">Binks Labs</span>
            </a>
          </div>
		  <div className="header-links">
			  <a href="/blog">Blog</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
		  </div>
        </div>
      </header>
    );
  }
}
