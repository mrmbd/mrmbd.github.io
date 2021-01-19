---
layout: post
title:  "vertically center element using flex"
description: "To center our box we use the align-items property to align our item on the cross axis"
tags: flex html css webdev
category: website-development
excerpt_separator: <!--more-->
---

# Vertically center element using flex

To center our box we use the **align-items** property to align our item on the cross axis, which in this case is the block axis running vertically. We use **justify-content** to align the item on the main axis, which in this case the inline axis running horizontally.

```css
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box div {
  width: 100px;
  height: 100px;
}
```

```html
<div class="box">
  <div></div>
</div>
```


![flex align](/img/posts/3-1.png)

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
