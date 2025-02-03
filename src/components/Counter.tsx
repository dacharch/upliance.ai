import React from "react";
import { FormState } from "../Context/StateProvider" 
import { useSpring, animated } from "@react-spring/web"; 

const Counter: React.FC = () => {
  const context = FormState(); 
  if (!context) {
    return <div>Error: State context is not available.</div>;
  }

  const { count, setCount } = context;

  const props = useSpring({
    backgroundColor: `rgba(255, 0, 0, ${count / 100})`,
    to: {
      backgroundColor: `rgba(0, 0, 255, ${count / 100})`,
    },
    config: { tension: 170, friction: 26 },
  });


  const handleIncrement= () =>{
    setCount(count+1)

  } 
  const handleDecrement = () => {
    setCount(count>0? count-1 : 0)
  }
  
  const handleReset = ()=>{
     setCount(0);
  }

  return (
    <animated.div style={{ ...props, textAlign: "center", padding: "50px" }}>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={handleIncrement} style={buttonStyle}>
          Increment
        </button>
        <button onClick={handleDecrement} style={buttonStyle}>
          Decrement
        </button>
        <button onClick={handleReset} style={buttonStyle}>
          Reset
        </button>
      </div>
    </animated.div>
  );
};

const buttonStyle: React.CSSProperties = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#4CAF50",
  color: "white",
};

export default Counter;
