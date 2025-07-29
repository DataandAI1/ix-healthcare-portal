import { PrismaClient } from '@prisma/client';
import type { 
  ResearchDataView, 
  ResearchCategory, 
  ResearchClient, 
  ResearchFilterParams 
} from '../types/database';

// Initialize Prisma Client
const prisma = new PrismaClient();

/**
 * Research Database Service
 * Provides methods to interact with the research database
 */
export class ResearchDatabaseService {
  /**
   * Get all research categories
   */
  static async getCategories(): Promise<string[]> {
    const result = await prisma.$queryRaw<ResearchCategory[]>`
      SELECT * FROM get_research_categories()
    `;
    return result.map(r => r.category);
  }

  /**
   * Get all research clients
   */
  static async getClients(): Promise<string[]> {
    const result = await prisma.$queryRaw<ResearchClient[]>`
      SELECT * FROM get_research_clients()
    `;
    return result.map(r => r.client);
  }

  /**
   * Get filtered research data
   */
  static async getFilteredResearch(filters: ResearchFilterParams): Promise<ResearchDataView[]> {
    const { category, client, startDate, endDate, searchTerm } = filters;
    
    const result = await prisma.$queryRaw<ResearchDataView[]>`
      SELECT * FROM get_filtered_research(
        ${category || null}::TEXT,
        ${client || null}::TEXT,
        ${startDate || null}::DATE,
        ${endDate || null}::DATE,
        ${searchTerm || null}::TEXT
      )
    `;
    
    return result;
  }

  /**
   * Add a new research document
   */
  static async addResearchDocument(
    projectId: number,
    title: string,
    driveId?: string,
    driveUrl?: string,
    docType?: string
  ): Promise<void> {
    await prisma.$queryRaw`
      SELECT add_research_document(
        ${projectId}::INTEGER,
        ${title}::TEXT,
        ${driveId || null}::TEXT,
        ${driveUrl || null}::TEXT,
        ${docType || null}::TEXT
      )
    `;
  }

  /**
   * Create a new research project
   */
  static async createProject(data: {
    title: string;
    summary?: string;
    category?: string;
    clientId?: number;
    startDate?: Date;
    endDate?: Date;
    status?: string;
    tags?: string[];
  }) {
    const { tags, ...projectData } = data;
    
    // Create the project
    const project = await prisma.researchProject.create({
      data: projectData,
      include: {
        client: true,
        projectTags: {
          include: {
            tag: true
          }
        }
      }
    });

    // Add tags if provided
    if (tags && tags.length > 0) {
      // Find or create tags
      const tagRecords = await Promise.all(
        tags.map(tagName =>
          prisma.tag.upsert({
            where: { name: tagName },
            update: {},
            create: { name: tagName }
          })
        )
      );

      // Create project-tag relationships
      await prisma.projectTag.createMany({
        data: tagRecords.map(tag => ({
          projectId: project.id,
          tagId: tag.id
        }))
      });
    }

    return project;
  }

  /**
   * Update research metrics for a project
   */
  static async updateMetrics(
    projectId: number,
    metrics: {
      impact?: string;
      satisfactionScore?: number;
      implementationStatus?: string;
    }
  ) {
    return await prisma.researchMetrics.upsert({
      where: { projectId },
      update: metrics,
      create: {
        projectId,
        ...metrics
      }
    });
  }

  /**
   * Get a single research project with all related data
   */
  static async getProject(projectId: number) {
    return await prisma.researchProject.findUnique({
      where: { id: projectId },
      include: {
        client: true,
        projectTags: {
          include: {
            tag: true
          }
        },
        researchMetrics: true,
        documents: true
      }
    });
  }

  /**
   * Delete a research project
   */
  static async deleteProject(projectId: number) {
    return await prisma.researchProject.delete({
      where: { id: projectId }
    });
  }
}

// Export the Prisma client instance for direct use if needed
export { prisma };
