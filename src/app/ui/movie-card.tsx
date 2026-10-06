import type Movie from "@/types/movie";
import Image from "next/image";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <li className="flex flex-col sm:flex-row sm:border-t sm:border-t-gray-400 sm:border-r sm:border-r-gray-400">
      <div className="relative flex-1">
        <Image
          className="object-contain sm:object-fill"
          src={movie.poster}
          alt={movie.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAM1BMVEXExMT////BwcHo6Oju7u7Y2Nj5+fn09PTJycn8/PzPz8/GxsbU1NTMzMzl5eXp6enf3984nfntAAADJ0lEQVR4nO3cjZKaMBRAYYiIIL/v/7SLii6SEEGJeC/n60yn0+q4OcUAUYgiAAAAAAAAAAAAAAAAAAAAAAAA4OcZU1VZIFVhzNbjW84UzSkOJ0/arUe4mDnmAYtcpWdZm4o5hi7Syc9bD3MJU34hSRcl23qgS4ScSgaSrcc531feOVfl1kOdrbhvJskhkKR/gaOYabZIbz9xbYJphDY5hXuF+7uTJv9oYqOJTVGT1U7ctDQporJts6JY4xVUNDFZk1/+Nk9P5QrjMK38Jk+nycnnpykKtpP7f2sv/TiK/CajJN2/fBpFfBPHysGnu2nxTVwrB9VnryC+ydlOEjefDUZ6E3NwNElfHqZ4Ryu+iXPR7eVq0MG3BC2+SfJOkzrOPVF22aSOY18U8U3eeO/cpqDpKOKbuFasvXPsY1aejCK9SeT6sMe3Lx7sqKaiiG/iOmbzfYTXDB43EUV+E/ugrfY8u3l6pDuK/CbXvciQ7/O7ZvRYZxQFTUZRkumzHceO2xVFQ5OoHKwp1Z5jMdexjCOKiiYmK28zbVpnnnE4D++6GXn8FBVNLud0VZF1vzwbyTl1J7G3FCVNXppO0kUZLWzvpImpppNYUfbRxFQvvgD3FGUXTV4meY6yhya+ueRhEEBfE/twY06S4YGNuiamHe9F5iUZnCZpa2Lq8YTp3eM8OfTPU9bEXM99BlFmTK9WFGVN+tPBR5RFSe5ziqom5nGG3EeZPZf0EnVNzGDR4BplaRJ9TczTOkoXZXESdU3MaL2tXDiXKGwyThLH4++l7K+JleQdqpo4v16w7ybZxLLijptkS/cv+puslkRPk/knebtpUq14eaCSJituJVqauL+nRBOa0MRGExtNbDSx0cRGExtNbDSxjZo0aXq6SB+/vf/HVOHnOyuhiY0mNprY5DYJ9wOLbRKfw907SN79Cvq1xjQJJpfWxLoWP5hWTJMoC36zx5vXVyn/DvvT8jDk3LLuYnxlUhC+q8V+0ReiSEsSRcdVT4dtibDbx14YkxVtE+Z2j01b+K6M+mnhjtm2HhkAAAAAAAAAAAAAAAAAAAAAAAAAAN/0B81WMJZb1X1AAAAAAElFTkSuQmCC"
        />
      </div>

      <div className="flex-1 p-3 text-center sm:text-left">
        <p className="mb-5">
          {movie.title} by {movie.director} was released in {movie.year}.
        </p>

        <p>Rating: {movie.rating}</p>
      </div>
    </li>
  );
};

export default MovieCard;
