---
layout: post
title: VueJs Event With Multiple Parameters
date: 2020-12-18
tags: js javascript VueJS vue event "custom events" events
---

#### VueJs event with multiple parameters


If you are trying to emit a custom event with multiple parameters like so:

```javascript
//ChildComponent.vue

this.$emit('child-event', "hello", "world");
```

In the parent component where you listen for the event just have a reference to the function. ***Without the parentheses.***

```javascript
//MyComponent.vue

<ChildComponent
    v-on:child-event="myFunction"
/>

...

myFunction : function (param1, param2) {
    console.log(param1);
    console.log(param2);
}
/*
out results:
> hello
> world
 */
```

***THESE WILL NOT WORK***
```javascript
<ChildComponent
    v-on:child-event="myFunction()"
/>

<ChildComponent
    v-on:child-event="myFunction($event)"
/>

<ChildComponent
    v-on:child-event="myFunction($event, param1)"
/>

<ChildComponent
    v-on:child-event="myFunction($event, $event2)"
/>
```
