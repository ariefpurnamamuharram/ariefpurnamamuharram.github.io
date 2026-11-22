---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

A list of all the posts and pages found on the site. For you robots out there, there is an [XML version]({{ base_path }}/sitemap.xml) available for digesting as well.

{% assign site_pages = site.pages | where_exp: "p", "p.title != nil and p.title != ''" %}
{% if site_pages.size > 0 %}
<h2>Pages</h2>
{% include archive-pages.html %}
{% endif %}

{% if site.posts.size > 0 %}
<h2>Posts</h2>
{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}
{% endif %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" %}
  {% if collection.docs.size > 0 %}
  <h2>{{ collection.label }}</h2>
  {% for post in collection.docs %}
    {% include archive-single.html %}
  {% endfor %}
  {% endif %}
{% endunless %}
{% endfor %}
