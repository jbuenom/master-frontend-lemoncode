import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const [pages, setPages] = React.useState<number>(1);

  const loadCharacterCollection = (page: number, filter: string) => {
    getCharacterCollection(page, filter).then((result) => {      
      setPages(result.characters.info.pages)
        setCharacterCollection(mapToCollection(result.characters.results, mapFromApiToVm))
    }
    );
  };

  return { characterCollection, loadCharacterCollection, pages};
};
