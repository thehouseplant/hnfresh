import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>HN Fresh</title>
      </Head>
      <div>
        <h1>HN Fresh</h1>
      </div>
      <Footer />
    </>
  );
}
