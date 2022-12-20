import { Divider } from "@mui/material";
import Job from "./components/Job";
import Typography from "@mui/material/Typography";

const isi2 = [
  "Designing and implementing a neurosymbolic model focused on explainable context detection for decisions in safety-critical environments, specifically supporting Neuroscientists in deep brain simulation and neurological analysis",
  "Attempting to model the human experience through relating multimodal sensor data (representing a subset of human sensory channels) to corresponding neural readings in order to accurately estimate the state of the brain",
  "Working with knowledge graphs to synthesize model outputs from different sensor modalities into a single usable set of symbols. Modifying unity based embodied ai simulators to support additional modalities necessary for model training"
]

const isi1 = [
  "Developed an llvm compiler tool to map source code locations to llvm IR, and llvm IR instructions to their corresponding machine code instructions through use of C++ passes, llvm-readobj, clang++, and gdb.",
  "Tool allows for security vulnerabilities to be discovered simultaneously across source code, llvm IR, or machine code",
  "Modifying C++ directed fuzzers in order to mark specific edge cases that they create. Created a benchmark system for current directed fuzzers in order to determine how to reach these edge cases more efficiently"
]

const llu = [
  "Using scikit-learn, keras, and tensorflow to support physicians looking to use machine learning in their research. Currently performing data cleanup, feature engineering, and model development for several projects ",
  "Utilized python and pandas to automate data processing within the departments of Orthopedic Surgery and Cardiology",
  "Developed automation script in python to improve research project output by an estimated 75\%, as it eliminates the manual labor of data collection, cleanup, and analysis. Script has facilitated the rapid completion of 29 projects thus far"
]

const bots = [
  "Communicated complex coding concepts in engaging and simplified presentations for 2 dozen elementary school teachers in a year long series of professional development sessions",
  "Developed fundamental coding practice activities, using feedback from each session to adjust and create future activities. Supported teachers during classroom lessons through troubleshooting and assisting with students' individual questions"

]

export default function Experience() {
  return (
    <>
      <Divider><Typography variant="h3">Experience</Typography></Divider>
      <Job
        title="Undergraduate Machine Learning Researcher"
        employer="USC Information Sciences Institute STEEL Lab"
        location="Los Angeles, California"
        dates="August 2022-Present"
        description={isi2}
      ></Job>
      <Job
        title="Medical Machine Learning Researcher"
        employer="Loma Linda University Medical Center"
        location="Loma Linda, California"
        dates="May 2022-Present"
        description={llu}
      ></Job>
      <Job
        title="Undergraduate Cybersecurity Researcher"
        employer="USC Information Sciences Institute STEEL Lab"
        location="Los Angeles, California"
        dates="May 2022-August 2022"
        description={isi1}
      ></Job>
      <Job
        title="BOTS/CS Assistant"
        employer="USC Viterbi School of Engineering"
        location="Los Angeles, California"
        dates="August 2021-May 2022"
        description={bots}
      ></Job>
    </>
  );
}
