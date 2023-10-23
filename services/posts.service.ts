import PostModel from "model/PostModel";

export async function FindAllPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Error");
  }
  const users = await response.json();
  return users;
}

export async function CreatePost(post: PostModel) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}post`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Error");
  }
  const result = await response.json();
  return result;
}

export async function UpdatePost(post: PostModel, id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}posts/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Error");
  }
  const auth = await response.json();
  return auth;
}

export async function DeletePost(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}post/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Error");
  }
  const post = await response.json();
  return post;
}
