---
layout: post
title: Learning VueJS
date: 2020-12-03
tags: vuejs vue javascript js hades nuxt
---

Using [nuxt](https://nuxtjs.org/) and vuejs to build a static site for a Hades Randomizer.

I have messed with Angular briefly and Vue is *very* similar. I feel like I am grasping the general idea of VueJS with components and using events and props.

WebStorm makes this so much easier!

### Basic script structure on component
``` javascript
export default {
  name: "ComponentName",
  components: {ChildComponents},
  props: {
    variable : "that can be used by parent"
  },
  data () {
    let i = 0; //this is a function so feel free to do some code in here
    return {
      componentKey: 0,
      image: "testing.png",
    }
  },
  methods : {
    randomize : function (event) {
      let i = getRandomInt(0, hades.Weapons.length - 1)
      this.componentKey = i; // if you want to component to change you MUST update a "this"
    }
  }
}
```
