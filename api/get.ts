async function sendRequest(link: string, requestJson: any) {
  await fetch(link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: requestJson,
  })
    .then((response) => response.json())
    .then((json) => json);
}

export async function getApi(link: string, requestJson: any) {
  const response = await sendRequest(link, requestJson);
  return response;
}
