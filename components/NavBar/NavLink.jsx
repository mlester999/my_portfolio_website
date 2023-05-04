import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function NavLink(props) {
  return (
    <Link href={props.href}>
      <Text _hover={{ color: "blue.400" }} transitionDuration="200ms">
        {props.children}
      </Text>
    </Link>
  );
}
