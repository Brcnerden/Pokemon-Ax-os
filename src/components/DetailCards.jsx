import { Card } from "antd";
import { getColorFromUrl } from "../utils/fastColors";
import { useEffect, useState } from "react";

const { Meta } = Card;
const DetailCard = ({ image, title, id, height, weight }) => {
  const [pokemonColor, setPokemonColor] = useState(null);

  const getPokemonColor = async () => {
    const color = await getColorFromUrl(image);
    if (color) setPokemonColor(color);
  };

  useEffect(() => {
    getPokemonColor();
  });

  return (
    <Card
      hoverable
      style={{
        width: "440px",
        fontSize: "17px",
        backgroundColor: pokemonColor,
      }}
      cover={<img alt="example" src={image} />}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "25px",
          textAlign: "center",
        }}
      >
        {title.toUpperCase()}
      </div>
      <div>Height: {height}</div>
      <div>Weight: {weight}</div>

      <Meta description={id} />
    </Card>
  );
};

export default DetailCard;
