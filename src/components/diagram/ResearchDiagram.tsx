import { DiagramCard } from "./DiagramCard";
import { SubCard } from "./SubCard";
import { MetricBadge } from "./MetricBadge";
import { FlowArrow } from "./FlowArrow";

export const ResearchDiagram = () => {
  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      {/* Header */}
      <header className="text-center mb-10 animate-fade-in-up">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Human-AI Collaboration Research Framework
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          Cognitive Style Detection & Real-Time Adaptation System
        </p>
      </header>

      {/* Main Diagram Container */}
      <div className="max-w-[1400px] mx-auto">
        {/* Row 1: Input Sources */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
          <DiagramCard
            wpLabel="WP2"
            wpColor="wp2"
            title="Human Participants"
            className="lg:col-span-1"
            animationDelay="animation-delay-100"
          >
            <ul className="list-disc list-inside space-y-0.5">
              <li>Analytical Processors</li>
              <li>Experiential Processors</li>
              <li>Mixed Cognitive Styles</li>
            </ul>
          </DiagramCard>

          <DiagramCard
            wpLabel="WP3"
            wpColor="wp3"
            title="Data Collection"
            className="lg:col-span-1"
            animationDelay="animation-delay-200"
          >
            <ul className="list-disc list-inside space-y-0.5">
              <li>REI-T Assessment</li>
              <li>Interaction Patterns</li>
              <li>Linguistic Data (LIWC)</li>
            </ul>
          </DiagramCard>

          <DiagramCard
            wpLabel="WP2"
            wpColor="wp2"
            title="Temporal Framework"
            className="lg:col-span-1"
            animationDelay="animation-delay-300"
          >
            <p className="italic text-[10px] mb-1">(Allen's Interval Algebra)</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Time-Time Relations</li>
              <li>Time-Event Relations</li>
              <li>Event-Event Relations</li>
            </ul>
          </DiagramCard>

          <DiagramCard
            wpLabel="WP5"
            wpColor="wp5"
            title="Experimental Use Cases"
            className="lg:col-span-1"
            animationDelay="animation-delay-400"
          >
            <div className="space-y-2">
              <SubCard title="Project Timeline Optimisation" subtitle="6-phase development" />
              <SubCard title="Crisis Response Management" subtitle="Product recall scenarios" />
              <SubCard title="Supply Chain Disruption Analysis" subtitle="Cascade effects & mitigation strategies" />
            </div>
          </DiagramCard>

          <DiagramCard
            wpLabel="WP1"
            wpColor="wp1"
            title="Research Timeline"
            className="lg:col-span-1"
            animationDelay="animation-delay-500"
          >
            <ul className="space-y-0.5 font-mono text-[10px]">
              <li><span className="text-wp2">WP2:</span> Theory (M1-9)</li>
              <li><span className="text-wp3">WP3:</span> Development (M7-14)</li>
              <li><span className="text-wp4">WP4:</span> Adaptation (M12-15)</li>
              <li><span className="text-wp5">WP5:</span> Validation (M15-18)</li>
              <li><span className="text-wp6">WP6:</span> Dissemination (M1-24)</li>
            </ul>
          </DiagramCard>

          <DiagramCard
            wpLabel="WP1"
            wpColor="wp1"
            title="Project Management"
            className="lg:col-span-1"
            animationDelay="animation-delay-600"
          >
            <ul className="list-disc list-inside space-y-0.5">
              <li>Progress Monitoring</li>
              <li>Risk Management</li>
              <li>Quality Assurance</li>
              <li>Continuous Improvement</li>
              <li>Ethics Compliance</li>
              <li>Knowledge Transfer</li>
              <li>Skill Development</li>
            </ul>
          </DiagramCard>
        </div>

        {/* Flow Arrow */}
        <FlowArrow className="mb-4" delay={600} />

        {/* Row 2: ML Pipeline */}
        <div className="mb-4">
          <DiagramCard
            wpLabel="WP3"
            wpColor="wp3"
            title="ML Pipeline for Cognitive Style Detection"
            variant="highlight"
            className="animate-fade-in-up animation-delay-300"
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-3">
              <SubCard title="Text Processing" className="text-center">
                <p className="text-[10px] mt-1">BERT/Temporal Features</p>
              </SubCard>
              <SubCard title="Sequence" className="text-center">
                <p className="text-[10px] mt-1">LSTM Networks Pattern Recog</p>
              </SubCard>
              <SubCard title="Classification" className="text-center">
                <p className="text-[10px] mt-1">SVM/Random Forest</p>
              </SubCard>
              <SubCard title="Ensemble" className="text-center">
                <p className="text-[10px] mt-1">Methods Integration</p>
              </SubCard>
              <SubCard title="" highlight className="text-center flex items-center justify-center">
                <MetricBadge value="85%" label="F1 Score" />
              </SubCard>
            </div>
          </DiagramCard>
        </div>

        {/* Flow Arrow */}
        <FlowArrow className="mb-4" delay={800} />

        {/* Row 3: Real-Time Adaptation System */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          <DiagramCard
            wpLabel="WP4"
            wpColor="wp4"
            title="Real-Time Adaptation System"
            variant="highlight"
            className="lg:col-span-2 animate-fade-in-up animation-delay-400"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
              <SubCard title="Style Detection" className="text-center">
                <p className="text-[10px] mt-1">Real-time Processing</p>
              </SubCard>
              <SubCard title="Behaviour Adapt" className="text-center">
                <p className="text-[10px] mt-1">Temporal Coordination</p>
              </SubCard>
              <SubCard title="Interface Personalisation" highlight className="text-center">
                <p className="text-[10px] mt-1">Dynamic UI/UX</p>
              </SubCard>
              <SubCard title="System" className="text-center">
                <p className="text-[10px] mt-1">Performance Optimisation</p>
              </SubCard>
            </div>
          </DiagramCard>

          <div className="space-y-4">
            <DiagramCard
              wpLabel="WP5"
              wpColor="wp5"
              title="Industry Validation (Secondment)"
              animationDelay="animation-delay-500"
            >
              <div className="space-y-2 mt-2">
                <div className="bg-secondary/80 rounded px-2 py-1.5 text-center text-xs font-medium border border-border/50 hover:bg-secondary transition-colors">
                  Oracle Corporation
                </div>
                <div className="bg-secondary/80 rounded px-2 py-1.5 text-center text-xs font-medium border border-border/50 hover:bg-secondary transition-colors">
                  World Bank AI for Good
                </div>
              </div>
            </DiagramCard>
          </div>
        </div>

        {/* Flow Arrow */}
        <FlowArrow className="mb-4" delay={1000} />

        {/* Row 4: Evaluation & Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <DiagramCard
            wpLabel="WP5"
            wpColor="wp5"
            title="Evaluation Metrics"
            animationDelay="animation-delay-500"
          >
            <ul className="list-disc list-inside space-y-0.5">
              <li>Trust Development</li>
              <li>Collaboration Effectiveness</li>
              <li>Task Performance</li>
              <li>Cognitive Load Reduction</li>
              <li>User Acceptance (TAM)</li>
            </ul>
          </DiagramCard>

          <DiagramCard
            wpLabel="WP5"
            wpColor="wp5"
            title="Statistical Analysis"
            animationDelay="animation-delay-600"
          >
            <ul className="list-disc list-inside space-y-0.5">
              <li>Difference-in-Differences</li>
              <li>Multilevel Modelling</li>
              <li>Time Series Analysis</li>
              <li>Propensity Score Matching</li>
              <li>Cohen's Kappa</li>
            </ul>
          </DiagramCard>

          <DiagramCard
            wpLabel="WP6"
            wpColor="wp6"
            title="Dissemination"
            animationDelay="animation-delay-700"
          >
            <ul className="list-disc list-inside space-y-0.5">
              <li>Academic Publications</li>
              <li>Conference Presentations</li>
              <li>GitHub Repository</li>
              <li>Industry Engagement</li>
              <li>Website Launch</li>
            </ul>
          </DiagramCard>

          <DiagramCard
            wpLabel="WP5/WP6"
            wpColor="wp5"
            title="Expected Outcomes"
            variant="metric"
            animationDelay="animation-delay-800"
          >
            <ul className="list-disc list-inside space-y-0.5">
              <li className="font-medium text-foreground">Enhanced Human-AI Collaboration</li>
              <li>Improved Trust & Coordination</li>
              <li>Reduced Cognitive Load</li>
              <li>Personalised AI Frameworks</li>
            </ul>
          </DiagramCard>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-12 animate-fade-in-up animation-delay-800">
        <p className="text-xs text-muted-foreground">
          Research Framework Visualization • Cognitive Style Detection & Human-AI Collaboration
        </p>
      </footer>
    </div>
  );
};
