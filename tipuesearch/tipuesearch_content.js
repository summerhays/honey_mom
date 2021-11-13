---
---
var tipuesearch = {"pages": [
{% for each in site.data.honey-mom-csv %}
  {"title": `{{ each.momism }}`, "text": `{% if each.definition %}{{ each.definition }}. {% endif %}{% if each.example %}<em>{{ each.example }}. </em>{% endif %}{% if each.mommentary %}<strong>Mom: {{ each.mommentary }}. </strong>{% endif %}Momism ID # {{ each.order }}`, "tags": "jQuery HTML5 CSS", "url": `/list.html#momism_id{{ each.order }}`},
	{% endfor %}  
]};
