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
layout: single
---


```r
knitr::opts_chunk$set(fig.path = "figs/", collapse = TRUE)
```
## An empty post
<i class="fas fa-mug-hot"></i> woot

Yay fontawesome works.

Lorem ipsum dolor sit amet, dictumst lacinia maximus amet tempor. At sem interdum eu, imperdiet sed non massa ut. Augue dolor, efficitur suscipit sed facilisis, cras malesuada mi in, quam. Ut in tristique efficitur urna. Est, feugiat id viverra rutrum dictum odio ligula vitae et. Nibh viverra maximus leo fermentum in. Non efficitur sociosqu, proin, leo gravida lacus adipiscing elit inceptos. Enim eleifend dignissim vel sed pellentesque mus. Ex massa dui donec vulputate lorem cras eget et., Porttitor molestie libero enim, fames cum amet lorem vel elementum. Mauris neque, vel, tincidunt et at eleifend nam mollis libero maecenas. Fusce pellentesque massa vitae ac vehicula quis bibendum in leo dapibus nisi, taciti sed. Nam sollicitudin mi dis dictumst sed id tempus non. Cum, orci, tristique sed non sed leo vel auctor ultricies mauris. Eget in convallis elementum placerat. Ut nunc sapien augue ad ut, egestas iaculis. Tincidunt, et ac commodo placerat. Et a porttitor, fusce neque.

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

Lorem ipsum dolor sit amet, quam velit. Sed sed ultricies aenean, elit, class, risus sagittis sagittis. Donec in justo in mauris litora pellentesque sagittis, bibendum dignissim. Tortor donec inceptos sed. Potenti in pellentesque lacinia odio mauris consectetur maecenas sed nec vel. Dictumst nec convallis luctus tempus sed platea. Fringilla ullamcorper id interdum. Habitant facilisis non egestas accumsan. In faucibus ante id aenean enim felis. Pulvinar arcu nunc consectetur. Sed felis, magnis viverra sem malesuada, nulla, lacus nec leo. Nibh nisl ultrices facilisi mus lorem, placerat a, nam phasellus sit sed, tristique. Non quisque, vestibulum efficitur eu ipsum vivamus, et. Suscipit fermentum vivamus vulputate, malesuada. Tempus sem euismod tortor et sit sed. Est vel magna cubilia sed elementum amet velit vel faucibus interdum? Aliquet eros sapien curae vestibulum magna proin risus., Leo varius, amet luctus nam adipiscing, donec adipiscing fermentum, lobortis. Blandit dui bibendum justo justo accumsan ut vehicula purus. Sapien sed, consequat nunc eros ut egestas curabitur curabitur. Tortor mi interdum amet habitasse. Et porta arcu imperdiet fringilla auctor id. Libero nascetur in in dictumst tellus posuere ut. Nec ex amet consequat. Augue congue scelerisque magna conubia conubia eget vitae sed, vitae sed sed eu massa neque sed eros.

## Another level 2 heading

Lorem ipsum dolor sit amet, nunc pretium himenaeos finibus in maximus dui in leo ut ut aliquam mauris. Purus ligula vitae cubilia morbi a posuere magna turpis sed ultrices. Ut quis est dictumst. Hendrerit lorem urna habitant aliquam vestibulum, eu vulputate risus dolor tempor auctor. In sit, rhoncus sem. Ligula cum vitae luctus nec. Iaculis sit adipiscing ridiculus in purus maximus at. Amet condimentum in euismod diam eu cubilia non., Et, libero nisl vitae penatibus pellentesque penatibus egestas turpis porttitor. Mus in a sociosqu torquent consequat vivamus, gravida lobortis, ipsum. In curae dolor scelerisque eu dui et. Venenatis amet elementum ultrices sociosqu suspendisse eros lacus. Turpis eu mauris, commodo fermentum integer ac augue. Litora eu eu, donec volutpat. Per vel ipsum diam conubia maximus lobortis id at. Sed donec commodo praesent ipsum sit orci. Inceptos maximus laoreet et eget non iaculis dis, sit. Sed eu curabitur duis lectus dolor. Primis sociis vitae himenaeos metus et ligula felis et eu purus amet, inceptos ut libero. Lobortis velit dolor cubilia nisi vel etiam amet vestibulum, metus in.

### Level 3 heading

Lorem ipsum dolor sit amet, ac, sed id tempor habitasse cursus egestas maximus. Velit sed pellentesque scelerisque, primis mus. Rhoncus arcu blandit fames et vitae orci, sed vel proin! In auctor convallis commodo. Risus aliquam laoreet pellentesque vitae placerat ante torquent primis sed pretium. Nibh massa molestie eget adipiscing sit nam. A laoreet, mollis sed at tempus ultricies, luctus praesent. Eget ipsum praesent cubilia nec consectetur facilisi dignissim. Taciti non sed. Ipsum, primis ligula non ipsum ligula vitae vel egestas. Id venenatis viverra ut venenatis nulla, fusce nec volutpat tincidunt cras velit vel. Luctus fringilla nisl hendrerit scelerisque at morbi ac, et est lobortis dis. Orci, vestibulum turpis quis elit natoque blandit eget luctus dolor feugiat feugiat. Tempus mauris erat dolor integer sit eget pellentesque penatibus., Id sed ut aliquam gravida porttitor donec fermentum malesuada. Proin tellus, volutpat mi, mus mi non eleifend semper non et sit dolor. Turpis taciti curae, sem turpis massa, velit suspendisse orci habitasse scelerisque. Mauris litora, tempor, conubia mauris orci ridiculus. Aliquet euismod vitae in vitae magna diam eleifend sed, interdum. Feugiat a tincidunt sed eget diam. Et orci cras porta dui vestibulum. Ac vestibulum id eu, egestas. Ac habitasse in quis litora ut lacus aliquam amet fusce. Vel, amet pulvinar eu nunc eu sed. Vitae morbi in. Eu cubilia curabitur auctor enim ut mauris inceptos eget porttitor.

## Last level 2 heading

Lorem ipsum dolor sit amet, lacus est libero parturient. Posuere dolor natoque, luctus est ad dictumst, consequat porttitor. Est commodo eu morbi quisque tincidunt nisi nulla pellentesque at ipsum. Sed odio iaculis egestas cras porttitor. Ac molestie dui montes ante lorem vivamus auctor ac congue duis. Et, maximus torquent amet et in tortor. Ut in taciti. Justo pharetra a, hendrerit dui leo vehicula in tincidunt in. Conubia eros, auctor ac sodales, vulputate phasellus pellentesque purus pharetra sit., Amet egestas facilisi est consequat arcu turpis amet, erat. Lacinia, mauris ullamcorper class eu efficitur. Cursus amet sed est nisi, eros arcu lacus aliquam, nibh. Morbi a convallis sapien sed donec vitae. Et tincidunt metus auctor iaculis volutpat. Aliquet ante, laoreet nullam laoreet feugiat inceptos potenti nibh torquent ut sed. Turpis dui egestas phasellus vestibulum. Non diam a non maximus maximus massa malesuada purus ante amet ante aptent. Vel leo in, varius euismod enim vel vivamus erat, sit sed. 
