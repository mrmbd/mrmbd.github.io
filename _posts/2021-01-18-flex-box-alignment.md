---
layout: post
title:  "Center text inside circle"
description: "To center our box we use the align-items property to align our item on the cross axis"
tags: flex html css webdev
category: website-development
excerpt_separator: <!--more-->
---

# Center text inside circle

To center our box we use the **align-items** property to align our item on the cross axis, which in this case is the block axis running vertically. We use **justify-content** to align the item on the main axis, which in this case the inline axis running horizontally. This method has support for all browsers so use it freely.

```css
.box {
  background-color: #db9195;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}

.box span {
  font-weight: 400;
  font-size: 1.4rem;
  color: white;
  text-transform: uppercase;
}
```

```html
<div class="box">
  <span>bs</span>
</div>
```

<style>
.box {
  background-color: #db9195;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}

.box span {
  font-weight: 400;
  font-size: 1.4rem;
  color: white;
  text-transform: uppercase;
}
</style>
<div>
<p class="text-center">Result</p>
  <div class="box">
    <span>bs</span>
  </div>
</div>

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
