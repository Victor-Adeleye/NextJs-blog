import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto text-white">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello, Welcome 👋&nbsp;
        <span className="whitespace-nowrap"></span>
        I'm <span className="font-bold">Victor.</span>
        <br />
        <span className="whitespace-nowrap">1% crazy Developer</span>
      </p>
      <Posts />
    </main>
  );
}
