import { Footer } from "../components/Footer.tsx";

export default function NotFoundPage() {
  return (
    <>
      <div class="bg-white w-full py-2 px-10 flex flex-col dark:(bg-gray-900 text-gray-300)">
        <h1>404 Not Found</h1>
        <p>
          <a href="/">Return to HN Fresh</a>
        </p>
      </div>
      <Footer />
    </>
  )
}