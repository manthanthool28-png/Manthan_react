export type Project = {
  id: string
  title: string
  summary: string
  tech: string[]
  link?: string // optional link
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Nom Nom',
    summary: 'AI Meal Planner & Recipe generator',
    tech: ['Figma' , 'Adobe illustrator'],
    link: 'https://www.behance.net/gallery/226785741/Nom-Nom-AI-Meal-Planner-Recipe-generator' 
    },
  {
    id: 'p2',
    title: 'Tolet Globe',
    summary: 'Rental Property Management Platform',
    tech: ['Figma','React', 'CSS'],
    link: 'https://www.toletglobe.in/' 
    
  },
  {
    id: 'p3',
    title: 'Laundry Xpress',
    summary: 'On-Demand Laundry Service App',
    tech: ['Figma', 'Adobe illustrator'],
    link: 'https://www.behance.net/gallery/199190047/A-Case-Study-On-Laundry-Xpress'
    
  }
]
