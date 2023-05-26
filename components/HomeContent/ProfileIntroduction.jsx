import React from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  Tag,
  TagRightIcon,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import WavingHand from "./svg/WavingHand";

export default function ProfileIntroduction({ introduction }) {
  return (
    <Flex flexDirection="column" justifyContent="center" maxW="500px" gap={8}>
      <Text
        fontSize={{ base: 32, sm: 32, lg: 56 }}
        fontWeight="extrabold"
        color="gray.700"
      >
        {introduction.title}
        <WavingHand />
      </Text>
      <Text fontSize={16} color="gray.500">
        {introduction.description}
      </Text>
      <Flex flexDirection="column" gap={1} mx={{ base: "auto", lg: 0 }}>
        <Text>Get in touch: </Text>

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
                  src={`http://localhost:1337${social.icon.data.attributes.url}`}
                  _hover={{ backgroundColor: "gray.300" }}
                  transitionDuration="200ms"
                />
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}
