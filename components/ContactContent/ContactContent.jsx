import { useNavBarStore } from "@/store/useNavBarStore";
import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";

export default function ContactContent() {
  const currentScreenScroll = useNavBarStore((state) => state.currentScroll);

  const [contactIsVisible, setContactIsVisible] = useState(null);

  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current.getBoundingClientRect().top + 100 <= window.innerHeight) {
      setContactIsVisible(true);
    } else {
      setContactIsVisible(false);
    }
  }, [currentScreenScroll]);

  return (
    <Flex
      id="contacts-content"
      as={motion.div}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: contactIsVisible ? 1 : 0,
        y: contactIsVisible ? 0 : 50,
        transition: {
          ease: "easeInOut",
          type: "spring",
          stiffness: 50,
        },
      }}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      maxWidth="1300px"
      mx="auto"
      alignItems="center"
      justifyContent={{ base: "center", md: "space-between" }}
      py={20}
      px={{ base: 8, md: 12 }}
      gap={8}
    >
      <Flex
        flexDirection="column"
        gap={4}
        textAlign={{ base: "center", md: "auto" }}
      >
        <Heading fontSize={{ base: 24, md: 32 }}>
          In need of a developer for your project?
        </Heading>
        <Text fontSize={{ base: 16, md: 24 }} color="blue.500">
          I'm currently available for work.
        </Text>
        <Link
          href="mailto:mlester0806@gmail.com"
          my={2}
          py={2}
          px={6}
          mx="auto"
          fontWeight="bold"
          color="white"
          bg="blue.500"
          width="max-content"
          rounded="full"
          fontSize={{ base: 16, md: 20 }}
          textShadow="2xl"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1FA2FF 0%, #12D8FA  51%, #1FA2FF  100%)",
            backgroundSize: "200% auto",
            transition: "0.5s",
          }}
          _hover={{
            backgroundPosition: "right center",
          }}
        >
          Send a message
        </Link>
      </Flex>
      <Flex
        flexDirection="column"
        color="gray.500"
        fontSize={{ base: 20, md: 24 }}
        textAlign={{ base: "center", lg: "right" }}
      >
        <Text>+639 15 139 2944</Text>
        <Text>mlester0806@gmail.com</Text>
      </Flex>
    </Flex>
  );
}
