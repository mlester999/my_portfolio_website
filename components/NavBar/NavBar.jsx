import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";

import Header from "@/shared/Header";
import { useNavBarStore } from "@/store/useNavBarStore";

export default function NavBar({ navH, setNavH }) {
  const navBar = useNavBarStore((state) => state.navBarBg);
  const initialNav = useNavBarStore((state) => state.initialNavPos);

  const scroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <React.Fragment>
      <Head>
        <title>{"Mark Lester's Portfolio"}</title>
        <meta
          property="og:title"
          content="Mark Lester's Portfolio"
          key="Home"
        />
      </Head>
      <Header
        navBG={navBar}
        initialNav={initialNav}
        onHeightChanged={(h) => setNavH(h)}
        leftIcon={
          <a href="/">
            <Text
              fontSize={{ base: 20, md: 24 }}
              fontWeight="bold"
              margin="10px"
              style={{
                background: "#13C9CF",
                background:
                  "linear-gradient(to left, #13C9CF 0%, #006ECF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Mark Lester Acak
            </Text>
          </a>
        }
        rightElements={
          <>
            <Link
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <Box textTransform="uppercase" p="24px">
                <Text>Home</Text>
              </Box>
            </Link>

            <Link onClick={() => scroll("project-content")}>
              <Box textTransform="uppercase" p="24px">
                <Text>Projects</Text>
              </Box>
            </Link>

            <Link onClick={() => scroll("skills-content")}>
              <Box textTransform="uppercase" p="24px">
                <Text>Skills</Text>
              </Box>
            </Link>

            <Link onClick={() => scroll("contacts-content")}>
              <Box textTransform="uppercase" p="24px">
                <Text>Contact</Text>
              </Box>
            </Link>
          </>
        }
      />
    </React.Fragment>

    // <Flex
    //   position="fixed"
    //   w="100%"
    //   bg="white"
    //   py={6}
    //   px={14}
    //   boxShadow="lg"
    //   justifyContent="space-between"
    //   alignItems="center"
    //   color="gray.700"
    //   zIndex="dropdown"
    // >
    //   <Flex>
    //     <Link href="/">
    //       <Text fontSize={24} fontWeight="bold">
    //         Marky.dev
    //       </Text>
    //     </Link>
    //   </Flex>

    //   <Flex gap={8} fontSize={18} fontWeight="semibold">
    //     <NavLink href="/">Home</NavLink>
    //     <NavLink href="/">About</NavLink>
    //     <NavLink href="/">Projects</NavLink>
    //     <NavLink href="/">Contact</NavLink>
    //   </Flex>
    // </Flex>
  );
}
