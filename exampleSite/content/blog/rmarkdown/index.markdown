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


## Air quality


```r
with(airquality, boxplot(Temp ~ Month))
```

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-1-1.png" width="672" />

Lorem ipsum dolor sit amet, amet donec non natoque semper aenean eget. Quis eu mauris ac ornare! Et, a posuere quisque sed luctus in in, magna? Id sapien maecenas, dui. Semper leo odio. A diam lobortis non sed eleifend nunc adipiscing, vel aliquet. Varius quis. Hac sit cum vulputate nostra vel, et maximus orci et. Ligula dictum? Montes, nullam et. Sem ut sit, nulla lacus volutpat platea eros per. Pharetra, quam aliquam vestibulum ullamcorper. Posuere maecenas mauris interdum pulvinar, mauris potenti habitasse faucibus. Eu, maecenas laoreet venenatis, himenaeos mauris ipsum vitae cubilia tristique dictumst. Volutpat velit egestas, lorem donec ullamcorper. Euismod id vel ut sem pellentesque viverra mattis turpis quis tempor. Vel tempor a sapien a. Gravida fringilla porta nunc inceptos pellentesque est pretium tellus, mauris sed, dolor., Congue elementum ridiculus posuere, convallis ante consequat tempus platea. Justo quis mi felis enim eget, inceptos quam urna amet. Mauris auctor in vitae in sociis condimentum. Vehicula a malesuada in vivamus nisl et id viverra integer sed ut nec, ridiculus. Porttitor facilisi tincidunt purus pellentesque curae, iaculis, ante libero eget. Fringilla nostra nibh mauris in. Ultricies venenatis ut massa taciti tempor nisl non. Malesuada vulputate maecenas sodales consequat. Sit est purus sociosqu tortor eu pellentesque. Ullamcorper id aenean viverra ornare ac tempus velit pharetra ultrices libero ornare tortor sit dignissim. Hac pellentesque, felis tortor vestibulum varius fermentum ut aliquet ac. Egestas sem ante elementum venenatis. Sit aliquet sit dignissim tincidunt ut, nunc maximus. Mollis turpis dolor accumsan nunc, urna libero vel penatibus. Massa maecenas sed, tellus viverra malesuada urna massa tortor.


```r
mlev <- levels(with(airquality, as.factor(Month)))
with(airquality, plot(Ozone ~ Temp, 
                      pch = as.numeric(mlev), 
                      col = mlev))
```

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-2-1.png" width="672" />

## An empty post

Lorem ipsum dolor sit amet, pellentesque interdum ac varius, vel tincidunt. Dis quam purus nunc et morbi a turpis sed. Vivamus vitae turpis eget et vitae. Augue facilisi netus ut ut dis, sed turpis amet. Enim tortor, nulla sem nunc. Hendrerit ullamcorper nulla augue turpis turpis cubilia cubilia non. Netus tortor litora integer nulla montes. A sed, a, sit vestibulum. A ut congue velit. Nibh sit, ac metus ipsum quam nec. Ac inceptos magna himenaeos parturient, mus, torquent. Vitae vitae libero, mollis consectetur ante., Justo metus sed ad, ante id, et. Quam in aliquam in ad elit mattis. Congue maximus risus dictum eget orci senectus amet. Arcu diam blandit in non tortor non tellus risus sociis natoque blandit a eleifend. Est in conubia justo pretium. Potenti sit nulla placerat tortor sed efficitur eu lacinia himenaeos mi natoque in velit dictumst. Amet per a sodales.

## Another level 2 heading

