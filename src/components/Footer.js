import React from 'react'

import {useSiteMetadata} from '../hooks/use-site-metadata'


function Footer(props) {
    const siteMeta = useSiteMetadata()
    return (
        <footer id="footer">
        <section>
        {/* <h2>Aliquam sed mauris</h2>
        <p>
            Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat
            magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras
            aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae
            tincidunt odio.
        </p>
        <ul className="actions">
            <li>
            <Link to="/generic" className="button">
                Learn More
            </Link>
            </li>
        </ul> */}
        </section>
        <section>
        <h2>Contact</h2>
        <dl className="alt">
            <dt>Email</dt>
            <dd>
            <a href={"mailto:" + siteMeta.email}>{siteMeta.email}</a>
            </dd>
        </dl>
        <ul className="icons">
            {/* <li>
            <a
                href="https://twitter.com/huntaroSan"
                className="icon fa-twitter alt"
            >
                <span className="label">Twitter</span>
            </a>
            </li> */}
            <li>
            <a
                href={siteMeta.githubURL}
                className="icon fa-github alt"
            >
                <span className="label">GitHub</span>
            </a>
            </li>
        </ul>
        </section>
        <p className="copyright">
        &copy; {siteMeta.title}. Design: <a href="https://html5up.net">HTML5 UP</a>.
        </p>
    </footer>
    )
}

export default Footer
