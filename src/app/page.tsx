import movies from "@/data/movie-data";
import MovieCard from "@/app/ui/movie-card";
import Image from "next/image";
import MovieLogo from "../../public/movie-logo.png";

const HomePage = () => {
  return (
    <div className="container mx-auto px-3 flex flex-col items-center">
      <div className="flex items-baseline gap-3">
        <h1 className="font-bold text-2xl my-10">Movies</h1>

        <div className="w-10 relative top-1">
          <Image src={MovieLogo} alt="Movie logo" />
        </div>
      </div>

      <ul className="grid grid-cols-1 lg:grid-cols-2 auto-rows-100 gap-3 w-full sm:mb-10">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </ul>
    </div>
  );
};

export default HomePage;
