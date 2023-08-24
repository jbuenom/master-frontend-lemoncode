import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MembersContext } from "../../core/providers/member/member.provider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const { filter, setFilter, members, setMembers } = useContext(MembersContext);
  const [initialPage, setInitialPage] = React.useState(0);
  const [endPage, setEndPage] = React.useState(4);
  const [sizePage, setSizePage] = React.useState(4);

  const handleClick = (e) => {
    getMembers();
  };

  const handleOnChange = (e) => {
    setFilter(e.target.value);
  };

  const getMembers = () => {
    fetch(`https://api.github.com/orgs/${filter}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  };

  React.useEffect(() => {
    getMembers();
  }, []);

  const previousPage = () => {
    if (initialPage > 0) {
      setInitialPage(initialPage - sizePage);
      setEndPage(endPage - sizePage);
    }
  };
  const nextPage = () => {
    if (endPage < members.length) {
      setInitialPage(initialPage + sizePage);
      setEndPage(endPage + sizePage);
    }
  };

  return (
    <>
      <h2>Hello from List page</h2>
      <div className="container-search">
        <TextField
          variant="outlined"
          name="filter"
          className="search-input"
          type="search"
          value={filter}
          onChange={handleOnChange}
        />
        <Button
          variant="contained"
          className="search-button"
          type="button"
          onClick={handleClick}
        >
          Buscar
        </Button>
      </div>
      {members.length > 0 ? (
        <div className="list-user-list-container">
          <span className="list-header">Avatar</span>
          <span className="list-header">Id</span>
          <span className="list-header">Name</span>
          {members.slice(initialPage, endPage).map((member) => (
            <React.Fragment key={member.id}>
              <img src={member.avatar_url} />
              <span>{member.id}</span>
              <Link className="link-name" to={`/detail/${member.login}`}>
                {member.login}
              </Link>
            </React.Fragment>
          ))}
          <div className="pagination">
            <Button
              variant="outlined"
              disabled={initialPage === 0}
              onClick={previousPage}
            >
              <KeyboardArrowLeftIcon className="arrow-left" />
            </Button>
            <Button
              variant="outlined"
              disabled={endPage >= members.length}
              onClick={nextPage}
            >
              <KeyboardArrowRightIcon className="arrow-right" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-no-response">No hay resultados.</div>
      )}
      <Link className="link-home" to={"/home"}>
        Go back home
      </Link>
    </>
  );
};
