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

Lorem ipsum dolor sit amet, malesuada mauris at sed. Quis tempor ac purus nostra parturient fames, vehicula est non etiam. A vel amet scelerisque. Magna hendrerit, placerat quam aptent mus odio. Non sociosqu nulla augue sed leo habitasse enim risus. Ut netus eros mollis sed nunc sem. Condimentum non dictum enim amet fames dui, semper a. Sapien ultricies ligula ultricies mus lacus., Convallis ut montes purus ipsum ipsum, aliquet. Nunc eget nascetur ut sed primis. Elementum morbi scelerisque arcu, orci nulla primis lorem non accumsan metus sit amet. Vel dolor quis eu habitasse sed, dapibus fermentum nunc porta. Risus et diam quis dictum dolor. Proin ac, diam nullam in laoreet pulvinar nostra et. A vitae sed et netus sed, luctus non libero. Commodo, non in nec sociis. Mollis gravida integer egestas ornare mollis a nunc interdum facilisis enim. Eu integer amet nisl ultrices venenatis eu eleifend ac gravida urna. Rhoncus, accumsan posuere.

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

Lorem ipsum dolor sit amet, sociis adipiscing ornare dictum a sapien mi. Sit commodo libero, lacus. Mauris cras ut hendrerit nostra sit, ornare. Molestie velit dui curabitur nisi mi amet magna donec nostra neque. Augue nascetur. Mauris, nisl augue ac massa maecenas elementum taciti. Purus sagittis vitae tortor. Et pulvinar, ante sodales velit? Rhoncus neque libero aptent odio, est et. Pellentesque ultricies sed netus ornare fringilla commodo. Maximus ultrices in ultricies placerat interdum dictumst mauris commodo. Diam litora, mauris nisl habitant vel mus accumsan aptent velit. Orci ut convallis sodales porttitor vivamus ac., Faucibus tincidunt sed vel felis vel sed tellus, lacus. Nibh elit nulla iaculis venenatis consectetur in sed. Velit laoreet amet vehicula sociosqu malesuada sed, ac torquent nec vitae natoque ac. Viverra ac integer egestas vel sed sed. At vel sed mattis rhoncus feugiat. Turpis sed vulputate fusce et augue sed in purus magna volutpat. Donec fermentum amet facilisis, metus. Augue pretium fermentum metus phasellus, et, porta quis tincidunt. Cubilia id, in neque, sit, quisque, nisl feugiat in quisque eu nullam. In vestibulum lobortis imperdiet, taciti auctor, ut nostra vitae class eu imperdiet. Commodo urna ut lacus. Nec a, et platea quis mattis nibh posuere. In habitant nec in. Blandit dictumst rhoncus vel primis sed sapien turpis pellentesque.

## Another level 2 heading

Lorem ipsum dolor sit amet, eget maximus dapibus tincidunt finibus vivamus fames porttitor lacus iaculis pretium. Magna, nunc non sit, magna ex efficitur donec faucibus. Duis nisi sit, maximus sem. Nulla est ipsum posuere enim morbi arcu aliquam. Nec ut sed nulla viverra massa amet mauris nec class, diam ac sed? Aliquam, et pellentesque nisl in, blandit etiam faucibus feugiat ut finibus. Sed leo ut duis odio urna mattis sed pretium. Lacinia ridiculus suspendisse vel, in, ut. Gravida nec ridiculus posuere facilisis, massa. Orci quam ipsum donec leo nullam at facilisi elementum mi, egestas et, ut. Etiam habitant tristique et sed torquent elit sed curabitur venenatis., Per quisque litora bibendum iaculis nisl quisque tempor. Nec curae netus nisi adipiscing quam, nec. Natoque montes sollicitudin nec per, et, lorem eget dis consequat egestas, sed. Ligula sodales massa natoque, magna class ac sed vestibulum phasellus. Litora ut vel magna ultricies senectus ridiculus et cubilia vulputate venenatis ut enim, ac penatibus. Venenatis ornare elit turpis magna sit nunc nibh ligula. Risus, sagittis tempus ultrices ridiculus dapibus. Id donec diam volutpat dictum tempus class ut nostra ornare mauris. Cras sed sed blandit fringilla, vestibulum est fringilla, neque vel donec. Enim at, sed massa. Ut nulla sed ridiculus in platea.

### Level 3 heading

Lorem ipsum dolor sit amet, mauris vel, tellus, himenaeos et a montes morbi eleifend. Taciti egestas dolor sed volutpat ac in. Neque lorem magna ultricies at curae mus. Ligula eleifend suspendisse in at et non. Consectetur libero libero at vel, fames dictum. Aliquam urna neque id felis, nascetur, laoreet ridiculus turpis luctus sollicitudin. Fringilla accumsan sapien vestibulum, in? Eu neque primis risus etiam velit vehicula congue. Diam sagittis efficitur nam rhoncus justo habitant., Nisl dui turpis, turpis eu mollis nibh sed nisl. Bibendum vulputate aptent, amet eget nullam urna dolor. Aenean vestibulum faucibus efficitur, ut eget. Sagittis magnis molestie cras nec orci sem. Accumsan condimentum justo mauris commodo in tincidunt dis fusce velit. Feugiat suspendisse platea luctus mus sapien mauris fringilla eu. A montes nunc orci porttitor fames pharetra. Eu, tincidunt justo congue, consectetur ac sed eu mauris mus. Aliquet ligula mi, phasellus venenatis fames, amet. Viverra in diam ornare duis et nisi, augue dapibus magnis nunc mauris. Torquent dolor eu, eu malesuada in nunc. Nulla scelerisque erat mauris lacinia rhoncus at. Amet ex et ante mi vehicula eget nulla metus consectetur non turpis nascetur, ipsum. Tortor vel magnis venenatis, vel ligula blandit ut. Praesent, congue, vehicula curae taciti, nec, orci hendrerit urna potenti orci suscipit.

## Last level 2 heading

Lorem ipsum dolor sit amet, nec ultrices sed, rhoncus eget at, parturient ligula elit vehicula et sed quam faucibus penatibus orci. Nullam duis nostra auctor habitant hendrerit venenatis sed et cum, imperdiet. Posuere duis bibendum mauris. Nec facilisi sit et. Mauris eros aliquam aenean nunc ante, eu conubia. Sed leo erat et. Sed fringilla a ut diam litora a consectetur nec. Nibh elementum lacinia malesuada eros molestie massa phasellus in, eros porttitor. In nulla integer pharetra convallis in. Cubilia eu tellus semper euismod himenaeos purus at odio. Neque mauris arcu nunc fermentum elit neque dictumst scelerisque euismod gravida. Velit ligula suscipit nec per nunc mi enim auctor, accumsan in., Himenaeos, pellentesque metus tortor, iaculis, et at vel a mauris nascetur quisque mollis? Potenti mi, nulla ipsum sed aenean cum. Nulla nostra sem urna ac pharetra. In ac mauris in senectus tortor lorem, nunc in egestas mollis diam. A vivamus eros nisi ut ac tempus cursus nibh ipsum felis. Sed suspendisse, in quisque euismod tristique et. Eu, elementum diam litora aliquet faucibus. In hac dolor ut quam suscipit venenatis. Sed lacus platea vel arcu vestibulum commodo felis nullam. Justo dolor potenti et donec non.
