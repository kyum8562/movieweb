import React, {useState, useEffect} from 'react';
import Button from './components/Button';
import styles from './components/App.module.css';
function App() {

  // useState
  // [변수, 변수를 변형할 함수]
  // useState(0)에 0을 넣으므로 counter는 0으로 초기화 된다.
  // onClick에 setValue를 담고 button을 클릭할 때마다 onClick를 실행함으로써
  // counter의 수가 증가하게 된다.
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev +1);

  const [keyword, setKeyword] = useState("");
  const onChange = (e) => setKeyword(e.target.value);

  //clean up
  const [showing, setShowing] = useState(false);
  const onClick2 = () => setShowing((prev) => !prev);

  console.log('changing state : refresh rendering ex) call the API');
  // useEffect : 코드가 한번만 실행할 수 있게 도와줌
  const iRunOnlyOnce = () => {
    console.log("but useEffect is only once with first rendering");
  };

  // []가 변화할 떄만 iRunOnlyOnce를 구동시킨다.
  // React.js가 바라보는 부분이 []없기에 한 번만 가동된다.
  useEffect(iRunOnlyOnce, []);

  useEffect(() => {
      console.log("counter가 변화할 때만 구동됩니다!");
  }, [counter]);

  // 매번 검색할 떄마다 계속해서 반복되는 코드들이 있는데
  // 특정한 코드들이 변화했을 때만 해당 코드만 변화하게끔 하려면?
  // -> keyword가 변화할 떄만 안에있는 console.log를 구동시킨다.
  useEffect(() => {
    if(keyword !== "" && keyword.length >= 5) console.log("Search For : ", keyword);
  }, [keyword]);


  return (
  <div className={showing ? styles.Night :styles.Day}>
    <div className="App">
      <input 
        type= "text" 
        placeholder="Search here..."
        onChange={onChange}
        value = {keyword}/>

      <h1 className={styles.title}>
        Hello, This is TesT 
      </h1>

      <br />

      <h2 
        className={styles.subTitle}>
        counter : {counter}
      </h2>

      <button 
        className={styles.btn} 
        onClick = {onClick}>
        click me
      </button>

      <br />

      {showing ? <Button text = {"Night로 변환!"}/> : <Button text = {"Day로 변환!"}/>}
      <button
        onClick={onClick2}>{showing ? "Night" : "Day"}</button>
    </div>
  </div>
  );
}

export default App;
