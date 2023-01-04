import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router); // query: { movieId: 123 }
  return "in /movies/:movieId path";
}
