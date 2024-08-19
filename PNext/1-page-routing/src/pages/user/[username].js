import React from "react";
import { useRouter } from "next/router";
const DynamicPage = () => {
  // initialize the useRouter hook
  const router = useRouter();
  console.log(router);

  // destructure
  const { query } = useRouter();
  return (
    <>
      <div>This is the {query.username} page</div>
      
    </>
  );
};

export default DynamicPage;
