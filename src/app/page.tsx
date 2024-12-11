import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-2xl">
        Click
        <Link href="/documents/123">
          <span className="text-blue-500 underline text-center">
            &nbsp;here&nbsp;
          </span>
        </Link>
        to go to document Id page
      </p>
    </div>
  );
};

export default Home;
