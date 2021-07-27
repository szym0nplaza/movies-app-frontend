const postFormData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    body: data,
  });
  const json = await response.json();
  return json;
};

export default postFormData;
