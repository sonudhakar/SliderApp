import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {CreateSlideWrapper} from './components/create-slide-wrapper';
import {UserInfoWrapper} from './components/user-info-wrapper';
import {AppFooterWrapper} from './components/app-footer-wrapper';
import {MainWrapper} from './components/main-wrapper';
import {ShowSlideWrapper} from './components/slide-show-wrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Slider App</h3>
          <CreateSlideWrapper dispatch={this.props.dispatch} activeSlide={this.props.slideReducer.activeSlide}/>
          <ShowSlideWrapper dispatch={this.props.dispatch} slide={this.props.slideReducer.slide} />
          <UserInfoWrapper name={this.props.contactReducer.contact.firstName}/>
        </header>
        <main class="main-app-wrapper">
          <MainWrapper dispatch={this.props.dispatch} showSlide={this.props.slideReducer.showSlide} slide={this.props.slideReducer.slide} activeSlide={this.props.slideReducer.activeSlide}/>
        </main>
        <footer class="main-app-footer">
          {
            Object.keys(this.props.slideReducer.slide).map((slideId)=>{
              let slide = this.props.slideReducer.slide[slideId];
              return <AppFooterWrapper slide={slide} dispatch={this.props.dispatch}/>
            })
          }
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  slideReducer : state.SlideReducer,
  contactReducer : state.ContactReducer
})

export default connect(mapStateToProps, null)(App);
