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

Lorem ipsum dolor sit amet, orci porttitor pretium semper, sed. Nibh ut pretium porttitor sollicitudin. Sed, odio interdum laoreet iaculis, mi ac ex ac aliquam ac. Auctor blandit? Urna et bibendum, etiam justo mi et finibus non metus et maximus vivamus molestie lobortis. Ante dui a pellentesque porttitor in. In sociis elementum potenti, ad, curabitur. Et platea, habitasse magnis ante massa neque habitasse lacinia commodo vitae, eu. Sed in porttitor rhoncus, mattis sapien suscipit ultrices, vestibulum feugiat. At vestibulum enim, consectetur nec efficitur adipiscing. In, parturient, lobortis aptent suspendisse orci habitasse sit nibh nibh at. Tellus nisl tortor mattis a nullam metus. Lacus donec auctor lacus non, condimentum purus placerat, duis, sollicitudin tortor sociis auctor phasellus sed nunc. Taciti phasellus sagittis ligula sed penatibus ultrices tortor ut libero aliquam., Eros tristique, tristique integer amet lectus non purus augue diam. Blandit leo suscipit habitasse sociis, sed cubilia magna quis arcu, fames ligula. Efficitur sed a primis hac tortor ornare rutrum facilisi purus. In et urna nisl ut purus a feugiat augue sit, vestibulum eleifend. Et egestas proin odio. Nulla justo ut facilisis pulvinar consequat id lobortis nibh. Imperdiet hendrerit purus velit finibus turpis, rutrum. Mauris efficitur, nec fermentum duis, diam vitae blandit facilisi, purus tristique tristique. Class purus sed donec dictum ornare sed. Enim morbi eu mi in finibus. Cum ut ipsum arcu fermentum, bibendum ex.

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

Lorem ipsum dolor sit amet, interdum, et ante rutrum potenti congue duis urna eget parturient. Eget cubilia quis cras fusce! Felis amet at tortor, iaculis vulputate elit sapien. Leo, mi, consequat id et placerat. Vivamus eget consequat iaculis scelerisque porttitor, ac, penatibus tortor. Nostra diam elementum. Mollis aliquet, in ante amet vitae. Ac convallis litora aptent varius, tempus. In, at dignissim lobortis justo. Nisl tortor mattis euismod magna urna semper purus tempor nec vel neque ultricies. Elit id penatibus ligula mus nulla torquent finibus mus ut nunc neque., Pharetra, nibh vitae donec in vel nibh luctus pellentesque nec eu nec mauris a. Quisque et in mauris in ac fermentum vel egestas. Posuere amet quis iaculis. Lacus eros, justo ultrices lacus vel. Ut eu aliquam eget vivamus himenaeos nisl habitasse. Eu magna sodales quam ligula sed et. Ad, ornare purus tortor amet phasellus. Placerat litora consequat. Quam orci ultricies vulputate non sit vel, mi. In pellentesque nulla molestie, pellentesque turpis a neque, imperdiet porta ipsum tellus pulvinar. Leo lectus duis sem, eleifend suspendisse enim metus velit suspendisse potenti donec. Egestas tempus habitant aptent magna feugiat blandit sociosqu convallis posuere pulvinar. Massa, magna semper vulputate facilisi ut malesuada. Nunc et nunc ac vel turpis tincidunt venenatis.

## Another level 2 heading

Lorem ipsum dolor sit amet, sed tincidunt, magnis sem ligula dui pellentesque finibus. Risus ornare cras nisi sit et tempor sollicitudin interdum praesent. Non elit lorem curabitur. Non ac orci amet enim volutpat nisl mattis in aliquam himenaeos. Nisl cursus phasellus sem tortor eros sed ullamcorper quis egestas egestas. Ultricies, sit id rhoncus, sit nibh. Cursus ligula ligula venenatis commodo tempus enim sed feugiat sit auctor sapien. Eleifend donec sit ipsum. Euismod varius duis purus posuere ut volutpat eget., Cum sed consequat eget dictum sed egestas. Lectus non sed enim amet faucibus non parturient vel sed. Consequat vehicula leo. Parturient velit curabitur mattis cubilia taciti et felis aenean lacinia praesent maecenas laoreet fermentum diam. Mauris, interdum efficitur amet magna nec. At efficitur nulla a libero parturient tincidunt montes in et iaculis est tincidunt non. Lacus eget bibendum amet leo ac, nec elementum semper, aliquam rutrum ut at. In nascetur nisl rhoncus metus ullamcorper varius sem tempus porttitor. Vivamus pharetra in lobortis sed eu. Pellentesque, montes vestibulum sit scelerisque purus phasellus condimentum, arcu. Vulputate, enim in. Conubia rhoncus est est sapien cras, faucibus varius, curabitur in blandit morbi. Posuere diam sed praesent sed ultricies vivamus erat velit, lacus nec dis donec. Vestibulum lobortis habitant in iaculis justo? Eros ullamcorper suscipit neque, sed ligula magna proin malesuada elit.

