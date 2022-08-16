import { useQuery, gql } from "@apollo/client";
import './GithubPins.css'
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import  {FaCodeBranch, FaStar}  from 'react-icons/fa'
import {GoPrimitiveDot} from 'react-icons/go'


const GITHUB_QUERY = gql`
{
    user(login: "Veeesop") {
      avatarUrl
      bio
      pinnedItems(first: 6) {
        edges {
          node {
            ... on Repository {
              id
              name
              homepageUrl
              url
              languages(first: 10) {
                edges {
                  node {
                    id
                    name
                    color
                  }
                }
              }
              createdAt
              description
              forks {
                totalCount
              }
              stargazerCount
            }
          }
        }
      }
    }
  }
`

export const GithubPins = () => {
    const { data, loading, error } = useQuery(GITHUB_QUERY);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    console.log(data)

    return (
        <div className="github-display">
            <div className="github-title">
                <Typography sx={{ fontSize: 40, m:5 }} color="text.secondary" gutterBottom>
                    GitHub Repositories
                </Typography>
            </div>
            <div className="projects-container">
                {data.user.pinnedItems.edges.map((item, index) => {
                    return(
                        <GithubCard info={item} key={item.node.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export const GithubCard = ({info}) => {
    return (
        <div className="github-card-container">
           <Card sx={{ width: 400 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {info.node.name}
                </Typography>
                <Typography variant="h5" component="div">

                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {info.node.languages.edges.map(language => 
                    <>
                        <GoPrimitiveDot color={language.node.color}/>
                        <span className="language-dot">{language.node.name}</span> 
                    </>
                    )}
                </Typography>
                <Typography variant="body2">
                 {info.node.description}
                <br />
                </Typography>
            </CardContent>
            <CardActions>
                <div className="github-counts">
                    <FaCodeBranch/><span className="fork-count">{info.node.forks.totalCount}</span>
                    <FaStar/><span className="star-count">{info.node.stargazerCount}</span>
                </div>
                <Button href={info.node.url} size="small">Learn More</Button>
            </CardActions>
        </Card>
        </div>
    )
}

