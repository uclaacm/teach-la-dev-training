import React from "react";
import "../App.css";

import { useParams } from "react-router-dom";

interface DescribeParams {
  describe: string;
}

export default function DescribePage(): JSX.Element {
  let { describe } = useParams<DescribeParams>();
  return <div className="odd-component">The URL says {describe}</div>;
}
