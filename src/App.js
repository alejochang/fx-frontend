import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import moment from 'moment';
import './App.css';
import About from './components/About';
import ConverterSection from "./components/converter/ConverterSection";


/**
 * Main component where Routes are defined
 */
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      profile: ''
    };
  }

  render() {
    return (
      <Router>
        <Fragment>
          <section className='ph2 ph2-ns pv1'>
            <article className='br2 ba bg-black-10 dark-green'>
              <div className='dt-ns dt--fixed-ns w-100'>
                <div className='pa1 pa1-ns dtc-ns v-mid'>
                  <div>
                    <h2 className='fw6 f3 f2-ns lh-title mt0 mb3'>
                      FX Trading
                    </h2>
                  </div>
                </div>
                <div className='dtc-ns v-mid'>
                  <script
                    type='IN/MemberProfile'
                    data-id='https://www.linkedin.com/in/alejandrochang'
                    data-format='inline'
                    data-related='false'
                  />
                  <p className='f6 lh-copy gray mv0'>
                    <span className='ttu'>Toronto, Canada</span>
                  </p>
                  <time className='f6 db gray'>{moment().format('MMMM Do, YYYY')}</time>
                </div>
              </div>
            </article>
          </section>
          <nav className='pa2 pa2-ns mh4'>
            <Link to='/'>
              <h3 className='link dim black b f6 f5-ns dib mr3'>Home</h3>
            </Link>
            <Link to='/currency-conversion'>
              <h3 className='link dim black f6 f5-ns dib mr3'>Currency Trading</h3>
            </Link>
          </nav>
          <section className='cf'>
            <div className='fl w-90 tl'>
              <section className='ph5 pv2'>
                <Switch>
                  <Route exact path='/' component={About} />
                  <Route path='/currency-conversion' component={ConverterSection} />
                </Switch>
              </section>
            </div>
          </section>
        </Fragment>
      </Router>
    );
  }
}

export default App;
