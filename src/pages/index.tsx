import * as React from "react"
import {Helmet} from "react-helmet";
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 800,
}
const leftContentStyles = {
  height: "100%",
  marginRight: 32,
}
const footerStyles = {
  maxWidth: 800,
  position: "absolute",
  top: "90%",
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const containerStyle = {
  width: "100%",
  display: "flex",
}

const logoStyles = {
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
        />
        <div style={containerStyle}>
            <div style={leftContentStyles}>
                <StaticImage src="../images/icon.png" alt="Easy Wallet logo image" width={128} height={128} style={logoStyles}/>
            </div>
            <div>
                <h1 style={headingStyles}>
                    Easy&nbsp;Wallet by&nbsp;Tranoo.com
                </h1>
                <ul>
                    <li>Non-custodial simple secure wallet: your keys &mdash; your money!</li>
                </ul>
                <p style={footerStyles}>
                    Powered by{' '} <a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer noopener">Gatsby</a>.
                </p>
            </div>
        </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Easy Wallet by Tranoo.com</title>

