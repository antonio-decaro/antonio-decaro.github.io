// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About Me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Here is the list of all my publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/10/20/math.html";
        
      },
    },{id: "news-i-m-happy-to-announce-that-our-paper-phase-based-frequency-scaling-for-energy-efficient-heterogeneous-computing-got-accepted-in-the-proceedings-of-ipdps-25-sparkles-smile",
          title: 'I’m happy to announce that our paper “Phase-based Frequency Scaling for Energy-efficient Heterogeneous...',
          description: "",
          section: "News",},{id: "news-i-m-thrilled-to-share-that-our-paper-sygraph-a-portable-heterogeneous-graph-analytics-framework-for-gpus-has-been-accepted-to-icpp-2025-the-54th-international-conference-on-parallel-processing-this-work-presents-sygraph-a-high-performance-portable-framework-designed-to-efficiently-execute-graph-analytics-on-heterogeneous-architectures-using-sycl-it-aims-to-address-key-challenges-in-leveraging-gpus-for-large-scale-graph-workloads-offering-both-performance-and-portability-across-platforms-if-you-are-interested-in-it-and-want-to-have-some-spoiler-about-the-project-make-sure-to-check-the-github-repository-stay-tuned-for-more-updates-as-we-head-to-icpp-2025",
          title: 'I’m thrilled to share that our paper, “SYgraph: A Portable Heterogeneous Graph Analytics...',
          description: "",
          section: "News",},{id: "news-i-m-very-proud-to-announce-that-our-paper-sigmo-a-portable-and-high-throughput-gpu-framework-for-subgraph-isomorphism-in-molecular-matching-has-been-accepted-at-sc-2025-the-international-conference-for-high-performance-computing-networking-storage-and-analysis-this-work-introduces-sigmo-the-first-portable-gpu-framework-tailored-for-the-molecular-matching-problem-by-combining-novel-filtering-strategies-with-batched-execution-across-heterogeneous-gpus-sigmo-achieves-unprecedented-throughput-and-performance-portability-scaling-efficiently-across-nvidia-amd-and-intel-accelerators-sc-is-the-premier-conference-in-the-field-of-high-performance-computing-and-i-m-truly-excited-to-have-the-opportunity-to-present-our-work-there-stay-tuned-for-more-details-as-we-head-towards-sc-2025-in-st-louis",
          title: 'I’m very proud to announce that our paper, “SIGMo: A Portable and High-Throughput...',
          description: "",
          section: "News",},{id: "projects-sygraph",
          title: 'SYgraph',
          description: "A library for Graph Analytics tasks on Heterogeneous GPUs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SYgraph/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%74%64%65%63%61%72%6F@%75%6E%69%73%61.%69%74", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/antonio-decaro", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/antodec", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0004-9909-6440", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=A0SLePQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
