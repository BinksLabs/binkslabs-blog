import { Component } from "react";

import Header from "../components/header.js";
import Footer from "../components/footer.js";
import HeadMetadata from "../components/headMetadata.js";
import getFiveNewestPosts from "../api/getFiveNewestPosts.js";

export default class extends Component {
  static async getInitialProps() {
    const apiResult = await getFiveNewestPosts();

    return {
      posts: apiResult && apiResult.posts,
    };
  }

  render() {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="BinksLabs - Software Solutions"
          metaDescription="BinksLabs is a software engineering firm servicing small business and personal applications."
        />
        <Header />
        <div className="homepage-container">
          <div className="homepage-introduction">
            <h1>Hi, I'm Mike Hardy. I build full stack web applications.</h1>
            <p>
              I am a software engineer who develops full stack applications with
              modern JavaScript. View some of my projects below!
            </p>
          </div>

          <div className="homepage-projects">
            <h2>My Projects</h2>
            <div className="homepage-projects-list">
              <div className="homepage-project">
                <h3>
                  <a href="https://github.com/centralmainedocks">
                    <div className="homepage-project-icon">🌊</div>
                    <div className="homepage-project-title">
                      Central Maine Docks
                    </div>
                  </a>
                </h3>
                <p>
                  A web application that automates scheduling, billing, and
                  hosts important data on hundreds of customers.
                </p>
                <div className="homepage-project-btns">
                  <a
                    className="homepage-project-view-btn"
                    href="https://github.com/centralmainedocks"
                  >
                    View
                  </a>
                </div>
              </div>
              <div className="homepage-project">
                <h3>
                  <a href="https://github.com/pinnacalepainting">
                    <div className="homepage-project-icon">🎨</div>
                    <div className="homepage-project-title">
                      Pinnacale Painting
                    </div>
                  </a>
                </h3>
                <p>
                  A responsive website showcasing the business owners work while
                  providing a lead funnel and online marketing tools.
                </p>
                <div className="homepage-project-btns">
                  <a
                    className="homepage-project-view-btn"
                    href="https://github.com/pinnaclepainting"
                  >
                    View
                  </a>
                </div>
              </div>
              <div className="homepage-project">
                <h3>
                  <a href="https://github.com/askLBM">
                    <div className="homepage-project-icon">🪵</div>
                    <div className="homepage-project-title">askLBM</div>
                  </a>
                </h3>
                <p>
                  A news and forumn website for people in the Lumber and
                  Building Materials industry.
                </p>
                <div className="homepage-project-btns">
                  <a
                    className="homepage-project-view-btn"
                    href="https://github.com/askLBM"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="homepage-latest-blog-posts">
            <h2>
              Latest Blog Posts
              <a className="homepage-latest-blog-posts-view-all" href="/blog">
                View all
              </a>
            </h2>
            
            <div className="homepage-latest-blog-posts-list">
              {
                this.props.posts ?
                this.props.posts.map((post, index) => {
                  return (
                    <a key={index} href={`/blog/${post.urlTitle}`}>
                      <div className="homepage-latest-blog-post">
                        <div className="homepage-latest-thumbnail">
                          <img src={post.thumbnailImageUrl} />
                        </div>
                        <div className="homepage-latest-blog-post-title">
                          <h3>{post.title}</h3>
                        </div>
                      </div>
                    </a>
                  )
                }) : null
              }
            </div>
            
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
