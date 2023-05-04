import { useState, useEffect } from "react";

import { Box, Center } from "@chakra-ui/react";

const ImageHolder = ({ height, image, hover, title, url }) => {
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    //preload hover
    let h = new Image(0, 0);
    h.src = hover;
    return () => {};
  }, []);

  return (
    <Box
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      backgroundImage={hovering ? hover : image}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      pb="56.25%"
      h={0}
      pos="relative"
    >
      <Box
        pos="absolute"
        w="100%"
        bottom={0}
        background="rgba(0,0,0,0.75)"
        color="white"
        h={hovering ? "60px" : "0px"}
        style={{
          transition: "height 0.3s ease-out",
        }}
      >
        <Center
          h="100%"
          textAlign="center"
          opacity={hovering ? 1 : 0}
          style={{
            transition: "opacity 0.3s ease-out",
          }}
        >
          {title}
        </Center>
      </Box>
    </Box>
  );
};

export default ImageHolder;