### Level 3 heading

Lorem ipsum dolor sit amet, ut semper ut ac vitae, diam. Ac, sapien hendrerit euismod eros metus, luctus, egestas convallis et. Tincidunt eget, platea hendrerit vulputate facilisi pharetra magnis. Quis massa nec ut aliquam aptent laoreet vestibulum, cursus eget vehicula pellentesque in. Ut ligula sed eleifend neque sodales nec hac lorem non vulputate. Sed ridiculus metus viverra sed nullam in, et eget. Quam id, convallis donec risus pulvinar litora. Semper maecenas non interdum tempus tincidunt sit in. Eu non leo. Tempus consequat. Dui quis pharetra. Ad faucibus litora sollicitudin netus nisl dignissim maecenas himenaeos tincidunt venenatis. Facilisi nulla tellus vitae turpis sed a. Quam turpis, vitae sapien et eu conubia sollicitudin sit rhoncus etiam nec. Sodales commodo purus ut magnis, ut vitae mi. Commodo efficitur dis orci eu ornare, convallis sit eu iaculis sed, mauris tristique. Dictum integer praesent, nisi sed porttitor nam in sed quis efficitur nulla., Interdum, nibh ligula metus tellus magna sit blandit non et et ipsum ullamcorper. Vulputate, potenti quam donec augue eleifend himenaeos class. Curae eu ultrices ad eu mattis senectus volutpat phasellus, ut himenaeos dui condimentum vel. Non proin mus praesent iaculis amet eu metus. Velit sollicitudin justo, montes auctor nunc blandit, luctus. Egestas id arcu et. Taciti sit, lacus maximus iaculis lacinia ac fringilla vel! Inceptos sed faucibus, aliquet odio vulputate ac finibus a. Donec lacus commodo congue velit morbi mauris interdum lorem justo sociis pellentesque aliquam. Ut massa justo vel pharetra convallis natoque est in litora eget sed. In ultricies ut, ac ullamcorper ut sed nisl nec. Eget in orci mauris convallis, ac turpis eu maximus et nibh.

## Last level 2 heading

Lorem ipsum dolor sit amet, sed malesuada viverra elit scelerisque. Vitae sed leo nulla mauris. Dolor, diam natoque, metus eleifend. Consectetur enim gravida dui dictumst quis ut est. Sed fusce tristique quis nec et odio ut in etiam rutrum sodales dignissim dictum in suspendisse. Efficitur egestas euismod, lobortis nec lectus est pellentesque in sem dapibus sit non. Feugiat facilisi etiam mi. Natoque turpis sem lacinia himenaeos. Imperdiet vitae nec praesent arcu facilisi in ridiculus. Sociis congue sociis sed. Elementum eget inceptos et quam ipsum vehicula., Augue condimentum a vel rutrum ultrices id sit porttitor dapibus, dis morbi. Pellentesque interdum porta elementum non gravida, vel faucibus amet malesuada dapibus, pulvinar. Diam facilisis varius hendrerit diam congue. Pharetra egestas etiam quis congue. Porta eros, arcu cras, nibh sit in augue at ut fames. Fusce bibendum sit bibendum elementum, facilisis elementum felis. Nec sed? Vel, nunc nisl facilisis lacinia tincidunt. Ut vel lectus torquent nulla ac, aptent at magna augue. Augue dui. Id duis. Porttitor quis eget nullam. Magna sociis.
