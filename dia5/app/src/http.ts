type RequestProps = {
  url: string;
  options: {};
};

type CreateRequestProps = {
  url: string;
  data: {
    method: string;
    headers: { "content-type": string };
  };
};

const request = ({ url, options }: RequestProps) =>
  fetch(url, options)
    .then((r) => r.json())
    .catch((e) => ({ error: true, message: e.message }));

const createRequest =
  (method) =>
  ({ url, data }: CreateRequestProps) =>
    request(url, {
      method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

export const get = (url: string) => request(url);
export const post = createRequest("POST");
export const del = createRequest("DELETE");
