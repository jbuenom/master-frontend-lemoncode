import { TextField } from "@mui/material";
import React from "react";
import SentimentVeryDissatisfiedRoundedIcon from "@mui/icons-material/SentimentVeryDissatisfiedRounded";
import SentimentSatisfiedAltRoundedIcon from "@mui/icons-material/SentimentSatisfiedAltRounded";
import MoodBadRoundedIcon from "@mui/icons-material/MoodBadRounded";
import { useDebounce } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

export interface CharacterEntity {
  id: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  image?: string;
  species?: string;
  gender?: string;
  episode?: string[];
}

export const RickList: React.FC = () => {
  const [filter, setFilter] = React.useState("");
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const debouncedSearch = useDebounce(filter, 500);

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?name=${debouncedSearch}`)
      .then((response) => response.json())
      .then((json) => setCharacters(json.results));
  }, [debouncedSearch]);

  const handleOnChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <h2>Rick and Morty List</h2>
      <div className="container-search">
        <TextField
          variant="outlined"
          name="filter"
          className="search-input ricklist"
          type="search"
          value={filter}
          onChange={handleOnChange}
        />
      </div>
      <Link className="link-home" to={"/home"}>
        Go back home
      </Link>
      <div className="character-container">
        {characters?.length > 0 ? (
          characters.map((character) => (
            <div className="character" key={character.id}>
              <Link to={`/rickdetail/${character.id}`}>
                <img
                  className="character-img"
                  src={character.image}
                  alt="image character"
                />
                <div className="character-info">
                  <span>{character.name}</span>
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
              </Link>
            </div>
          ))
        ) : (
          <div className="text-no-response">No hay resultados.</div>
        )}
      </div>
    </>
  );
};
