import React from "react";
import { FormState } from "../Context/StateProvider";
import { useSpring, animated } from "@react-spring/web";
import { Button, Paper, Typography, Box } from "@mui/material";

const Counter = () => {
  const context = FormState();
  if (!context) {
    return <Typography color="error">Error: State context is not available.</Typography>;
  }

  const { count, setCount } = context;

  const props = useSpring({
    backgroundColor: `rgba(255, 0, 0, ${count / 100})`,
    to: {
      backgroundColor: `rgba(0, 0, 255, ${count / 100})`,
    },
    config: { tension: 170, friction: 26 },
  });

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);
  const handleReset = () => setCount(0);

  return (
    <animated.div style={{ ...props, textAlign: "center", padding: "30px" }}>
      <Paper elevation={3} sx={{ padding: 4, textAlign: "center", maxWidth: 400, margin: "auto" }}>
        <Typography variant="h4" gutterBottom>
          Counter: {count}
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <Button variant="contained" color="primary" onClick={handleIncrement}>
            Increment
          </Button>
          <Button variant="contained" color="secondary" onClick={handleDecrement}>
            Decrement
          </Button>
          <Button variant="contained" color="error" onClick={handleReset}>
            Reset
          </Button>
        </Box>
      </Paper>
    </animated.div>
  );
};

export default Counter;