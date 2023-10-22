import Axios from 'axios';
import { CharacterEntityApi } from 'pods/character-collection/api';

const url = '/api/characters';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await Axios.get<CharacterEntityApi[]>(url);
  return data;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  await Axios.delete(`${url}/${id}`)
  return true;
};
