import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={15} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIcons
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
