import Cards from "../components/Cards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../redux/features/pokemon/pokemonSlice";
import { Link } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();

  const [visible, setinVisible] = useState(false);

  const { pokemons } = useSelector((state) => state.pokemons);

  const pokemon = pokemons.results;

  const handleClick = () => {
    setinVisible(!visible);
  };

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  return (
    <div>
      <div className="button">
        <div className="text">POKEMON LIST</div>

        <button onClick={handleClick}>
          <img src="../../public/Pokebola-pokeball-png-0.png" />
        </button>
      </div>

      {visible ? (
        pokemon ? (
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
        )
      ) : (
        " "
      )}
    </div>
  );
};
