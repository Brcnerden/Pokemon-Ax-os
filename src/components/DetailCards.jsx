import { Card } from "antd";
const { Meta } = Card;
const DetailCard = ({ image, title, id, height, weight }) => (
  <Card
    hoverable
    style={{
      width: "440px",
      fontSize: "17px",
    }}
    cover={<img alt="example" src={image} />}
  >
    <div>Name: {title}</div>
    <div>Height: {height}</div>
    <div>Weight: {weight}</div>

    <Meta description={id} />
  </Card>
);
export default DetailCard;
