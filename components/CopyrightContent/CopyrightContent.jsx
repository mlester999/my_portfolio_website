import { useNavBarStore } from "@/store/useNavBarStore";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useLayoutEffect, useRef, useState } from "react";

export default function CopyrightContent({ baseUrl, introduction }) {
  const currentScreenScroll = useNavBarStore((state) => state.currentScroll);

  const [copyrightIsVisible, setCopyrightIsVisible] = useState(null);

  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current.getBoundingClientRect().top + 50 <= window.innerHeight) {
      setCopyrightIsVisible(true);
    } else {
      setCopyrightIsVisible(false);
    }
  }, [currentScreenScroll]);

  return (
    <Box
      as={motion.div}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{
        opacity: copyrightIsVisible ? 1 : 0,
        transition: {
          ease: "easeInOut",
          type: "spring",
          stiffness: 50,
        },
      }}
      w="100%"
      bg="blue.500"
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        maxWidth="1300px"
        mx="auto"
        color="white"
        alignItems="center"
        justifyContent={{ base: "center", md: "space-between" }}
        gap={4}
        py={12}
        px={{ base: 8, md: 12 }}
      >
        <Text
          fontSize={{ base: "md", md: "lg" }}
          textAlign={{ base: "center", md: "auto" }}
        >
          Copyright © 2023, Mark Lester Acak, All rights reserved.
        </Text>
        <Flex gap={3}>
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
                  _hover={{ backgroundColor: "gray.100" }}
                  transitionDuration="200ms"
                />
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
}
