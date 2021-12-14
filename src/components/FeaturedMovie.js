/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './FeatureMovie.css';

export default ({ item }) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push( item.genres[i].name);
    };

    return (
        <section className="feature" style={{
            backgroundSize: 'cover',
            backgroundPosition: `center`,
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="feature--y">
                <div className="feature--x">
                    <div className="feature--name">{item.original_name}</div>
                    <div className="feature--info">
                        <div className="feature--average">{item.vote_average} Average</div>
                        <div className="feature--year">{firstDate.getFullYear()}</div>
                        <div className="feature--seasons">
                            {item.number_of_seasons} Season{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="feature--description">{item.overview}</div>
                    <div className="feature--buttons">
                        <a href={`/watch/${item.id}`} className="feature--watchbutton">► Watch</a>
                        <a href={`/list/add/${item.id}`}className="feature--mylistbutton">+ My List</a>
                    </div>
                    <div className="feature--genres"><strong>Genres: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}