export type Project = {
  name: string;
  period: string;
  summary: string;
  technologies: string[];
  contribution: string;
  links?: {
    paper?: string;
    code?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    name: 'Diffusion-Guided Indoor Scene Generation',
    period: '2025',
    summary: 'A controllable pipeline that synthesizes indoor scene layouts and appearance-consistent renderings from text constraints.',
    technologies: ['PyTorch', 'Diffusion Models', '3D Scene Representation'],
    contribution: 'Designed controllable conditioning signals and built the evaluation pipeline for layout coherence and visual fidelity.',
    links: {
      code: 'https://github.com/yourname/diffusion-scene',
      demo: 'https://example.com/demo/scene'
    }
  },
  {
    name: 'Neural Inverse Rendering for Material Recovery',
    period: '2025',
    summary: 'Estimated per-pixel material properties under mixed illumination using a differentiable rendering objective.',
    technologies: ['Inverse Rendering', 'Differentiable Rendering', 'Computer Graphics'],
    contribution: 'Implemented optimization strategy and ablation experiments, and analyzed robustness under sparse-view settings.',
    links: {
      paper: 'https://arxiv.org/',
      code: 'https://github.com/yourname/inverse-rendering'
    }
  },
  {
    name: '3D Vision Benchmark for Cross-View Consistency',
    period: '2024',
    summary: 'Built a lightweight benchmark to evaluate multi-view consistency across 3D reconstruction and view synthesis methods.',
    technologies: ['3D Vision', 'Evaluation', 'Data Pipeline'],
    contribution: 'Curated benchmark protocol, developed metric implementation, and delivered reproducible experiment scripts.',
    links: {
      code: 'https://github.com/yourname/3d-consistency-benchmark'
    }
  },
  {
    name: 'Embodied Navigation in Language-Conditioned Environments',
    period: '2024',
    summary: 'Studied policy learning with multimodal inputs for goal-oriented navigation tasks in simulation environments.',
    technologies: ['Embodied AI', 'Reinforcement Learning', 'Multimodal Learning'],
    contribution: 'Built training environment wrappers and investigated language grounding strategies for improved policy success rates.',
    links: {
      paper: 'https://arxiv.org/',
      demo: 'https://example.com/demo/embodied'
    }
  }
];
