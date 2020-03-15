import { Link } from 'gatsby'
import React, { useState, useCallback } from 'react'
import SEO from '../components/seo'
import { Waypoint } from 'react-waypoint'
import fdm_printer from '../assets/images/fdm_printer.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import {useSiteMetadata} from '../hooks/use-site-metadata'

function Index(props) {
    // sitemeta
    const siteMeta = useSiteMetadata();
    // state
    const [stickyNav, setStickyNav] = useState(false);
    // callbacks
    // const handleWaypointEnter = useCallback(()=>{
    //     setStickyNav(false)
    // })
    // const handleWaypointLeave = useCallback(()=>{
    //     setStickyNav(true)
    // })
    return (
        <Layout>
        <SEO title="OpenMask" />
        <Header title="OpenMask" />

        {/* <Waypoint
          onEnter={handleWaypointEnter}
          onLeave={handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={stickyNav} /> */}

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>{siteMeta.statement}</h2>
                </header>
              </div>
              <span className="image">
                <img src={fdm_printer} alt="" />
              </span>
            </div>
          </section>

          <section id="key decisions" className="main">
            <header className="major">
              <h2>Key Decisions</h2>
            </header>
            <ul className="features">
              <li>
                <h3>Flexible Material</h3>
                <p>
                The masks will be made from <a href="https://www.treatstock.com/material/tpu">TPU</a>, which can be printed on FDM 3D printers.
                <br/><br/>
                TPU is flexible, which reduces the risk of improper face seal.
                </p>
              </li>
              <li>
                <h3>Modular Design</h3>
                <p>
                The mask will be made entirely from 3D printed parts, filter membrane material, and elastic bands.
                <br/><br/>
                We will have several versions with different inlets to support a wide variety of filter materials, shapes, and sizes.
                Multiple sizes will be available too.
                </p>
              </li>
              <li>
                <h3>Responsible and Sustainable</h3>
                <p>
                Since masks are 3D printed, we are not taking away from existing supply for healthcare workers.
                </p>
              </li>
            </ul>
          </section>

          <section id="extra" className="main">
              <h2>The first iteration of the mask will be available on Tuesday, March 17th</h2>
          </section>
        </div>
      </Layout>
    )
  }

export default Index
