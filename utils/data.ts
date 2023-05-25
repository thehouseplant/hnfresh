import { type ItemRaw, Item, UserRaw, User } from "@/utils/types.ts";

// Define the API base URL
const API_BASE = "https://hacker-news.firebaseio.com/v0";

// Define a function to fetch all top stories
export async function getItems(): Promise<Item[]> {
  // Fetch the response from the API
  const resp = await fetch(`${API_BASE}/topstories.json`);
  
  // Handle failed response
  if (!resp.ok) {
    const body = await resp.text();
    throw new Error(`Error: ${resp.status} ${body}`);
  }

  // Handle successful response
  const itemIds = Object.values(await resp.json()).slice(0, 30) as number[];
  return await Promise.all(itemIds.map((id) => fetchItem(id)));
}

// Define a function to fetch a single story
async function fetchItem(id: number, withComments = false): Promise<Item> {
  // Fetch the response from the API
  const resp = await fetch(`${API_BASE}/item/${id}.json`);

  // Handle failed response
  if (!resp.ok) {
    const body = await resp.text();
    throw new Error(`Error: ${resp.status} ${body}`);
  }

  // Handle successful response
  const item = await resp.text() as ItemRaw;
  item.kids = item.kids || [];
  return {
    id: item.id,
    user: item.by,
    points: item.score,
    time: item.time,
    content: item.text,
    url: item.url,
    type: item.type,
    title: item.title,
    comments_count: Object.values(item.kids).length,
    comments: withComments ? await Promise.all(Object.values(item.kids).map((id) => fetchItem(id, withComments))) : []
  };
}

// Define a helper function to get a single story
export async function getItem(id: number): Promise<Item> {
  const item = await fetchItem(id, true);
  return item;
}
