import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../style/components/Repositories.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  const getGitHubRepositories = (user) => {
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
          <RepositoryItem repositories={repositories} />
        </ul>
      </div>
    </section>
  );
}
