import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";

export default function Ask() {
  return (
    <>
      <Head>
        <title>HN Fresh - Ask</title>
      </Head>
      <div class="bg-white w-full py-2 px-10 flex flex-col dark:(bg-gray-900 text-gray-300)">
        <h1>Ask</h1>
      </div>
      <Footer />
    </>
  );
}
