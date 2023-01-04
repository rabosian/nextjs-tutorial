import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  console.log(router)
  const [title, id] = params || [];
  // title WONT show up if the user didn't access a detail page from home page
  // since query object is saved by clicking the movie <div> in the homepage
  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}

// pre-render movie title data from server
// inside getServerSideProps context:
// params: { params: [ 'Avatar: The Way of Water', '76600' ] },
// so that params data could be saved by pre-rendering for SEO => visible on page sources
export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
