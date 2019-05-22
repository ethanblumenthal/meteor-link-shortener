import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'))
})