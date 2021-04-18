import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

export function Logo2() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo2.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  console.log(data);
  return <Img fixed={data.file.childImageSharp.fixed} />;
}
