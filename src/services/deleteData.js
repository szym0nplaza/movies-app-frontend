const deleteData = async (url) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json;
};

export default deleteData;
