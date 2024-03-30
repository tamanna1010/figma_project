import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { linearProgressClasses, styled } from "@mui/material";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#FF8A00",
  },
}));

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "60%", mr: 1 }}>
        <BorderLinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          sx={{ borderBottom: "1px solid rgba(0,0,0,0.2)" }}
          variant="body2"
          color="text.secondary"
        >{`${Math.round(props.value)}% elapsed time`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel() {
  const [progress, setProgress] = useState(10);

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setProgress((prevProgress) =>
  //         prevProgress >= 90 ? 10 : prevProgress + 10
  //       );
  //     }, 800);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
