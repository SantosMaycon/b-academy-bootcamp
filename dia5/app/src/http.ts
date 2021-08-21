const request = (url: RequestInfo, options?: RequestInit) =>
  fetch(url, options)
    .then((r) => r.json())
    .catch((e) => ({ error: true, message: e.message }));

type Post = {
  image: string;
  brandModel: string;
  year: number;
  color: string;
};

type Delete = {
  plate: string;
};

export type Data = Post | Delete;

const createRequest =
  (method: "POST" | "DELETE") => (url: RequestInfo, data: Data) =>
    request(url, {
      method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

export const get = request;
export const post = createRequest("POST");
export const del = createRequest("DELETE");
