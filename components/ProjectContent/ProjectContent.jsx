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
  projectRefs.current = project.portfolios.data.map(
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
    <Box
      id="project-content"
      h="auto"
      px={{ base: 8, md: 12 }}
      borderBottom="1px"
      borderColor="gray.200"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #c8ecfb, #d6effe, #e3f2ff, #eef5ff, #f7f9ff, #fafbff, #fdfdff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)",
      }}
    >
      <Flex
        pt={{ base: 16, lg: 24 }}
        pb={{ base: 24, lg: 32 }}
        h="full"
        maxW="1300px"
        mx="auto"
        flexDirection="column"
        gap={{ base: 2, lg: 24 }}
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
            fontWeight="semibold"
            fontSize="4xl"
            color="blue.500"
          >
            {project.title}
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
          {project.portfolios.data.map((proj, i) => {
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
                  gap={{ base: 0, md: 12 }}
                  mt={12}
                >
                  <Flex
                    as={motion.div}
                    initial={{ y: 100 }}
                    animate={{
                      y: projectsIsVisible[i] ? 0 : 100,
                      transition: {
                        ease: "easeInOut",
                        delay: 0.1,
                      },
                    }}
                    gridRowStart={{ base: 2, lg: 1 }}
                    gridColumnStart={{ base: "auto", lg: 1 }}
                    display="flex"
                    flexDirection="column"
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
                        {proj.attributes.title}
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
                        {proj.attributes.objectives}
                      </Heading>
                    </Flex>
                    <Box>
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color="gray.500"
                      >
                        {proj.attributes.description}
                      </Text>
                    </Box>
                    <Text
                      as={motion.a}
                      href={proj.attributes.projectLink}
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
                      src={`${baseUrl}${proj.attributes.backgroundImage.data.attributes.url}`}
                      transitionDuration="200ms"
                    />

                    <Image
                      as={motion.img}
                      initial={{ y: -100 }}
                      animate={{
                        y: projectsIsVisible[i] ? 0 : -100,
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
                      src={`${baseUrl}${proj.attributes.projectPhoto[0].coverImage.data.attributes.url}`}
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
                  gap={{ base: 0, md: 12 }}
                  columns={{ base: 1, lg: 2 }}
                  pt={20}
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
                      src={`${baseUrl}${proj.attributes.backgroundImage.data.attributes.url}`}
                      transitionDuration="200ms"
                    />

                    <Image
                      as={motion.img}
                      initial={{ y: -100 }}
                      animate={{
                        y: projectsIsVisible[i] ? 0 : -100,
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
                      src={`${baseUrl}${proj.attributes.projectPhoto[0].coverImage.data.attributes.url}`}
                      transitionDuration="200ms"
                    />
                  </Flex>

                  <Flex
                    as={motion.div}
                    initial={{ y: 100 }}
                    animate={{
                      y: projectsIsVisible[i] ? 0 : 100,
                      transition: {
                        ease: "easeInOut",
                        delay: 0.1,
                      },
                    }}
                    display="flex"
                    flexDirection="column"
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
                        {proj.attributes.title}
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
                        {proj.attributes.objectives}
                      </Heading>
                    </Flex>
                    <Box>
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color="gray.500"
                      >
                        {proj.attributes.description}
                      </Text>
                    </Box>

                    <Text
                      as={motion.a}
                      href={proj.attributes.projectLink}
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
