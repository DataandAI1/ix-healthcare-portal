// Database model types matching Prisma schema

export interface Company {
  id: number;
  name: string;
  industry?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ResearchProject {
  id: number;
  title: string;
  summary?: string | null;
  category?: string | null;
  clientId?: number | null;
  startDate?: Date | null;
  endDate?: Date | null;
  status?: string | null;
  createdAt: Date;
  updatedAt: Date;
  
  // Relations
  client?: Company | null;
  projectTags?: ProjectTag[];
  researchMetrics?: ResearchMetrics[];
  documents?: ResearchDocument[];
}

export interface Tag {
  id: number;
  name: string;
  createdAt: Date;
}

export interface ProjectTag {
  projectId: number;
  tagId: number;
  createdAt: Date;
  
  // Relations
  project?: ResearchProject;
  tag?: Tag;
}

export interface ResearchMetrics {
  id: number;
  projectId: number;
  impact?: string | null;
  satisfactionScore?: number | null;
  implementationStatus?: string | null;
  createdAt: Date;
  updatedAt: Date;
  
  // Relations
  project?: ResearchProject;
}

export interface ResearchDocument {
  id: number;
  projectId: number;
  title: string;
  driveId?: string | null;
  driveUrl?: string | null;
  docType?: string | null;
  createdAt: Date;
  updatedAt: Date;
  
  // Relations
  project?: ResearchProject;
}

// View type for the research_data_view
export interface ResearchDataView {
  id: number;
  title: string;
  summary?: string | null;
  category?: string | null;
  client?: string | null;
  clientIndustry?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  status?: string | null;
  createdAt: string;
  tags: string[];
  metrics?: {
    impact?: string | null;
    satisfactionScore?: number | null;
    implementationStatus?: string | null;
  } | null;
  documents: Array<{
    id: number;
    title: string;
    driveId?: string | null;
    driveUrl?: string | null;
    docType?: string | null;
  }>;
}

// API Response types
export interface ResearchCategory {
  category: string;
}

export interface ResearchClient {
  client: string;
}

// Filter parameters for research queries
export interface ResearchFilterParams {
  category?: string | null;
  client?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  searchTerm?: string | null;
}
