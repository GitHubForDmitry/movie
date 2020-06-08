import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./header.css";
import LinkRoutes from "../../components/LinkRoutes/LinkRoutes";
import marvel from "../../assets/images/marvel.svg";
import search from "../../assets/images/search.svg";

const Header = () => {
  const { filter, setFilter, data } = useContext(AppContext);

  return (
    <div className="layout__header">
      <div className="container">
        <header className="header">
          <div className="header__left">
            <div className="logo logo__container">
              <a className="logo--link" href="#">
                <img className="logo--image" src={marvel} alt="" />
              </a>
            </div>
          </div>
          <div className="header__center">
            <LinkRoutes />
          </div>
          <div className="header__right">
            <div className="wrapper-input wrapper-input__header">
              <label className="wrapper-input__header--label" htmlFor="search">
                <input
                  className="wrapper-input__header--input"
                  value={filter.toLowerCase()}
                  type="text"
                  onChange={(e) => setFilter(e.target.value)}
                  id="search"
                  placeholder="Find your movie"
                />
                <a className="wrapper-input__header--link" href="#">
                  <img className="wrapper-input__header--image" src={search} alt=""/>
                </a>
              </label>
            </div>
            <div className="header__result-search hidden">
              <div>
                {filter.length &&
                  data &&
                  data
                    .filter((item) =>
                      item.original_title.toLowerCase().includes(filter)
                    )
                    .map((item) => <div>{item.original_title}</div>)}
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
