export function RepositoryItem({ repository }) {
  return (
    <>
      <li>
        <strong>{repository.name}</strong>
        <p>{repository.description}</p>
        <a href={repository.link}>Acessar repositório</a>
      </li>
      <li>
        <strong>{repository.name}</strong>
        <p>{repository.description}</p>
        <a href={repository.link}>Acessar repositório</a>
      </li>
    </>
  );
}
