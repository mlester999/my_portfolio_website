import { useNavBarStore } from "@/store/useNavBarStore";
import { Box, Flex, Image, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ProfileImage from "./ProfileImage";
import ProfileIntroduction from "./ProfileIntroduction";

export default function HomeContent({ baseUrl, navH, introduction }) {
  const navBarBg = useNavBarStore((state) => state.changeNavBarBg);
  const currentScreenScroll = useNavBarStore(
    (state) => state.changeCurrentScroll
  );

  const ref = useRef(null);

  const [height, setHeight] = useState(0);

  const changeNavBarBG = () => {
    const updatedHeight = ref.current.offsetHeight;
    setHeight((prevHeight) => {
      if (window.scrollY >= prevHeight) {
        navBarBg(true);
      } else {
        navBarBg(false);
      }
      currentScreenScroll(window.scrollY);
      return updatedHeight;
    });
  };

  useEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeNavBarBG);

    return () => {
      window.removeEventListener("scroll", changeNavBarBG);
    };
  }, []);

  return (
    <Box
      id="home-content"
      as={motion.div}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeInOut",
          type: "spring",
          stiffness: 50,
        },
      }}
      borderBottom="1px"
      borderColor="gray.200"
      h="100vh"
      overflow="hidden"
      px={8}
      style={{
        backgroundImage:
          "linear-gradient(to right bottom, #c8ecfb, #d6effe, #e3f2ff, #eef5ff, #f7f9ff, #fafbff, #fdfdff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)",
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        h="full"
        maxW="1300px"
        mx="auto"
        flexDirection="column"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          gap={20}
          w="full"
          textAlign={{ base: "center", lg: "left" }}
        >
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, lg: 40 }}
          >
            <ProfileImage baseUrl={baseUrl} introduction={introduction} />

            <ProfileIntroduction
              baseUrl={baseUrl}
              introduction={introduction}
            />
          </SimpleGrid>
        </Flex>
        {/* <Flex alignItems="center" justifyContent="center" py={16}>
          <SimpleGrid columns={{ base: 1 }} spacing={8}>
            <Text fontSize={20} textAlign={{ base: "center" }}>
              Tech Stack:
            </Text>

            <Flex
              gap={4}
              wrap="wrap"
              alignItems="center"
              justifyContent="center"
              maxW="1100px"
            >
              {introduction.techStacks.data.map((tech) => {
                return (
                  <Tooltip
                    key={`${tech.id}`}
                    label={`${tech.attributes.title}`}
                    aria-label={`${tech.attributes.title}`}
                  >
                    <Box
                      bg="white"
                      borderRadius="full"
                      boxShadow="xl"
                      padding={{ base: 2, md: 4 }}
                      cursor="pointer"
                      _hover={{
                        bgGradient:
                          "linear-gradient(181.2deg, rgb(190, 190, 190) 10.5%, rgb(254, 254, 254) 86.8%)",
                      }}
                      transitionDuration="200ms"
                    >
                      <Box>
                        <Image
                          boxSize={{ base: 8, md: 10 }}
                          borderRadius="sm"
                          src={`${baseUrl}${tech.attributes.icon.data.attributes.url}`}
                        />
                      </Box>
                    </Box>
                  </Tooltip>
                );
              })}
            </Flex>
          </SimpleGrid>
        </Flex> */}
      </Flex>
    </Box>
  );
}
