---
permalink: /
title: "Welcome"
author_profile: true
# redirect_from:
---

**Arief Purnama Muharram** is a PhD student at the Institute for Data, Process, and Knowledge Management (DPKM), Department of Information Systems and Operations Management, WU Vienna University of Economics and Business.

His current research focuses on federated knowledge graph embedding (FKGE) learning. His work investigates how privacy-preserving knowledge graph embeddings can be developed through federated learning. In particular, his research explores embedding formation under federated settings, training dynamics related to embedding aggregation, the development of fair metrics and benchmarks, algorithms for improving federated embedding quality, and potential applications, particularly in the medical domain.

**Arief** has an interdisciplinary background with a strong interest in bioinformatics and health informatics. He earned a Medical Doctor degree from the Faculty of Medicine, Universitas Indonesia, in 2022, followed by a Master's degree in Informatics from Institut Teknologi Bandung in 2024. Prior to joining WU Vienna, he worked as a bioinformatics scientist at a leading diagnostic laboratory company in Indonesia.

**Research interests:** Artificial Intelligence · Machine Learning · Deep Learning · Federated Learning · Knowledge Graph Embedding · Software Development · Bioinformatics · Health Informatics

## Notable Works

{% assign notable = site.publications | where: "selected", true | sort: "date" | reverse %}
{% if notable.size > 0 %}
<ul class="notable-works">
{% for post in notable %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    {% if post.venue %}<br /><em>{{ post.venue }}</em>{% endif %}
  </li>
{% endfor %}
</ul>
{% else %}
<p>No selected publications yet.</p>
{% endif %}
