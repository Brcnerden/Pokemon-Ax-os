import Cards from "../components/Cards";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../redux/features/pokemon/pokemonSlice";
import { Link } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();

  const { pokemons } = useSelector((state) => state.pokemons);

  const pokemon = pokemons.results;

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  return pokemon ? (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {pokemon.map((item, index) => (
        <div key={index}>
          <Link to={`/pokemon/${item.name}`}>
            <Cards
              id={index + 1}
              title={item.name}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                index + 1
              }.png`}
            />
          </Link>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
};
