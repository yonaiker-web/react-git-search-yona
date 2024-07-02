export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=fouJl6t66U9GwKiGiAbCR4hKXspfHWy0&limit=10&q=${category}`;

  const resp = await fetch(url);
  //tranformamos la peticion en un json
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
