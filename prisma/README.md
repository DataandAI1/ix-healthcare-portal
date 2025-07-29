# Prisma Database Setup

This project uses Prisma as an ORM to interact with the PostgreSQL database containing research data.

## Initial Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Update `DATABASE_URL` with your PostgreSQL connection string

3. **Generate Prisma Client**
   ```bash
   npm run prisma:generate
   ```

## Database Schema

The database includes the following models:

- **Company**: Client companies (e.g., Healthfirst)
- **ResearchProject**: Research projects with title, summary, category, dates
- **Tag**: Categorization tags (e.g., "Healthcare", "AI Implementation")
- **ProjectTag**: Many-to-many relationship between projects and tags
- **ResearchMetrics**: Project metrics including impact and satisfaction scores
- **ResearchDocument**: Documents associated with research projects

## Available Scripts

- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:db:push` - Push schema changes to database (development)
- `npm run prisma:migrate:dev` - Create and apply migrations (development)
- `npm run prisma:migrate:deploy` - Apply migrations (production)
- `npm run prisma:studio` - Open Prisma Studio GUI

## Database Functions

The database includes several helper functions:

- `get_research_categories()` - Get all distinct project categories
- `get_research_clients()` - Get all distinct client names
- `get_filtered_research()` - Get filtered research data with all related information
- `add_research_document()` - Add a new document to a research project

## Example Usage

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Get all research projects with related data
const projects = await prisma.researchProject.findMany({
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
})

// Filter projects by category
const healthcareProjects = await prisma.researchProject.findMany({
  where: {
    category: 'Healthcare Technology'
  },
  include: {
    client: true
  }
})
```

## Database View

The database includes a `research_data_view` that provides data in the format expected by the React components:

```sql
SELECT * FROM research_data_view;
```

This view returns JSON-formatted data with:
- Project details
- Client information
- Tags array
- Metrics object
- Documents array
