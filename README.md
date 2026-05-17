# AWS FinOps AI Assistant

## Overview

AWS FinOps AI Assistant is a cloud cost observability and optimization platform built on top of the AWS Billing Cost MCP Server. The platform provides centralized visibility into AWS spending patterns, forecasting, anomaly detection, idle resource identification, and AI-assisted cost analysis through an interactive dashboard and Slack integration.

The project was developed during the **Semicolon Hackathon 2026 organized by Persistent**.

---

# Problem Statement

Cloud environments frequently suffer from:

* Lack of real-time cost visibility
* Delayed identification of billing anomalies
* Underutilized infrastructure resources
* Absence of actionable optimization insights
* Fragmented cost reporting workflows

Traditional billing dashboards provide historical metrics but lack operational intelligence and conversational accessibility.

This project addresses those gaps by integrating AWS billing telemetry with AI-driven analysis and collaborative interfaces.

---

# Solution Architecture

```text
Frontend Dashboard / Slack Interface
                │
                ▼
        AWS API Gateway
                │
                ▼
           AWS Lambda
                │
                ▼
 AWS Billing Cost MCP Server
                │
                ▼
      AWS Cost Explorer APIs
                │
                ▼
  AI-Driven Cost Intelligence
```

---

# Core Components

## 1. AWS Billing Cost MCP Server

The AWS Billing Cost MCP Server acts as the central orchestration layer responsible for:

* Fetching AWS billing metrics
* Processing cost analysis requests
* Generating AI-assisted responses
* Integrating with Cost Explorer APIs

---

## 2. API Gateway Layer

AWS API Gateway exposes secure REST endpoints used by:

* Frontend dashboard
* Slack slash commands
* External integrations

Primary endpoint:

```bash
POST /prod/chat
```

Responsibilities:

* Request routing
* API exposure
* Integration abstraction
* Cross-origin communication handling

---

## 3. AWS Lambda Integration

AWS Lambda is used as the execution layer for:

* Slack command processing
* MCP API orchestration
* Dynamic request handling
* Response transformation

Serverless execution enables:

* Low operational overhead
* Scalability
* Cost efficiency
* Event-driven architecture

---

## 4. FinOps Dashboard

The frontend dashboard provides centralized visibility into AWS spend.

### Functionalities

#### Cost Overview

* Current month spend
* Previous month comparison
* Forecasted billing

#### Cost Explorer

* Service-wise cost breakdown
* Date-based filtering
* Usage analytics

#### AI Forecasting

* Predicted end-of-month spend
* Trend analysis
* Optimization recommendations

#### Cost Spike Detection

* Billing anomaly identification
* Service spike correlation
* High-cost workload visibility

#### Idle Resource Detection

* Idle EC2 instances
* Unused EBS volumes
* Low-utilization resources
* Cost-saving opportunities

---

# Slack Integration

Slack integration enables conversational FinOps operations.

### Supported Operations

```bash
/aws-cost
/aws-forecast
/aws-spikes
/aws-idle
```

### Flow

```text
Slack Slash Command
        │
        ▼
 AWS Lambda Handler
        │
        ▼
   MCP Billing API
        │
        ▼
 Slack Response Message
```

This allows engineering and platform teams to retrieve cost insights directly within operational channels.

---

# Technology Stack

## Frontend

* HTML5
* CSS3
* JavaScript
* Chart.js

## Backend

* AWS Lambda
* AWS API Gateway
* Node.js

## AWS Services

* AWS Cost Explorer
* AWS IAM
* AWS Billing APIs

## Integrations

* Slack API
* Slack Slash Commands
* Incoming Webhooks

---

# Key Technical Capabilities

* Real-time AWS billing retrieval
* Service-level spend analysis
* Dynamic cost forecasting
* Conversational AI integration
* Slack-based operational workflows
* Serverless event-driven architecture
* Cost anomaly monitoring
* Idle resource analysis

---

# Operational Benefits

The platform enables organizations to:

* Improve FinOps visibility
* Reduce unnecessary cloud expenditure
* Detect billing anomalies proactively
* Identify optimization opportunities
* Centralize cloud cost operations
* Enhance cross-team collaboration

---

# Security Considerations

* IAM-based service permissions
* API Gateway isolation
* Serverless execution boundaries
* Slack webhook validation
* Controlled AWS Cost Explorer access

---

# Future Enhancements

Planned roadmap items include:

* Multi-account AWS aggregation
* AWS Organizations integration
* Real-time anomaly alerting
* Budget threshold automation
* AI-driven remediation suggestions
* Amazon Bedrock integration
* Kubernetes cost visibility
* Infrastructure optimization scoring

---

# Hackathon Context

This solution was developed as part of:

**Semicolon Hackathon 2026 — Persistent**

Focus Areas:

* Cloud Cost Optimization
* FinOps Automation
* AI-Assisted Infrastructure Operations
* Serverless Cloud Engineering

---

# Conclusion

AWS FinOps AI Assistant demonstrates a scalable approach for integrating AWS billing intelligence, serverless computing, and conversational interfaces into a unified operational FinOps platform.

The project combines AWS-native services with AI-assisted analysis to improve cloud financial governance and infrastructure efficiency.
