import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"
import GoogleAnalytics from "../components/googleAnalytics.js"

export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="About Me | BinksLabs Coding Blog"
          metaDescription="Mike Hardy is a full stack software engineer who builds full stack applications and writes about modern JavaScript"
        />
        <GoogleAnalytics/>
        <Header />
        <div className="about-container">
          <div className="about-section">
            <h1>About Me</h1>
            <p>I’m Mike Hardy, a full stack software developer and technical writer.</p>
            <p>I started this website as a place to document everything I learned while studying software development.</p>
          </div>
          <div className="about-section">
            <h2>My Projects</h2>
            <ul>
              <li><a href="">MyJobTracker.com</a> - <a href="">repo</a> – A web app for tracking contract jobs and customer information.</li>
              {/* <li><a href="">chat app</a> – twitter clone</li>
              <li><a href="">twitter clone</a> – twitter clone</li>
              <li><a href="https://github.com/node-schedule/node-schedule">coding nicnack store</a> – coding nicknack store</li> */}
            </ul>
          </div>
          <div className="about-section">
            <h2>Currently Using</h2>
            <ul>
              <li><strong>Computer</strong>: MacOS</li>
              <li><strong>Hosting</strong>: <a href="https://m.do.co/c/ce20017d8588">DigitalOcean</a></li>
              <li><strong>Editor</strong>: <a href="https://atom.io">Visual Studio Code</a></li>
              <li><strong>Coding Framework</strong>: <a href="https://nextjs.org">Next.js</a></li>
              <li><strong>Syntax Highlighting</strong>: <a href="https://prismjs.com">PrismJS</a></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
