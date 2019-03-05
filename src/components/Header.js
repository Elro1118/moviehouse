import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Limelight|Song+Myung"
          rel="stylesheet"
        />
        <div>
          <nav className="header">
            <ul>
              <li className="menu"> 🎬 SDG MOVIEHOUSE • CINE • 영화관</li>
            </ul>
          </nav>
        </div>
      </>
    )
  }
}

export default Header
