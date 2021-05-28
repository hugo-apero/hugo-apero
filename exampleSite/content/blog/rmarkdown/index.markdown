---
title: "An Rmarkdown post"
subtitle: ""
excerpt: "testing the excerpt field"
date: 2020-12-30
author: "Alison Hill"
draft: false
images:
series:
tags:
categories:
layout: single-sidebar
---


```r
knitr::opts_chunk$set(fig.path = "figs/", collapse = TRUE)
```

## An empty post

<i class="fas fa-mug-hot"></i> woot

Yay fontawesome works.

Lorem ipsum dolor sit amet, consectetur nostra nisi donec et eu ipsum, cubilia ut. In fames elit natoque sit. Nisi venenatis in, proin sed curabitur facilisis sed iaculis pellentesque vulputate velit sed. Placerat leo tincidunt fringilla curae quam sapien vestibulum amet. Maximus inceptos felis nibh maximus. Dapibus aenean, in ultricies sed dui. Vel turpis egestas? Habitasse ut pellentesque magnis interdum nulla sociis, adipiscing. Placerat, ac quam tempus mauris at lorem accumsan sociis sed! Arcu, fusce, condimentum in sit varius pretium, netus facilisi. Elementum mollis finibus, iaculis nisl pretium donec scelerisque sit vitae et tortor., Blandit sed vel blandit mauris fringilla dictum. Praesent cubilia pharetra integer. Quis eget, ultricies volutpat in in ut nunc. Ipsum condimentum risus in sagittis, ac habitasse. Orci mauris. Velit natoque ut maecenas himenaeos, vel. Ipsum ex ac luctus magnis non magnis non malesuada. Semper litora ac, id. Et sed risus. Auctor nullam magna turpis dui himenaeos suscipit sed. Senectus nisl, quis, tortor cras quam non. Eros consectetur taciti nullam pellentesque ut ornare phasellus et enim.

## Well let's try penguins


```r
library(tidyverse)
## ── Attaching packages ─────────────────────────────────────── tidyverse 1.3.0 ──
## ✓ ggplot2 3.3.3     ✓ purrr   0.3.4
## ✓ tibble  3.1.1     ✓ dplyr   1.0.4
## ✓ tidyr   1.1.2     ✓ stringr 1.4.0
## ✓ readr   1.4.0     ✓ forcats 0.5.0
## ── Conflicts ────────────────────────────────────────── tidyverse_conflicts() ──
## x dplyr::filter() masks stats::filter()
## x dplyr::lag()    masks stats::lag()
library(palmerpenguins)
```


```r
ggplot(data = penguins, aes(x = flipper_length_mm)) +
  geom_histogram(aes(fill = species), alpha = 0.5, position = "identity") +
  scale_fill_manual(values = c("darkorange","darkorchid","cyan4"))
## `stat_bin()` using `bins = 30`. Pick better value with `binwidth`.
## Warning: Removed 2 rows containing non-finite values (stat_bin).
```

<img src="figs/unnamed-chunk-3-1.png" width="672" />

Lorem ipsum dolor sit amet, tempor sapien ac aliquet vel aenean euismod non mauris! Bibendum efficitur sed donec urna urna morbi at et ligula. Sed dui id, justo, praesent, tortor vitae justo vel quisque quisque donec et. Interdum aenean dictum justo tortor. Cum felis metus sed tempus senectus vestibulum sociis sollicitudin. Adipiscing, dolor egestas est vestibulum. Metus justo libero lacinia fringilla in odio nibh vulputate nibh. Quam conubia dui sed arcu sed nec, morbi in. Vitae, feugiat amet dui turpis varius phasellus. Ipsum nostra primis ligula id lobortis. Vestibulum, eleifend. Non aptent penatibus in ut nulla phasellus egestas., Sed gravida, pretium elementum facilisis, magna in lectus. Porttitor erat ut sodales. Non sit fusce bibendum arcu sapien faucibus ante velit euismod nullam. Risus odio hac, maecenas aptent habitasse nulla. Id, interdum sed dapibus. Eget adipiscing ipsum eu nibh. Eu maximus faucibus at pulvinar nec sapien. Ipsum fringilla lacus ullamcorper justo ac dolor semper nunc. Tristique cubilia enim. Ligula nulla sed vestibulum integer et tincidunt. Porttitor pharetra cursus nam eleifend metus eu tellus elementum. Vitae sed ante libero velit suscipit et at, tellus amet. Quam accumsan euismod ultricies non in litora, volutpat fringilla.

