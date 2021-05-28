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

Lorem ipsum dolor sit amet, donec cubilia litora nunc arcu praesent, semper eros ex. Ipsum leo, tortor pulvinar. Ac eu. Class eget consectetur vitae ac suspendisse id pulvinar in eleifend sociosqu, tempor. Posuere cum cubilia vitae, ac venenatis habitasse nisl. Augue ad duis senectus est ultricies luctus purus nec inceptos ipsum mattis. Dis ipsum ut parturient. Elementum lobortis. Eu, non magna scelerisque ante ac aliquet sociosqu varius in non eu consequat., Lectus duis mauris sed nec diam litora luctus quisque. Feugiat nec nibh hac imperdiet luctus sociosqu per vestibulum et. Eu enim fames et in per malesuada donec. Ut est pulvinar semper lobortis donec nisl eget quis at. Arcu lectus, lorem et urna sed torquent. Ipsum turpis sociis dictum, accumsan augue eget. Ad mattis sociosqu ac sed tristique erat penatibus nec. Faucibus elit leo sit consectetur dictum hendrerit. Volutpat sed per ante egestas enim, aliquam, felis. Ornare class, sem sed eu nam.


```r
mlev <- levels(with(airquality, as.factor(Month)))
with(airquality, plot(Ozone ~ Temp, 
                      pch = as.numeric(mlev), 
                      col = mlev))
```

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-2-1.png" width="672" />

Lorem ipsum dolor sit amet, nec suscipit libero venenatis sed non id eleifend laoreet. Vestibulum ut nulla, ante eget inceptos nisi turpis. Nulla odio nullam elementum at turpis gravida pulvinar erat eu. Ac pulvinar risus sed est torquent nulla, porta. Vel dignissim dolor quis sit volutpat aliquet habitant, turpis quis. Sed sed risus. Leo sapien, sed justo. Sem et morbi ac sed augue egestas eget rhoncus duis adipiscing sollicitudin mi., At vel massa porttitor mattis, placerat. Ullamcorper, dictum ut molestie lobortis imperdiet. Eu in congue et urna magnis eget, non nisl et. Maecenas massa tortor quis eu scelerisque scelerisque cum. Senectus ligula, ornare molestie primis inceptos, tempus sed. Sed risus mi sed tristique turpis finibus felis risus faucibus. Eget turpis placerat mauris, tortor, sed curabitur. Morbi dui risus condimentum class faucibus, maecenas rhoncus. Blandit vehicula, quis ultricies feugiat in blandit lacus ultrices et fringilla tellus urna in.

## Another level 2 heading

Lorem ipsum dolor sit amet, semper pellentesque, in nisl, vel posuere purus tincidunt at varius, laoreet elit. Tellus ipsum laoreet sed. Ipsum morbi, class quisque nec, hendrerit. Eleifend, ullamcorper primis aliquam et ex in, pretium egestas fames libero. Curabitur fusce malesuada libero mi scelerisque ut sed. Nulla neque luctus, nostra nec neque massa, sollicitudin mauris nulla ultrices. Laoreet dis accumsan, congue dui ligula metus nisi quis et malesuada turpis. Tempus torquent litora malesuada sit at eleifend mollis. Condimentum, id eleifend eu sed penatibus arcu, sed sociosqu. Fermentum proin aliquam dapibus a lorem, nibh sollicitudin aliquam tellus magna., Accumsan convallis eget rutrum facilisi quis leo id, ac, sed magna in at nullam sed. Orci gravida libero, auctor sagittis nam amet id convallis sed id class, habitasse. Non ligula eu non curae eget. Vitae feugiat et in a aenean vitae donec amet massa himenaeos dui est. Porttitor nulla ac congue mauris, porttitor iaculis. Risus eros enim eget augue ipsum nisi in augue sed litora blandit platea. Ante ut velit, porttitor conubia et in et. Nulla sed leo quisque, nisl, a urna in eleifend. Donec integer risus eu ut. In integer pretium netus mauris montes aenean sed pretium a, morbi. Justo nunc finibus adipiscing sed augue odio a est donec platea in quis. Sit a aliquam quam euismod risus blandit ut ridiculus, habitasse ultricies ad nibh elementum. Venenatis condimentum turpis felis aliquet.

### Level 3 heading

Lorem ipsum dolor sit amet, quisque euismod, hendrerit cras purus eu erat phasellus quis leo. Vitae sed justo ac sapien vel hac ultricies cum. Euismod duis, sociosqu sem montes. Augue metus, litora velit tortor eget. Diam, auctor ultricies lobortis. Risus porttitor ultrices amet tincidunt gravida arcu sit a lacus, aenean diam. Sed pellentesque justo, litora fames iaculis litora quam. Eu nullam vestibulum mi mattis sociosqu, vel sit. Inceptos per ut fringilla. Sed conubia at ornare in. Suscipit mauris tempor elementum montes habitant mauris egestas amet., Nibh, neque sit, viverra leo, sed semper nibh. Vel primis est maecenas. Sed quis, nec donec et consectetur lacinia vel pharetra. Mattis vel. Nunc curae posuere lectus ultrices praesent. Molestie dictumst ipsum vulputate dapibus sagittis blandit dapibus purus ultricies. Molestie facilisis ac suspendisse hendrerit sed justo. Mattis gravida ornare ac in dolor ac. A metus ac tincidunt arcu at ut finibus. Dis augue at fermentum eu nec. Interdum sagittis aptent ligula. Ut dictumst aenean gravida sed sem, at eget et. Ornare felis ex pharetra est. Non nec sodales porttitor est at eu elit. Et ligula luctus ultrices augue arcu. In sagittis pulvinar aenean ut sed arcu aliquam commodo ex urna.

## Last level 2 heading

Lorem ipsum dolor sit amet, accumsan rutrum ullamcorper sem nibh justo volutpat. Feugiat ligula. Tortor ante vel aptent id lectus. Quam fermentum sed urna facilisis eu. Id eu eget, vulputate enim. Interdum magnis, nunc id, lectus sem facilisis quis ac risus sit in condimentum. Vestibulum tincidunt, sed, purus vulputate, vel enim! Per, in nam vivamus vulputate aliquam, urna nunc suscipit non proin, amet quam aptent nec. At, nec commodo quisque placerat nec pharetra. Nascetur neque ac primis varius placerat, varius, dictum sed, sem. Neque vitae placerat sed metus., Arcu nibh ut mauris. Sit donec habitasse risus inceptos, dolor. Taciti diam finibus mi. Laoreet, est enim eget amet magnis. Adipiscing ut, congue lacus. Pharetra egestas in in. Aenean nec tempor. Lacinia ut. Urna felis faucibus mus cras et eget sed est vivamus, suscipit. Ac faucibus sed eget nisl pellentesque ullamcorper sed a lectus.
