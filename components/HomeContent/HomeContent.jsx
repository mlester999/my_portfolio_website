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

  useLayoutEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);

  const changeNavBarBG = () => {
    if (window.scrollY >= height) {
      navBarBg(true);
    } else {
      navBarBg(false);
    }

    currentScreenScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBarBG);
  }, [height]);

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      ref={ref}
      h="auto"
      overflow="hidden"
      px={16}
    >
      <Flex
        mt={`${navH}px`}
        py={{ base: 16, lg: 24 }}
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
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
            <ProfileImage baseUrl={baseUrl} introduction={introduction} />

            <ProfileIntroduction
              baseUrl={baseUrl}
              introduction={introduction}
            />
          </SimpleGrid>
        </Flex>
        <Flex alignItems="center" justifyContent="center" py={16}>
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
        </Flex>
      </Flex>
    </Box>
  );
}
