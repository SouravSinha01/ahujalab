# Data Management System Documentation

## Overview
This is a modular data management system that separates data from component logic. Instead of hardcoding data in TSX files, all data is stored in JSON files and managed through a centralized utility.

## Project Structure

```
src/
├── data/
│   ├── team.json          # Team members and alumni data
│   ├── about-pi.json      # PI information, roles, and awards
│   └── publications.json  # Publications list
├── utils/
│   └── dataLoader.ts      # Data loading utility with typed interfaces
└── components/
    ├── TeamSection.tsx           # (To be refactored)
    ├── AboutPISection.tsx        # (To be refactored)
    └── PublicationsSection.tsx   # (To be refactored)
```

## How to Use

### 1. Adding Team Members

Edit `src/data/team.json` and add to the `graduates` or `alumni` array:

```json
{
  "name": "Jane Doe",
  "role": "PhD Scholar",
  "focus": "Your research focus here",
  "image": "jane_profile.png",
  "links": {
    "email": "mailto:jane@iiitd.ac.in",
    "github": "https://github.com/janedoe",
    "linkedin": "https://linkedin.com/in/janedoe",
    "scholar": "https://scholar.google.com/citations?user=..."
  }
}
```

### 2. Adding Awards

Edit `src/data/about-pi.json`:

**With Images:**
```json
{
  "year": "2025",
  "title": "Award Title",
  "org": "Organization Name",
  "desc": "Award description",
  "image": "/award_image.png"
}
```

**Without Images:**
```json
{
  "year": "2025",
  "title": "Award Title",
  "org": "Organization Name"
}
```

### 3. Adding Publications

Edit `src/data/publications.json`:

```json
{
  "year": "2025",
  "title": "Publication Title",
  "journal": "Journal Name. 2025;Volume:Pages",
  "authors": "Author1 A, Author2 B, Ahuja G.",
  "doi": "10.1234/journal.2025.000001",
  "tag": "Category/Topic"
}
```

## Using in Components

### Option 1: Direct Import (Recommended)

```tsx
import { getTeamMembers, getTeamAlumni } from '../utils/dataLoader';

export const TeamSection: React.FC = () => {
  const graduates = getTeamMembers();
  const alumni = getTeamAlumni();

  return (
    <section>
      {graduates.map((member) => (
        <div key={member.name}>{member.name}</div>
      ))}
    </section>
  );
};
```

### Option 2: Using Full Data Object

```tsx
import { loadTeamData } from '../utils/dataLoader';

export const TeamSection: React.FC = () => {
  const teamData = loadTeamData();

  return (
    <section>
      {teamData.graduates.map((member) => (
        <div key={member.name}>{member.name}</div>
      ))}
    </section>
  );
};
```

### Option 3: Custom Hook Pattern (if needed)

```tsx
// src/hooks/useTeamData.ts
import { getTeamMembers, getTeamAlumni, TeamMember } from '../utils/dataLoader';
import { useState, useEffect } from 'react';

export const useTeamData = () => {
  const [graduates, setGraduates] = useState<TeamMember[]>([]);
  const [alumni, setAlumni] = useState<TeamMember[]>([]);

  useEffect(() => {
    setGraduates(getTeamMembers());
    setAlumni(getTeamAlumni());
  }, []);

  return { graduates, alumni };
};
```

## Available Data Functions

### Team Data
- `loadTeamData()` - Returns full team data object
- `getTeamMembers()` - Returns graduates array
- `getTeamAlumni()` - Returns alumni array

### About PI Data
- `loadAboutPiData()` - Returns full about PI data object
- `getPiRoles()` - Returns roles array
- `getPiAwardsWithImages()` - Returns awards with images
- `getPiAwardsWithoutImages()` - Returns awards without images
- `getAllAwards()` - Returns combined awards list

### Publications Data
- `loadPublicationsData()` - Returns full publications data object
- `getPublications()` - Returns all publications
- `getPublicationsByYear(year)` - Filter publications by year
- `getPublicationsByTag(tag)` - Filter publications by tag
- `getUniquePublicationTags()` - Get all unique tags
- `getUniquePublicationYears()` - Get all unique years (sorted descending)

## Type Definitions

All data is fully typed in TypeScript:

```tsx
import type { TeamMember, Award, Publication, TeamData, AboutPiData, PublicationsData } from '../utils/dataLoader';

// Use in your component
const member: TeamMember = { /* ... */ };
const award: Award = { /* ... */ };
```

## Migration Guide

To refactor an existing component:

1. **Remove hardcoded constants**
   ```tsx
   // OLD
   const GRADUATES = [...]
   const AWARDS_WITH_IMAGES = [...]
   
   // NEW
   import { getTeamMembers, getPiAwardsWithImages } from '../utils/dataLoader';
   ```

2. **Replace data source**
   ```tsx
   // OLD
   {GRADUATES.map((member) => (...))}
   
   // NEW
   {getTeamMembers().map((member) => (...))}
   ```

3. **Keep component logic intact** - Only change the data source, not rendering logic

## Benefits of This System

✅ **Centralized Data Management** - All data in one place  
✅ **Easy Updates** - No need to edit TSX files, just update JSON  
✅ **Type Safety** - Full TypeScript support  
✅ **Scalability** - Easy to add new data fields or sections  
✅ **Reusability** - Data functions can be used across components  
✅ **Maintainability** - Clear separation of concerns  
✅ **Flexibility** - Can easily extend with filtering, sorting, etc.

## Future Enhancements

- Add search functionality for publications
- Implement filtering by tags
- Add sorting options (by date, name, etc.)
- Consider moving data to a backend API
- Add data validation schema

## Notes

- Image paths in JSON are relative to the `public/` folder
- All links should be complete URLs (with `mailto:` or `https://`)
- Update year values to the current or expected year for new entries
