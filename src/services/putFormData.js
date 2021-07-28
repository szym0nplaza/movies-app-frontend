const putFormData = async (url, data) => {
  const response = await fetch(url, {
    method: "PUT",
    body: data,
  });
  const json = await response.json();
  return json;
};

export default putFormData;
