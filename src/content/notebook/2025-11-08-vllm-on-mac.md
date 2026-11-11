---
title: Running vLLM on a Mac
date: 2025-11-08
track: A
summary: I got vLLM running on Apple Silicon with the Metal plugin and measured it against plain Transformers on the same model and questions.
link: https://github.com/karthikjohnbabu/vllm-mac-bench
---

## What I ran

SmolLM2-360M-Instruct on a MacBook Pro (Apple Silicon), once with plain Hugging Face Transformers on `mps`, once with vLLM plus the vllm-metal plugin. Same prompts, greedy decoding, one warm-up before timing.

## What I measured

Tokens per second and requests per second for a single request, ten requests one by one, and — for vLLM only — one hundred requests together. Median of three runs, with the range kept visible.

## What I found

One request at a time is a near tie. Ten sequential requests give vLLM a small, consistent edge. One hundred requests together is where continuous batching pulls away. Full numbers and caveats are in the repo README.
