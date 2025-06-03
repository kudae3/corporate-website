import { isAdmin } from "@/lib/isAdmin";
import React from "react";

const page = async () => {
  const admin = await isAdmin();
  if (!admin) {
    return (
      <div className="container">You are not authorized to view this page</div>
    );
  }
  return <div className="container">This is Dashboard page</div>;
};

export default page;
