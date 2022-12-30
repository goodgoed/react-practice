import { Form } from "./Form";
import illust from "./assets/undraw_articles_wbpb.svg";

function App() {
  return (
    <div className="flex justify-center items-center flex-row h-screen mx-[12rem] gap-[5rem]">
      <div className="w-5/12">
        <img src={illust} alt="illustration" />
      </div>
      <div className="w-7/12 float-right">
        <Form />
      </div>
    </div>
  );
}

export default App;
