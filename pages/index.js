import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }) {
  const router = useRouter();
  const navigate = (id) => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        // <Link href={`/movies/${movie.id}`} key={movie.id}>
        <div
          onClick={() => navigate(movie.id)}
          className="movie"
          key={movie.id}
        >
          <img
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`}
          />
          <h4>{movie.original_title}</h4>
        </div>
        // </Link>
      ))}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 30px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 14px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          transition: transform 0.2s ease-in-out;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-5px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return {
    props: {
      results,
    },
  };
}
