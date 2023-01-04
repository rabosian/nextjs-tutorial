import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail() {
  const router = useRouter();
  console.log(router); // query: { movieId: 123 }
  // title WONT show up if the user didn't access a detail page from home page
  // since query object is saved by clicking the movie <div> in the homepage
  return (
    <div>
      <Seo title={router.query.title} />
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}
