import { useQuery, gql } from "@apollo/client";


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
            <GithubCard/>
            <ul>
                {data.user.pinnedItems.edges.map((item) => {
                    return(
                    <li key={item.node.id}>{item.node.name}</li>
                    )
                })}
            </ul>
            {/* <ul>
        {data.launchesPast.map((launch) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul> */}
        </div>
        
    )
}

export const GithubCard = () => {
    return (
        <h3>Github Card</h3>
    )
}

