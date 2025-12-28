import { ResearchDiagram } from "@/components/diagram/ResearchDiagram";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Human-AI Collaboration Research Framework | Cognitive Style Detection</title>
        <meta 
          name="description" 
          content="Interactive research framework visualization for Human-AI Collaboration with Cognitive Style Detection and Real-Time Adaptation System." 
        />
      </Helmet>
      <ResearchDiagram />
    </>
  );
};

export default Index;
