import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
    const {site} = useStaticQuery(
        graphql`
            query {
                site {
                siteMetadata {
                    title
                    description
                    author
                    githubURL
                    email
                }
                }
            }
            `
    )
    return site.siteMetadata
}
