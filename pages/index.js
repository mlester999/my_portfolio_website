import React, { useState } from "react";

import HomeContent from "@/components/HomeContent/HomeContent";
import NavBar from "@/components/NavBar/NavBar";

export default function HomePage() {
  const [navH, setNavH] = useState(0);

  return (
    <React.Fragment>
      <NavBar navH={navH} setNavH={setNavH} />
      <HomeContent navH={navH} />
    </React.Fragment>
  );
}
