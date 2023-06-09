import { type ItemRaw, Item, UserRaw, User } from "../utils/types.ts";

// Define the API base URL
const API_BASE = "https://hacker-news.firebaseio.com/v0";

// Define a function to fetch all top stories
export async function getItems(type: string): Promise<Item[]> {
  // Fetch the response from the API
  const resp = await fetch(`${API_BASE}/${type}stories.json`);
  
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
  const item = await resp.json() as ItemRaw;
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

// Define a function to fetch a single user
async function fetchUser(id: string): Promise<User> {
  // Fetch the response from the API
  const resp = await fetch(`${API_BASE}/user/${id}.json`);

  // Handle failed response
  if (!resp.ok) {
    const body = await resp.text();
    throw new Error(`Error: ${resp.status} ${body}`);
  }

  // Handle successful response
  const user = await resp.json() as UserRaw;
  return {
    id: user.id,
    created_at: user.created,
    karma: user.karma
  };
}

// Define a helper function to get a single user
export async function getUser(id: string): Promise<User> {
  const user = await fetchUser(id);
  return user;
}
