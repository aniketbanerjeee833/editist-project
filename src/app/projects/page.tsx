
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, PlayCircle } from "lucide-react";
import { useState } from 'react';

type Project = {
  title: string;
  videoUrl?: string;
  imageUrl?: string;
  hint: string;
};

export default function ProjectsPage() {
  const [playingProject, setPlayingProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "Corporate Ad",
      videoUrl: "https://www.youtube.com/embed/gtF8D8OQDQA",
      hint: "video production"
    },
    {
      title: "Music Video",
      imageUrl: "https://placehold.co/600x400.png",
      hint: "music video"
    },
    {
      title: "Wedding Film",
      imageUrl: "https://placehold.co/600x400.png",
      hint: "wedding film"
    },
    {
      title: "Documentary Short",
      imageUrl: "https://placehold.co/600x400.png",
      hint: "documentary film"
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: i * 0.1,
      },
    }),
  };

  const handlePlayClick = (title: string) => {
    setPlayingProject(title);
  };
  
  const getYouTubeThumbnail = (videoUrl: string) => {
    const videoId = videoUrl.split('/').pop()?.split('?')[0];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };


  return (
    <section className="py-20 md:py-32 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Check out some of the stunning video projects we've brought to life.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col bg-gradient-to-br from-card to-secondary/30">
                <CardHeader className="p-0 aspect-video relative">
                  {project.videoUrl && playingProject !== project.title ? (
                     <div className="relative w-full h-full cursor-pointer" onClick={() => handlePlayClick(project.title)}>
                        <Image
                            src={getYouTubeThumbnail(project.videoUrl)}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                            data-ai-hint={project.hint}
                            draggable="false"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <PlayCircle className="w-20 h-20 text-white/80 hover:text-white transition-colors" />
                        </div>
                    </div>
                  ) : project.videoUrl && playingProject === project.title ? (
                    <iframe
                      src={`${project.videoUrl}?autoplay=1&controls=0`}
                      title={project.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : project.imageUrl && (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      data-ai-hint={project.hint}
                      draggable="false"
                    />
                  )}
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow items-center">
                  <CardTitle className="text-2xl mb-4 text-center">{project.title}</CardTitle>
                  <div className="mt-auto">
                    <Button className="transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1">
                      View Project
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
