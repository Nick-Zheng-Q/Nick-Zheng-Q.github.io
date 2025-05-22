---
title:          "HDLxGraph: Connecting Large Language Models and HDL Repositories via Graph Databases"
date:           2025-05-22 00:01:00 +0800
selected:       true
pub:            "arXiv"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "2025"

abstract: >-
  Large Language Models (LLMs) have demonstrated their potential in hardware design tasks, such as Hardware Description Language (HDL) generation and debugging. Yet, their performance in real-world, repository-level HDL projects with thousands or even tens of thousands of code lines is hindered. To this end, we propose HDLxGraph, a novel framework that integrates Graph Retrieval Augmented Generation (Graph RAG) with LLMs, introducing HDL-specific graph representations by incorporating Abstract Syntax Trees (ASTs) and Data Flow Graphs (DFGs) to capture both code graph view and hardware graph view. HDLxGraph utilizes a dual-retrieval mechanism that not only mitigates the limited recall issues inherent in similarity-based semantic retrieval by incorporating structural information, but also enhances its extensibility to various real-world tasks by a task-specific retrieval finetuning. Additionally, to address the lack of comprehensive HDL search benchmarks, we introduce HDLSearch, a multi-granularity evaluation dataset derived from real-world repository-level projects. Experimental results demonstrate that HDLxGraph significantly improves average search accuracy, debugging efficiency and completion quality by 12.04%, 12.22% and 5.04% compared to similarity-based RAG, respectively.
cover:          /assets/images/covers/HDLxGraph.jpg
authors:
  - Pingqing Zheng
  - Jiayin Qin
  - Fuqi Zhang
  - Shang Wu
  - Yu Cao
  - Caiwen Ding
  - Yang (Katie) Zhao
links:
  Code: https://github.com/Nick-Zheng-Q/HDLxGraph
  Paper: https://arxiv.org/abs/2505.15701
---
