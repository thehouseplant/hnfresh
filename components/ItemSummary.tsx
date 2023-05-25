import { type Item } from "../utils/types.ts";

type ItemSummaryProps = {
  item: Item;
};

export function ItemSummary(props: ItemSummaryProps) {
  const { item } = props;

  return (
    <div class="bg-white w-full max-w-screen-lg py-2 px-10 flex flex-col">
      <div>
        <span>
          <a href={item.url}>{item.title}</a> ({item.url})
        </span>
      </div>
      <div>
        <span>
          {item.points} point(s) by {item.user} | {item.time} | {item.comments_count} comment(s)
        </span>
      </div>
    </div>
  )
}
