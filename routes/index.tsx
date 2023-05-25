import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";
import { ItemSummary } from "../components/ItemSummary.tsx";
import { type Item } from "../utils/types.ts";
import { getItems } from "../utils/data.ts";

export const handler: Handlers<Item[]> = {
  async GET(_req, ctx) {
    const items = await getItems();
    return ctx.render(items);
  }
};

export default function Home(props: PageProps<Item[]>) {
  const { data: items } = props;
  
  return (
    <>
      <Head>
        <title>HN Fresh</title>
      </Head>
      <div>
        {items.map((item) => <ItemSummary item={item} />)}
      </div>
      <Footer />
    </>
  );
}
