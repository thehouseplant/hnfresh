import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";
import { type User } from "../utils/types.ts";
import { getUser } from "../utils/data.ts";

export const handler: Handlers<User> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) {
      return ctx.renderNotFound();
    }
    const user = await getUser(id);
    return ctx.render(user);
  }
};

export default function UserPage(props: PageProps<User>) {
  const { data: user } = props;
  
  return (
    <>
      <Head>
        <title>HN Fresh - {user.id}</title>
      </Head>
      <div class="bg-white w-full py-2 px-10 flex flex-col dark:(bg-gray-900 text-gray-300)">
        <ul>
          <li>User: {user.id}</li>
          <li>Created: {user.created_at}</li>
          <li>Karma: {user.karma}</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