Lorem ipsum dolor sit amet, eu tortor donec lacus auctor eu amet. Aenean vestibulum id nostra ac praesent finibus, bibendum odio placerat in nec. Scelerisque ac vitae ac duis, vel tincidunt sollicitudin a. Leo quisque, purus. Lectus efficitur senectus donec pellentesque penatibus lectus. Commodo, odio in penatibus condimentum, nulla pellentesque. Sed platea id felis vel. Semper placerat. Ad, dui pharetra donec. Diam, ut blandit primis finibus. Cras, mauris sed eleifend arcu nunc quis? Consequat rhoncus at magna convallis, eu tincidunt et taciti., Vestibulum, inceptos blandit donec, eu ut vel eros. Fermentum auctor in etiam risus mattis cubilia nunc est, consequat nulla? Sed euismod et conubia etiam tempor. Ac malesuada aliquam dolor imperdiet praesent. Mollis erat mi etiam justo varius! At maximus fringilla porta laoreet a dui sed. Aliquet in vel vestibulum consectetur at rutrum, nascetur in. Inceptos, eget tempor cras porttitor ut scelerisque aliquet neque vitae erat. Nullam fames gravida porta conubia interdum risus malesuada nisl. Eu non nunc a. Pellentesque, ullamcorper justo tempor nullam sagittis sociosqu ullamcorper sit nostra. Aenean ligula donec gravida id vitae mattis, nec, natoque. Commodo platea etiam donec amet eget nunc volutpat amet diam interdum sodales habitant lacinia. In ut ut vel et, arcu. Maximus sem, ac quis efficitur montes egestas varius lacinia vitae aliquet at. Faucibus mi nullam ut sed ligula est orci efficitur aenean.

### Level 3 heading

Lorem ipsum dolor sit amet, tempus, netus fames nostra? Libero donec vitae platea in, mollis class varius varius ligula maecenas. Magna varius mus ante luctus. Nulla eu eu fringilla at eu. Nisi, sed. Et elit tortor varius neque, purus nec egestas rutrum. Sed faucibus pretium mauris magna nam enim, diam scelerisque a in. Netus, netus, metus nisi ridiculus netus accumsan pellentesque. Non proin, dolor sem. Posuere augue taciti, tempus blandit ut, at sed. Dolor risus montes sed arcu ut augue ornare eget. Aptent, sed penatibus dapibus nulla eget et, porttitor., Ac habitasse primis lorem, diam placerat. Cras mollis, metus est enim faucibus integer volutpat. Pellentesque nulla facilisi eros. Scelerisque ridiculus et tempor purus tortor nullam, mauris ut in, potenti nisl aenean, vestibulum. At neque sed sed, vel maecenas et nunc. Tellus praesent quam malesuada ut, in, et malesuada mauris. Vel scelerisque justo vel, semper ac nibh. Integer dictum varius vel class ipsum et at egestas metus. Varius ut turpis non facilisis non, porta mollis fusce, a eu himenaeos platea. Tincidunt, metus class leo erat condimentum id ac maecenas sagittis. Fringilla felis ac vel.

## Last level 2 heading

Lorem ipsum dolor sit amet, risus diam egestas placerat ut. Eu accumsan eu gravida odio, tortor. Vestibulum blandit non, taciti libero augue hendrerit vivamus mus nullam. Nulla, at curabitur. Velit ad nisi quis neque, in gravida. Ornare orci massa tincidunt habitant non pharetra laoreet sed per ac, eu. Rhoncus arcu sed euismod sed nisl non. Orci egestas ut felis lorem dignissim amet in. Varius tellus conubia erat lobortis massa adipiscing est. Etiam mauris sit ut sapien elementum aenean ad amet ac metus., Egestas magna tempus tincidunt erat ac. Nisl sapien, hendrerit libero et nisi eu in donec. Imperdiet consectetur vel nibh est elit non. Risus, pellentesque sociosqu posuere eu placerat leo, ut lectus velit, nunc ullamcorper. Lacus vel aenean, at bibendum donec quisque tortor sed curabitur purus. Orci ut, eget augue rutrum non aptent sed netus urna rhoncus. Eget erat maximus, quam nibh urna metus nunc conubia cursus consectetur.
