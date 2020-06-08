import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import Modal from "../../components/Modal/Modal";
import "./main.css";
import Pagination from "../../components/Pagination/Pagination";

const Main = () => {
  const { paginate, isModalOpen, closeModal, data, postsPerPage, currentPosts } = useContext(
    AppContext
  );

  return (
    <main className="main">
      <div className="container">
        <h1 className="main__title">Marvel movies</h1>
        <div className="main__add-movie">
          <p className="main__text">
            Some of the best movies from worldwide
          </p>
        </div>
        <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        </Modal>
        <div id="list-of-movies">
        <div className="movie-catalogue">

        {data && currentPosts
            .map(item =>
            (
                <React.Fragment key={item.id}>
                  <div className="movie-catalogue__block">

                  <h1>title{item.original_title}</h1>
                  <img src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`} alt="test"/>
                  <p>overview {item.overview}</p>
                  <p>popularity{item.popularity}</p>
                  <p>release_date {item.release_date}</p>
                  <p>vote_average {item.vote_average}</p>
                  <p>vote_average {item.vote_count}</p>
                  </div>

                </React.Fragment>
            )
            )}        </div>
        </div>
        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
        />
      </div>
    </main>
  );
};

export default Main;
