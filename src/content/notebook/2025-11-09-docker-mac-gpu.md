---
title: Why Docker can't use the Mac GPU
date: 2025-11-09
track: A
summary: On Apple Silicon, Docker runs Linux guests. Those guests do not get Metal, so GPU-backed inference has to run on the host.
---

## What I ran

I tried the usual container path people use on NVIDIA machines: put the model server in Docker and point it at a GPU. On the Mac, that path ends at the host boundary.

## What I measured

Availability of Metal / MPS inside a Linux container versus on the host Python environment. No timing race here — a binary check of whether the accelerator is reachable.

## What I found

Docker on macOS virtualizes a Linux VM. That VM does not expose Apple's Metal stack the way an NVIDIA container can see CUDA. For this work, vLLM with the Metal plugin runs on the host. Containers remain useful for packaging CPU-only steps, not for Mac GPU throughput.
