import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../style/components/Repositories.scss";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const getGitHubRepositories = (user: string) => {
    return fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  };

  useEffect(() => {
    getGitHubRepositories("daniel-silva-dxp");
  }, []);

  return (
    <section className="container">
      <div className="repository-list">
        <h1>Lista de repositórios</h1>
        <ul>
          {repositories.map((repository) => (
            <RepositoryItem repository={repository} key={repository.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
