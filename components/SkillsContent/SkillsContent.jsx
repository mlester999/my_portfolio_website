import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import React, { useLayoutEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useNavBarStore } from "@/store/useNavBarStore";

export default function SkillsContent({
  baseUrl,
  skills,
  introduction,
  tools,
}) {
  const currentScreenScroll = useNavBarStore((state) => state.currentScroll);

  const [switchState, setSwitchState] = useState(false);

  const [titleIsVisible, setTitleIsVisible] = useState(false);
  const [skillsIsVisible, setSkillsIsVisible] = useState(null);
  const [skillsAndToolsIsVisible, setSkillsAndToolsIsVisible] = useState(null);

  const ref = useRef(null);
  const skillsRefs = useRef(null);
  const skillsAndToolsRefs = useRef(null);

  useLayoutEffect(() => {
    if (
      skillsRefs.current.getBoundingClientRect().bottom <= window.innerHeight
    ) {
      setSkillsIsVisible(true);
    } else {
      setSkillsIsVisible(false);
    }

    if (ref.current.getBoundingClientRect().bottom <= window.innerHeight) {
      setTitleIsVisible(true);
    } else {
      setTitleIsVisible(false);
    }

    if (
      skillsAndToolsRefs.current.getBoundingClientRect().top + 100 <=
      window.innerHeight
    ) {
      setSkillsAndToolsIsVisible(true);
    } else {
      setSkillsAndToolsIsVisible(false);
    }
  }, [currentScreenScroll]);

  return (
    <Box
      id="skills-content"
      h="auto"
      px={8}
      borderBottom="1px"
      borderColor="gray.200"
      style={{
        backgroundImage:
          "linear-gradient(to right bottom, #c8ecfb, #d6effe, #e3f2ff, #eef5ff, #f7f9ff, #fafbff, #fdfdff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)",
      }}
    >
      <Flex
        pt={{ base: 16, lg: 24 }}
        pb={{ base: 24, lg: 32 }}
        h="full"
        maxW="1300px"
        mx="auto"
        flexDirection="column"
        gap={{ base: 2, lg: 10 }}
      >
        <Flex
          as={motion.div}
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: titleIsVisible ? 1 : 0,
            y: titleIsVisible ? 0 : 50,
            transition: {
              ease: "easeInOut",
              type: "spring",
              stiffness: 50,
            },
          }}
          display="flex"
          flexDirection="column"
          gap={3}
          textAlign="center"
          maxWidth="750px"
          mx="auto"
        >
          <Text
            as={motion.h1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            fontWeight="semibold"
            fontSize="4xl"
            color="blue.500"
          >
            {skills.title}
          </Text>
          <Heading
            as={motion.h1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            fontSize={{ base: "lg", sm: "xl", xl: "2xl" }}
            fontWeight="semibold"
            color="gray.600"
          >
            For those who know what they’re looking for...
          </Heading>
        </Flex>

        <Flex
          ref={skillsRefs}
          justifyContent="center"
          flexDirection="column"
          w="full"
          textAlign={{ base: "center", lg: "left" }}
        >
          <Flex
            as={motion.div}
            initial={{ opacity: 1, scale: 1, y: 0 }}
            animate={{
              scale: skillsIsVisible ? 1 : 0,
              opacity: skillsIsVisible ? 1 : 0,
              y: skillsIsVisible ? 0 : 50,
              transition: {
                ease: "easeInOut",
                type: "spring",
                stiffness: 50,
              },
            }}
            display="flex"
            flexDirection="column"
            px={{ base: 6, md: 12 }}
            pt={{ base: 6, lg: 0 }}
            alignItems="center"
            justifyContent="center"
            gap={{ base: 6, lg: 8 }}
          >
            <Flex
              onClick={() => setSwitchState(!switchState)}
              alignItems="center"
              cursor="pointer"
              borderRadius="full"
              backgroundColor="gray.200"
              position="relative"
              height={{ base: "50px", lg: "70px" }}
              style={{
                width: "250px",
                boxSizing: "border-box",
                padding: "0 5px",
                transition: "all .3s",
              }}
            >
              <Flex
                flexDirection="column"
                ml={switchState && "auto"}
                mr={!switchState && "auto"}
                p={1}
                height="100%"
                width="50%"
                as={motion.div}
                layout
              >
                <AnimatePresence mode="wait" initial={false}>
                  <Box
                    as={motion.div}
                    style={{
                      background: "#03A2FF",
                      background:
                        "linear-gradient(to right, #03A2FF 0%, #016aff 100%)",
                    }}
                    height="100%"
                    borderRadius="full"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  ></Box>
                </AnimatePresence>
              </Flex>
              <Flex
                position="absolute"
                width="100%"
                borderRadius="full"
                style={{ marginLeft: "-5px" }}
              >
                <Button
                  as={motion.button}
                  flex={1}
                  bg="transparent"
                  fontSize={{ base: "lg", lg: "xl" }}
                  _hover={{ background: "transparent" }}
                  animate={{
                    color: !switchState ? "white" : "gray",
                    transition: {
                      ease: "easeInOut",
                      delay: 0.1,
                    },
                  }}
                >
                  Skills
                </Button>
                <Button
                  as={motion.button}
                  flex={1}
                  bg="transparent"
                  fontSize={{ base: "lg", lg: "xl" }}
                  _hover={{ background: "transparent" }}
                  animate={{
                    color: switchState ? "white" : "gray",
                    transition: {
                      ease: "easeInOut",
                      delay: 0.1,
                    },
                  }}
                >
                  Tools
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          as={motion.div}
          ref={skillsAndToolsRefs}
          initial={{ opacity: 1, y: 0 }}
          animate={{
            opacity: skillsAndToolsIsVisible ? 1 : 0,
            y: skillsAndToolsIsVisible ? 0 : 50,
            transition: {
              type: "spring",
              stiffness: 100,
              ease: "easeInOut",
              duration: 0.4,
              delay: 0.1,
            },
          }}
          mt={12}
          flexDirection="column"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <AnimatePresence>
            {!switchState ? (
              <SimpleGrid
                as={motion.div}
                key="child1"
                initial={{ opacity: 0, y: 50, zIndex: 1, position: "relative" }}
                animate={{
                  opacity: 1,
                  y: 0,
                  zIndex: 1,
                  transition: {
                    ease: "easeInOut",
                    duration: 0.5,
                  },
                }}
                exit={{
                  scale: 0,
                  y: 100,
                  opacity: 0,
                  position: "absolute",
                  transition: {
                    ease: "easeInOut",
                    duration: 0.5,
                  },
                }}
                display="grid"
                position="relative"
                height="100%"
                columns={{ base: 1 }}
                spacing={8}
              >
                <Flex
                  gap={4}
                  wrap="wrap"
                  alignItems="center"
                  justifyContent="center"
                  maxW="1100px"
                >
                  {introduction.techStacks.data.map((tech) => {
                    return (
                      <Box
                        key={`${tech.id}`}
                        bg="white"
                        boxShadow="xl"
                        borderRadius="xl"
                        border="1px"
                        borderColor="gray.200"
                        px={{ base: 4, md: 4 }}
                        py={{ base: 6, md: 4 }}
                      >
                        <Flex
                          flexDirection="column"
                          alignItems="center"
                          width="100px"
                          gap={2}
                        >
                          <Image
                            boxSize={{ base: 12, md: 10 }}
                            borderRadius="sm"
                            src={`${baseUrl}${tech.attributes.icon.data.attributes.url}`}
                          />

                          <Text fontWeight="medium">
                            {tech.attributes.title}
                          </Text>
                        </Flex>
                      </Box>
                    );
                  })}
                </Flex>
              </SimpleGrid>
            ) : (
              <SimpleGrid
                as={motion.div}
                key="child2"
                initial={{ opacity: 0, y: 50, zIndex: 2, position: "relative" }}
                animate={{
                  opacity: 1,
                  y: 0,
                  zIndex: 2,
                  transition: {
                    ease: "easeInOut",
                    duration: 0.5,
                  },
                }}
                exit={{
                  scale: 0,
                  y: 100,
                  opacity: 0,
                  position: "absolute",
                  transition: {
                    ease: "easeInOut",
                    duration: 0.5,
                  },
                }}
                display="grid"
                position="relative"
                height="100%"
                columns={{ base: 1 }}
                spacing={8}
              >
                <Flex
                  gap={4}
                  display="flex"
                  wrap="wrap"
                  alignItems="center"
                  justifyContent="center"
                  maxW="1100px"
                >
                  {tools.map((tech) => {
                    return (
                      <Box
                        key={`${tech.id}`}
                        bg="white"
                        borderRadius="xl"
                        boxShadow="xl"
                        border="1px"
                        borderColor="gray.200"
                        px={{ base: 4, md: 4 }}
                        py={{ base: 6, md: 4 }}
                      >
                        <Flex
                          flexDirection="column"
                          alignItems="center"
                          width="100px"
                          gap={2}
                        >
                          <Image
                            boxSize={{ base: 12, md: 10 }}
                            borderRadius="sm"
                            src={`${baseUrl}${tech.attributes.icon.data.attributes.url}`}
                          />

                          <Text fontWeight="medium">
                            {tech.attributes.title}
                          </Text>
                        </Flex>
                      </Box>
                    );
                  })}
                </Flex>
              </SimpleGrid>
            )}
          </AnimatePresence>
        </Flex>
      </Flex>
    </Box>
  );
}
