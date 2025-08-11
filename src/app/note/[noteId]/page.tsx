"use client";
import { Download, Home, LogOut, Trash } from "lucide-react";
import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

const page = () => {
  const content = `
## 1. Introduction
System Design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specific requirements.

It focuses on **how** to design a system that is:
- **Scalable**
- **Reliable**
- **Maintainable**
- **Efficient**

---

## 2. Key Components of System Design

### 2.1 Client
The device or application that sends requests to the server.

### 2.2 Server
Processes client requests and sends responses back.

### 2.3 Database
Stores and manages data.
- **SQL** (e.g., MySQL, PostgreSQL) — structured, relational.
- **NoSQL** (e.g., MongoDB, Cassandra) — flexible, unstructured or semi-structured.

### 2.4 APIs
Defines how components interact (e.g., REST, GraphQL).

---

## 3. Common Concepts

### 3.1 Scalability
The system’s ability to handle growth in workload.
- **Vertical Scaling** — adding more power to the same machine.
- **Horizontal Scaling** — adding more machines.

### 3.2 Load Balancing
Distributes incoming requests evenly across multiple servers.
- **Examples:** Nginx, HAProxy, AWS ELB.

### 3.3 Caching
Stores frequently accessed data for faster retrieval.
- **Examples:** Redis, Memcached.

### 3.4 Database Sharding
Splitting a database into smaller, faster, more manageable parts.

### 3.5 Replication
Keeping copies of data across multiple machines to improve availability.

---

## 4. Example: URL Shortener System

### Requirements
- Shorten a long URL to a short one.
- Redirect short URL to the original URL.
- Handle high read traffic.

### High-Level Design
1. **Clients** send requests to shorten URLs.
2. **Load Balancer** distributes requests to **Application Servers**.
3. **Database** stores mappings between short and long URLs.
4. **Cache** stores frequently accessed short URLs for faster redirection.

**Diagram (Text Representation):**
`;
  return (
    <div className="w-full flex flex-col">
      {/* navbar */}
      <div className="flex justify-end">
        <div className="flex gap-4">
          {/* home */}
          <div className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
            <Home></Home>
          </div>
          {/* logout */}
          <div className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
            <LogOut></LogOut>
          </div>
        </div>
      </div>

      {/* heading-options */}
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-[30px] tracking-tight">
          How to Crack System Design Interviews - Drive With Me
        </h1>
        <div className="flex gap-1">
          <div className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
            <Download size={18}></Download>
          </div>
          <div className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
            <Trash size={18}></Trash>
          </div>
        </div>
      </div>

      {/* content-display-using-markdown */}
      <div className="w-full">
        <MarkdownPreview source={content} style={{ padding: 16 }} />
      </div>
    </div>
  );
};

export default page;
