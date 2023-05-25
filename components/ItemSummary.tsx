import { type Item } from "../utils/types.ts";

type ItemSummaryProps = {
  item: Item;
};

export function ItemSummary(props: ItemSummaryProps) {
  const { item } = props;

  return (
    <>
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
    </>
  )
}
