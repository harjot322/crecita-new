// Mock data for Crecita website
export const mockData = {
  company: {
    name: "Crecita",
    tagline: "Streamlining DevOps & MLOps for scalable, reliable solutions",
    description: "We empower businesses to accelerate their digital transformation through cutting-edge DevOps and MLOps practices, delivering scalable, reliable, and efficient solutions.",
    foundedYear: "2020",
    location: "Global",
    employees: "50+"
  },
  
  services: {
    devops: {
      title: "DevOps Services",
      description: "Accelerate your software delivery with our comprehensive DevOps solutions",
      items: [
        {
          id: 1,
          title: "CI/CD Pipelines",
          description: "Automate your software delivery process with continuous integration and deployment pipelines that reduce deployment time by 80%.",
          icon: "GitBranch",
          features: ["Automated Testing", "Zero-Downtime Deployment", "Multi-Environment Support"]
        },
        {
          id: 2,
          title: "Infrastructure as Code",
          description: "Manage and provision infrastructure through code with Terraform and CloudFormation for consistent, scalable deployments.",
          icon: "Code",
          features: ["Version Control", "Automated Provisioning", "Environment Consistency"]
        },
        {
          id: 3,
          title: "Kubernetes & Docker",
          description: "Orchestrate containerized applications for improved scalability and resource efficiency with enterprise-grade container solutions.",
          icon: "Container",
          features: ["Auto-scaling", "Load Balancing", "Service Discovery"]
        },
        {
          id: 4,
          title: "Monitoring Solutions",
          description: "Implement Prometheus, Grafana, and ELK stack for comprehensive system monitoring and observability.",
          icon: "Activity",
          features: ["Real-time Metrics", "Custom Dashboards", "Alert Management"]
        }
      ]
    },
    mlops: {
      title: "MLOps Services",
      description: "Scale your machine learning operations with production-ready MLOps infrastructure",
      items: [
        {
          id: 1,
          title: "Model Deployment",
          description: "Deploy machine learning models to production with scalable and reliable infrastructure that handles millions of requests.",
          icon: "Brain",
          features: ["Auto-scaling", "A/B Testing", "Multi-model Serving"]
        },
        {
          id: 2,
          title: "Monitoring & Retraining",
          description: "Continuously monitor model performance and automate retraining processes to maintain optimal accuracy.",
          icon: "RefreshCw",
          features: ["Drift Detection", "Performance Metrics", "Automated Retraining"]
        },
        {
          id: 3,
          title: "Feature Stores",
          description: "Implement feature stores for consistent feature engineering across training and inference pipelines.",
          icon: "Database",
          features: ["Feature Versioning", "Real-time Serving", "Data Consistency"]
        },
        {
          id: 4,
          title: "End-to-End Workflow",
          description: "Automate the entire ML lifecycle from data preparation to deployment and monitoring with seamless orchestration.",
          icon: "Workflow",
          features: ["Pipeline Automation", "Model Versioning", "Experiment Tracking"]
        }
      ]
    }
  },
  
  benefits: [
    {
      title: "Faster Time to Market",
      description: "Reduce deployment cycles from weeks to minutes with automated CI/CD pipelines",
      percentage: "80%",
      metric: "faster deployment"
    },
    {
      title: "Increased Scalability",
      description: "Handle 10x more traffic with auto-scaling infrastructure and optimized resource allocation",
      percentage: "10x",
      metric: "traffic capacity"
    },
    {
      title: "Cost Efficiency",
      description: "Reduce infrastructure costs through optimized resource usage and automated scaling",
      percentage: "40%",
      metric: "cost reduction"
    },
    {
      title: "Improved Product Quality",
      description: "Achieve 99.9% uptime with comprehensive monitoring and automated testing",
      percentage: "99.9%",
      metric: "uptime"
    }
  ],
  
  technologies: {
    devops: [
      { name: "Jenkins", category: "CI/CD" },
      { name: "GitHub Actions", category: "CI/CD" },
      { name: "Terraform", category: "IaC" },
      { name: "Docker", category: "Containerization" },
      { name: "Kubernetes", category: "Orchestration" },
      { name: "Ansible", category: "Configuration" },
      { name: "Prometheus", category: "Monitoring" },
      { name: "Grafana", category: "Visualization" }
    ],
    mlops: [
      { name: "MLflow", category: "Experiment Tracking" },
      { name: "Kubeflow", category: "ML Pipelines" },
      { name: "Seldon", category: "Model Serving" },
      { name: "TFX", category: "Production ML" },
      { name: "TensorFlow Serving", category: "Model Deployment" },
      { name: "Apache Airflow", category: "Workflow Orchestration" }
    ],
    cloud: [
      { name: "AWS", category: "Cloud Platform" },
      { name: "Azure", category: "Cloud Platform" },
      { name: "GCP", category: "Cloud Platform" }
    ]
  },
  
  industries: [
    { name: "Healthcare", icon: "Heart", description: "HIPAA-compliant ML solutions for medical diagnostics" },
    { name: "Finance & FinTech", icon: "DollarSign", description: "Secure, scalable financial services infrastructure" },
    { name: "eCommerce", icon: "ShoppingCart", description: "High-performance platforms for online retail" },
    { name: "Manufacturing", icon: "Factory", description: "Industrial IoT and predictive maintenance solutions" },
    { name: "Telecom", icon: "Phone", description: "Network optimization and customer analytics" },
    { name: "Retail", icon: "Store", description: "Inventory management and personalization engines" },
    { name: "Energy", icon: "Zap", description: "Smart grid and renewable energy optimization" },
    { name: "Automotive", icon: "Car", description: "Connected vehicle and autonomous driving systems" },
    { name: "Logistics", icon: "Truck", description: "Supply chain optimization and route planning" },
    { name: "Government", icon: "Shield", description: "Secure, compliant digital transformation solutions" },
    { name: "Education", icon: "GraduationCap", description: "EdTech platforms and learning analytics" }
  ],
  
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp",
      content: "Crecita transformed our deployment process. We went from monthly releases to daily deployments with zero downtime. Their expertise in Kubernetes and CI/CD is unmatched.",
      rating: 5,
      image: "/api/placeholder/64/64"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "VP Engineering",
      company: "DataFlow Inc",
      content: "The MLOps infrastructure Crecita built for us handles our ML models at scale. Model deployment time reduced from days to minutes. Exceptional work!",
      rating: 5,
      image: "/api/placeholder/64/64"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Platform",
      company: "CloudTech Solutions",
      content: "Working with Crecita has been a game-changer. Their DevOps expertise helped us achieve 99.9% uptime and reduce infrastructure costs by 40%. Highly recommended!",
      rating: 5,
      image: "/api/placeholder/64/64"
    }
  ],
  
  team: [
    {
      id: 1,
      name: "Alex Thompson",
      role: "CEO & Founder",
      bio: "15+ years in DevOps and cloud architecture. Former AWS Solutions Architect.",
      image: "/api/placeholder/300/300",
      linkedin: "#",
      github: "#"
    },
    {
      id: 2,
      name: "Dr. Priya Patel",
      role: "Head of MLOps",
      bio: "PhD in Machine Learning, expert in production ML systems and model deployment.",
      image: "/api/placeholder/300/300",
      linkedin: "#",
      github: "#"
    },
    {
      id: 3,
      name: "David Kim",
      role: "Senior DevOps Engineer",
      bio: "Kubernetes expert with deep experience in microservices and container orchestration.",
      image: "/api/placeholder/300/300",
      linkedin: "#",
      github: "#"
    },
    {
      id: 4,
      name: "Lisa Wang",
      role: "Cloud Architect",
      bio: "Multi-cloud expert specializing in AWS, Azure, and GCP infrastructure design.",
      image: "/api/placeholder/300/300",
      linkedin: "#",
      github: "#"
    }
  ],
  
  stats: [
    { label: "Projects Delivered", value: "500+", icon: "CheckCircle" },
    { label: "Happy Clients", value: "200+", icon: "Users" },
    { label: "Years Experience", value: "15+", icon: "Clock" },
    { label: "Uptime Achieved", value: "99.9%", icon: "Shield" }
  ],
  
  contact: {
    email: "hello@crecita.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Hub, San Francisco, CA 94105",
    hours: "Mon-Fri: 9AM-6PM PST"
  }
};