import './App.css';
import React, { useState } from 'react'
import Users from './component/Users';


function App() { //대문자 시작 컴포넌트

  const [count,setCount] = useState(0); //use가 붙으면 hooks
  //문자, 불리안 기능, 배열, 구조체 가능

  const onPressUpButton = ()=>{
    console.log("up")
    setCount(count+1)
  }

  const onPressDownButton = ()=>{
    console.log("down")
    setCount(count-1)
  }

  return (
    <div className="App">
      <button style={{
        width:100,
        height:100}}
        onClick={()=>{onPressUpButton()}}
        >up</button>

      <p>{count}</p>

      <button style={{
        width:100,
        height:100}}
        onClick={()=>{onPressDownButton()}}
        >down</button>
      <Users name="현지훈" age={24} callnum="010"/>

      <div>
        <Users name= "현지훈" age={24} callnum="010"/>
        <Users name= "김재민" age={24} callnum="010"/>
        <Users name= "조우주" age={24} callnum="010"/>
        <Users name= "이승훈" age={24} callnum="010"/>
      </div>
    </div>
  );
}

export default App;
