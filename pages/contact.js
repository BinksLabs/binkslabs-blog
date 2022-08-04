import { Component } from "react";

import Header from "../components/header.js";
import Footer from "../components/footer.js";
import HeadMetadata from "../components/headMetadata.js";

export default class extends Component {
  render() {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
        title="Contact | BinksLabs Coding Blog"
        metaDescription="If you have any comments, ideas, critiques, or you just want to say hi, you can contact me via email or the links listed below."
        />
        <Header />
        <div className="contact-container">
          <div className="contact-section">
            <h1>Contact</h1>
            <p>
              I currently building projects for freelance clients and other web apps that can produce side income for myself. I do freelance work for businesses in my state and online at upwork and fiverr.
              
            </p>
            <p>
              If you have any comments, ideas, critiques, or you just want to
              say hi, don’t hesitate to send me an email at
              mike@binkslabs.com!
            </p>
          </div>
          <div className="contact-section">
            <h2>Around the Web</h2>
            <ul>
              <li>
                <strong>Email</strong>: mike@binkslabs.com
              </li>
              <li>
                <strong>GitHub</strong>:{" "}
                <a href="https://github.com/binkslabs">
                  Binks Labs
                </a>
              </li>
              <li>
                <strong>Twitter</strong>:{" "}
                <a href="https://twitter.com/binkslabs">
                  Binks Labs Twitter Page
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
