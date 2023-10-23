import queryString from "query-string";
import "./App.css"
//

function App() {
  const search = window.location.search;
  const params = queryString.parse(search)
  return (
    <div className="cnt">
      <iframe
        className="iframe-cnt"
        src={`${params.payurl}&s=${params.s}`}
      />
      <div className="trans"></div>
    </div>
  );
}

export default App;