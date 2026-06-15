import img1a from '../assets/project1-a.png'
import img1b from '../assets/project1-b.png'
import plannerComparison from '../assets/planner-comparison.mp4'
import plannerPoster from '../assets/planner-poster.pdf'

export const projects = [
  {
    title: "Fraser International College Scheduler",
    description: "The FIC Class Scheduler is a course schedule planning tool to help administrative staff develop class schedules which respect the preferences of the teaching staff and maximize their course offerings in the space available. This browser-based application’s primary feature is the generation of a class schedule for the school based on the courses offered, assigning the classes to rooms and professors according to suitability, availability, seniority, and preferences, followed by whatever other constraints are identified. In the proposed version, the application will focus on providing a clear workflow and generating efficient schedules; future work may include features such as tuning or manual tweaking of already-generated schedules, or direct integration of feedback from teachers.",
    tech: ["React", "SpringBoot", "PostgreSQL"],
    github: "https://github.com/cmpt276-202305-group2/fic-scheduler",
    images: [img1a, img1b],
  },
  {
    title: "ROS2 Motion Planning and TurtleBot3 Navigation",
    description: "This project implements and compares four sampling-based motion planning algorithms RRT, RRT*, PRM, and Adaptive Goal-Biased RRT. Planners are implented as ROS 2 nodes using OMPL and are evaluated in a structured 2D maze environment across four metrics: planning time, path length, path smoothness, and success rate.",
    tech: ["ROS2", "OMPL"],
    github: "https://github.com/FuJen0980/planner-comparison",
    demo: plannerComparison,
    poster: plannerPoster,
  },
];