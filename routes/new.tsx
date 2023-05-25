import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";

export default function New() {
  return (
    <>
      <Head>
        <title>HN Fresh - New</title>
      </Head>
      <div class="bg-white w-full max-w-screen-lg py-2 px-10 flex flex-col">
        <h1>New</h1>
      </div>
      <Footer />
    </>
  );
}
