---
layout: post
title: Ramblings On AI
date: 2026-02-06
tags: ai philosophy
---

<!--toc:start-->
- [AI Steals Your Soul](#ai-steals-your-soul)
- [AI Steals Your Soul by Cheating at the Game of Life](#ai-steals-your-soul-by-cheating-at-the-game-of-life)
- [A Brief Anecdote](#a-brief-anecdote)
  - [What works; doesn't work](#what-works-doesnt-work)
  - [The limit](#the-limit)
- [Impotence](#impotence)
<!--toc:end-->

This is about generative AI. The LLMs, image gen, video gen, etc. I acknowledge there are a lot of AI progress outside of gen-ai that is making real advancements to society.

## AI Steals Your Soul

The heading is purposely provocative. I don't really believe in a soul in the religious or spiritual sense.

Generative AI has the ability to hijack a way a person thinks and interacts with the world. AI erodes finely honed skills of the user and brings them into mediocrity. This happens to everyone that uses generative AI on any level.

The writer loses their voice in their writing. Their ability to paint a scene or persuade the reader erodes as gen-ai writes for them. Their vocabulary lessens, their opinions weaken, they lose their art.

The programmer loses their ability to dive deep into a problem, to read the documentation, to really understand what the computer is doing. Their troubleshooting skills weaken.

This even impacts the business exec. What happens when your boss no longer thinks about what the impacts of an important decision is themselves. Instead they plug it into ChatGPT and let it make the decision for them. Good leaders have a finely honed decision-making ability. They rely on their gut and their data. It's something that is built up over time. Note: I said "good" leader. When they allow a gen-ai to confirm their decisions then they dull that ability.

## AI Steals Your Soul by Cheating at the Game of Life

Life is not like riding a bike. What gives us meaning is not something that can be picked up again after tossing it aside for a few years. Our value comes from when we finely hone skills that are difficult. We put an essence of ourselves into our art. When we cheat the process we lose our meaning and we lose our value.

If you cheat at a game you take a short-term win at the expense of learning. Maybe it is fun for a bit, but you often get bored. People use gen-ai for the same reason they cheat at anything and the result is the same.

The couldn't even begin to count the number of hours I have spent banging my head on my desk trying to fix a bug, implement a new feature, or do something I was unfamiliar with. Now I'm pretty good at a lot of things because I spent the time struggling to learn it. AI steals that from you.

## A Brief Anecdote

I was making a scrabble-like solver. See [Crossplay Solver](https://www.thejefftrent.com/crossplay-solver). I used Gemini 3 pro to make it. I was impressed by how easy it was to get it set up. It took hours to design and test something that would have taken me days. It's not perfect but it got the job done. I was impressed on how it was able to find the scrabble dictionary to use. I was surprised at how well it designed everything. It looked a lot better then what I could design. It was fun saying, it would be nice if you could add this feature, and it would chug away for a couple minutes and the feature was there. I got something working and I didn't have to look at much code.

I wanted to ability to be able to import an image of the gamestate and have it fill in the board for me. OCR is a different beast then all of the other stuff I was doing. But it found a library it could import and it went on it's way. The first iteration was bad. It didn't work at all, but I could describe the problems it was facing and it was mostly able to fix it. I did find out later that even this feature didn't work well.

I had to crop the image, and I didn't like it. So I asked it to be able to process an entire screenshot from my phone. It failed again, and again, and again, and again. I had no mechanism to diagnose the problem. All I could say to the LLM, was "well, it still isn't working. Maybe try doing this". And it would keep failing. Eventually I gave up.

### What works; doesn't work

You have no way of knowing if the implementation is actually correct.

```c
bool is_odd(int x) {
  if(x == 1)
    return true;
  if(x == 2)
    return false;
  if(x == 3)
    return true
  //...
  return false
}
```

Consider this code snippet. This is in line with the garbage you get when you use AI for programming. I would go back to the AI and ask, "hey it looks like is_odd doesn't work with 157" and then AI will fix that case but it will have no understanding of what is_odd actually is. Obviously, this is an oversimplification, but you don't have another mechanism for correction when you rely on vibe coding.

### The limit

Eventually I got to the point where I couldn't describe what the problem was, all I could say was it doesn't work the way I intend. Any complex, novel, systems is eventually going to reach a point where we reach that level. It will reach a point where we don't have a mechanism to describe the error. All we can say is, "hey there is a bug, fix it please". And maybe, if we keep asking enough it will get to a point where it works, but then the foundation will become so fragile that it fails when it hits the next road block.

I really want to see a useful, novel tool that was vibe coded. I don't think one exists. Or it cost so much money in gen-ai tokens it would have been better to hire an actual engineer to write it.

## Impotence

The reason I share the anecdote, is because I felt impotent with my vibe coded solution. I couldn't fix it. (Okay, technically I could actually do it myself, but for this exercise I'm pretending I don't know javascript). I didn't learn anything doing it. I made slop without soul.

> slop without soul

AI is slop without soul
