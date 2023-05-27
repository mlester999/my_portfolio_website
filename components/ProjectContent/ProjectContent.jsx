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

export default function ProjectContent({ baseUrl, project }) {
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

    projectRefs.current.forEach((el, i) => {
      if (
        el.current.getBoundingClientRect().bottom - 100 <=
        window.innerHeight
      ) {
        tempArr[i] = true;
      } else {
        tempArr[i] = false;
      }

      setProjectsIsVisible(tempArr);
    });

    if (ref.current.getBoundingClientRect().bottom <= window.innerHeight) {
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
            fontSize={{ md: "xl", lg: "2xl", xl: "3xl" }}
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
                  px={{ base: 8, lg: 24, xl: 0 }}
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
                    gridRowStart={{ base: 2, lg: 1 }}
                    gridColumnStart={{ base: "auto", lg: 1 }}
                    display="flex"
                    flexDirection="column"
                    px={{ base: 6, md: 12 }}
                    pt={{ base: 6, lg: 0 }}
                    justifyContent="center"
                    gap={{ base: 6, lg: 3 }}
                  >
                    <Flex flexDirection="column" gap={4}>
                      <Text
                        fontWeight="thin"
                        fontSize={{ base: "sm", sm: "md", md: "lg" }}
                        color="blue.500"
                      >
                        {proj.title}
                      </Text>
                      <Heading
                        color="gray.700"
                        fontSize={{
                          base: "xl",
                          md: "2xl",
                          lg: "3xl",
                          xl: "4xl",
                        }}
                      >
                        {proj.objectives}
                      </Heading>
                    </Flex>
                    <Box>
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color="gray.500"
                      >
                        {proj.description}
                      </Text>
                    </Box>
                    <Text
                      as={motion.a}
                      href={proj.projectLink}
                      target="_blank"
                      initial="initial"
                      animate="initial"
                      whileHover="animate"
                      width="max-content"
                      overflow="hidden"
                      mx={{ base: "auto", lg: "0" }}
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
                    </Text>
                  </Flex>

                  <Flex position="relative" alignItems="center">
                    <Image
                      as={motion.img}
                      initial={{ scale: 0 }}
                      animate={{
                        scale: projectsIsVisible[i] ? 1 : 0,
                        transition: {
                          ease: "easeInOut",
                        },
                      }}
                      w={{ md: "container.sm", lg: "100%" }}
                      mx={{ md: "auto", lg: "none" }}
                      borderRadius="xl"
                      src={`${baseUrl}${proj.backgroundImage.data.attributes.url}`}
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
                      boxShadow="2xl"
                      width={{
                        base: "400px",
                        md: "600px",
                        lg: "450px",
                        xl: "600px",
                      }}
                      mx="auto"
                      left="0"
                      right="0"
                      position="absolute"
                      src={`${baseUrl}${proj.projectPhoto[0].coverImage.data.attributes.url}`}
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
                  px={{ base: 8, lg: 24, xl: 0 }}
                  pt={32}
                >
                  <Flex position="relative" alignItems="center">
                    <Image
                      as={motion.img}
                      initial={{ scale: 0 }}
                      animate={{
                        scale: projectsIsVisible[i] ? 1 : 0,
                        transition: {
                          ease: "easeInOut",
                        },
                      }}
                      w={{ md: "container.sm", lg: "100%" }}
                      mx={{ md: "auto", lg: "none" }}
                      borderRadius="xl"
                      src={`${baseUrl}${proj.backgroundImage.data.attributes.url}`}
                      transitionDuration="200ms"
                    />

                    <Image
                      as={motion.img}
                      initial={{ x: -100 }}
                      animate={{
                        x: projectsIsVisible[i] ? 0 : -100,
                        transition: {
                          ease: "easeInOut",
                          delay: 0.1,
                        },
                      }}
                      borderRadius="lg"
                      boxShadow="2xl"
                      width={{
                        base: "400px",
                        md: "600px",
                        lg: "450px",
                        xl: "600px",
                      }}
                      position="absolute"
                      mx="auto"
                      left="0"
                      right="0"
                      src={`${baseUrl}${proj.projectPhoto[0].coverImage.data.attributes.url}`}
                      transitionDuration="200ms"
                    />
                  </Flex>

                  <Flex
                    as={motion.div}
                    initial={{ x: 100 }}
                    animate={{
                      x: projectsIsVisible[i] ? 0 : 100,
                      transition: {
                        ease: "easeInOut",
                        delay: 0.1,
                      },
                    }}
                    display="flex"
                    flexDirection="column"
                    px={{ base: 6, md: 12 }}
                    pt={{ base: 6, lg: 0 }}
                    justifyContent="center"
                    gap={{ base: 6, lg: 3 }}
                  >
                    <Flex flexDirection="column" gap={4}>
                      <Text
                        fontWeight="thin"
                        fontSize={{ base: "sm", sm: "md", md: "lg" }}
                        color="blue.500"
                      >
                        {proj.title}
                      </Text>
                      <Heading
                        color="gray.700"
                        fontSize={{
                          base: "xl",
                          md: "2xl",
                          lg: "3xl",
                          xl: "4xl",
                        }}
                      >
                        {proj.objectives}
                      </Heading>
                    </Flex>
                    <Box>
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color="gray.500"
                      >
                        {proj.description}
                      </Text>
                    </Box>

                    <Text
                      as={motion.a}
                      href={proj.projectLink}
                      target="_blank"
                      initial="initial"
                      animate="initial"
                      whileHover="animate"
                      width="max-content"
                      overflow="hidden"
                      mx={{ base: "auto", lg: "0" }}
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
                    </Text>
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
