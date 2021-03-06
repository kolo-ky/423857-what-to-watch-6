import React, {Fragment, useState, useEffect} from 'react';
import {useParams, Redirect} from 'react-router-dom';

// redux
import {useSelector} from 'react-redux';

// selector
import {filmSelector} from "../../../store/movies/selectors";

// components
import Footer from '../../footer/footer';
import MovieCardListProxy from '../../movie-card-list/movie-card-list-proxy/movie-card-list-proxy';
import MovieCardFull from "../../movie-card-full/movie-card-full";
import Loading from "../../loading/loading";

// api
import {getMovieCommentsApi} from "../../../api/comments";

// routes
import {getRoute} from "../../../routes/routes";

// hooks
import {useApi} from "../../../hooks/hooks";

const Film = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  const film = useSelector((state) => filmSelector(state, id));

  useEffect(() => {
    useApi(getMovieCommentsApi, id).then((data) => {
      setComments((prevState) => ([
        ...prevState,
        ...data
      ]));
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!film) {
    return (
      <Redirect to={getRoute(`notFound`)}/>
    );
  }

  return (
    <Fragment>
      <MovieCardFull film={film} comments={comments}/>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MovieCardListProxy filmGenre={film.genre} />
        </section>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Film;
