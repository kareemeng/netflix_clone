import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../requests";

const Home = () => {
  //! need a unique rowId for each row component
  return (
    <div>
      <Main />
      <Row
        rowId={"1"}
        title="Up Coming"
        FetchUrl={requests.requestUpcomingMovies}
      />
      <Row
        rowId={"2"}
        title="Now Playing"
        FetchUrl={requests.requestNowPlayingMovies}
      />
      <Row
        rowId={"3"}
        title="Trending"
        FetchUrl={requests.requestTrendingMovies}
      />
      <Row
        rowId={"4"}
        title="Popular"
        FetchUrl={requests.requestPopularMovies}
      />
      <Row
        rowId={"5"}
        title="Top Rated"
        FetchUrl={requests.requestTopRatedMovies}
      />
    </div>
  );
};

export default Home;
