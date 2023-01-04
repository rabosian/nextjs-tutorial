import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/">
          <p className={router.pathname === "/" ? "active" : ""}>Home</p>
        </Link>
        <Link href="/about">
          <p className={router.pathname === "/about" ? "active" : ""}>About</p>
        </Link>
      </div>

      {/* style JSX <== only for local(scoped) compoent, not global */}
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-direction: column;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px;
          padding-top: 20px;
          padding-bottom: 10px;
        }
        nav p {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: red;
        }
        img {
          max-width: 100px;
        }
        nav div {
          display: flex;
          gap: 15px;
        }
      `}</style>
    </nav>
  );
}
