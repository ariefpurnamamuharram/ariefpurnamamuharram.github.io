---
title: "Automated Chest X-Ray Report Generator Using Multi-Model Deep Learning Approach"
collection: publications
permalink: /publication/20230908/automated-chest-x-ray-report-generator-using-multi-model-deep-learning-approach
excerpt: "Reading and interpreting chest X-ray images is one of the most radiologist's routines. However, it still can be challenging, even for the most experienced ones. Therefore, we proposed a multi-model deep learning-based automated chest X-ray report generator system designed to assist radiologists..."
date: 2023-09-08
venue: "2023 IEEE International Conference on Data and Software Engineering (ICoDSE)"
paperurl: "https://doi.org/10.1109/ICoDSE59534.2023.10291842"
slidesurl: /files/ICoDSE_2023_Slide_1.pdf
codeurl: "https://github.com/ariefpurnamamuharram/IF5200"
bibtexurl: /files/10291842.bib
citation: "Muharram, Arief Purnama, Haryono, Hollyana Puteri, Juma, Abassi Haji, Puspasari, Ira, Utama, Nugraha Priya. (2023). &quot;Automated Chest X-Ray Report Generator Using Multi-Model Deep Learning Approach.&quot; <i>2023 IEEE International Conference on Data and Software Engineering (ICoDSE)</i>. doi: 10.1109/ICoDSE59534.2023.10291842"
category: conference
selected: true
---

Reading and interpreting chest X-ray images is one of the most radiologist's routines. However, it still can be challenging, even for the most experienced ones. Therefore, we proposed a multi-model deep learning-based automated chest X-ray report generator system designed to assist radiologists in their work. The basic idea of the proposed system is by utilizing multi binary-classification models for detecting multi abnormalities, with each model responsible for detecting one abnormality, in a single image. In this study, we limited the radiology abnormalities detection to only cardiomegaly, lung effusion, and consolidation. The system generates a radiology report by performing the following three steps: image pre-processing, utilizing deep learning models to detect abnormalities, and producing a report. The aim of the image pre-processing step is to standardize the input by scaling it to 128x128 pixels and slicing it into three segments, which covers the upper, lower, and middle parts of the lung. After pre-processing, each corresponding model classifies the image, resulting in a 0 (zero) for no abnormality detected and a 1 (one) for the presence of an abnormality. The prediction outputs of each model are then concatenated to form a 'result code'. The 'result code' is used to construct a report by selecting the appropriate pre-determined sentence for each detected abnormality in the report generation step. The proposed system is expected to reduce the workload of radiologists and increase the accuracy of chest X-ray diagnosis. Keywords: Chest X-Ray, Radiology, Medical Report, Multimodel, Deep Learning

**Authors:** Arief Purnama Muharram, Hollyana Puteri Haryono, Abassi Haji Juma, Ira Puspasari, Nugraha Priya Utama
