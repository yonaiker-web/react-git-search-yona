export const GifCard = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url}></img>
      <p>{title}</p>
    </div>
  );
};
