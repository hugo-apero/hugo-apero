---
title: {{ replace .Name "-" " " | title }}
name: {{ replace .Name "-" " " | title }} Form
description:
date: {{ .Date }}
draft: true
url: {{ replace .Name "-" " " | lower }}
type: form
layout: split-right # split-right or split-left
submit_button_label: Send
formspree_form_id: # your@email.here
show_social_links: true # specify social accounts in site config
show_poweredby_formspree: true
---
