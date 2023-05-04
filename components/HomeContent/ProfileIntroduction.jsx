import React from "react";
import {
  AiFillMail,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { Box, Flex, Text, Icon, Tag, TagRightIcon } from "@chakra-ui/react";
import Link from "next/link";
import WavingHand from "./svg/WavingHand";

export default function ProfileIntroduction() {
  return (
    <Flex flexDirection="column" justifyContent="center" maxW="500px" gap={8}>
      <Text
        fontSize={{ base: 32, sm: 32, lg: 56 }}
        fontWeight="extrabold"
        color="gray.700"
      >
        Front-End React Developer
        <WavingHand />
      </Text>
      <Text fontSize={16} color="gray.500">
        Hi, I'm Mark Lester T. Acak. A passionate Front-end React Developer
        based in Laguna, Philippines. 📍
      </Text>
      <Flex gap={3} mx={{ base: "auto", lg: 0 }}>
        <Link
          href="mailto:mlester0806@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon
            as={AiFillMail}
            boxSize={8}
            _hover={{ color: "blue.400" }}
            transitionDuration="200ms"
          />
        </Link>
        <Link
          href="https://www.facebook.com/mlester999/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon
            as={AiFillFacebook}
            boxSize={8}
            _hover={{ color: "blue.400" }}
            transitionDuration="200ms"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mlester999/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon
            as={AiFillLinkedin}
            boxSize={8}
            _hover={{ color: "blue.400" }}
            transitionDuration="200ms"
          />
        </Link>
        <Link
          href="https://github.com/mlester999"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon
            as={AiFillGithub}
            boxSize={8}
            _hover={{ color: "blue.400" }}
            transitionDuration="200ms"
          />
        </Link>
      </Flex>
    </Flex>
  );
}
