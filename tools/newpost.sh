#!/bin/bash
#newpost.sh
postpath=~/Projects/thejefftrent.github.io/_posts/
#get date format
now="$(date +'%Y-%m-%d')"
#echo "$now"
#prompt name
echo What is the name of this post? \(Please Avoid Punctuation\)
read -r postname

#to lowercase
filename="${postname,,}"
#replace " " with "-"
filename=${filename// /-}
#add date, add file extension, and add path
filepath="${postpath}${now}-${filename}.md"

echo What are the tags? \(js javascript \"100 days of code\"\)
read -r tags
#echo $tags

#generate frontmatter
frontmatter="---
layout: post
title: ${postname}
date: ${now}
tags: ${tags}
---

You write here"
#echo $frontmatter
echo "$frontmatter" > "$filepath"