## Another level 2 heading

Lorem ipsum dolor sit amet, risus mauris posuere euismod finibus, risus erat sem aliquam libero et. Augue eros, morbi eget dictumst, posuere diam sed natoque ligula. Mollis libero at lobortis suscipit, et. In adipiscing quam, etiam aliquam ligula a dictumst donec. Tincidunt tempor donec integer, et nisi nulla penatibus at at. Feugiat libero et, ut vestibulum lorem eros ornare pellentesque sociosqu, ac. Metus faucibus, fusce justo eget sed fermentum dolor hac vitae hendrerit ut. Ac porttitor lacinia, augue commodo sollicitudin vulputate. Netus, in sed ac venenatis turpis, sed congue purus justo senectus sed. Aenean felis in mauris sapien. Ac erat ut sed sapien proin est, sed. Sit natoque ultrices egestas turpis vel mauris ut, suscipit. Efficitur natoque justo id donec ante rhoncus rhoncus enim nostra, mauris at. Rutrum nec magnis ut netus erat ut dui netus., Sed massa dui porta, ac gravida vel luctus dui enim. Rhoncus mattis primis massa tempus in ac ligula risus cum phasellus. Sollicitudin sit ac. Scelerisque cubilia condimentum augue nec vulputate, ultricies et. Ultrices a, velit faucibus vitae sed. Eu eu interdum rhoncus egestas. Ac a sit duis eu. Sapien per. Mauris eu torquent vestibulum et odio, ut nullam integer et ullamcorper. Litora dui orci, tristique eleifend mauris. Purus egestas nascetur ut aliquet gravida quam. Est rhoncus tempor ut aliquam lectus. Pretium, eget et semper eu ex sit tempus, molestie venenatis.

### Level 3 heading

Lorem ipsum dolor sit amet, inceptos, pharetra vivamus placerat litora varius. Ipsum a per, sociosqu, nec vestibulum. Massa tristique, ultrices aliquam mi, ipsum. Nostra venenatis, sociosqu vel amet consectetur, urna urna dolor ad est iaculis ultricies hendrerit eu. Nullam penatibus sodales libero ultrices leo, eget quam ut sagittis. Metus egestas laoreet, felis vel sed, praesent. Non nibh bibendum non vulputate ac cras diam ut. Sed torquent mauris donec molestie., Cubilia pulvinar sed ut sed, donec et nibh placerat iaculis velit mauris porttitor metus posuere. Inceptos hac in sagittis. Sociosqu ipsum vestibulum quam amet luctus, id litora vestibulum! Eleifend quis quisque donec maximus in, pretium molestie nec nulla at. Neque, pulvinar parturient sem laoreet rhoncus nullam! Non dui taciti morbi eu aenean, quam auctor nulla justo tincidunt at. Aliquam gravida sed felis semper penatibus, enim. Rutrum neque et donec ut, quis ipsum convallis fusce. Mi ac tellus fusce eget ut. Sed habitant, augue. Mauris et bibendum scelerisque mattis. Himenaeos mauris, tempus, quis. Libero, morbi vulputate sed nec, metus sit sociosqu porta, nec fusce in.

## Last level 2 heading

Lorem ipsum dolor sit amet, quis enim et facilisis nunc. Senectus dis dictum congue. Senectus potenti est sed. Nunc ac, lorem nunc, eu amet quis sed natoque lorem. Nec ullamcorper dis, non dictum nibh lorem et ex efficitur et. Phasellus nec et, nec, ut, etiam cubilia. Sit ut netus est finibus non, duis augue at, integer. Egestas diam, in cras in varius tellus. Elit consectetur volutpat lectus vulputate. Faucibus lobortis etiam curabitur ante nulla ullamcorper sit., Amet cursus dolor et. Molestie at cursus velit, bibendum sagittis arcu. Luctus, nulla sed. Sed arcu a. Ad purus, ut ac. A, ultricies mi nec porttitor eleifend fringilla ullamcorper, eleifend. Sed molestie eu, aliquet lorem suspendisse. Facilisis eget elementum sollicitudin cursus.
