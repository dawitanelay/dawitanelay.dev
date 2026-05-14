// ============================================================
//  SITE CONTENT — edit this file to update your website
// ============================================================
//
//  BLOG  → add an object to SITE.blog  (see examples below)
//  BOOKS → add an object to SITE.books (see examples below)
//
// ============================================================

const SITE = {

  profile: {
    name:     "Dawit Mezemir Anelay",
    title:    "Senior DevOps Engineer · Cloud Engineer",
    subtitle: "MSc Computer Science (AI)",
    photo:    "https://github.com/dawitanelay.png",
  },

  contact: {
    email:    "dawit12mezemir@gmail.com",
    phone:    "+39 393 678 7356",
    linkedin: { url: "https://linkedin.com/in/dawit-anelay",  label: "linkedin.com/in/dawit-anelay" },
    github:   { url: "https://github.com/dawitanelay",        label: "github.com/dawitanelay" },
    location: "Italy",
  },

  about: [
    "Senior DevOps and Cloud Engineer with over 5 years of production experience on Azure, specializing in Kubernetes platform operations (AKS), infrastructure as code with Terraform, CI/CD automation, cloud security (NSG, CMK, DDoS protection, Key Vault), ELK-based observability, and cost optimization at scale.",
    "MSc in Computer Science (Artificial Intelligence) from the University of Pisa, with coursework in Machine Learning, Data Mining, Parallel and Distributed Systems, Intelligent Systems for Pattern Recognition, and Advanced Software Engineering. Thesis focused on short-term forecasting and anomaly detection for virtualized network functions, developed in collaboration with Vodafone.",
  ],

  experience: [
    {
      role:     "DevOps Engineer",
      company:  "IGT",
      location: "Remote",
      period:   "Oct. 2022 – Present",
      bullets: [
        "Designed and deployed Azure-based infrastructure (AKS, PostgreSQL, Front Door, Key Vault) using Terraform, including full environment setup for production support.",
        "Implemented secure architecture practices: NSGs across AKS/DB/Jenkins, private Key Vaults, DDoS protection, and SSL exposure via Front Door.",
        "Introduced Customer Managed Keys (CMK) for AKS disks, PostgreSQL, and Storage Accounts to meet encryption and compliance requirements.",
        "Improved Kubernetes reliability by adding liveness/readiness probes, fixing Zookeeper health checks, and enforcing pod distribution with anti-affinity and descheduler.",
        "Tuned AKS autoscaler and cluster behavior, including alerting for scaling limits and performance optimization.",
        "Built centralized logging & monitoring (AKS → ELK), dashboards for certificate tracking, and enhanced observability with Prometheus/Grafana.",
        "Managed secrets lifecycle (rotation, Key Vault integration, sync tuning), including automation for certificate rotation and OAuth/Grafana credentials.",
        "Automated CI/CD workflows: Jenkins pipelines for infrastructure and deployments, production ACR image push automation, and GitHub Actions strategy for build/release/hotfix flows.",
        "Standardized whitelisting and access control across services (NGINX, Grafana, Keycloak, Kafka) via centralized repo and Terraform integration.",
        "Optimized cloud costs by tuning CPU/resource requests (Kafka, Redis, Zookeeper), adjusting Key Vault sync intervals, and implementing workload-based cost tagging.",
        "Worked on Kafka & data pipelines: topic creation, ACL management, and Debezium filtering to exclude delete events and protect downstream systems.",
        "Improved Terraform practices: modularization, parameterization, NSG refactoring (list → map), and handling state imports for existing resources.",
        "Delivered operational improvements and documentation, including Terraform import strategies, AKS upgrade procedures, and infrastructure best practices.",
        "Contributed to security and policy initiatives, including Kyverno policy enforcement in audit mode and initial OPA evaluation.",
      ],
    },
    {
      role:     "DevOps Engineer",
      company:  "GeoSolutions",
      location: "Lucca, Italy",
      period:   "May. 2021 – Dec. 2021",
      bullets: [
        "Designed continuous delivery workflows using Jenkins, Docker, and Git.",
        "Created Elastic Stack dashboards using Kibana and managed monitoring tools like AppDynamics and Splunk.",
      ],
    },
    {
      role:     "System Administrator",
      company:  "",
      location: "Addis Ababa, Ethiopia",
      period:   "Mar. 2018 – Oct. 2019",
      bullets: [
        "Managed Linux systems and collaborated with DB and dev teams to ensure 24/7 uptime.",
        "Developed Bash scripts to automate and simplify system operations.",
      ],
    },
    {
      role:     "Network Administrator",
      company:  "",
      location: "Addis Ababa, Ethiopia",
      period:   "Mar. 2016 – Aug. 2016",
      bullets: [
        "Installed and configured LAN/WAN and internet systems for organizational infrastructure.",
      ],
    },
  ],

  education: [
    {
      degree:      "M.Sc. Computer Science (Artificial Intelligence)",
      institution: "University of Pisa, Italy",
      period:      "Sept. 2019 – Aug. 2022",
      courses: [
        "Data Mining",
        "Semantic Web",
        "Artificial Intelligence Fundamentals",
        "Mobile and Cyber-Physical Systems",
        "Intelligent Systems for Pattern Recognition",
        "Information Retrieval",
        "Smart Applications",
        "Machine Learning",
        "Human Language Technologies",
        "Computational Mathematics for Learning and Data Analysis",
        "Advanced Software Engineering",
        "Parallel and Distributed Systems: Paradigms and Models",
        "Social and Ethical Issues in Information Technology",
      ],
    },
    {
      degree:      "B.Sc. Computer Engineering",
      institution: "Addis Ababa University, Ethiopia",
      period:      "Oct. 2012 – Jul. 2017",
    },
  ],

  skills: {
    "DevOps Tools":          ["GitHub", "GitLab", "Jenkins", "GitHub Actions", "ArgoCD"],
    "Cloud & IaC":           ["Azure", "AWS", "Terraform", "Ansible"],
    "Containers":            ["Docker", "Kubernetes", "Helm"],
    "Monitoring & Logging":  ["ELK Stack", "Prometheus", "Grafana", "Kafka"],
    "Scripting & Languages": ["Bash", "Python", "Node.js"],
    "Networking & DB":       ["HTTP/TCP/UDP", "MySQL", "MongoDB"],
    "Project Management":    ["Jira", "Agile/Scrum"],
  },

  certifications: [
    "Azure DevOps Engineer Nanodegree, Udacity (Jul. 2022 – Dec. 2022)",
    "Elasticsearch Essential Training",
    "Microservices Foundations",
    "Linux Automation with Bash Scripting",
    "Oracle Certified Associate: WebLogic Server 12c",
    "Oracle Certified Associate: Oracle Linux 5/6 System Administrator",
    "Oracle Certified Associate: Solaris 11 System Administrator",
  ],

  research: {
    title:       "Short-term Operation Metrics Forecasting and Anomaly Detection for Virtualized Network Functions",
    url:         "https://etd.adm.unipi.it/t/etd-09052022-171219/",
    degree:      "MSc Thesis · University of Pisa · Sept. 2021 – Jul. 2022",
    supervisors: "Davide Bacciu (University of Pisa) · Tommaso Cucinotta (Scuola Superiore Sant'Anna)",
    bullets: [
      "Designed AI-based tools for short-term forecasting, anomaly detection, and clustering of operation metrics in virtualized network function (VNF) infrastructure.",
      "Applied deep learning and statistical models on real-world datasets from telecom environments.",
      "Developed systems using Python, C/C++, Bash, and virtualization platforms.",
      "Conducted industrial research in collaboration with Vodafone and academic labs (RETIS, INRETE, PERCRO, ICT-COISP).",
    ],
    links: [
      { label: "University archive",  url: "https://etd.adm.unipi.it/t/etd-09052022-171219/" },
      { label: "RETIS project page",  url: "https://retis.santannapisa.it/~tommaso/eng/thesisprojects.html" },
    ],
  },

  projects: [
    {
      tag:    "Database modernization",
      title:  "PostgreSQL Major Version Upgrade on Azure Flexible Server",
      bullets: [
        "Led the upgrade from PostgreSQL 13 to 16 on Azure Flexible Server, including pre-upgrade cleanup, extension removal, and replication slot management.",
        "Coordinated PITR testing and validated post-upgrade health checks such as VACUUM and statistics reset.",
      ],
    },
    {
      tag:    "Data security",
      title:  "Customer Managed Key (CMK) Implementation in Azure",
      bullets: [
        "Created and managed Customer Managed Keys in Azure Key Vault for encryption-at-rest across multiple storage accounts.",
        "Automated key creation, permission configuration, and rotation policies using Azure CLI and Terraform.",
        "Integrated CMKs with storage services to enhance data security and control.",
      ],
    },
    {
      tag:    "Observability pipeline",
      title:  "Kubernetes Event Monitoring Pipeline",
      bullets: [
        "Deployed and configured Kubernetes Event Exporter with custom routing to Elasticsearch, visualized via Kibana dashboards.",
        "Tuned log filtering and throttle settings to surface critical infrastructure events while reducing noise.",
      ],
    },
    {
      tag:    "Secure platform networking",
      title:  "Secure Azure AKS Integration with Private Endpoints",
      bullets: [
        "Configured secure networking between Azure Key Vault, AKS, and Jenkins agents using Private Endpoints and Network Security Groups.",
      ],
    },
  ],

  // ── BLOG ──────────────────────────────────────────────────────────────
  // To add a post: copy the block below, paste it at the top of the array,
  // and fill in title, date (YYYY-MM-DD), url, tags, and excerpt.
  //
  // {
  //   title:   "Your post title",
  //   date:    "2025-06-01",
  //   url:     "/posts/your-post-slug/",
  //   tags:    ["Tag1", "Tag2"],
  //   excerpt: "One or two sentence summary of the post.",
  // },
  // ──────────────────────────────────────────────────────────────────────

  blog: [
    {
      title:   "Azure Services and Third-Party Integration — Service Bus, Event Grid, API Management",
      date:    "2024-03-28",
      url:     "/posts/microsoft-certified-azure-developer-associate/azure-services-and-third-party/",
      tags:    ["Azure", "Integration", "Azure Developer Associate"],
      excerpt: "When to use Service Bus, Event Grid, Event Hubs, API Management, and Logic Apps — plus patterns for integrating third-party services from Azure Functions.",
    },
    {
      title:   "Implement Azure Security — Managed Identities, Key Vault, and RBAC",
      date:    "2024-03-01",
      url:     "/posts/microsoft-certified-azure-developer-associate/implement-azure-security/",
      tags:    ["Azure", "Security", "Azure Developer Associate"],
      excerpt: "Study notes on Azure security: managed identities, Key Vault secrets and references, RBAC roles, and Microsoft Entra ID OAuth flows.",
    },
    {
      title:   "Develop for Azure Storage — Blobs, Queues, Tables, and Files",
      date:    "2024-02-15",
      url:     "/posts/microsoft-certified-azure-developer-associate/develop-for-azure-storage/",
      tags:    ["Azure", "Storage", "Azure Developer Associate"],
      excerpt: "Azure Storage service types, blob access tiers and lifecycle management, SAS token variants, Queue Storage, Table Storage, and Azure Files.",
    },
    {
      title:   "Azure Functions — Triggers, Bindings, and Hosting Plans",
      date:    "2024-02-01",
      url:     "/posts/microsoft-certified-azure-developer-associate/azure-functions/",
      tags:    ["Azure", "Serverless", "Azure Developer Associate"],
      excerpt: "How Azure Functions triggers and bindings work, differences between Consumption, Premium, and Dedicated hosting plans, and Durable Functions patterns.",
    },
    {
      title:   "Azure App Service — Key Concepts for the Developer Associate",
      date:    "2024-01-18",
      url:     "/posts/microsoft-certified-azure-developer-associate/azure-app-service/",
      tags:    ["Azure", "App Service", "Azure Developer Associate"],
      excerpt: "App Service plans, deployment slots and swapping, scaling, Easy Auth, VNet integration, Key Vault references, and deployment options.",
    },
    {
      title:   "Azure Container Apps plans and environment types",
      date:    "2024-03-14",
      url:     "/posts/microsoft-certified-azure-developer-associate/azure-container-apps-plans-and-environment-types/",
      tags:    ["Azure", "Kubernetes"],
      excerpt: "A breakdown of Azure Container Apps consumption and dedicated plans, and how environment types affect networking isolation.",
    },
  ],

  // ── BOOKS ─────────────────────────────────────────────────────────────
  // To add a book: copy the block below, paste it at the top of the array,
  // and fill in title, author, status, and notes.
  //
  // status options: "read" | "reading" | "want to read"
  //
  // {
  //   title:  "Book title",
  //   author: "Author name",
  //   status: "read",
  //   notes:  "Short takeaway or why you picked it up.",
  // },
  // ──────────────────────────────────────────────────────────────────────

  books: [
    {
      title:  "Site Reliability Engineering: How Google Runs Production Systems",
      author: "Betsy Beyer, Chris Jones, Jennifer Petoff, Niall Richard Murphy",
      status: "reading",
      notes:  "Google's approach to running large-scale production systems — reliability, automation, and SLOs.",
    },
  ],

};
