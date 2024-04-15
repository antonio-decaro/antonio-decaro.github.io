---
layout: default
title: CV
---

# Curriculum Vitae
---

## Personal Information

- **Name**: Antonio De Caro
- **Nationality**: Italian
- **Gender**: Male
- **Email**: [antdecaro@unisa.it](mailto:antdecaro@unisa.it)
- **GitHub**: [antonio-decaro](https://github.com/antonio-decaro)

## Education

- **Ph.D. in HPC**
  - University of Salerno
  - Advisor: Biagio Cosenza

- **Master's in Cloud Computing** *cum Laude*
  - University of Salerno
  - Thesis: *Developing Educational Serious Games via a Cloud Solution*

- **Bachelor's in Computer Science** *cum Laude*
  - University of Salerno
  - Thesis: *Java Implementation of Efficient Algorithms for Classifying Large Amounts of Data*

## Work Experience

- **Scolarship for Carrying out Research Activities**
  - University of Salerno
  - Project: *Optimizing performance and energy consumption of LIGEN codes on Intel GPU architectures*
- **Teaching Assistant**
  - University of Salerno
  - Teaching and deepening of algorithm learning and development

## Research Interests

- Graph Analytics on GPUs
- SYCL Programming Model and Heterogeneity
- Frequency Scaling on GPUs

## Digital Skills

<div class="skills">
    <div class="skill">
        <span class="skill-name">C/C++</span>
        <div class="skill-bar-background"></div>
        <div class="skill-bar" data-percent="100%"></div>
    </div>
    <div class="skill">
        <span class="skill-name">SYCL</span>
        <div class="skill-bar-background"></div>
        <div class="skill-bar" data-percent="95%"></div>
    </div>
    <div class="skill">
        <span class="skill-name">GPU Programming</span>
        <div class="skill-bar-background"></div>
        <div class="skill-bar" data-percent="90%"></div>
    </div>
    <div class="skill">
        <span class="skill-name">Python</span>
        <div class="skill-bar-background"></div>
        <div class="skill-bar" data-percent="75%"></div>
    </div>
</div>

## CV Download

You can download my CV in PDF format by clicking the button below:

[Download CV](/assets/files/cv.pdf){: .btn .btn-primary }


<script>
    document.addEventListener('DOMContentLoaded', () => {
        const skillBars = document.querySelectorAll('.skill-bar');
        
        skillBars.forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            bar.style.width = percent;
        });
    });
</script>
