import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

// components
import MovieCard from '../MovieCard';

const Main = (props) => {
  const {headerMovie} = props;
  const movieList = [
    {
      id: 0,
      img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      title: `Fantastic Beasts: The Crimes of Grindelwald`
    },
    {
      id: 1,
      img: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`
    },
    {
      id: 2,
      img: `img/macbeth.jpg`,
      title: `Macbeth`
    },
    {
      id: 3,
      img: `img/aviator.jpg`,
      title: `Aviator`
    },
    {
      id: 4,
      img: `img/we-need-to-talk-about-kevin.jpg`,
      title: `We need to talk about Kevin`
    },
    {
      id: 5,
      img: `img/what-we-do-in-the-shadows.jpg`,
      title: `What We Do in the Shadows`
    },
    {
      id: 6,
      img: `img/revenant.jpg`,
      title: `Revenant`
    },
    {
      id: 7,
      img: `img/johnny-english.jpg`,
      title: `Johnny English`
    },
    {
      id: 8,
      img: `img/shutter-island.jpg`,
      title: `Shutter Island`
    },
    {
      id: 9,
      img: `img/pulp-fiction.jpg`,
      title: `Pulp Fiction`
    },
    {
      id: 10,
      img: `img/no-country-for-old-men.jpg`,
      title: `No Country for Old Men`
    },
    {
      id: 11,
      img: `img/snatch.jpg`,
      title: `Snatch`
    },
    {
      id: 12,
      img: `img/moonrise-kingdom.jpg`,
      title: `Moonrise Kingdom`
    },
    {
      id: 13,
      img: `img/seven-years-in-tibet.jpg`,
      title: `Seven Years in Tibet`
    },
    {
      id: 14,
      img: `img/midnight-special.jpg`,
      title: `Midnight Special`
    },
    {
      id: 15,
      img: `img/war-of-the-worlds.jpg`,
      title: `War of the Worlds`
    },
    {
      id: 16,
      img: `img/dardjeeling-limited.jpg`,
      title: `Dardjeeling Limited`
    },
    {
      id: 17,
      img: `img/orlando.jpg`,
      title: `Orlando`
    },
    {
      id: 18,
      img: `img/mindhunter.jpg`,
      title: `Mindhunter`
    },
    {
      id: 19,
      img: `img/midnight-special.jpg`,
      title: `Midnight Special`
    },
  ];

  return (
    <Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{headerMovie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{headerMovie.genre}</span>
                <span className="movie-card__year">{headerMovie.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__movies-list">
            {movieList.map((item) => (
              <MovieCard key={item.id} title={item.title} img={item.img}/>
            ))}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

Main.propTypes = {
  headerMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  })
};

export default Main;
