import React, {useState, useEffect} from 'react';
import Button from './components/Button';
import List from './components/List';
import styles from './components/App.module.css';
function App() {

  // useState
  // [변수, 변수를 변형할 함수]
  // useState(0)에 0을 넣으므로 counter는 0으로 초기화 된다.
  // onClick에 setValue를 담고 button을 클릭할 때마다 onClick를 실행함으로써
  // counter의 수가 증가하게 된다.



  // 제목 클릭시 새로고침
  const onClickF5 = () => {return true;}

  // 클릭시 카운터 증가
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev +1);

  // search
  const [keyword, setKeyword] = useState("");
  const onChange = (e) => setKeyword(e.target.value);

  // day & night
  const [showing, setShowing] = useState(false);
  const onClick2 = () => setShowing((prev) => !prev);
  
  // show & hide
  const [showing2, setShowing2] = useState("");
  const onClick3 = () => setShowing2((prev) => !prev);

  // toDoList
  const [toDo, setToDo] = useState("");
  const onChange4 = (e) => setToDo(e.target.value);
  const [toDos, setToDos] = useState([]); 
  const onSubmit = (e) => { 
                          e.preventDefault();
                          console.log(toDo);
                          if(toDo === "") {return }
                          <Button text = {toDo}></Button>
                          setToDo("");
                          setToDos(currArr => [toDo, ...currArr])
                          toDos.sort();
                          ;}

  // 실시간 비트코인[이름,가격] api를 이용해서 긁어오기
  // const [loading, setLoading] = useState(true);
  // const [coins, setCoins] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.coinpaprika.com/v1/tickers")
  //   .then((res) => res.json())
  //   .then((json) => {
  //     setCoins(json);
  //     setLoading(false);
  //   });
  // }, []);

  // toDoList 추가될때만 콘솔로그   
  // useEffect(() => {
  //   console.log(toDos);}, [toDos]);

  // console.log('changing state : refresh rendering ex) call the API');
  // useEffect : 코드가 한번만 실행할 수 있게 도와줌
  const iRunOnlyOnce = () => {
    // console.log("but useEffect is only once with first rendering");
  };

  // []가 변화할 떄만 iRunOnlyOnce를 구동시킨다.
  // React.js가 바라보는 부분이 []없기에 한 번만 가동된다.
  useEffect(iRunOnlyOnce, []);
  
  useEffect(() => {
    if(counter !== 0){
      console.log("counter가 변화할 때만 구동됩니다!");
    }
  }, [counter]);
  

  // 매번 검색할 떄마다 계속해서 반복되는 코드들이 있는데
  // 특정한 코드들이 변화했을 때만 해당 코드만 변화하게끔 하려면?
  // -> keyword가 변화할 떄 + 조건에 해당한다면 안에있는 console.log를 구동시킨다.
  useEffect(() => {
    if(keyword !== "" && keyword.length >= 5) console.log("Search For : ", keyword);
  }, [keyword]);

  useEffect(() => {
    if(toDo !== "" && toDo.length >= 5) console.log("TodoList is :", toDo);
  }, [toDo])

  return (
  <div className={showing ? styles.Night :styles.Day}>
    <div className="App">

      <input 
        type= "text" 
        placeholder="Search here..."
        onChange={onChange}
        value = {keyword}/>
      <hr />

      <h1 className={styles.title}
        onClick = {onClickF5}>
        <a href='/'>Hello, This is TesT</a> 
      </h1>
      <hr />

      <h2 
        className={styles.subTitle}>
        counter : {counter}
      </h2>

      <button 
        className={styles.btn} 
        onClick = {onClick}>
        click　me 
      </button>
      
      <br />
      <hr />
      
      <nav>
        {showing ? <Button text = {"Night　변환완료!"}/> : <Button text = {"Day　변환완료!"}/>}
        <button
          onClick={onClick2}
          className={styles.btn}
          >{showing ? "Night" : "Day"}</button>
      </nav>
      <hr />

        {showing2 ? <Button text = {"Create Button"}/> : null}
      <button
        onClick={onClick3}>{showing2 ? "Hide" : "Show"}</button>

      <hr />
      <br />

      <form onSubmit={onSubmit} >
        <input type = "text"
              onChange = {onChange4}
              value = {toDo}
              placeholder = "Write your To Do List" />
        <button>Add To Do </button>
        <h2>My To Do ({toDos.length})</h2>
        <hr />
        {toDos.map((item, index) =><li key={index}>{item}</li>)}
      </form>

      <hr />
      {/* <div>
        <h1>The Coins! ({coins.length})</h1>
        {loading ?
         (<strong>Loading ...</strong>)
         :(
          <select>
            {coins.map((coin) =>(
              <option>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option> ccccccccccccccccccccccccccccccccccccccccccccccc
            ))}
          </select>
         )}
      </div> */}
      <hr />
      <br></br>

    </div>
  </div>
  );
}

export default App;
