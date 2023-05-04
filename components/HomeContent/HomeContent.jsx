import { Box, Flex, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import ProfileImage from "./ProfileImage";
import ProfileIntroduction from "./ProfileIntroduction";
import BootstrapSvg from "./svg/BootstrapSvg";
import ChakraSvg from "./svg/ChakraSvg";
import CssSvg from "./svg/CssSvg";
import HtmlSvg from "./svg/HtmlSvg";
import JavaScriptSvg from "./svg/JavaScriptSvg";
import JquerySvg from "./svg/JquerySvg";
import LaravelSvg from "./svg/LaravelSvg";
import LivewireSvg from "./svg/LivewireSvg";
import NodejsSvg from "./svg/NodejsSvg";
import PhpSvg from "./svg/PhpSvg";
import ReactSvg from "./svg/ReactSvg";
import ReduxSvg from "./svg/ReduxSvg";
import StrapiSvg from "./svg/StrapiSvg";
import TailwindSvg from "./svg/TailwindSvg";
import TypescriptSvg from "./svg/TypescriptSvg";
import VueSvg from "./svg/VueSvg";

export default function HomeContent({ navH }) {
  return (
    <Box h="auto" overflow="hidden" px={16}>
      <Flex
        mt={`${navH}px`}
        py={{ base: 16, lg: 24 }}
        h="full"
        maxW="1100px"
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
            <ProfileImage />

            <ProfileIntroduction />
          </SimpleGrid>
        </Flex>
        <Flex alignItems="center" justifyContent="center" py={16}>
          <SimpleGrid columns={{ base: 1 }} spacing={8} maxWidth="700px">
            <Text fontSize={20} textAlign={{ base: "center" }}>
              Tech Stack:
            </Text>

            <Flex
              gap={4}
              wrap="wrap"
              alignItems="center"
              justifyContent="center"
            >
              <HtmlSvg />

              <CssSvg />

              <BootstrapSvg />

              <TailwindSvg />

              <JavaScriptSvg />

              <TypescriptSvg />

              <NodejsSvg />

              <PhpSvg />

              <JquerySvg />

              <LaravelSvg />

              <LivewireSvg />

              <VueSvg />

              <ReactSvg />

              <ReduxSvg />

              <ChakraSvg />

              <StrapiSvg />
            </Flex>
          </SimpleGrid>
        </Flex>
      </Flex>
    </Box>
  );
}
