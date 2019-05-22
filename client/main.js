import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import LinkCreate from './components/LinkCreate'

const App = () => {
  return (
    <div>
      <Header />
      <LinkCreate />
    </div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'))
})