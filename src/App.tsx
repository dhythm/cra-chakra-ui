import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC } from "react";

const MotionBox = motion<BoxProps>(Box);

const App: FC = () => (
  <MotionBox
    boxSize="40px"
    bg="red.300"
    drag="x"
    dragConstraints={{ left: -100, right: 100 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  />
);

export default App;
