import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";

export default function Show() {
  return (
    <>
      <Head>
        <title>HN Fresh - Show</title>
      </Head>
      <div class="bg-white w-full max-w-screen-lg py-2 px-10 flex flex-col">
        <h1>Show</h1>
      </div>
      <Footer />
    </>
  );
}
