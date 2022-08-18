import * as React from 'react';
import Header from "./components/Header";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Job from "./components/Job"

export default function Experience() {
  return (
    <>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        sx={{ m: 2 }}
      >
        <Typography variant="h3">Experience</Typography>
      </Box>
      <Job 
      title="Undergraduate Cybersecurity Researcher" 
      employer="USC Information Sciences Institute STEEL Lab"
      location="Los Angeles, California"
      dates="May 2022-Present"
      description=" Developed an llvm compiler tool to map source code locations to llvm IR, and llvm IR instructions to their
corresponding machine code instructions through use of C++ passes, llvm-readobj, clang++, and gdb.
• Tool allows for security vulnerabilities to be discovered simultaneously across source code, llvm IR, or machine code
• Modifying C++ directed fuzzers in order to mark specific edge cases that they create. Created a benchmark system for
current directed fuzzers in order to determine how to reach these edge cases more efficiently"
      ></Job>
    </>
  );
}
