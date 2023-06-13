import React from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  Link,
  Tag,
  TagRightIcon,
  Image,
  Button,
} from "@chakra-ui/react";

import WavingHand from "./svg/WavingHand";

export default function ProfileIntroduction({ baseUrl, introduction }) {
  const scroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      maxW="500px"
      gap={{ base: 2, md: 0 }}
    >
      <Text fontSize={{ lg: 16, xl: 32 }} color="gray.500">
        Hi there, I'm Mark Lester Acak
      </Text>
      <Text
        fontSize={{ base: 32, sm: 32, lg: 56, xl: 72 }}
        fontWeight="extrabold"
        style={{
          background: "#121FCF",
          background: "linear-gradient(to right, #121FCF 0%, #CF1512 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {introduction.title}
      </Text>
      <Text fontSize={{ lg: 16, xl: 20 }} color="gray.500">
        I help clients bring their website dreams to life, creating impactful
        online experiences that leave a lasting impression
      </Text>
      <Flex flexDirection="column" gap={1} mx={{ base: "auto", lg: 0 }}>
        {/* <Text>Get in touch: </Text>

        <Flex gap={3} style={{ marginLeft: "-6px" }}>
          {introduction.socialMedia.map((social) => {
            return (
              <Link
                key={`${social.id}`}
                href={`${social.url}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  boxSize={{ base: 10, lg: 12 }}
                  borderRadius="xl"
                  src={`${baseUrl}${social.icon.data.attributes.url}`}
                  _hover={{ backgroundColor: "gray.300" }}
                  transitionDuration="200ms"
                />
              </Link>
            );
          })}
        </Flex> */}

        <Flex mt={8} alignItems="center" gap={2}>
          <Link
            onClick={() => scroll("project-content")}
            fontSize={{ base: "md", md: "xl" }}
            px={{ base: 4, md: 8 }}
            py={{ base: 2, md: 3 }}
            rounded="full"
            color="white"
            boxShadow="lg"
            textShadow="2xl"
            fontWeight="bold"
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
            View my work
          </Link>
          <Link
            onClick={() => scroll("skills-content")}
            px={{ base: 4, md: 8 }}
            py={{ base: 2, md: 3 }}
            fontSize={{ base: "md", md: "xl" }}
            rounded="full"
            color="blue.500"
            textShadow="2xl"
            fontWeight="semibold"
            backgroundColor="transparent"
            _hover={{ backgroundColor: "transparent", color: "blue.400" }}
          >
            More about me
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
