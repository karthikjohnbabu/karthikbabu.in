---
title: "Why repeated identical prompts look faster: prefix caching"
date: 2025-11-10
track: A
summary: Re-sending the same prompt can look much faster because engines reuse computed KV for a shared prefix. That is a real effect — and a trap if you ignore it in a benchmark.
---

## What I ran

Repeated the same prompt against an engine that supports prefix / automatic prefix caching, then compared with a first-hit (cold) path on the same machine.

## What I measured

Time to first token and tokens per second when the prompt is new versus when it matches a cached prefix. I kept answer length and decoding settings fixed so the comparison stayed about the prefill path.

## What I found

Identical repeats can look dramatically faster because the engine skips recomputing KV for the shared prefix. That is useful in production. For a benchmark, it means you must state whether the run is cold or warm, and avoid calling a cached repeat a fair stand-alone result.
