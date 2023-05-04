import { Box, Tooltip } from "@chakra-ui/react";
import React from "react";

export default function VueSvg() {
  return (
    <Tooltip label="Vue JS" aria-label="A tooltip">
      <Box
        bg="white"
        borderRadius="full"
        boxShadow="xl"
        padding={4}
        cursor="pointer"
        _hover={{
          bgGradient:
            "linear-gradient(181.2deg, rgb(72, 173, 102) 10.5%, rgb(254, 254, 254) 86.8%)",
        }}
        transitionDuration="200ms"
      >
        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="40"
            height="40"
            viewBox="0 0 256 221"
            version="1.1"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z"
                fill="#41B883"
              />
              <path
                d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z"
                fill="#41B883"
              />
              <path
                d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z"
                fill="#35495E"
              />
            </g>
          </svg>
        </Box>
      </Box>
    </Tooltip>
  );
}
