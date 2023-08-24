import React from "react";
import { Link, useParams } from "react-router-dom";
import { CharacterEntity } from "./rickList";
import SentimentVeryDissatisfiedRoundedIcon from "@mui/icons-material/SentimentVeryDissatisfiedRounded";
import SentimentSatisfiedAltRoundedIcon from "@mui/icons-material/SentimentSatisfiedAltRounded";
import MoodBadRoundedIcon from "@mui/icons-material/MoodBadRounded";

export const RickDetail: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = React.useState<CharacterEntity>({
    id: "",
    name: "",
    status: "unknown",
  });

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((character) => setCharacter(character));
  }, []);

  return (
    <>
      <h2>Rick and Morty detail page</h2>
      {character.id ? (
        <div className="character-detail">
          <img
            className="character-detail-img"
            src={character.image}
            alt="image character"
          />
          <div className="character-detail-info">
            <span>{character.name}</span>
            <span>{character.species}</span>
            <span>{character.gender}</span>
            {character.status === "Alive" ? (
              <span className="alive">
                <SentimentSatisfiedAltRoundedIcon />
                {character.status}
              </span>
            ) : character.status === "Dead" ? (
              <span className="dead">
                <SentimentVeryDissatisfiedRoundedIcon />
                {character.status}
              </span>
            ) : (
              <span className="unknown">
                <MoodBadRoundedIcon />
                {character.status}
              </span>
            )}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <Link to="/rick">Back to list page</Link>
    </>
  );
};
