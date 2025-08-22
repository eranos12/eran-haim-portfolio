"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Brain, 
  Network, 
  Zap, 
  TrendingUp, 
  Database, 
  Cpu,
  Activity,
  BarChart3,
  PieChart,
  ScatterChart,
  LineChart,
  Download,
  Play,
  Pause,
  RotateCcw,
  Eye,
  EyeOff,
  Settings,
  FileText,
  Sparkles,
  Target,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  Layers,
  Code,
  Globe,
  Shield,
  Zap as ZapIcon,
  Terminal,
  Server,
  CircuitBoard,
  Microchip,
  Satellite,
  Radar,
  Cpu as CpuIcon,
  HardDrive,
  Wifi,
  Signal
} from "lucide-react";

interface DataPoint {
  id: string;
  timestamp: Date;
  value: number;
  category: string;
  confidence: number;
  anomaly: boolean;
}

interface AIInsight {
  id: string;
  type: "pattern" | "anomaly" | "trend" | "prediction" | "correlation";
  title: string;
  description: string;
  confidence: number;
  impact: "high" | "medium" | "low";
  category: string;
  timestamp: Date;
  data: any;
}

interface NeuralNode {
  id: string;
  x: number;
  y: number;
  value: number;
  connections: string[];
  layer: number;
  status: "active" | "inactive" | "processing";
}

