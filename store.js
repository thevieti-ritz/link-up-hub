export const API_BASE = "https://linkuphub-helper.dbernardinvestments.workers.dev";

export function make(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

export function formatPrice(amount) {
  return "UGX " + Number(amount || 0).toLocaleString("en-US");
}

export function coverUrl(coverImage) {
  if (!coverImage) return null;
  return API_BASE + "/covers/" + coverImage;
}

export async function fetchCollections() {
  const response = await fetch(API_BASE + "/collections");
  if (!response.ok) throw new Error("Could not load collections");
  return response.json();
}

export async function fetchCollection(id) {
  const response = await fetch(API_BASE + "/collections/" + encodeURIComponent(id));
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Could not load collection");
  return response.json();
}