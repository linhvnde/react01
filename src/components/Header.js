import headerImg from '../logo.svg';
export default function Header() {
  const date = new Date();
  const getDate = date.getDate();
  const isEven = getDate % 2 === 0;
  function capitalize(str) {
    return str.toUpperCase();
  }

  return (
    <div className="App-header">
      <h2>{`The Date is ${
        isEven ? capitalize('Even') : capitalize('Odd')
      }`}</h2>
      <img src={headerImg} className="App-logo" alt="logo" />
    </div>
  );
}
