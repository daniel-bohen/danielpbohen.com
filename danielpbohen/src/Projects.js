import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Project from './components/Project'


const openRML= [
  "Open Research Machine Learning is an open source project aimed at making machine learning more accessible to non experts. Provides an accessible GUI interface and natural language explanations.",
  "The project primarily relies upon around AutoML and AutoKeras for model selection and hyperparameter tuning, with pandas functions being used for data preprocessing.",
  "It utilizes natural language explanations and visualizations to help users preprocess their data, and state of the art explainability tools for model interpretability."
]

const cs104 = [
  "Implemented templated  BST, AVL, Heap, and Hashmap data structures in C++. Ensured optimal runtime of each.",
  "Implemented a search engine using sets and maps, allowing for O(log n) queries, and developed an efficient puzzle solver by implementing the A* algorithm, both accessible through the CLI."
]

const pairs = [
  "Developed a pairs trading algorithm, focusing on fundamental analysis of co-integrated/correlated security pairs. Achieved a 22% return, and presented to a panel of quantitative engineers including the former SEC chief economist"
]

const change = [
  "Lead a team of six undergraduate and graduate students in developing a momentum investing strategy augmented with a changepoint detection algorithm. ",
  "Achieved consistent returns averaging 8% above the S&P 500 over 14 years of backtests. Utilized long short-term memory deep-learning to simultaneously learn both trend estimation and position sizing."
]
const website = [

]

export default function Projects() {
  return (
        <Box>
        <Divider sx={{mt: 2, mb: 2}}><Typography variant="h3">Projects</Typography></Divider>
        <Project
          sx={{mt: 2, mb: 2}}
          title="OpenRML"
          text="(Actively Under Development)"
          description={openRML}
          link="https://daniel-bohen.github.io/OpenRML/" 
          repo="https://github.com/daniel-bohen/OpenRML"
          />
          <Project
            title="Changepoint Detection & Momentum Trading "
             description={change}
            repo="https://github.com/quantsc/momentum-sp22"
          />
          {/* <Project
            title="CS104: Data Structures & Algorithm Projects"
            description={cs104}
            text=""
            />
          <Project
            title="Pairs Trading Model"
            description={pairs}
          /> */}
          <Project
            title="Personal Website"
            description={website}
            text="Developed this website using react, mui, html, css and javascript. Hosted on google firebase."
            repo="https://github.com/daniel-bohen/danielpbohen.com"
          />
        </Box>
    );
}
