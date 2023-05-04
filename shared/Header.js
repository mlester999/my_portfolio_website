import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  Icon,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import ResizeObserver from "resize-observer-polyfill";

const Header = ({ leftIcon, leftElements, rightElements, onHeightChanged }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  const resizeObserver = React.useRef(
    new ResizeObserver((entries) => {
      // your code to handle the size change
      if (onHeightChanged) onHeightChanged(entries[0].target.clientHeight);
    })
  );

  const resizedContainerRef = React.useCallback(
    (container) => {
      if (container !== null) {
        resizeObserver.current.observe(container);
      }
      // When element is unmounted, ref callback is called with a null argument
      // => best time to cleanup the observer
      else {
        if (resizeObserver.current) resizeObserver.current.disconnect();
      }
    },
    [resizeObserver.current]
  );

  return (
    <Flex
      minH="30px"
      ref={resizedContainerRef}
      top={0}
      bg={"#fff"}
      pos="fixed"
      zIndex={99}
      w="100%"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      px={{ base: "18px", lg: "10%" }}
      color="black"
      boxShadow="lg"
      pos="fixed"
      zIndex="99"
    >
      <Box>{leftIcon}</Box>

      <Box display={{ base: "block", lg: "none" }} onClick={handleToggle}>
        <svg
          fill="black"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Stack
        direction={{ base: "column", lg: "row" }}
        display={{ base: isOpen ? "block" : "none", lg: "flex" }}
        width={{ base: "full", lg: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: "12px", lg: 0 }}
        onClick={() => {
          // window.scrollTo({
          //   top: 0,
          //   behavior: "smooth",
          // });
          if (isOpen) onClose();
        }}
      >
        {leftElements}
      </Stack>

      <Stack
        direction={{ base: "column", lg: "row" }}
        display={{ base: isOpen ? "block" : "none", lg: "flex" }}
        width={{ base: "full", lg: "auto" }}
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
        h="100%"
        onClick={() => {
          // window.scrollTo({
          //   top: 0,
          //   behavior: "smooth",
          // });
          if (isOpen) onClose();
        }}
      >
        {rightElements}
      </Stack>

      {/* <Stack
        flexDir={{ base: "column", lg: "row" }}
        alignItems={{ base: "flex-start", lg: "center" }}
        display={{ base: isOpen ? "flex" : "none", lg: "flex" }}
        justifyContent="space-around"
        mt={{ base: 4, lg: 0 }}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          if (isOpen) onClose();
        }}
      >
        {rightElements}
      </Stack> */}
    </Flex>
  );
};

export default Header;
