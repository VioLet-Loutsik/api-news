import BitcoinNewsFirst from "./BitcoinNewsFirst";
import BitcoinNewsSecond from "./BitcoinNewsSecond";
import './bitcoinNews.css';

function BitcoinNews() {
  return (
    <div className="bitcoinNews">
      <div className="bitcoinFirst">
        <BitcoinNewsFirst />
      </div>
      <div className="bitcoinSecond">
        <BitcoinNewsSecond />
      </div>
    </div>
  );
}
export default BitcoinNews;
