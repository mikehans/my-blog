import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import './tags.css';

export default function Tags () {
    const listItems = (d) => {
        let m = new Map();
        d.allMarkdownRemark.edges.forEach((e) => {
            e.node.frontmatter.tags.forEach(t => {
              if(m.has(t)) {
                  var count = m.get(t);
                  m.set(t, count+1);
              } else {
                m.set(t, 1)
              }
            })
          });
        
          var it = m.entries();
          var arr = [];

          var result = it.next();

          while (!result.done) {
            arr.push({
                tag: `${result.value[0]} (${result.value[1]})`,
                count: result.value[1]
            });
            result = it.next();
          }

          // sort
          arr.sort((a,b) => {
              return b.count - a.count
          });
          return arr;
    };

    return (
        <StaticQuery
            query={graphql`
                query TagsQuery {
                    allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/posts/**"}}) {
                        edges {
                            node {
                                frontmatter {
                                    tags
                                }
                            }
                        }
                    }
                }            
            `}
            render={ data => (
                <nav className="tags">
                    <ul>
                        {listItems(data).map((item, index) => {
                            return <li className="tag" key={index}>
                                {item.tag}
                            </li>
                        })}
                    </ul>
                </nav>
            )}
        />
    )
}