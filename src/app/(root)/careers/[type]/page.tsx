import React from "react";

const page = async ({ params }: { params: Promise<{ type: string }> }) => {
  const { type } = await params;
  return <div>The Type is - {type}</div>;
};

export default page;
