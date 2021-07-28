const handleData = async (url, config) => {
  const response = await fetch(url, config);
  const json = await response.json();
  return json;
};

export const deleteData = async (url) => {
  return await handleData(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const fetchData = async (url) => {
  return await handleData(url);
};

export const postData = async (url, data) => {
  return await handleData(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const putData = async (url, data) => {
  return await handleData(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const postFormData = async (url, data) => {
  return await handleData(url, {
    method: "POST",
    body: data,
  });
};
