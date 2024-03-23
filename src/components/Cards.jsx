import { Card } from "antd";
import { useEffect, useState } from "react";
import { getColorFromUrl } from "../utils/fastColors";
const { Meta } = Card;

const Cards = ({ image, title, description, id }) => {
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
        width: 240,
        margin: "10px",
        backgroundColor: pokemonColor,
      }}
      cover={<img src={image} alt="al" />}
    >
      <div>{id}</div>
      <Meta title={title} description={description} />
    </Card>
  );
};

export default Cards;
