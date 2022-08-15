import { useQuery, gql } from "@apollo/client";
import './GithubPins.scss'

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
        <div>
            <h2>Github Pins</h2>
                {data.user.pinnedItems.edges.map((item) => {
                    return(
                        <GithubCard info={item} key={item.node.id}/>
                    )
                })}
        </div>
        
    )
}

export const GithubCard = ({info}) => {
    return (
        <>
            <div>{info.node.name}</div>
            <a href={info.node.url}>Link</a>
        </>
    
    )
}

