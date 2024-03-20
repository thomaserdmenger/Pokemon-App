import "./Loading.css";

export const Loading = () => {
  return (
    <section className="loading">
      <img src="/images/PokemonLogoSVG.svg" alt="" className="loading__logo fade-in" />
      <img src="/images/PokeballLogo.svg" alt="" className="loading__pokeball bounce-in-top" />
    </section>
  );
};
