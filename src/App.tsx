import queryString from "query-string";
import "./App.css"
//

function App() {
  const search = window.location.search;
  const params = queryString.parse(search)
  // const openMomo = () => {
  //   const newWindow = window.open(`${params.deepLink}`, '_blank', 'noopener,noreferrer');
  //   if (newWindow) newWindow.opener = null
  // }
  return (
    <div className="cnt">
      <iframe
        className="iframe-cnt"
        src={`${params.payurl}&s=${params.s}`}
        scrolling="no"
      />
      <div className="trans"></div>
      {/* <div className="bottom">
        <button onClick={openMomo}>
          Thanh toán bằng ví Momo
        </button>
      </div> */}
    </div>
  );
}

export default App;