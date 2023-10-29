import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import Pagination from '@mui/material/Pagination';
import * as classes from './character-collection.styles';
import { useDebounce } from '@uidotdev/usehooks';
import TextField from '@mui/material/TextField';

export const CharacterCollectionContainer = () => {
  const [page, setPage] = React.useState<number>(1);
  const { characterCollection, loadCharacterCollection, pages } =
    useCharacterCollection();
  const [filter, setFilter] = React.useState('');
  const debouncedSearch = useDebounce(filter, 500);
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection(page, debouncedSearch);
  }, [page, debouncedSearch]);

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    loadCharacterCollection(page, filter);
  };

  const handlePageChange = (e, p) => {
    setPage(p);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <TextField
        variant="outlined"
        name="filter"
        type="search"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search by name"
        margin="normal"
      />
      {characterCollection.length > 0 ? (
        <>
          <CharacterCollectionComponent
            characterCollection={characterCollection}
            onCreateCharacter={handleCreateCharacter}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <Pagination
            className={classes.pagination}
            count={pages}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </>
      ) : (
        <div className={classes.notFound}>No results</div>
      )}
    </>
  );
};
