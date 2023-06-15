import { useGithubUser } from "./UseGitHubUser";

export function GithubUser({username}) {
  const {data} = useGithubUser(username)
      return (
          <h1>{data}</h1>
      );
    };