import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import Helmet from "react-helmet"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header    

    if (location.pathname === rootPath) {
      header = (
        <>
          {/* <i className="material-icons menu">menu</i> */}
          <h4 className="Title">
            <Link to={`/`} className="link_home">
              {title}
            </Link>
          </h4>
        </>
      )
    } else {
      header = (
        <>
          <h4 className="Title">
            <Link to={`/`} className="link_home">
              <i className="material-icons home">home</i>              
            </Link>
          </h4>
        </> 
      )
    }
    return (
      <div 
        className={'Layout'+(location.pathname === rootPath? ' root':'')}
      >
        <div className='AppHeader'>
          {header}
        </div>
        <main style={{maxWidth: rhythm(36)}}>{children}</main>
        <div className="AppFooter">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>        
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Saira+Semi+Condensed&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </Helmet>
      </div>
    )
  }
}

export default Layout
