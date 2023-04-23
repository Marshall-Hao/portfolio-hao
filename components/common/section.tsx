import { motion } from "framer-motion";
import {
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

type TProps = {
  children: ReactNode;
  delay: string;
};

const Section = ({
  children,
  delay = 0,
  ...props
}: TProps) => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transitionDelay={delay}
      transitionDuration="0.8"
      transition={{ duration: 0.8, delay }}
      mb={6}
    >
      {children}
    </StyledDiv>
  );
};

export default Section;
