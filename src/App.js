//Components
import Form from "./components/Form";
import Status from "./components/Status";

//Styles
import "./styles/GlobalStyle.scss";
import "./styles/App.scss";

import { useState } from "react";

const App = () => {
  const [status, setStatus] = useState("Прежде, чем действовать, надо понять");
  return (
    <div className="app">
      <Status status={status} setStatus={setStatus} />
      <Form />
    </div>
  );
};

export default App;
