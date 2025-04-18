---
title: "EmbedME"
description: "Embedme is an embeddable chatbot that seamlessly integrates into any portfolio website, effectively representing the user and showcasing their unique professional identity."
image: "/embed-me-embed-your-own-chatbot-to-your-portfolio.png"
technologies:
  - Pinecone
  - Langchain
  - Nextjs
  - Vercel
  - Gemini
  - Prisma
  - PostgresSQL
  - Tailwind
  - Neon
  - ShadCN
githubUrl: "https://github.com/aayushpagare21-compcoder/embedme"
liveUrl: "https://embedme-l7sk.vercel.app"
---

# Embedme

**Embedme** is a personalized, embeddable AI chatbot built to represent users on their portfolio websites. It interacts with visitors, answers questions about your background, and showcases your professional identity—all powered by cutting-edge AI.

## Features

- Embed-ready chatbot for personal and portfolio websites
- Smart, AI-driven conversations based on your uploaded professional info
- Upload a simple text file to personalize your chatbot
- Context-aware responses using Retrieval-Augmented Generation (RAG)
- **Live shareable URL** generated for every user
- **Embeddable via iframe**—no code changes needed on your site
- Customizable look and feel: color, layout, tone, and behavior
- Fully mobile-friendly and optimized for performance

## How It Works

1. **Sign up and upload** your professional info as a text file
2. Content is processed, embedded using **Google's text-bison model**, and stored in a **Pinecone vector database**
3. On each visitor query, a **RAG pipeline** retrieves the most relevant context
4. **Gemini 1.5 Flash** generates intelligent, real-time responses tailored to your content
5. Your chatbot is hosted at a **live URL**, which can also be embedded on your site via iframe

## Technical Details

- **Frontend**: Built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **ShadCN UI**
- **Embedding**: Powered by **Google’s text-bison model**
- **Vector Storage**: Handled by **Pinecone** for fast semantic retrieval
- **LLM Integration**: Uses **Gemini 1.5 Flash** for response generation
- **AI Orchestration**: Managed via a custom **RAG pipeline**
- **Authentication**: Handled using **NextAuth**
- **Deployment**: Fully serverless, hosted on **Vercel**
- **Customization**: Users can adjust chatbot appearance.
