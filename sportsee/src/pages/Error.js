import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main
      style={{
        fontSize: "20px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>Erreur 404</div>
      <p>Oups ! La page que vous demandez n'existe pas</p>
      <Link to={"/"}>Retournez à la page d'accueil</Link>
    </main>
  );
};

export default Error;
