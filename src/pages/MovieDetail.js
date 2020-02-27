import React from "react";
import superagent from "superagent";

export default class extends React.Component {
  state = {
    movieDetail: []
  };

  componentDidMount = async () => {
    let url = `http://54.180.149.147:8080/api/team/1/movie/${this.props.match.params.id}`;
    let movieDetail = await superagent
      .get(url)
      .then(response => response.body)
      .catch(error => error);

    this.setState({ movieDetail });

    console.log(movieDetail);
  };

  render() {
    const { movieDetail } = this.state;
    return (
      <div>
        <h3>영화 상세 페이지</h3>

          {movieDetail ?
            <MovieItem2
              title={movieDetail.title}
              posterUrl={movieDetail.posterUrl}
              advanceRate={movieDetail.advanceRate}
              advanceRateRank={movieDetail.advanceRateRank}
              visitorRating={movieDetail.visitorRating}
              expertRating={movieDetail.expertRating}
              plot={movieDetail.plot}
              runtime={movieDetail.runtime}
              released={movieDetail.released}
              director={movieDetail.director}
              screeningStatus={movieDetail.screeningStatus}
              genres={movieDetail.genres}
              cast={movieDetail.cast}
            />
            : null
          }
      </div>
    );
  }
}

const MovieItem2 = ({title, posterUrl, advanceRate, advanceRateRank, visitorRating, expertRating, plot, runtime, released, director, screeningStatus, genres, cast}) => {
  return (
    <div>
      <h3>{title}</h3>
      <img width="200" src={posterUrl}/>
      <div>예매율: {advanceRate}</div>
      <div>예매율 순위: {advanceRateRank}</div>
      <div>관람객 평점: {visitorRating}</div>
      <div>전문가 평점: {expertRating}</div>
      <div>상영시간: {runtime}분</div>
      <div>장르: {genres}</div>
      <div>줄거리: {plot}</div>
      <div>개봉일: {released}</div>
      <div>상영상태: {screeningStatus}</div>
      <div>감독: {director}</div>
      <div>배우 : {cast}</div>
    </div>
  );
}