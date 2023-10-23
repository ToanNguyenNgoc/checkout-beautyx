import queryString from "query-string";

function App() {
  const search = window.location.search;
  const params = queryString.parse(search)
  return (
    <div>
     <iframe
      src={`${params.payurl}&s=${params.s}`}
      style={{
        width:'100vw',
        height:'100vh'
      }}
     />
    </div>
  );
}

export default App;