import { type Item } from "../utils/types.ts";

type ItemSummaryProps = {
  item: Item;
};

export function ItemSummary(props: ItemSummaryProps) {
  const { item } = props;

  return (
    <div class="py-2">
      <div>
        <span>
          <a
            class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500 dark:(text-gray-400 hover:text-gray-500)"} 
            href={item.url}>{item.title}
          </a> 
          {" "} ({item.url})
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
