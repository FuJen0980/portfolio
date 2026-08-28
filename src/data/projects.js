import img1a from '../assets/project1-a.png'
import img1b from '../assets/project1-b.png'
import plannerComparison from '../assets/planner-comparison.mp4'
import plannerPoster from '../assets/planner-poster.pdf'
import cmpt340Demo from '../assets/cmpt340_demo.mp4'
import cmpt340Report from '../assets/SFU_CMPT340_ProjectReport_Group05.pdf'
import emotionRewriteReport from '../assets/Emotions_Rewrite.pdf'
import first_graph from '../assets/first_graph.png'
import second_graph from '../assets/second_graph.png'
import mapPNG from '../assets/map.jpg'

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
  {
    title: "Image Dependent Annotation Variability",
    description: "This project investigates using deep learning to quantify and predict human annotation disagreement in medical image segmentation. The project addresses the inherent subjectivity and inconsistency in manual medical image annotations—such as ophthalmologists segmenting optic cups and discs in retinal fundus images—which can negatively impact downstream diagnostic models. By computing ground-truth disagreement scores using pair-wise Dice coefficients across expert annotations (primarily from the RIGA dataset), the team fine-tuned a pre-trained ResNet-18 convolutional neural network to regress and output a single continuous disagreement score directly from raw images. The resulting pipeline achieved strong predictive performance on test data (MAE of ~0.0081~0.0091 and a correlation coefficient around 0.78~0.82), establishing a reliable framework for evaluating annotation uncertainty and filtering low-quality datasets in medical AI applications.",
    tech: ["ResNet-18 Architecture", "PyTorch", "RIGA Dataset"],
    github: "https://github.com/FuJen0980/Image-Dependent-Annotation-Variability",
    demo: cmpt340Demo,
    report: cmpt340Report,
  },
  {
    title: "Emotion-Controlled Text Rewriting with Transformers: Balancing Emotional Expressiveness and Semantic Preservation",
    description: "This project investigates the trade-off between emotional expressiveness and semantic preservation in transformer-based text rewriting. Authored by Jeff Chiang, Nicholas Susanto, and Yvan Zhang, the project fine-tunes a pretrained BART model to convert neutral input sentences into target emotions—specifically joy, anger, or sadness—while retaining core context. To automatically evaluate outputs, the authors built a two-part evaluation pipeline: a BERT-based classifier fine-tuned on a 4-class subset of the GoEmotions dataset to measure emotional accuracy (~91% validation accuracy), alongside Sentence-BERT embeddings to calculate cosine similarity for semantic preservation. The resulting system demonstrates that while a model can generate distinct emotional tones, balancing emotional intensity with original semantic fidelity remains the central challenge in emotion-controlled text generation.",
    tech: ["BART, BERT, Sentence-BERT", "PyTorch", "GoEmotions Dataset", "Hugging Face Transformers"],
    github: "https://github.sfu.ca/fjc1/emotion-rewrite",
    report: emotionRewriteReport,
    images: [first_graph, second_graph],
  },
  {
    title: "OSM Proximity Population",
    description: "This project analyzes the spatial distribution of public infrastructure and population density across the Greater Vancouver Area by combining OpenStreetMap (OSM) data, census statistics, and user metadata. The codebase extracts geotagged metadata from Google Photos exports, filters coordinates within Vancouver's boundary, and overlays them alongside public amenities (hospitals, schools, clinics, libraries, and community centers). Using interactive mapping techniques, the application generates dynamic Choropleth and HeatMap visualizations to demonstrate spatial accessibility, demographic patterns, and amenity proximity across local neighborhoods.",
    tech: ["Python", "Folium", "OpenStreetMap API", "Google Photos Metadata"],
    github: "https://github.com/FuJen0980/CMPT353-OSM-Proximity-Population",
    images: [mapPNG],
  },
];