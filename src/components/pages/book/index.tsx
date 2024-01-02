import FormHeader from "@/components/common/text/form-header";
import React from "react";
import Navbar from "./component/navbar";

export default function BookComponent() {
  return (
    <div>
      <Navbar />
      <h1 className="text-h2 font-h2 text-center">
        Find your next adventure in books with our personalized recommendations.
      </h1>
    </div>
  );
}
