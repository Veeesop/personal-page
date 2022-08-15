import { useQuery, gql } from "@apollo/client";
import './GithubPins.css'
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import  {FaCodeBranch}  from 'react-icons/fa'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


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
       
        <div className="projects-container">

                {data.user.pinnedItems.edges.map((item, index) => {
                    return(
                        <GithubCard info={item} key={item.node.id}/>
                    )
                })}
        </div>

    )
}

export const GithubCard = ({info}) => {
    
    return (
        <div className="github-card-container">
           <Card sx={{ width: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {info.node.name}
                </Typography>
                <Typography variant="h5" component="div">

                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {info.node.languages.edges.map(language => `${language.node.name} `)}
                </Typography>
                <Typography variant="body2">
                 {info.node.description}
                <br />
                </Typography>
            </CardContent>
            <CardActions>
                <div><FaCodeBranch/><span>  {info.node.forks.totalCount} </span></div>
                <Button sx={{marginRight: "20px"}}size="small">Learn More</Button>
            </CardActions>
        </Card>
        </div>
    
    )
}

