import { DiagramCard } from "./DiagramCard";
import { SubCard } from "./SubCard";
import { MetricBadge } from "./MetricBadge";

export const ResearchDiagram = () => {
  return (
    <div className="min-h-screen bg-background p-3 md:p-5 overflow-x-auto">
      {/* Header */}
      <header className="text-center mb-3 animate-fade-in-up">
        <h1 className="text-lg md:text-xl font-bold text-foreground mb-0.5">
          Human-AI Collaboration Research Framework
        </h1>
        <p className="text-muted-foreground text-[11px]">
          Cognitive Style Detection & Real-Time Adaptation System
        </p>
      </header>

      {/* Main Diagram */}
      <div className="max-w-[1150px] mx-auto relative" style={{ minWidth: '850px' }}>
        
        {/* Row 1: Top inputs + Right sidebar */}
        <div className="grid grid-cols-12 gap-1.5 mb-0 relative z-10">
          <div className="col-span-2">
            <DiagramCard wpLabel="WP2" wpColor="wp2" title="Human Participants" className="h-full text-[9px] p-2.5" animationDelay="animation-delay-100">
              <ul className="list-disc list-inside space-y-0 leading-tight">
                <li>Analytical Processors</li>
                <li>Experiential Processors</li>
                <li>Mixed Cognitive Styles</li>
              </ul>
            </DiagramCard>
          </div>

          <div className="col-span-2">
            <DiagramCard wpLabel="WP3" wpColor="wp3" title="Data Collection" className="h-full text-[9px] p-2.5" animationDelay="animation-delay-100">
              <ul className="list-disc list-inside space-y-0 leading-tight">
                <li>REI-T Assessment</li>
                <li>Interaction Patterns</li>
                <li>Linguistic Data (LIWC)</li>
              </ul>
            </DiagramCard>
          </div>

          <div className="col-span-2">
            <DiagramCard wpLabel="WP2" wpColor="wp2" title="Temporal Framework" className="h-full text-[9px] p-2.5" animationDelay="animation-delay-200">
              <p className="italic text-[8px] mb-0.5 text-muted-foreground">(Allen's Interval Algebra)</p>
              <ul className="list-disc list-inside space-y-0 leading-tight">
                <li>Time-Time | Time-Event</li>
                <li>Event-Event Relations</li>
              </ul>
            </DiagramCard>
          </div>

          <div className="col-span-2">
            <DiagramCard wpLabel="WP5" wpColor="wp5" title="Experimental Use Cases" className="h-full text-[9px] p-2.5" animationDelay="animation-delay-300">
              <div className="space-y-0.5">
                <SubCard title="Project Timeline Optimisation" subtitle="6-phase development" className="p-1 text-[8px]" />
                <SubCard title="Crisis Response Mgmt" subtitle="Product recall scenarios" className="p-1 text-[8px]" />
                <SubCard title="Supply Chain Disruption" subtitle="Cascade effects & mitigation" className="p-1 text-[8px]" />
              </div>
            </DiagramCard>
          </div>

          <div className="col-span-2">
            <DiagramCard wpLabel="WP1" wpColor="wp1" title="Research Timeline" className="h-full text-[9px] p-2.5" animationDelay="animation-delay-400">
              <ul className="space-y-0 font-mono text-[8px] leading-tight">
                <li><span className="text-wp2 font-bold">WP2:</span> Theory (M1-9)</li>
                <li><span className="text-wp3 font-bold">WP3:</span> Development (M7-14)</li>
                <li><span className="text-wp4 font-bold">WP4:</span> Adaptation (M12-15)</li>
                <li><span className="text-wp5 font-bold">WP5:</span> Validation (M15-18)</li>
                <li><span className="text-wp6 font-bold">WP6:</span> Dissemination (M1-24)</li>
              </ul>
            </DiagramCard>
          </div>

          <div className="col-span-2">
            <DiagramCard wpLabel="WP1" wpColor="wp1" title="Project Management" className="h-full text-[9px] p-2.5" animationDelay="animation-delay-400">
              <ul className="list-disc list-inside space-y-0 text-[8px] leading-tight">
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
        </div>

        {/* Connector */}
        <div className="flex items-center justify-center h-4 relative z-10">
          <svg width="500" height="16" className="overflow-visible">
            <line x1="60" y1="0" x2="60" y2="16" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/40" markerEnd="url(#arr)" />
            <line x1="180" y1="0" x2="180" y2="16" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/40" markerEnd="url(#arr)" />
            <line x1="300" y1="0" x2="300" y2="16" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/40" markerEnd="url(#arr)" />
            <defs>
              <marker id="arr" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                <path d="M0,0 L4,2 L0,4 Z" className="fill-muted-foreground/40" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Row 2: ML Pipeline */}
        <div className="mb-0 relative z-10">
          <DiagramCard wpLabel="WP3" wpColor="wp3" title="ML Pipeline for Cognitive Style Detection" variant="highlight" className="animate-fade-in-up animation-delay-300 p-3">
            <div className="flex items-center justify-between gap-1 mt-1.5">
              <SubCard title="Text Processing" className="text-center p-1.5 flex-1">
                <p className="text-[8px]">BERT/Temporal Features</p>
              </SubCard>
              <span className="text-muted-foreground/50 text-xs">→</span>
              <SubCard title="Sequence" className="text-center p-1.5 flex-1">
                <p className="text-[8px]">LSTM Networks Pattern Recog</p>
              </SubCard>
              <span className="text-muted-foreground/50 text-xs">→</span>
              <SubCard title="Classification" className="text-center p-1.5 flex-1">
                <p className="text-[8px]">SVM/Random Forest</p>
              </SubCard>
              <span className="text-muted-foreground/50 text-xs">→</span>
              <SubCard title="Ensemble" className="text-center p-1.5 flex-1">
                <p className="text-[8px]">Methods Integration</p>
              </SubCard>
              <span className="text-muted-foreground/50 text-xs">→</span>
              <SubCard title="" highlight className="flex items-center justify-center p-1.5 flex-1">
                <MetricBadge value="85%" label="F1 Score" />
              </SubCard>
            </div>
          </DiagramCard>
        </div>

        {/* Connector */}
        <div className="flex items-center justify-center h-4 relative z-10">
          <svg width="100" height="16">
            <line x1="50" y1="0" x2="50" y2="16" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/40" markerEnd="url(#arr)" />
          </svg>
        </div>

        {/* Row 3: Real-Time Adaptation + Industry Validation */}
        <div className="grid grid-cols-12 gap-1.5 mb-0 relative z-10">
          <div className="col-span-8">
            <DiagramCard wpLabel="WP4" wpColor="wp4" title="Real-Time Adaptation System" variant="highlight" className="animate-fade-in-up animation-delay-400 p-3">
              <div className="flex items-center justify-between gap-1 mt-1.5">
                <SubCard title="Style Detection" className="text-center p-1.5 flex-1">
                  <p className="text-[8px]">Real-time Processing</p>
                </SubCard>
                <SubCard title="Behaviour Adapt" className="text-center p-1.5 flex-1">
                  <p className="text-[8px]">Temporal Coordination</p>
                </SubCard>
                <SubCard title="Interface Personalisation" highlight className="text-center p-1.5 flex-1">
                  <p className="text-[8px]">Dynamic UI/UX</p>
                </SubCard>
                <SubCard title="System" className="text-center p-1.5 flex-1">
                  <p className="text-[8px]">Performance Optimisation</p>
                </SubCard>
              </div>
            </DiagramCard>
          </div>

          <div className="col-span-4">
            <DiagramCard wpLabel="WP5" wpColor="wp5" title="Industry Validation (Secondment)" className="h-full p-2.5" animationDelay="animation-delay-500">
              <div className="space-y-1 mt-1">
                <div className="bg-secondary/80 rounded px-1.5 py-1 text-center text-[9px] font-medium border border-border/50 hover:bg-secondary transition-colors">
                  Oracle Corporation
                </div>
                <div className="bg-secondary/80 rounded px-1.5 py-1 text-center text-[9px] font-medium border border-border/50 hover:bg-secondary transition-colors">
                  World Bank AI for Good
                </div>
              </div>
            </DiagramCard>
          </div>
        </div>

        {/* Connector */}
        <div className="flex items-center justify-center h-4 relative z-10">
          <svg width="700" height="16" className="overflow-visible">
            <line x1="100" y1="0" x2="100" y2="16" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/40" markerEnd="url(#arr)" />
            <line x1="260" y1="0" x2="260" y2="16" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/40" markerEnd="url(#arr)" />
            <line x1="420" y1="0" x2="420" y2="16" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/40" markerEnd="url(#arr)" />
            <line x1="580" y1="0" x2="580" y2="16" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/40" markerEnd="url(#arr)" />
          </svg>
        </div>

        {/* Row 4: Bottom outputs */}
        <div className="grid grid-cols-12 gap-1.5 relative z-10">
          <div className="col-span-3">
            <DiagramCard wpLabel="WP5" wpColor="wp5" title="Evaluation Metrics" className="text-[9px] p-2.5" animationDelay="animation-delay-500">
              <ul className="list-disc list-inside space-y-0 leading-tight">
                <li>Trust Development</li>
                <li>Collaboration Effectiveness</li>
                <li>Task Performance</li>
                <li>Cognitive Load Reduction</li>
                <li>User Acceptance (TAM)</li>
              </ul>
            </DiagramCard>
          </div>

          <div className="col-span-3">
            <DiagramCard wpLabel="WP5" wpColor="wp5" title="Statistical Analysis" className="text-[9px] p-2.5" animationDelay="animation-delay-600">
              <ul className="list-disc list-inside space-y-0 leading-tight">
                <li>Difference-in-Differences</li>
                <li>Multilevel Modelling</li>
                <li>Time Series Analysis</li>
                <li>Propensity Score Matching</li>
                <li>Cohen's Kappa</li>
              </ul>
            </DiagramCard>
          </div>

          <div className="col-span-3">
            <DiagramCard wpLabel="WP6" wpColor="wp6" title="Dissemination" className="text-[9px] p-2.5" animationDelay="animation-delay-700">
              <ul className="list-disc list-inside space-y-0 leading-tight">
                <li>Academic Publications</li>
                <li>Conference Presentations</li>
                <li>GitHub Repository</li>
                <li>Industry Engagement</li>
                <li>Website Launch</li>
              </ul>
            </DiagramCard>
          </div>

          <div className="col-span-3">
            <DiagramCard wpLabel="WP5/WP6" wpColor="wp5" title="Expected Outcomes" variant="metric" className="text-[9px] p-2.5" animationDelay="animation-delay-800">
              <ul className="list-disc list-inside space-y-0 leading-tight">
                <li className="font-medium text-foreground">Enhanced Human-AI Collaboration</li>
                <li>Improved Trust & Coordination</li>
                <li>Reduced Cognitive Load</li>
                <li>Personalised AI Frameworks</li>
              </ul>
            </DiagramCard>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-3 animate-fade-in-up animation-delay-800">
        <p className="text-[9px] text-muted-foreground">
          Research Framework Visualization • Cognitive Style Detection & Human-AI Collaboration
        </p>
      </footer>
    </div>
  );
};
