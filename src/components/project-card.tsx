"use client";

import ProjectModal from "@/components/project-modal";
import { Project } from "@/lib/types";
import { motion } from "framer-motion";

const ProjectCard = ({
  project,
  hoveredId,
  setHoveredId,
}: {
  project: Project;
  hoveredId: number | null;
  setHoveredId: (id: number | null) => void;
}) => {
  return (
    <motion.div
      key={project.id}
      dir="rtl"
      className="relative overflow-hidden rounded-lg cursor-pointer w-full h-[500px] shadow-xl"
      animate={
        hoveredId === null
          ? { transform: "scale(1)" }
          : hoveredId === project.id
          ? { transform: "scale(1.05)" }
          : { transform: "scale(0.95)" }
      }
      transition={{ duration: 0.3 }}
      onHoverStart={() => setHoveredId(project.id)}
      onHoverEnd={() => setHoveredId(null)}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
    >
      <div className="relative aspect-[3/4] w-full h-full">
        <ProjectModal project={project} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-white text-xl font-medium">{project.company}</p>
        <p className="text-white/80 text-xl">{project.location}</p>

        {/* زر "تعرف على المزيد" */}
        {project.link ? (
          <a
            href={project.link}
            className="mt-4 inline-block bg-yellow-500 text-black text-sm font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:bg-yellow-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            تعرف على المزيد
          </a>
        ) : (
          <p className="text-gray-400 mt-4">لا يوجد رابط متاح</p>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
