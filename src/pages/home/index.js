import data from "../../data/gifData";
import { ImageComponent } from "../../component/gif";

function Home() {
  const gifList = data.map(
    (gif, id) =>
      gif.rating === "g" && (
        <ImageComponent key={id} url={gif.url} title={gif.title} />
      )
  );

  return (
    <div>
      <br />
      <input
        className="input-area"
        type="text"
        placeholder="What are you looking for?"
      ></input>
      <button>Search</button>
      <br />
      <br />
      {gifList};
    </div>
  );
}

export default Home;
