"use client";
import ProblemInfo from "./ProblemInfo";
import ProblemDescrption from "./ProblemDescrption";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAdminProblemData } from "@/api/problems/get-individual-problem";
import ProblemTrial from "./ProblemTrial";

function V1AdminProblem() {
  const param = useParams();
  const [data, setData] = useState({});
  const [testMode, setTestMode] = useState(false);
  useEffect(() => {
    if (param) {
      getAdminProblemData(setData, param.id as string);
    }
  }, []);
  return (
    <div className="flex h-screen gap-4">
      <ProblemDescrption
        setTestMode={setTestMode}
        testMode={testMode}
        data={data}
      />
      {testMode ? (
        <>
          <ProblemTrial data={data} />
        </>
      ) : (
        <ProblemInfo content={data} />
      )}
    </div>
  );
}

export default V1AdminProblem;
