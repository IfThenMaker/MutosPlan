import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = 'heklo world';
  // const data = useStaticQuery(graphql`
  //   {
  //     allImageSharp(filter: {fixed: {originalName: {eq: "human.png"}}}) {
  //       edges {
  //         node {
  //           fixed {
  //             src
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // console.log('ddd', data);
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ComponentName
