import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const GptMovieSuggestions = () => {
  const { movieresults, movienames } = useSelector((store) => store.gpt);
  if (!movienames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movienames.map((moviename, index) => (
          <Movielist
            key={moviename}
            title={moviename}
            movies={movieresults[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;