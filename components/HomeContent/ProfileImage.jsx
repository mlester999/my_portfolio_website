import React from "react";
import Image from "next/image";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ProfilePicture = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["height", "width", "quality", "src", "alt", "fill"].includes(prop),
});

const ProfileContainer = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function ProfileImage({ baseUrl, introduction }) {
  return (
    <ProfileContainer
      position="relative"
      mx={{ sm: "auto", lg: 0 }}
      width={{ sm: "300px", lg: "400px", xl: "500px" }}
      height={{ sm: "300px", lg: "400px", xl: "500px" }}
      border="4px"
      borderColor="black"
      overflow="hidden"
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
      }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <ProfilePicture
        fill
        position="relative !important"
        objectFit="cover"
        src={`${baseUrl}${introduction.image.data.attributes.url}`}
        alt="Mark Lester Acak"
      />
    </ProfileContainer>
  );
}
