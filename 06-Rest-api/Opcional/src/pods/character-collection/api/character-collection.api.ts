import Axios from 'axios';
import { CharacterEntityResponse } from './character-collection.api-model';
import { CharacterEntityApi } from 'pods/character-collection/api';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

const url = 'https://rickandmortyapi.com/api/character';

interface GetCharacterCollectionResponse {
    characters: {
      results: CharacterEntityApi[];
    } 
}

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const query = gql`
    query {
      characters {
      results {
        id
        name
        status
        species
        type
        image
    }
  }
}
`;

const { characters }  = await graphQLClient.request<GetCharacterCollectionResponse>(query);
return characters.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  await Axios.delete(`${url}/${id}`)
  return true;
};
