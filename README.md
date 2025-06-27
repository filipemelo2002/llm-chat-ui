# 🧠 AI Chatbot with Document Retrieval using LangChain, pgvector, and Ollama

This project is a full-stack AI chatbot system that allows users to upload files (PDF, DOCX, TXT, etc.), processes them into vector embeddings, stores them in a PostgreSQL database with `pgvector`, and uses a local LLM (like `deepseek-r1:8b` via Ollama) to answer natural language questions based on the document content.

---

## 🚀 Features

- 🗂️ Upload support for PDF, DOCX, TXT, HTML, Markdown, and EML
- 📤 File storage with self-hosted [MinIO](https://min.io/) (S3-compatible)
- 📄 Automatic text extraction and chunking
- 🔎 Semantic search using [LangChain](https://js.langchain.com/) + `RecursiveCharacterTextSplitter`
- 🧠 Embedding via [Ollama Embeddings](https://github.com/langchain-ai/langchainjs)
- 🛢️ Vector storage in PostgreSQL using the [`pgvector`](https://github.com/pgvector/pgvector) extension
- 💬 Retrieval-Augmented Generation (RAG) chatbot using Ollama + LangChain
- ✅ Async file processing via BullMQ with Redis

---