import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";

import Header from "@/shared/Header";
import { useNavBarStore } from "@/store/useNavBarStore";

export default function NavBar({ navH, setNavH }) {
  const navBar = useNavBarStore((state) => state.navBarBg);
  const initialNav = useNavBarStore((state) => state.initialNavPos);

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
            <Text fontSize={24} fontWeight="bold" margin="10px">
              Marky.dev
            </Text>
          </a>
        }
        rightElements={
          <>
            <Link href="#">
              <Box textTransform="uppercase" p="24px">
                <Text>Home</Text>
              </Box>
            </Link>

            <Link href="#">
              <Box textTransform="uppercase" p="24px">
                <Text>Projects</Text>
              </Box>
            </Link>

            <Link href="#">
              <Box textTransform="uppercase" p="24px">
                <Text>Services</Text>
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
