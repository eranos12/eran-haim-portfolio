"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Upload, FileText, Target, Sparkles, Users, TrendingUp, Trophy, CheckCircle, XCircle, ChevronDown, ChevronUp, X, Briefcase, Search, Zap, Brain, BarChart3 } from "lucide-react";

interface Resume {
  id: string;
  name: string;
  email: string;
  fileName: string;
  content: string;
  skills: string[];
  experience: number;
  education: string[];
  parsedAt: Date;
}

interface JobDescription {
  title: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
  experience: number;
  education: string;
  content: string;
}

interface RankingResult {
  resume: Resume;
  score: number;
  explanation: string;
  matchedSkills: string[];
  missingSkills: string[];
}

export default function ResumeRankerPage() {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [jobDescription, setJobDescription] = useState<JobDescription | null>(null);
  const [isRanking, setIsRanking] = useState(false);
  const [rankingResults, setRankingResults] = useState<RankingResult[]>([]);
  const [expandedResume, setExpandedResume] = useState<string | null>(null);

  const parseResumeContent = (content: string): Partial<Resume> => {
    const lines = content.split('\n').filter(line => line.trim());
    const name = lines[0] || 'Unknown Candidate';
    const emailMatch = content.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
    const email = emailMatch ? emailMatch[0] : 'email@example.com';
    const mockSkills = ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'SQL'];
    const skills = mockSkills.slice(0, Math.floor(Math.random() * 4) + 2);
    const experience = Math.floor(Math.random() * 8) + 1;
    const education = ['Bachelor\'s in Computer Science', 'Master\'s in Software Engineering'].slice(0, Math.floor(Math.random() * 2) + 1);
    
    return { name, email, skills, experience, education };
  };

  const handleFileUpload = (files: FileList) => {
    const newResumes: Resume[] = [];
    
    Array.from(files).forEach((file) => {
      if (file.type === 'application/pdf' || file.type === 'application/msword' || file.type.includes('wordprocessingml')) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
          const content = e.target?.result as string;
          const parsedData = parseResumeContent(content);
          
          const resume: Resume = {
            id: Math.random().toString(36).substr(2, 9),
            fileName: file.name,
            content,
            parsedAt: new Date(),
            ...parsedData,
          } as Resume;
          
          newResumes.push(resume);
          
          if (newResumes.length === files.length) {
            setResumes([...resumes, ...newResumes]);
          }
        };
        
        reader.readAsText(file);
      }
    });
  };

  const handleRanking = async () => {
    if (resumes.length === 0 || !jobDescription) return;
    
    setIsRanking(true);
    setTimeout(() => {
      const mockResults: RankingResult[] = resumes.map((resume) => ({
        resume,
        score: Math.random() * 100,
        explanation: `This candidate shows strong alignment with the job requirements. Key strengths include ${resume.skills.slice(0, 3).join(', ')}.`,
        matchedSkills: resume.skills.slice(0, Math.floor(Math.random() * 3) + 1),
        missingSkills: ['Leadership', 'Project Management'].slice(0, Math.floor(Math.random() * 2) + 1)
      }));
      
      mockResults.sort((a, b) => b.score - a.score);
      setRankingResults(mockResults);
      setIsRanking(false);
    }, 3000);
  };

  const canRank = resumes.length > 0 && jobDescription && !isRanking;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 text-slate-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors duration-200 group"
              >
                <div className="p-1 rounded-lg bg-slate-100 group-hover:bg-blue-100 transition-colors duration-200">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <span className="font-medium">Back to Portfolio</span>
              </Link>
              <div className="hidden sm:block w-px h-6 bg-slate-300"></div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-800">
                  AI Resume Ranker
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              <Zap className="w-4 h-4 text-blue-500" />
              <span>Powered by AI</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-full px-6 py-2 mb-6 shadow-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-600">AI-Powered Recruitment</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-cyan-800 bg-clip-text text-transparent">
            Intelligent Candidate
            <br />
            <span className="text-blue-600">Matching</span>
          </h2>
          
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your hiring process with AI-powered resume analysis. 
            Upload multiple resumes and get instant, intelligent candidate rankings 
            with detailed insights and skill gap analysis.
          </p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-2">Multi-Candidate</div>
              <div className="text-slate-600">Analyze unlimited resumes simultaneously</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-2">Smart Analysis</div>
              <div className="text-slate-600">AI-powered semantic matching</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-2">Deep Insights</div>
              <div className="text-slate-600">Comprehensive candidate analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Left Column - Inputs */}
            <div className="xl:col-span-1 space-y-6">
              {/* Resume Upload */}
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center text-slate-800">
                  <Upload className="w-5 h-5 mr-2 text-blue-600" />
                  Upload Resumes
                </h3>
                
                {/* Upload Area */}
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors duration-200 bg-slate-50/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-lg font-medium mb-2 text-slate-800">
                    Drop resumes here
                  </p>
                  <p className="text-slate-500 mb-4">
                    Supports PDF, DOC, and DOCX files
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Choose Files
                  </label>
                </div>

                {/* Uploaded Resumes */}
                {resumes.length > 0 && (
                  <div className="mt-6 space-y-3">
                    <h4 className="font-medium text-slate-700">Uploaded Resumes</h4>
                    {resumes.map((resume) => (
                      <div
                        key={resume.id}
                        className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <FileText className="w-5 h-5 text-blue-600" />
                              <div>
                                <h5 className="font-medium text-slate-800">{resume.fileName}</h5>
                                <div className="flex items-center space-x-4 text-sm text-slate-500">
                                  <span className="flex items-center">
                                    <Users className="w-4 h-4 mr-1" />
                                    {resume.name}
                                  </span>
                                  <span className="flex items-center">
                                    <Briefcase className="w-4 h-4 mr-1" />
                                    {resume.experience} years
                                  </span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                              {resume.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <button
                            onClick={() => setResumes(resumes.filter(r => r.id !== resume.id))}
                            className="ml-4 p-1 text-slate-400 hover:text-red-500 transition-colors duration-200"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Job Description */}
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center text-slate-800">
                  <Target className="w-5 h-5 mr-2 text-cyan-600" />
                  Job Requirements
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Senior Frontend Developer"
                      onChange={(e) => setJobDescription({
                        title: e.target.value,
                        requirements: [],
                        responsibilities: [],
                        skills: [],
                        experience: 3,
                        education: "Bachelor's Degree",
                        content: e.target.value
                      })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 focus:bg-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Required Skills
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., React, TypeScript, Node.js"
                      onChange={(e) => setJobDescription(prev => prev ? {
                        ...prev,
                        skills: e.target.value.split(',').map(s => s.trim()).filter(s => s)
                      } : null)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Rank Button */}
              <button
                onClick={handleRanking}
                disabled={!canRank}
                className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                  canRank
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl hover:scale-105 transform"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                {isRanking ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Analyzing Resumes...
                  </div>
                ) : (
                  "Rank Candidates"
                )}
              </button>
            </div>

            {/* Right Column - Results */}
            <div className="xl:col-span-2">
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm">
                <h3 className="text-lg font-semibold mb-6 text-slate-800">Ranking Results</h3>
                {rankingResults.length > 0 ? (
                  <div className="space-y-6">
                    {/* Summary Stats */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200/60">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-slate-800">Analysis Summary</h4>
                        <div className="flex items-center space-x-2">
                          <Trophy className="w-5 h-5 text-yellow-500" />
                          <span className="text-sm text-slate-600 font-medium">
                            Top Score: {Math.max(...rankingResults.map(r => r.score)).toFixed(1)}%
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 rounded-xl bg-white/60 border border-slate-200/60">
                          <div className="text-3xl font-bold text-blue-600 mb-1">{rankingResults.length}</div>
                          <div className="text-sm text-slate-600">Candidates</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/60 border border-slate-200/60">
                          <div className="text-3xl font-bold text-cyan-600 mb-1">
                            {(rankingResults.reduce((sum, r) => sum + r.score, 0) / rankingResults.length).toFixed(1)}%
                          </div>
                          <div className="text-sm text-slate-600">Avg Score</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/60 border border-slate-200/60">
                          <div className="text-3xl font-bold text-green-600 mb-1">
                            {rankingResults.filter(r => r.score >= 70).length}
                          </div>
                          <div className="text-sm text-slate-600">Strong Matches</div>
                        </div>
                      </div>
                    </div>

                    {/* Ranking Results */}
                    <div className="space-y-4">
                      {rankingResults.map((result, index) => (
                        <div
                          key={result.resume.id}
                          className="border border-slate-200/60 rounded-2xl overflow-hidden bg-white/60 hover:bg-white/80 transition-all duration-300 hover:shadow-md"
                        >
                          {/* Header */}
                          <div className="p-4 border-b border-slate-200/60">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${
                                  index === 0 ? "bg-gradient-to-br from-yellow-400 to-yellow-500 text-white" : 
                                  index === 1 ? "bg-gradient-to-br from-slate-400 to-slate-500 text-white" : 
                                  index === 2 ? "bg-gradient-to-br from-amber-500 to-amber-600 text-white" : 
                                  "bg-gradient-to-br from-slate-300 to-slate-400 text-white"
                                }`}>
                                  {index + 1}
                                </div>
                                <div>
                                  <h5 className="font-semibold text-slate-800">{result.resume.name}</h5>
                                  <div className="text-sm text-slate-500">
                                    {result.resume.experience} years experience
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-3">
                                <div className={`px-4 py-2 rounded-xl text-sm font-semibold border ${
                                  result.score >= 80 ? "bg-green-100 border-green-200 text-green-700" :
                                  result.score >= 60 ? "bg-yellow-100 border-yellow-200 text-yellow-700" :
                                  "bg-red-100 border-red-200 text-red-700"
                                }`}>
                                  {result.score.toFixed(1)}%
                                </div>
                                <button
                                  onClick={() => setExpandedResume(expandedResume === result.resume.id ? null : result.resume.id)}
                                  className="p-2 text-slate-400 hover:text-blue-600 transition-colors duration-200 hover:bg-slate-100 rounded-lg"
                                >
                                  {expandedResume === result.resume.id ? (
                                    <ChevronUp className="w-4 h-4" />
                                  ) : (
                                    <ChevronDown className="w-4 h-4" />
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Expanded Content */}
                          {expandedResume === result.resume.id && (
                            <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50/30">
                              {/* AI Explanation */}
                              <div className="mb-6">
                                <h6 className="font-semibold text-slate-800 mb-3 flex items-center">
                                  <Brain className="w-4 h-4 mr-2 text-blue-600" />
                                  AI Analysis
                                </h6>
                                <p className="text-slate-600 leading-relaxed">
                                  {result.explanation}
                                </p>
                              </div>

                              {/* Skills Analysis */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Matched Skills */}
                                <div>
                                  <h6 className="font-semibold text-slate-800 mb-3 flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                    Matched Skills
                                  </h6>
                                  <div className="flex flex-wrap gap-2">
                                    {result.matchedSkills.map((skill, skillIndex) => (
                                      <span
                                        key={skillIndex}
                                        className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-lg border border-green-200 font-medium"
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                {/* Missing Skills */}
                                <div>
                                  <h6 className="font-semibold text-slate-800 mb-3 flex items-center">
                                    <XCircle className="w-4 h-4 mr-2 text-red-600" />
                                    Missing Skills
                                  </h6>
                                  <div className="flex flex-wrap gap-2">
                                    {result.missingSkills.map((skill, skillIndex) => (
                                      <span
                                        key={skillIndex}
                                        className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-lg border border-red-200 font-medium"
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-16 text-slate-500">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Target className="w-10 h-10 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-600 mb-2">Ready to Analyze</h3>
                    <p className="text-slate-500">
                      Upload resumes and define job requirements to start the AI analysis.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200/60 bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500">
            Built with Next.js, TypeScript, and OpenAI • Created by Eran Haim
          </p>
        </div>
      </footer>
    </main>
  );
}
