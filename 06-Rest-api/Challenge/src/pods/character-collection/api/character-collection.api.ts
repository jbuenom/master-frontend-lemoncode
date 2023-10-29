import Axios from 'axios';
import { CharacterEntityResponse } from './character-collection.api-model';
import { CharacterEntityApi } from 'pods/character-collection/api';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

const url = 'https://rickandmortyapi.com/api/character';

interface GetCharacterCollectionResponse {
  characters: {
    info: {
      pages: number
    },
    results: CharacterEntityApi[];
  }
}

export const getCharacterCollection = async (page: number, filter: string): Promise<GetCharacterCollectionResponse> => {
  const query = gql`
    query {
      characters(page: ${page}, filter: {name: "${filter}"}) {
      info {
        pages
    }
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

  const res = await graphQLClient.request<GetCharacterCollectionResponse>(query);

  return res;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  await Axios.delete(`${url}/${id}`)
  return true;
};
