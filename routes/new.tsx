import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";

export default function New() {
  return (
    <>
      <Head>
        <title>HN Fresh - New</title>
      </Head>
      <div class="bg-white w-full py-2 px-10 flex flex-col dark:(bg-gray-900 text-gray-300)">
        <h1>New</h1>
      </div>
      <Footer />
    </>
  );
}
