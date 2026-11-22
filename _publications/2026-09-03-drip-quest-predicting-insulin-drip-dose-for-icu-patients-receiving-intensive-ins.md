---
title: "Drip Quest: Predicting Insulin Drip Dose for ICU Patients Receiving Intensive Insulin Therapy Using Machine Learning"
collection: publications
permalink: /publication/20260903/drip-quest-predicting-insulin-drip-dose-for-icu-patients
excerpt: "Background and Aims: Critically ill ICU patients require tight blood glucose (BG) control, as both hypo- and hyperglyce mia are associated with poor outcomes. Intensive insulin therapy (IIT) is key to managing BG but is complex and highly depend ent on clinician expertise. This study explores a machine learning..."
date: 2026-09-03
venue: "Diabetes Technology & Therapeutics"
paperurl: "https://doi.org/10.1177/15209156251412178"
posterurl: /files/Poster_ATTD-Asia 2025_284.pdf
bibtexurl: /files/15209156251412178.bib
citation: "Muharram, Arief Purnama, Manthovani, Ahmad Zufar, Mokoagow, Muhammad Ikhsan, Prabhasworo, Muhammad Sadhyo, Taufik, Muhammad Azhari, Epriliawati, Marina. (2026). &quot;Drip Quest: Predicting Insulin Drip Dose for ICU Patients Receiving Intensive Insulin Therapy Using Machine Learning.&quot; <i>Diabetes Technology & Therapeutics</i>. doi: 10.1177/15209156251412178"
category: poster
selected: false
---

Background and Aims: Critically ill ICU patients require tight blood glucose (BG) control, as both hypo- and hyperglyce mia are associated with poor outcomes. Intensive insulin therapy (IIT) is key to managing BG but is complex and highly depend ent on clinician expertise. This study explores a machine learning (ML) approach to predict personalized insulin drip doses, aiming to support clinical decisions in IIT. Methods: Retrospective data comprising BG-insulin dose pairs were collected from 141 ICU patients at Fatmawati Hospi tal Jakarta (2019–2024). All data were anonymized and ethically approved, then reviewed by expert clinicians to remove outliers. Weemployed a Long Short-Term Memory (LSTM) model, with output rounded to the nearest 0.5 unit. Data were split 80:20 into training and testing sets and structured into sequences with a window length of 4. The model was trained with a learning rate of 10e-3 for 100 epochs. Model performance was evaluated using Mean Absolute Error (MAE) and Root Mean Square Error (RMSE). Implementation was done using PyTorch 2.7.1 in Python 3.12. Results: A total of 481 BG-insulin sequences were generated (384 train, 97 test). BG values ranged from 102 to 561 mg/dL; insulin doses from 0.2 to 6 units. The model achieved an MAE of 0.7113 and RMSE of 0.9818, demonstrating reasonable accu racy in predicting insulin doses. Conclusions: ML, particularly LSTM, shows promise in assisting insulin drip dosing for ICU patients undergoing IIT. Further development is needed to improve model generalization, especially by expanding the dataset and increasing its diversity.

**Authors:** Arief Purnama Muharram, Ahmad Zufar Manthovani, Muhammad Ikhsan Mokoagow, Muhammad Sadhyo Prabhasworo, Muhammad Azhari Taufik, Marina Epriliawati
