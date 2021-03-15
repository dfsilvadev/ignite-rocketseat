export function RepositoryItem({ repositories }) {
  return (
    <>
      {repositories.map((repository) => {
        return (
          <li key={repository.id}>
            <strong>{repository.name}</strong>
            <p>{repository.description}</p>
            <a href={repository.html_url}>Acessar repositório</a>
          </li>
        );
      })}
    </>
  );
}