const AIDataAnalyzer = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState("");
  const [insights, setInsights] = useState<AIInsight[]>([]);
  const [selectedInsight, setSelectedInsight] = useState<AIInsight | null>(null);
  const [neuralNodes, setNeuralNodes] = useState<NeuralNode[]>([]);
  const [showNeuralNetwork, setShowNeuralNetwork] = useState(true);
  const [analysisMode, setAnalysisMode] = useState<"real-time" | "batch" | "predictive">("real-time");
  const [dataStream, setDataStream] = useState<DataPoint[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"overview" | "detailed" | "correlations">("overview");

  const categories = [
    { id: "all", name: "All Data", color: "from-blue-500 to-cyan-500" },
    { id: "financial", name: "Financial", color: "from-emerald-500 to-teal-500" },
    { id: "operational", name: "Operational", color: "from-indigo-500 to-blue-500" },
    { id: "customer", name: "Customer", color: "from-blue-600 to-indigo-600" },
    { id: "market", name: "Market", color: "from-cyan-500 to-blue-500" }
  ];

  const analysisPhases = [
    "Initializing AI Models",
    "Loading Neural Networks",
    "Processing Data Streams",
    "Identifying Patterns",
    "Detecting Anomalies",
    "Generating Insights",
    "Validating Results",
    "Finalizing Analysis"
  ];

  useEffect(() => {
    initializeNeuralNetwork();
    generateSampleInsights();
  }, []);

  const initializeNeuralNetwork = () => {
    const nodes: NeuralNode[] = [];
    const layers = 5;
    const nodesPerLayer = 8;

    for (let layer = 0; layer < layers; layer++) {
      for (let i = 0; i < nodesPerLayer; i++) {
        const x = (layer / (layers - 1)) * 100;
        const y = (i / (nodesPerLayer - 1)) * 100;
        
        nodes.push({
          id: `node-${layer}-${i}`,
          x,
          y,
          value: Math.random(),
          connections: [],
          layer,
          status: "inactive"
        });
      }
    }

    // Add connections between layers
    nodes.forEach((node, index) => {
      if (node.layer < layers - 1) {
        const nextLayerNodes = nodes.filter(n => n.layer === node.layer + 1);
        node.connections = nextLayerNodes.map(n => n.id);
      }
    });

    setNeuralNodes(nodes);
  };

  const generateSampleInsights = () => {
    const sampleInsights: AIInsight[] = [
      {
        id: "1",
        type: "pattern",
        title: "Seasonal Revenue Pattern Detected",
        description: "AI identified a recurring 23% revenue increase every Q4, suggesting strong holiday season performance",
        confidence: 94.7,
        impact: "high",
        category: "financial",
        timestamp: new Date(),
        data: { pattern: "seasonal", strength: 0.87, period: "quarterly" }
      },
      {
        id: "2",
        type: "anomaly",
        title: "Unusual Customer Churn Spike",
        description: "Detected 3x increase in customer churn rate on weekends, potentially indicating service quality issues",
        confidence: 89.3,
        impact: "medium",
        category: "customer",
        timestamp: new Date(Date.now() - 3600000),
        data: { anomaly_score: 0.92, baseline: 0.15, current: 0.45 }
      },
      {
        id: "3",
        type: "correlation",
        title: "Marketing Spend vs Revenue Correlation",
        description: "Strong positive correlation (r=0.89) between social media ad spend and revenue growth",
        confidence: 91.2,
        impact: "high",
        category: "market",
        timestamp: new Date(Date.now() - 7200000),
        data: { correlation: 0.89, p_value: 0.001, sample_size: 156 }
      },
      {
        id: "4",
        type: "prediction",
        title: "Q1 Revenue Forecast",
        description: "AI predicts 18-22% revenue growth in Q1 based on current trends and seasonal patterns",
        confidence: 87.5,
        impact: "high",
        category: "financial",
        timestamp: new Date(Date.now() - 10800000),
        data: { prediction: "18-22%", confidence_interval: [0.18, 0.22], factors: ["seasonal", "market", "operational"] }
      }
    ];

    setInsights(sampleInsights);
  };

  const startAnalysis = async () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setCurrentPhase(analysisPhases[0]);

    for (let i = 0; i < analysisPhases.length; i++) {
      setCurrentPhase(analysisPhases[i]);
      setAnalysisProgress((i / (analysisPhases.length - 1)) * 100);
      
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));
      
      // Animate neural network
      animateNeuralNetwork(i);
    }

    setIsAnalyzing(false);
    setAnalysisProgress(100);
    setCurrentPhase("Analysis Complete");
  };

  const animateNeuralNetwork = (phase: number) => {
    setNeuralNodes(prev => prev.map(node => ({
      ...node,
      status: node.layer <= phase ? "active" : "inactive",
      value: node.layer <= phase ? Math.random() : node.value
    })));
  };

  const startDataStream = () => {
    setIsStreaming(true);
    const interval = setInterval(() => {
      const newDataPoint: DataPoint = {
        id: Date.now().toString(),
        timestamp: new Date(),
        value: Math.random() * 1000,
        category: categories[Math.floor(Math.random() * categories.length)].id,
        confidence: 0.7 + Math.random() * 0.3,
        anomaly: Math.random() > 0.95
      };

      setDataStream(prev => [...prev.slice(-49), newDataPoint]);
    }, 2000);

    return () => clearInterval(interval);
  };

  const stopDataStream = () => {
    setIsStreaming(false);
  };

  const exportInsights = () => {
    const exportData = {
      insights,
      analysisMode,
      timestamp: new Date().toISOString(),
      metadata: {
        totalInsights: insights.length,
        categories: categories.map(c => c.name),
        confidence: insights.reduce((acc, i) => acc + i.confidence, 0) / insights.length
      }
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-insights-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Tech Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-indigo-500/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-float delay-2000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-black/40 backdrop-blur-xl border-b border-blue-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 animate-pulse"></div>
                <Brain className="w-8 h-8 text-white relative z-10" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-500"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  AI Data Analyzer
                </h1>
                <p className="text-blue-200 flex items-center space-x-2">
                  <Terminal className="w-4 h-4" />
                  <span>Advanced Neural Network Intelligence</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-blue-200 text-sm">
                <Server className="w-4 h-4" />
                <span>Server: Online</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <button
                onClick={() => setShowNeuralNetwork(!showNeuralNetwork)}
                className="p-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-xl transition-all duration-200 border border-blue-500/30"
              >
                {showNeuralNetwork ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              <button className="p-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-xl transition-all duration-200 border border-blue-500/30">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-900/30 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-blue-200 text-sm font-medium">Enterprise AI Platform v2.1.4</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Neural Network
            </span>{" "}
            <br />
            <span className="text-white">Data Intelligence</span>
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the future of data analysis with our advanced AI neural networks. 
            Real-time pattern recognition, anomaly detection, and predictive analytics 
            powered by cutting-edge machine learning algorithms.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={startAnalysis}
              disabled={isAnalyzing}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-700 hover:via-cyan-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-500/25 flex items-center space-x-3 border border-blue-400/30"
            >
              <Zap className="w-6 h-6" />
              <span>{isAnalyzing ? "Analyzing..." : "Start AI Analysis"}</span>
            </button>
            
            <button
              onClick={isStreaming ? stopDataStream : startDataStream}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl border-2 ${
                isStreaming 
                  ? "bg-red-600/20 border-red-500/50 text-red-300 hover:bg-red-600/30"
                  : "bg-green-600/20 border-green-500/50 text-green-300 hover:bg-green-600/30"
              } flex items-center space-x-3`}
            >
              {isStreaming ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              <span>{isStreaming ? "Stop Stream" : "Start Data Stream"}</span>
            </button>
          </div>
        </div>

        {/* Analysis Progress */}
        {isAnalyzing && (
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 mb-8 border border-blue-500/30">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600/30 rounded-full flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{currentPhase}</h3>
              </div>
              <p className="text-blue-200">AI Neural Networks are processing your data</p>
            </div>
            
            <div className="w-full bg-slate-800/50 rounded-full h-4 mb-4 border border-blue-500/20">
              <div 
                className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 h-4 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                style={{ width: `${analysisProgress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>
            </div>
            
            <div className="text-center">
              <span className="text-2xl font-bold text-white">{Math.round(analysisProgress)}%</span>
              <span className="text-blue-200 ml-2">Complete</span>
            </div>
          </div>
        )}

        {/* Neural Network Visualization */}
        {showNeuralNetwork && (
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 mb-8 border border-blue-500/30">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <CircuitBoard className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Neural Network Architecture</h3>
                <Microchip className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-blue-200">Real-time visualization of AI processing layers</p>
            </div>
            
            <div className="relative h-96 bg-gradient-to-br from-blue-900/50 to-slate-900/50 rounded-2xl border border-blue-500/30 overflow-hidden">
              {/* Tech Grid Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              {/* Neural Network Connections */}
              <svg className="absolute inset-0 w-full h-full">
                {neuralNodes.map(node => 
                  node.connections.map(connectionId => {
                    const targetNode = neuralNodes.find(n => n.id === connectionId);
                    if (!targetNode) return null;
                    
                    return (
                      <line
                        key={`${node.id}-${connectionId}`}
                        x1={`${node.x}%`}
                        y1={`${node.y}%`}
                        x2={`${targetNode.x}%`}
                        y2={`${targetNode.y}%`}
                        stroke={node.status === "active" ? "#06b6d4" : "#1e40af"}
                        strokeWidth={node.status === "active" ? "2" : "1"}
                        opacity={node.status === "active" ? "0.8" : "0.3"}
                        className="transition-all duration-500"
                      />
                    );
                  })
                )}
              </svg>
              
              {/* Neural Network Nodes */}
              {neuralNodes.map(node => (
                <div
                  key={node.id}
                  className={`absolute w-4 h-4 rounded-full transition-all duration-500 ${
                    node.status === "active" 
                      ? "bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-cyan-400/50 animate-pulse"
                      : node.status === "processing"
                      ? "bg-gradient-to-r from-blue-400 to-indigo-400 shadow-lg shadow-blue-400/50 animate-ping"
                      : "bg-slate-600"
                  }`}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {node.status === "active" && (
                    <div className="absolute inset-0 w-6 h-6 rounded-full bg-cyan-400/20 animate-ping"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Insights List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600/30 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI-Generated Insights</h3>
              </div>
              <button
                onClick={exportInsights}
                className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-xl transition-all duration-200 border border-blue-500/30 flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {insights.map((insight) => (
                <div
                  key={insight.id}
                  onClick={() => setSelectedInsight(insight)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 border ${
                    selectedInsight?.id === insight.id
                      ? "border-blue-500/50 bg-blue-600/20"
                      : "border-blue-500/20 bg-black/30 hover:bg-black/40"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        insight.type === "pattern" ? "bg-emerald-500/20 text-emerald-400" :
                        insight.type === "anomaly" ? "bg-red-500/20 text-red-400" :
                        insight.type === "trend" ? "bg-blue-500/20 text-blue-400" :
                        insight.type === "prediction" ? "bg-indigo-500/20 text-indigo-400" :
                        "bg-cyan-500/20 text-cyan-400"
                      }`}>
                        {insight.type === "pattern" && <Target className="w-5 h-5" />}
                        {insight.type === "anomaly" && <AlertTriangle className="w-5 h-5" />}
                        {insight.type === "trend" && <TrendingUp className="w-5 h-5" />}
                        {insight.type === "prediction" && <Lightbulb className="w-5 h-5" />}
                        {insight.type === "correlation" && <Network className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{insight.title}</h4>
                        <p className="text-sm text-blue-200">{insight.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">{insight.confidence.toFixed(1)}%</div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        insight.impact === "high" ? "bg-red-500/20 text-red-300" :
                        insight.impact === "medium" ? "bg-yellow-500/20 text-yellow-300" :
                        "bg-green-500/20 text-green-300"
                      }`}>
                        {insight.impact} impact
                      </div>
                    </div>
                  </div>
                  <p className="text-blue-200 text-sm leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Insight Details */}
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-6">Insight Details</h3>
            
            {selectedInsight ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    selectedInsight.type === "pattern" ? "bg-emerald-500/20" :
                    selectedInsight.type === "anomaly" ? "bg-red-500/20" :
                    selectedInsight.type === "trend" ? "bg-blue-500/20" :
                    selectedInsight.type === "prediction" ? "bg-indigo-500/20" :
                    "bg-cyan-500/20"
                  }`}>
                    {selectedInsight.type === "pattern" && <Target className="w-10 h-10 text-emerald-400" />}
                    {selectedInsight.type === "anomaly" && <AlertTriangle className="w-10 h-10 text-red-400" />}
                    {selectedInsight.type === "trend" && <TrendingUp className="w-10 h-10 text-blue-400" />}
                    {selectedInsight.type === "prediction" && <Lightbulb className="w-10 h-10 text-indigo-400" />}
                    {selectedInsight.type === "correlation" && <Network className="w-10 h-10 text-cyan-400" />}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{selectedInsight.title}</h4>
                  <p className="text-blue-200">{selectedInsight.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-xl p-4 text-center border border-blue-500/20">
                    <div className="text-2xl font-bold text-white">{selectedInsight.confidence.toFixed(1)}%</div>
                    <div className="text-sm text-blue-200">Confidence</div>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4 text-center border border-blue-500/20">
                    <div className="text-2xl font-bold text-white capitalize">{selectedInsight.impact}</div>
                    <div className="text-sm text-blue-200">Impact Level</div>
                  </div>
                </div>
                
                <div className="bg-black/30 rounded-xl p-4 border border-blue-500/20">
                  <h5 className="font-semibold text-white mb-2">Technical Data</h5>
                  <pre className="text-xs text-blue-200 overflow-auto">
                    {JSON.stringify(selectedInsight.data, null, 2)}
                  </pre>
                </div>
              </div>
            ) : (
              <div className="text-center text-blue-200">
                <Brain className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Select an insight to view detailed analysis</p>
              </div>
            )}
          </div>
        </div>

        {/* Real-time Data Stream */}
        {isStreaming && (
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 mb-8 border border-blue-500/30">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600/30 rounded-lg flex items-center justify-center">
                  <Signal className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Real-time Data Stream</h3>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Live</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {dataStream.slice(-4).map((point) => (
                <div
                  key={point.id}
                  className={`p-4 rounded-xl border ${
                    point.anomaly 
                      ? "border-red-500/50 bg-red-500/10" 
                      : "border-blue-500/30 bg-black/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-200 capitalize">{point.category}</span>
                    {point.anomaly && <AlertTriangle className="w-4 h-4 text-red-400" />}
                  </div>
                  <div className="text-xl font-bold text-white">{point.value.toFixed(1)}</div>
                  <div className="text-xs text-blue-200">
                    {(point.confidence * 100).toFixed(0)}% confidence
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

                 {/* Analysis Modes */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           {[
             {
               mode: "real-time" as const,
               title: "Real-time Analysis",
               description: "Continuous data processing with instant insights and anomaly detection",
               icon: Activity,
               color: "from-blue-500 to-cyan-500"
             },
             {
               mode: "batch" as const,
               title: "Batch Processing",
               description: "Deep analysis of large datasets with comprehensive pattern recognition",
               icon: Database,
               color: "from-indigo-500 to-blue-500"
             },
             {
               mode: "predictive" as const,
               title: "Predictive Analytics",
               description: "AI-powered forecasting and trend prediction for strategic planning",
               icon: TrendingUp,
               color: "from-cyan-500 to-blue-500"
             }
           ].map(({ mode, title, description, icon: Icon, color }) => (
             <div
               key={mode}
               onClick={() => setAnalysisMode(mode)}
               className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 border ${
                 analysisMode === mode
                   ? "border-blue-500/50 bg-blue-600/20"
                   : "border-blue-500/20 bg-black/30 hover:bg-black/40"
               }`}
             >
               <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-4`}>
                 <Icon className="w-6 h-6 text-white" />
               </div>
               <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
               <p className="text-blue-200 text-sm">{description}</p>
             </div>
           ))}
         </div>

         {/* Footer - Created by Eran Haim */}
         <div className="text-center py-8 border-t border-blue-500/20">
           <div className="flex items-center justify-center space-x-3 text-blue-300">
             <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
               <Brain className="w-3 h-3 text-white" />
             </div>
             <span className="text-sm font-medium">
               Created by{" "}
               <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                 Eran Haim
               </span>
             </span>
             <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-full flex items-center justify-center">
               <Cpu className="w-3 h-3 text-white" />
             </div>
           </div>
           <p className="text-xs text-blue-400/70 mt-2">
             AI Integration & Full-Stack Developer
           </p>
         </div>
       </div>
     </div>
   );
 };

export default AIDataAnalyzer;
