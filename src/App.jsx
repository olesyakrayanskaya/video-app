import Card from "./components/Card/Card";
import CardWrapper from "./components/CardWrapper/CardWrapper";

function App() {
  return (
    <>
      <CardWrapper>
        <Card image="/src/assets/images/poster-1.png" title={"video-1"} />
        <Card image="/src/assets/images/poster-2.png" title={"video-2"} />
        <Card image="/src/assets/images/poster-1.png" title={"video-3"} />
        <Card image="/src/assets/images/poster-2.png" title={"video-4"} />
        <Card image="/src/assets/images/poster-1.png" title={"video-5"} />
        <Card image="/src/assets/images/poster-2.png" title={"video-6"} />
      </CardWrapper>
    </>
  );
}

export default App;
