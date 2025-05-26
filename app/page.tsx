"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Define a type for your project (or import it if defined elsewhere)
interface Project {
  id: string; // Or number
  slug: string;
  title: string;
  subtitle: string | null;
  category: string | null;
  year: number | null;
  hero_image: string | null;
  featured: boolean;
  // Add other fields you want to display on the home page
}

interface ApiResponse {
  success: boolean;
  projects: Project[];
  error?: string;
}

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/projects'); // Your existing API endpoint
        if (!response.ok) {
          // Try to parse error from API response body
          const errorData = await response.json().catch(() => null);
          throw new Error(errorData?.error || `Failed to fetch projects. Status: ${response.status}`);
        }
        const data: ApiResponse = await response.json();

        if (data.success) {
          setProjects(data.projects);
        } else {
          throw new Error(data.error || 'An unknown error occurred while fetching projects.');
        }
      } catch (err: any) {
        console.error("Error fetching projects for home page:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []); // Empty dependency array means this effect runs once on mount

  if (isLoading) {
    return <main className="container mx-auto p-4"><p>Loading projects...</p></main>;
  }

  if (error) {
    return <main className="container mx-auto p-4"><p className="text-red-500">Error: {error}</p></main>;
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Alhambra Studios</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Projects</h2>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="border p-4 rounded-lg shadow">
                {project.hero_image && <img src={project.hero_image} alt={project.title} className="w-full h-48 object-cover mb-2 rounded" />}
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.subtitle && <p className="text-gray-600 text-sm mb-1">{project.subtitle}</p>}
                {project.category && <p className="text-gray-500 text-xs mb-2">Category: {project.category} {project.year && `(${project.year})`}</p>}
                <Link href={`/projects/${project.slug}`} className="text-blue-500 hover:underline">View Details</Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No projects found at the moment. Check back soon!</p>
        )}
      </section>
    </main>
  );
}// You can place this in a shared types file, e.g., types/index.ts
// or directly in your page component if it's only used there.
interface Project {
  id: string; // Or number, depending on your DB schema for 'id'
  slug: string;
  title: string;
  subtitle: string | null;
  category: string | null;
  year: number | null;
  status: string | null;
  hero_image: string | null;
  hero_video: string | null;
  content_html: string | null;
  gallery_images: string[] | null; // Assuming this comes as an array
  featured: boolean;
  created_at: string; // Date string
}

interface ApiResponse {
  success: boolean;
  projects: Project[];
  error?: string;
}
