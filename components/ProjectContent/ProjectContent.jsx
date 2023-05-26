import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, {
  createRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useNavBarStore } from "@/store/useNavBarStore";

export default function ProjectContent({ project }) {
  const currentScreenScroll = useNavBarStore((state) => state.currentScroll);

  const [titleIsVisible, setTitleIsVisible] = useState(false);
  const [projectsIsVisible, setProjectsIsVisible] = useState([]);

  const ref = useRef(null);

  const projectRefs = useRef([]);
  projectRefs.current = project.projectInfo.map(
    (element, i) => projectRefs.current[i] ?? createRef()
  );

  useLayoutEffect(() => {
    const tempArr = [];
    console.log(`Scroll: ${currentScreenScroll}`);
    projectRefs.current.forEach((el, i) => {
      console.log(el.current.getBoundingClientRect());

      if (currentScreenScroll > el.current.getBoundingClientRect().bottom) {
        tempArr[i] = true;
      } else {
        tempArr[i] = false;
      }

      setProjectsIsVisible(tempArr);
    });

    if (
      currentScreenScroll >
      ref.current.getBoundingClientRect().top - currentScreenScroll
    ) {
      setTitleIsVisible(true);
    } else {
      setTitleIsVisible(false);
    }
  }, [currentScreenScroll]);

  const removeBorder = {
    initial: {
      translateX: "0%",
      transition: {
        delay: 0.1,
      },
    },
    animate: {
      translateX: "100%",
    },
  };

  const addBorder = {
    initial: { translateX: "-100%" },
    animate: {
      translateX: "0%",
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <Box h="auto" bg="gray.50">
      <Flex
        py={{ base: 24, lg: 32 }}
        h="full"
        maxW="1300px"
        mx="auto"
        flexDirection="column"
      >
        <Flex
          as={motion.div}
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{
            opacity: titleIsVisible ? 1 : 0,
            transition: {
              ease: "easeInOut",
            },
          }}
          display="flex"
          flexDirection="column"
          gap={3}
          textAlign="center"
        >
          <Text
            as={motion.h1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            fontWeight="thin"
            fontSize="lg"
            color="blue.500"
          >
            {project.title}
          </Text>
          <Heading
            as={motion.h1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            fontSize="3xl"
            color="gray.700"
          >
            {project.description}
          </Heading>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          w="full"
          textAlign={{ base: "center", lg: "left" }}
        >
          {project.projectInfo.map((proj, i) => {
            if (i % 2 == 0) {
              return (
                <SimpleGrid
                  key={`${proj.id}`}
                  as={motion.div}
                  ref={projectRefs.current[i]}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: projectsIsVisible[i] ? 1 : 0,
                    transition: {
                      ease: "easeInOut",
                    },
                  }}
                  display="grid"
                  columns={{ base: 1, lg: 2 }}
                  pt={32}
                >
                  <Flex
                    as={motion.div}
                    initial={{ x: -100 }}
                    animate={{
                      x: projectsIsVisible[i] ? 0 : -100,
                      transition: {
                        ease: "easeInOut",
                        delay: 0.1,
                      },
                    }}
                    display="flex"
                    flexDirection="column"
                    px={12}
                    justifyContent="center"
                    gap={3}
                  >
                    <Flex flexDirection="column" gap={4}>
                      <Text fontWeight="thin" fontSize="lg" color="blue.500">
                        {proj.title}
                      </Text>
                      <Heading color="gray.700">{proj.objectives}</Heading>
                    </Flex>
                    <Box>
                      <Text fontSize="md" color="gray.500">
                        {proj.description}
                      </Text>
                    </Box>
                    <motion.a
                      href={proj.projectLink}
                      target="_blank"
                      initial="initial"
                      animate="initial"
                      whileHover="animate"
                      style={{
                        display: "inline-flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        width: "max-content",
                      }}
                    >
                      <Box
                        display="inline-flex"
                        flexDirection="column"
                        overflow="hidden"
                        width="max-content"
                      >
                        <span>Learn more</span>
                        <span
                          style={{
                            width: "100%",
                            position: "relative",
                            height: "1px",
                          }}
                        >
                          <motion.span
                            variants={removeBorder}
                            style={{
                              width: "100%",
                              position: "absolute",
                              height: "1px",
                              top: "0",
                              left: "0",
                              backgroundColor: "#000000",
                            }}
                          ></motion.span>

                          <motion.span
                            variants={addBorder}
                            style={{
                              width: "100%",
                              position: "absolute",
                              height: "1px",
                              top: "0",
                              left: "0",
                              backgroundColor: "#000000",
                            }}
                          ></motion.span>
                        </span>
                      </Box>
                    </motion.a>
                  </Flex>

                  <Flex alignItems="center">
                    <Image
                      as={motion.img}
                      initial={{ scale: 0 }}
                      animate={{
                        scale: projectsIsVisible[i] ? 1 : 0,
                        transition: {
                          ease: "easeInOut",
                        },
                      }}
                      borderRadius="xl"
                      src={`http://localhost:1337${proj.backgroundImage.data.attributes.url}`}
                      transitionDuration="200ms"
                    />

                    <Image
                      as={motion.img}
                      initial={{ x: 100 }}
                      animate={{
                        x: projectsIsVisible[i] ? 0 : 100,
                        transition: {
                          ease: "easeInOut",
                          delay: 0.1,
                        },
                      }}
                      borderRadius="lg"
                      boxShadow="xl"
                      width="600px"
                      ml={4}
                      position="absolute"
                      src={`http://localhost:1337${proj.projectPhoto[0].coverImage.data.attributes.url}`}
                      transitionDuration="200ms"
                    />
                  </Flex>
                </SimpleGrid>
              );
            } else {
              return (
                <SimpleGrid
                  key={`${proj.id}`}
                  as={motion.div}
                  ref={projectRefs.current[i]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: projectsIsVisible[i] ? 1 : 0 }}
                  display="grid"
                  columns={{ base: 1, lg: 2 }}
                  pt={32}
                >
                  <Flex alignItems="center">
                    <Image
                      borderRadius="xl"
                      src={`http://localhost:1337${proj.backgroundImage.data.attributes.url}`}
                      transitionDuration="200ms"
                    />

                    <Image
                      borderRadius="lg"
                      boxShadow="xl"
                      width="600px"
                      ml={4}
                      position="absolute"
                      src={`http://localhost:1337${proj.projectPhoto[0].coverImage.data.attributes.url}`}
                      transitionDuration="200ms"
                    />
                  </Flex>

                  <Flex
                    flexDirection="column"
                    px={12}
                    justifyContent="center"
                    gap={3}
                  >
                    <Flex flexDirection="column" gap={4}>
                      <Text fontWeight="thin" fontSize="lg" color="blue.500">
                        {proj.title}
                      </Text>
                      <Heading color="gray.700">{proj.objectives}</Heading>
                    </Flex>
                    <Box>
                      <Text fontSize="md" color="gray.500">
                        {proj.description}
                      </Text>
                    </Box>
                    <motion.a
                      href={proj.projectLink}
                      target="_blank"
                      initial="initial"
                      animate="initial"
                      whileHover="animate"
                      style={{
                        display: "inline-flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        width: "max-content",
                      }}
                    >
                      <Box
                        display="inline-flex"
                        flexDirection="column"
                        overflow="hidden"
                        width="max-content"
                      >
                        <span>Learn more</span>
                        <span
                          style={{
                            width: "100%",
                            position: "relative",
                            height: "1px",
                          }}
                        >
                          <motion.span
                            variants={removeBorder}
                            style={{
                              width: "100%",
                              position: "absolute",
                              height: "1px",
                              top: "0",
                              left: "0",
                              backgroundColor: "#000000",
                            }}
                          ></motion.span>

                          <motion.span
                            variants={addBorder}
                            style={{
                              width: "100%",
                              position: "absolute",
                              height: "1px",
                              top: "0",
                              left: "0",
                              backgroundColor: "#000000",
                            }}
                          ></motion.span>
                        </span>
                      </Box>
                    </motion.a>
                  </Flex>
                </SimpleGrid>
              );
            }
          })}
        </Flex>
      </Flex>
    </Box>
  );
}
