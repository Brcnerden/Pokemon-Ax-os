import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../redux/features/pokemon/pokemonDetailSlice";
import DetailCard from "../components/DetailCards";

export const DetailPage = () => {
  const dispatch = useDispatch();
  const { pokemonName } = useParams();

  const { pokemonDetail } = useSelector((state) => state.pokemonDetail);

  console.log(pokemonDetail);

  useEffect(() => {
    if (pokemonName) {
      dispatch(getPokemonDetail(pokemonName));
    }
  }, [dispatch, pokemonName]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {pokemonDetail && pokemonDetail.sprites ? (
        <div
          style={{
            alignItems: "center",
          }}
        >
          <DetailCard
            image={pokemonDetail.sprites.front_default}
            title={pokemonName}
            height={pokemonDetail.height}
            weight={pokemonDetail.weight}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}

      <div>{pokemonName}</div>
    </div>
  );
};
