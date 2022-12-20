import { Divider } from "@mui/material";
import Job from "./components/Job";
import Typography from "@mui/material/Typography";

const isi1 = [
"Developed an llvm compiler tool to map source code locations to llvm IR, and llvm IR instructions to their",
 "     corresponding machine code instructions through use of C++ passes, llvm-readobj, clang++, and gdb."
      // • Tool allows for security vulnerabilities to be discovered simultaneously across source code, llvm IR, or machine code
      // • Modifying C++ directed fuzzers in order to mark specific edge cases that they create. Created a benchmark system for
      // current directed fuzzers in order to determine how to reach these edge cases more efficiently"
]


export default function Experience() {
    return (
        <>
        <Divider><Typography variant="h3">Experience</Typography></Divider>
        <Job
          title="Undergraduate Machine Learning Researcher"
          employer="USC Information Sciences Institute STEEL Lab"
          location="Los Angeles, California"
          dates="May 2022-Present"
          description={isi1}
        ></Job>
        <Job
          title="Undergraduate Cybersecurity Researcher"
          employer="USC Information Sciences Institute STEEL Lab"
          location="Los Angeles, California"
          dates="May 2022-August 2022"
          description={isi1}
        ></Job>
    </>
    );
}
