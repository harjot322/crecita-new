// Mock data for Crecita website
export const mockData = {
  company: {
    name: "Crecita",
    tagline: "Streamlining DevOps, MLOps, Data Analytics & Cybersecurity for scalable, reliable solutions",
    description: "We empower businesses to accelerate their digital transformation through cutting-edge DevOps, MLOps, Data Analytics, and Cybersecurity practices, delivering scalable, reliable, and efficient solutions.",
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
    },
    dataAnalytics: {
      title: "Data Analytics Services",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence",
      items: [
        {
          id: 1,
          title: "Data Visualization",
          description: "Create compelling dashboards and reports with Power BI, Tableau, and custom visualization solutions for data-driven decision making.",
          icon: "BarChart3",
          features: ["Interactive Dashboards", "Real-time Reporting", "Custom Visualizations"]
        },
        {
          id: 2,
          title: "ETL Pipelines",
          description: "Build robust data pipelines for extracting, transforming, and loading data from multiple sources into data warehouses.",
          icon: "GitMerge",
          features: ["Data Integration", "Automated Processing", "Quality Assurance"]
        },
        {
          id: 3,
          title: "Business Intelligence",
          description: "Implement comprehensive BI solutions that provide deep insights into business performance and growth opportunities.",
          icon: "TrendingUp",
          features: ["KPI Tracking", "Predictive Analytics", "Performance Metrics"]
        },
        {
          id: 4,
          title: "Data Warehousing",
          description: "Design and implement scalable data warehouse solutions using modern cloud platforms and technologies.",
          icon: "Database",
          features: ["Cloud Architecture", "Data Modeling", "Performance Optimization"]
        }
      ]
    },
    cybersecurity: {
      title: "Cybersecurity Services",
      description: "Protect your digital assets with comprehensive cybersecurity solutions and threat management",
      items: [
        {
          id: 1,
          title: "Security Assessment",
          description: "Comprehensive security audits and vulnerability assessments to identify and mitigate potential threats and weaknesses.",
          icon: "Shield",
          features: ["Penetration Testing", "Vulnerability Scanning", "Risk Assessment"]
        },
        {
          id: 2,
          title: "Security Monitoring",
          description: "24/7 security monitoring and incident response with SIEM solutions and advanced threat detection capabilities.",
          icon: "Eye",
          features: ["Real-time Monitoring", "Threat Detection", "Incident Response"]
        },
        {
          id: 3,
          title: "Compliance & Governance",
          description: "Ensure compliance with industry standards like SOC 2, GDPR, HIPAA, and implement robust security governance frameworks.",
          icon: "FileCheck",
          features: ["Compliance Audits", "Policy Development", "Training Programs"]
        },
        {
          id: 4,
          title: "Security Architecture",
          description: "Design and implement secure cloud and on-premise infrastructure with zero-trust security models and best practices.",
          icon: "Lock",
          features: ["Zero-Trust Architecture", "Secure Design", "Identity Management"]
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
      title: "Improved Security",
      description: "Achieve enterprise-grade security with comprehensive monitoring and threat detection",
      percentage: "99.9%",
      metric: "threat prevention"
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
    dataAnalytics: [
      { name: "Power BI", category: "Business Intelligence" },
      { name: "Tableau", category: "Data Visualization" },
      { name: "Apache Spark", category: "Big Data Processing" },
      { name: "Snowflake", category: "Data Warehouse" },
      { name: "Databricks", category: "Analytics Platform" },
      { name: "Looker", category: "BI Platform" }
    ],
    cybersecurity: [
      { name: "Splunk", category: "SIEM" },
      { name: "CrowdStrike", category: "Endpoint Protection" },
      { name: "Okta", category: "Identity Management" },
      { name: "Nessus", category: "Vulnerability Scanner" },
      { name: "Wireshark", category: "Network Analysis" },
      { name: "Metasploit", category: "Penetration Testing" }
    ],
    cloud: [
      { name: "AWS", category: "Cloud Platform" },
      { name: "Azure", category: "Cloud Platform" },
      { name: "GCP", category: "Cloud Platform" }
    ]
  },
  
  industries: [
    { name: "Healthcare", icon: "Heart", description: "HIPAA-compliant ML solutions for medical diagnostics and secure data analytics" },
    { name: "Finance & FinTech", icon: "DollarSign", description: "Secure, scalable financial services infrastructure with advanced fraud detection" },
    { name: "eCommerce", icon: "ShoppingCart", description: "High-performance platforms with personalized analytics and security monitoring" },
    { name: "Manufacturing", icon: "Factory", description: "Industrial IoT, predictive maintenance solutions, and operational analytics" },
    { name: "Telecom", icon: "Phone", description: "Network optimization, customer analytics, and cybersecurity solutions" },
    { name: "Retail", icon: "Store", description: "Inventory management, personalization engines, and customer data protection" },
    { name: "Energy", icon: "Zap", description: "Smart grid optimization, renewable energy analytics, and infrastructure security" },
    { name: "Automotive", icon: "Car", description: "Connected vehicle systems, autonomous driving data, and automotive cybersecurity" },
    { name: "Logistics", icon: "Truck", description: "Supply chain optimization, route planning analytics, and cargo security" },
    { name: "Government", icon: "Shield", description: "Secure, compliant digital transformation with advanced threat protection" },
    { name: "Education", icon: "GraduationCap", description: "EdTech platforms, learning analytics, and student data security" }
  ],
  
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp",
      content: "Crecita transformed our deployment process and enhanced our security posture. We went from monthly releases to daily deployments with zero security incidents.",
      rating: 5,
      image: "/api/placeholder/64/64"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "VP Engineering",
      company: "DataFlow Inc",
      content: "The MLOps infrastructure and data analytics platform Crecita built for us handles our ML models at scale with comprehensive monitoring and insights.",
      rating: 5,
      image: "/api/placeholder/64/64"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Platform",
      company: "CloudTech Solutions",
      content: "Working with Crecita has been a game-changer. Their DevOps expertise and cybersecurity solutions helped us achieve 99.9% uptime with enterprise-grade security.",
      rating: 5,
      image: "/api/placeholder/64/64"
    }
  ],
  
  team: [
    {
      id: 1,
      name: "Alex Thompson",
      role: "CEO & Founder",
      bio: "15+ years in DevOps and cloud architecture. Former AWS Solutions Architect with expertise in cybersecurity.",
      image: "/api/placeholder/300/300",
      linkedin: "#",
      github: "#"
    },
    {
      id: 2,
      name: "Dr. Priya Patel",
      role: "Head of MLOps & Data Analytics",
      bio: "PhD in Machine Learning, expert in production ML systems, data science, and advanced analytics platforms.",
      image: "/api/placeholder/300/300",
      linkedin: "#",
      github: "#"
    },
    {
      id: 3,
      name: "David Kim",
      role: "Senior DevOps Engineer",
      bio: "Kubernetes expert with deep experience in microservices, container orchestration, and infrastructure security.",
      image: "/api/placeholder/300/300",
      linkedin: "#",
      github: "#"
    },
    {
      id: 4,
      name: "Lisa Wang",
      role: "Cybersecurity Architect",
      bio: "Multi-cloud security expert specializing in zero-trust architecture, threat detection, and compliance frameworks.",
      image: "/api/placeholder/300/300",
      linkedin: "#",
      github: "#"
    }
  ],
  
  stats: [
    { label: "Projects Delivered", value: "500+", icon: "CheckCircle" },
    { label: "Happy Clients", value: "200+", icon: "Users" },
    { label: "Years Experience", value: "15+", icon: "Clock" },
    { label: "Security Incidents Prevented", value: "10K+", icon: "Shield" }
  ],
  
  contact: {
    email: "contact@crecita.com",
    phone: "+1 (555) 123-4567",
    address: "Global Remote Team",
    hours: "Mon-Fri: 9AM-6PM PST"
  }
};