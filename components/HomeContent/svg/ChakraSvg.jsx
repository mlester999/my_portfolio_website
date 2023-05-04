import { Box, Tooltip } from "@chakra-ui/react";
import React from "react";

export default function ChakraSvg() {
  return (
    <Tooltip label="Chakra UI" aria-label="A tooltip">
      <Box
        bg="white"
        borderRadius="full"
        boxShadow="xl"
        padding={4}
        cursor="pointer"
        _hover={{
          bgGradient:
            "linear-gradient(181.2deg, rgb(140, 250, 241) 10.5%, rgb(254, 254, 254) 86.8%)",
        }}
        transitionDuration="200ms"
      >
        <Box>
          <svg
            viewBox="0 0 257 257"
            xmlns="http://www.w3.org/2000/svg"
            className="css-fuaw0j"
            width="40"
            height="40"
          >
            <rect width="257" height="257" rx="128.5" fill="url(#a)" />
            <path
              d="m69.56 133.99 87.59-87c1.64-1.62 4.27.36 3.17 2.38l-32.6 59.76a2 2 0 0 0 1.75 2.95h56.34a2 2 0 0 1 1.36 3.47l-98.72 92.14c-1.78 1.65-4.41-.68-2.99-2.64l46.74-64.47a2 2 0 0 0-1.62-3.18H70.97a2 2 0 0 1-1.41-3.41z"
              fill="#fff"
            />
            <defs>
              <linearGradient
                id="a"
                x1="128.5"
                x2="128.5"
                y2="257"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7BCBD4" />
                <stop offset="1" stopColor="#29C6B7" />
              </linearGradient>
            </defs>
          </svg>
        </Box>
      </Box>
    </Tooltip>
  );
}
