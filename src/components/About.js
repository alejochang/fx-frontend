import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section className="mw7 center">
        <article className="pv4 bt bb b--black-10 ph3 ph0-l">
          <div className="flex flex-column flex-row-ns dark-gray">
            <div className="w-100 pr3-ns order-2 order-1-ns">
              <h2 className="f4 mt0 lh-title">
                Tech stack
              </h2>
              <article>
                <div className="cf">
                  <dl className="fl fn-l w-50 dib-l w-auto-l  mr4-l">
                    <div className="f4 lh-copy mv0">express</div>
                    <div className="f6 db">#backend #nodejs</div>
                  </dl>
                  <dl className="fl fn-l w-50 dib-l w-auto-l  mr4-l">
                    <div className="f4 lh-copy mv0">socket.io</div>
                    <div className="f6 db">#backend #nodejs</div>
                  </dl>
                  <dl className="fl fn-l w-50 dib-l w-auto-l  mr4-l">
                  <div className="f4 lh-copy mv0">react</div>
                  <div className="f6 db">#frontend #javascript</div>
                  </dl>
                  <dl className="fl fn-l w-50 dib-l w-auto-l  mr4-l">
                  <div className="f4 lh-copy mv0">tachyons</div>
                  <div className="f6 db">#frontend #css</div>
                  </dl>
                </div>
              </article>
            </div>
          </div>
        </article>
        <article className="pv4 bb b--black-10 ph3 ph0-l">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <h2 className="f4  mt0 lh-title">
                Development tools:
              </h2>
              <article>
                <div className="cf">
                  <dl className="fl fn-l w-50 dib-l w-auto-l  mr4-l">
                    <div className="f4 lh-copy mv0">create-react-app</div>
                    <div className="f6 db">#frontend #nodejs</div>
                  </dl>
                  <dl className="fl fn-l w-50 dib-l w-auto-l  mr4-l">
                    <div className="f4 lh-copy mv0">express-generator</div>
                    <div className="f6 db">#backend #nodejs</div>
                  </dl>
                  <dl className="fl fn-l w-50 dib-l w-auto-l  mr4-l">
                    <div className="f4 lh-copy mv0">npm</div>
                    <div className="f6 db">#backend #frontend #nodejs</div>
                  </dl>
                </div>
              </article>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default About;
