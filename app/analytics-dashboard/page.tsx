"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Upload, 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  Download,
  Filter,
  Search,
  Eye,
  EyeOff,
  RefreshCw,
  Zap,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  PieChart,
  LineChart,
  BarChart,
  Download as DownloadIcon,
  FileText,
  Settings,
  Bell,
  User,
  Brain,
  Cpu
} from "lucide-react";

interface DataPoint {
  date: string;
  value: number;
  category: string;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

interface Insight {
  id: string;
  type: "positive" | "negative" | "neutral";
  title: string;
  description: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

const AnalyticsDashboard = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [data, setData] = useState<any>(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState("7d");
  const [selectedMetric, setSelectedMetric] = useState("revenue");
  const [showInsights, setShowInsights] = useState(true);
  const [isGeneratingInsights, setIsGeneratingInsights] = useState(false);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [viewMode, setViewMode] = useState<"overview" | "detailed" | "comparison">("overview");

  // Sample data for demonstration
  const sampleData = {
    revenue: [12500, 15800, 14200, 18900, 22100, 19800, 24500],
    users: [1200, 1350, 1280, 1420, 1580, 1490, 1680],
    orders: [89, 112, 98, 134, 156, 142, 178],
    conversion: [2.4, 2.8, 2.6, 3.1, 3.4, 3.2, 3.7]
  };

  const timeframes = [
    { value: "7d", label: "7 Days" },
    { value: "30d", label: "30 Days" },
    { value: "90d", label: "90 Days" },
    { value: "1y", label: "1 Year" }
  ];

  const metrics = [
    { value: "revenue", label: "Revenue", icon: DollarSign, color: "from-emerald-500 to-teal-600" },
    { value: "users", label: "Users", icon: Users, color: "from-blue-500 to-indigo-600" },
    { value: "orders", label: "Orders", icon: Activity, color: "from-purple-500 to-pink-600" },
    { value: "conversion", label: "Conversion", icon: Target, color: "from-orange-500 to-red-600" }
  ];

  useEffect(() => {
    // Generate sample insights
    generateInsights();
  }, []);

  const generateInsights = async () => {
    setIsGeneratingInsights(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newInsights: Insight[] = [
      {
        id: "1",
        type: "positive",
        title: "Revenue Growth",
        description: "Your revenue increased 23% this month compared to last month",
        value: "$24,500",
        change: 23,
        icon: <TrendingUp className="w-5 h-5" />
      },
      {
        id: "2",
        type: "positive",
        title: "User Acquisition",
        description: "New user signups are up 18% with improved onboarding flow",
        value: "1,680",
        change: 18,
        icon: <Users className="w-5 h-5" />
      },
      {
        id: "3",
        type: "negative",
        title: "Conversion Rate",
        description: "Conversion rate dropped 2% - consider A/B testing checkout",
        value: "3.7%",
        change: -2,
        icon: <Target className="w-5 h-5" />
      },
      {
        id: "4",
        type: "neutral",
        title: "Order Volume",
        description: "Order volume is stable but could benefit from seasonal promotions",
        value: "178",
        change: 0,
        icon: <Activity className="w-5 h-5" />
      }
    ];
    
    setInsights(newInsights);
    setIsGeneratingInsights(false);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setData(sampleData);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Simulate file processing
    setTimeout(() => {
      setIsUploading(false);
      setData(sampleData);
    }, 2000);
  };

  const exportReport = () => {
    const reportData = {
      timeframe: selectedTimeframe,
      metric: selectedMetric,
      data: data,
      insights: insights,
      generatedAt: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-report-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getCurrentValue = () => {
    if (!data) return 0;
    const values = data[selectedMetric];
    return values[values.length - 1];
  };

  const getPreviousValue = () => {
    if (!data) return 0;
    const values = data[selectedMetric];
    return values[values.length - 2];
  };

  const getChangePercentage = () => {
    const current = getCurrentValue();
    const previous = getPreviousValue();
    if (previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  };

  const formatValue = (value: number) => {
    if (selectedMetric === "revenue") return `$${value.toLocaleString()}`;
    if (selectedMetric === "conversion") return `${value}%`;
    return value.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Analytics Dashboard</h1>
                <p className="text-slate-600">AI-Powered Business Intelligence</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section - What This Platform Does */}
        <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Transform Your Data Into{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Actionable Intelligence
              </span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our AI-powered analytics platform doesn't just process data—it understands it. 
              Get instant business insights, predictive analytics, and strategic recommendations 
              that drive real business growth.
            </p>
            
            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">AI-Powered Analysis</h3>
                <p className="text-slate-600 text-sm">
                  Advanced machine learning algorithms that identify patterns, trends, and opportunities in your data
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Interactive Dashboards</h3>
                <p className="text-slate-600 text-sm">
                  Beautiful, customizable visualizations that make complex data easy to understand and act upon
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Strategic Insights</h3>
                <p className="text-slate-600 text-sm">
                  Actionable recommendations and predictive analytics that help you make data-driven decisions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 mb-8 border border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">How It Works</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our platform transforms raw data into business intelligence in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Upload Your Data</h4>
              <p className="text-slate-600 text-sm">
                Import CSV, Excel, or JSON files from any business system—sales, marketing, operations, or finance
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">AI Analysis</h4>
              <p className="text-slate-600 text-sm">
                Our AI automatically analyzes patterns, identifies trends, and generates actionable business insights
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Get Results</h4>
              <p className="text-slate-600 text-sm">
                Receive comprehensive reports, interactive dashboards, and strategic recommendations for growth
              </p>
            </div>
          </div>
        </div>

        {/* What We Analyze Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">What We Analyze</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our AI platform can analyze any type of business data to provide actionable insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Financial Data</h4>
              <p className="text-slate-600 text-sm">
                Revenue trends, profit margins, cash flow analysis, and financial forecasting
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Customer Analytics</h4>
              <p className="text-slate-600 text-sm">
                Customer behavior, acquisition costs, lifetime value, and retention patterns
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Operations Data</h4>
              <p className="text-slate-600 text-sm">
                Process efficiency, resource utilization, and operational performance metrics
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Marketing Metrics</h4>
              <p className="text-slate-600 text-sm">
                Campaign performance, conversion rates, ROI analysis, and market trends
              </p>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 mb-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Ready to Get Started?</h2>
            <p className="text-slate-600 mb-6">
              Upload your business data and see the power of AI-driven analytics in action. 
              Get instant insights that would take weeks of manual analysis.
            </p>
            
            <div className="max-w-md mx-auto">
              <label className="block w-full">
                <input
                  type="file"
                  accept=".csv,.xlsx,.xls,.json"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-2xl cursor-pointer transition-all duration-200 hover:scale-105 shadow-lg">
                  {isUploading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Processing... {uploadProgress}%</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Upload className="w-5 h-5" />
                      <span>Choose File or Drag & Drop</span>
                    </div>
                  )}
                </div>
              </label>
            </div>
          </div>
        </div>

        {data && (
          <>
            {/* Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex bg-white rounded-2xl p-1 shadow-lg border border-slate-200">
                  {timeframes.map((timeframe) => (
                    <button
                      key={timeframe.value}
                      onClick={() => setSelectedTimeframe(timeframe.value)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedTimeframe === timeframe.value
                          ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      {timeframe.label}
                    </button>
                  ))}
                </div>
                
                <div className="flex bg-white rounded-2xl p-1 shadow-lg border border-slate-200">
                  {viewMode === "overview" && (
                    <>
                      <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <BarChart3 className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <LineChart className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <PieChart className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={generateInsights}
                  disabled={isGeneratingInsights}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>{isGeneratingInsights ? "Generating..." : "Generate Insights"}</span>
                </button>
                
                <button
                  onClick={exportReport}
                  className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg border border-slate-200 flex items-center space-x-2"
                >
                  <DownloadIcon className="w-4 h-4" />
                  <span>Export</span>
                </button>
              </div>
            </div>

            {/* Main Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {metrics.map((metric) => {
                const isSelected = selectedMetric === metric.value;
                const Icon = metric.icon;
                const currentValue = data[metric.value][data[metric.value].length - 1];
                const previousValue = data[metric.value][data[metric.value].length - 2];
                const change = previousValue ? ((currentValue - previousValue) / previousValue) * 100 : 0;
                
                return (
                  <div
                    key={metric.value}
                    onClick={() => setSelectedMetric(metric.value)}
                    className={`bg-white rounded-3xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      isSelected 
                        ? "ring-4 ring-blue-500/20 shadow-2xl" 
                        : "shadow-xl hover:shadow-2xl"
                    } border border-slate-200`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        change >= 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                      }`}>
                        {change >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      </div>
                    </div>
                    
                    <h3 className="text-sm font-medium text-slate-600 mb-1">{metric.label}</h3>
                    <p className="text-2xl font-bold text-slate-900 mb-2">
                      {metric.value === "revenue" ? `$${currentValue.toLocaleString()}` : 
                       metric.value === "conversion" ? `${currentValue}%` : 
                       currentValue.toLocaleString()}
                    </p>
                    
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm font-medium ${
                        change >= 0 ? "text-green-600" : "text-red-600"
                      }`}>
                        {change >= 0 ? "+" : ""}{change.toFixed(1)}%
                      </span>
                      <span className="text-sm text-slate-500">vs last period</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Chart and Insights Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Chart */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Performance Overview</h3>
                      <p className="text-slate-600">Last {selectedTimeframe === "7d" ? "7 days" : selectedTimeframe === "30d" ? "30 days" : selectedTimeframe === "90d" ? "90 days" : "1 year"}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-500">Updated just now</span>
                    </div>
                  </div>
                  
                  {/* Chart Placeholder */}
                  <div className="h-80 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-600 font-medium">Interactive Chart</p>
                  <p className="text-slate-500 text-sm">Chart.js integration would go here</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="space-y-6">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-900">AI Insights</h3>
                    <button
                      onClick={() => setShowInsights(!showInsights)}
                      className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showInsights ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  
                  {showInsights && (
                    <div className="space-y-4">
                      {insights.map((insight) => (
                        <div
                          key={insight.id}
                          className={`p-4 rounded-2xl border-l-4 ${
                            insight.type === "positive" 
                              ? "bg-green-50 border-green-400" 
                              : insight.type === "negative"
                              ? "bg-red-50 border-red-400"
                              : "bg-blue-50 border-blue-400"
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              insight.type === "positive" 
                                ? "bg-green-100 text-green-600" 
                                : insight.type === "negative"
                                ? "bg-red-100 text-red-600"
                                : "bg-blue-100 text-blue-600"
                            }`}>
                              {insight.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-900 mb-1">{insight.title}</h4>
                              <p className="text-sm text-slate-600 mb-2">{insight.description}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-slate-900">{insight.value}</span>
                                <span className={`text-sm font-medium ${
                                  insight.change > 0 ? "text-green-600" : insight.change < 0 ? "text-red-600" : "text-slate-600"
                                }`}>
                                  {insight.change > 0 ? "+" : ""}{insight.change}%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full p-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>Generate Report</span>
                    </button>
                    <button className="w-full p-3 bg-white hover:bg-slate-50 text-slate-700 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg border border-slate-200 flex items-center justify-center space-x-2">
                      <Filter className="w-4 h-4" />
                      <span>Advanced Filters</span>
                    </button>
                    <button className="w-full p-3 bg-white hover:bg-slate-50 text-slate-700 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg border border-slate-200 flex items-center justify-center space-x-2">
                      <Search className="w-4 h-4" />
                      <span>Data Explorer</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Footer - Created by Eran Haim */}
        <div className="text-center py-8 border-t border-blue-500/20">
          <div className="flex items-center justify-center space-x-3 text-blue-300">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
              <Brain className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium">
              Created by{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
                Eran Haim
              </span>
            </span>
            <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
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

export default AnalyticsDashboard;
