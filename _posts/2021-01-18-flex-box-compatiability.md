---
layout: post
title:  "Flexbox browser compatiability"
tags: flex html css webdev
category: website-development
excerpt_separator: <!--more-->
---

# Flexbox browser compatiability

Browser support for flexbox is **excellent**, and the majority of browsers do not need a prefix<!--more--> at this point. Safari was the last of the major browsers to remove prefixes, with the release of Safari 9 in 2015. The two browsers you should still keep in mind for cross-browser compatibility are:

- Internet Explorer 10, which implemented the display: flexbox version of the specification with the -ms- prefix.
- UC Browser, which still supports the 2009 display: box version only with the -webkit- prefix.

Note also that Internet Explorer 11 supports the modern display: flex specification however it has a number of bugs in the implementation.

![flex compatiability](/img/posts/2.png)

{% include sharebox.html %}

{% assign tag_topics = 0 %}
{% for tag in site.tags limit: 1 %}{% for post in tag[1] %}{% assign tag_topics = tag_topics | plus: 1 %}{% endfor %}{% endfor %}
{% if tag_topics > 1 %}
{% for tag in site.tags limit: 1 %}
<h2>Continue next on <span>{{ tag[0] }}</span></h2>
<ul class="related-links">
{% for post in tag[1] %}
{% if post.url != page.url %}
<li class="post-link">
<a href="{{ post.url }}"><span>{{ post.title }}</span><svg width="13px" height="10px" viewBox="0 0 13 10"><path d="M1,5 L11,5"></path><polyline points="8 1 12 5 8 9"></polyline></svg></a></li>
{% endif %}
{% endfor %}
</ul>
{% endfor %}
{% endif %}
