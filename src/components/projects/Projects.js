import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Projects.css";
import GithubRepoCard from "../../components/sections/repoCard/RepoCard";
import Button from "../../components/sections/button/Button"
// import { projects } from "../../config/projects";
import { Fade } from "react-reveal";

export default function Projects() {
  // const [repo, setrepo] = useState([]);

  // useEffect(() => {
  //   getRepoData();
  // }, []);

  // function getRepoData() {
  //   const client = new ApolloClient({
  //     uri: "https://api.github.com/graphql",
  //     request: operation => {
  //       operation.setContext({
  //         headers: {
  //           authorization: `Bearer ${atob(projects.githubConvertedToken)}`
  //         }
  //       });
  //     }
  //   });

  //   client
  //     .query({
  //       query: gql`
  //       {repositoryOwner(login: "${projects.githubUserName}") {
  //         ... on ProfileOwner {
  //           pinnedItemsRemaining
  //           itemShowcase {
  //             items(first: 5) {
  //               totalCount
  //               edges {
  //                 node {
  //                   ... on Repository {
  //                     name
  //                     description 
  //                     forkCount
  //                     stargazers {
  //                       totalCount
  //                     }
  //                     url
  //                     id
  //                     diskUsage
  //                     primaryLanguage {
  //                       name
  //                       color
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //             hasPinnedItems
  //           }
  //         }
  //       }
  //     }
  //       `
  //     })
  //     .then(result => {
  //       setrepoFunction(result.data.repositoryOwner.itemShowcase.items.edges);
  //       console.log(result);
  //     });
  // }

  // function setrepoFunction(array) {
  //   setrepo(array);
  // }

  // return (
  //   <Fade bottom duration={1000} distance="20px">
  //   <div className="main" id="projects">
  //     <h1 className="project-title">Projects</h1>
  //     <div className="repo-cards-div-main">
  //       {repo.map((v, i) => {
  //         return <GithubRepoCard repo={v} key={v.node.id} />;
  //       })}
  //     </div>
  //     <Button text={"More Projects"} className="project-button" href="https://github.com/quipcode" newTab={true} />
  //   </div>
  //   </Fade>
  // );
  return (<p>hello there</p>)
}