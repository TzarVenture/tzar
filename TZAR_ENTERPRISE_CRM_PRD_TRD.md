# Tzar Enterprise CRM Architecture, PRD, TRD & Implementation Roadmap

## 1. Executive Summary & Codebase Analysis

### 1.1 Existing Architecture Review
The **Tzar** platform (`tzarwebsite`) is a Next.js 14 application built to offer digital marketing, website development, brand strategy, design, and media creation services. 

- **Core Tech Stack**: Next.js 14 (App Router), React 18, MongoDB (via Mongoose & native MongoDB client), Razorpay Payment Gateway, PDFKit/PDF-lib (Invoice generation), Nodemailer (Email notifications), NextUI, MDB React, Bootstrap, Framer Motion.
- **Current Lead Capture Touchpoints**:
  1. `/api/submit-form` (Route handler inserting general contact inquiries into MongoDB `contact_db.contacts` and forwarding to Google Sheets webhooks).
  2. `submitContact` Server Action (`src/models/contact.js` -> `Contact` model: name, email, phone, service interest, city, country).
  3. `submitWeb` Server Action (`src/models/webdev.js` -> `Webdev` model: checkboxes for website dev, social media, performance marketing, influencer marketing, brand marketing, SEO, product shoot, logo, packaging, domain, budget/requirements).
  4. `submitHire` Server Action (`src/models/hireus.js` -> `Hireus` model: talent/internship recruitment inquiries with resume link).
  5. Payment & Invoicing Pipeline (`/api/razorpay`, `/api/verify-payment`, `/api/send-invoice`, `/api/download-invoice` -> `Payment` model).

### 1.2 Identified Operational Gaps in Existing Workflow
1. **Passive Lead Storage**: Leads are saved as isolated MongoDB documents without status tracking (`New`, `Contacted`, `Qualified`, `Proposal Sent`, `Negotiation`, `Won`, `Lost`).
2. **No Role-Based Access Control (RBAC)**: Absence of user roles (Admins, Sales Managers, BDEs, Media Buyers, Clients).
3. **Communication Silos**: WhatsApp chats and emails happen outside the system with no centralized audit log or activity timeline against client records.
4. **Lack of Ad Attribution**: No link between Meta Ad spend/campaigns and captured leads or downstream deal value (CPL, CAC, ROAS).
5. **Unstructured File Handling**: No secure file management for design assets, contracts, proposals, brand guidelines, and invoices.
6. **No Client Onboarding Engine**: Absence of structured questionnaires, document collection, and project milestone handoffs.

---

## 2. Product Requirements Document (PRD)

### 2.1 Product Vision & Strategic Objectives
To build **Tzar Enterprise CRM**—a unified, high-performance customer relationship and agency operations platform. The CRM will automate lead acquisition, unify multi-channel communication (WhatsApp Business & Gmail), track Meta Ads ROI in real-time, streamline file exchange, and manage the full client lifecycle from initial inquiry to long-term retainer.

### 2.2 User Personas & Role Access Matrix

| Role | Core Responsibilities | Module Access |
| :--- | :--- | :--- |
| **Super Admin** | Full system control, billing, user management, global analytics | All Modules + System Config & Audit Logs |
| **Agency / Sales Manager** | Pipeline oversight, lead distribution, target tracking, rep SLA reports | Leads, Pipeline, Meta Ads, Client Accounts, Team Reports |
| **Sales Rep / BDE** | Lead qualification, calling, WhatsApp/Email outreach, deal closing | Assigned Leads, Communication Center, Proposal Generator |
| **Media Buyer / Marketer** | Campaign optimization, ad spend tracking, Meta leads verification | Meta Ads Insights, Marketing Leads, Campaign Reports |
| **Account Manager / Specialist**| Client onboarding, project deliverable sharing, asset management | Active Client Profiles, File Manager, Onboarding Forms |
| **Client (External Portal)** | Uploading project assets, reviewing deliverables, invoices, support | Client Portal (Assigned Project Files, Invoices, Status) |

---

### 2.3 Functional Requirements by Module

#### Module 1: Lead Engine & Kanban Pipeline
- **Omnichannel Lead Aggregation**: Auto-ingest leads from existing Tzar web forms, Meta Lead Ads, WhatsApp inbound messages, and manual entry.
- **Customizable Sales Pipelines**: Visual drag-and-drop Kanban board with stages: `New Lead` -> `Contacted` -> `Discovery Call` -> `Proposal Sent` -> `Negotiation` -> `Closed Won` / `Closed Lost`.
- **Lead Scoring & Routing**: Score leads based on service budget, domain requirement, and responsiveness. Auto-assign to BDEs via Round-Robin or workload-based distribution.
- **Activity Timeline**: Full chronological history of calls, emails, WhatsApp messages, status changes, and internal staff notes for every lead.

#### Module 2: Lead Onboarding & Client Profiles
- **Lead-to-Client Transition**: One-click conversion of `Closed Won` leads into active `Client Accounts`.
- **Automated Onboarding Workflows**: Auto-trigger onboarding link sent to client via WhatsApp/Email containing brand questionnaire, requirement forms, and asset upload requests.
- **360° Client Profile**: Single view containing client contact details, active services (Web Dev, SEO, PPC, Branding), financial ledger (payments, pending invoices), uploaded files, and communication history.

#### Module 3: WhatsApp Business Cloud API Integration
- **Unified 2-Way Chat Dashboard**: Intercom-style chat interface for BDEs and Account Managers to interact with contacts over WhatsApp.
- **HSM Message Templates**: Send pre-approved Meta WhatsApp templates (e.g., Lead Welcome, Proposal Notification, Meeting Reminder, Payment Link).
- **Automated Webhooks**: Listen for message delivery statuses (`sent`, `delivered`, `read`) and incoming text/media messages.
- **Broadcast Campaigns**: Filter leads by service/stage and trigger targeted WhatsApp broadcasts with rate-limiting and anti-spam controls.

#### Module 4: Gmail / Google Workspace Integration
- **OAuth2 Multi-Account Sync**: Sync agency team member Gmail accounts to send/receive emails natively within the CRM.
- **Shared Team Inbox**: Log incoming emails from registered lead/client email addresses directly to their CRM activity timeline.
- **Email Composer & Engine**: Rich-text HTML editor with template support, custom merge tags (`{{lead.fullname}}`, `{{service.name}}`), and open/click tracking.

#### Module 5: Meta Ads & Marketing Insights Engine
- **Meta Graph API Integration**: Connect Facebook Ad Accounts to fetch campaign, ad set, and ad-level performance metrics.
- **Key Metrics Displayed**: Ad Spend, Impressions, Clicks, CTR, Cost Per Lead (CPL), Return on Ad Spend (ROAS).
- **Direct Meta Lead Ads Sync**: Real-time webhook listener (`leadgen`) to instantly pull leads captured via Facebook/Instagram instant forms into the `New Lead` column within < 3 seconds.
- **Conversion API (CAPI)**: Push `Closed Won` offline conversions back to Meta Ads Manager to optimize ad algorithms for high-value leads.

#### Module 6: Enterprise File Management System
- **Secure File Storage**: Integrated with AWS S3 / Cloudinary for document assets, client uploads, contracts, design concepts, and reports.
- **Granular File Permissions**: Mark files as `Internal Only` or `Shared with Client`.
- **File Send/Receive Workflows**: Send files directly within WhatsApp or Email threads; clients can upload raw assets (logos, images, copy) directly into their assigned folder.
- **Version Control & Expiry**: Track document revisions and set time-limited secure download links.

#### Module 7: Executive Dashboard & Analytics
- **Sales Analytics**: Revenue generated, win rate, sales velocity, average deal size, rep performance benchmarks.
- **Marketing Analytics**: Top lead acquisition channels, Cost per Lead (CPL) by service, Meta Ad ROI.
- **Operational Metrics**: SLA response times for new leads, client onboarding completion rate.

---

## 3. Technical Requirements Document (TRD)

### 3.1 Architecture Overview & Data Flow
```
                           +-------------------------------------+
                           |         Tzar Public Front-End       |
                           |   (Contact, HireUs, WebDev Forms)   |
                           +------------------+------------------+
                                              |
                                              v
+-----------------------+          +----------+----------+          +------------------------+
| Meta Lead Ads Webhook | -------> |   Next.js API Gateway   | <------- |  WhatsApp Cloud API    |
+-----------------------+          |   & Server Actions  |          +------------------------+
                                   +----------+----------+
                                              |
                     +------------------------+------------------------+
                     |                        |                        |
                     v                        v                        v
            +-----------------+      +-----------------+      +-----------------+
            |  MongoDB Atlas  |      | BullMQ + Redis  |      |  AWS S3 Bucket  |
            | (Database Core) |      | (Async Workers) |      | (File Storage)  |
            +-----------------+      +-----------------+      +-----------------+
```

### 3.2 Database Schema Specification (Mongoose Models)

#### 1. User & Auth Schema (`models/User.js`)
```javascript
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['SUPER_ADMIN', 'SALES_MANAGER', 'BDE', 'MEDIA_BUYER', 'ACCOUNT_MANAGER', 'CLIENT'], 
    default: 'BDE' 
  },
  phone: { type: String },
  avatarUrl: { type: String },
  assignedPipelineIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pipeline' }],
  googleOAuthTokens: {
    accessToken: String,
    refreshToken: String,
    expiryDate: Number
  },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });
```

#### 2. Lead & Opportunity Schema (`models/Lead.js`)
```javascript
const leadSchema = new mongoose.Schema({
  leadCustomId: { type: String, unique: true }, // e.g. TZ-LD-1002
  fullName: { type: String, required: true },
  email: { type: String, required: true, index: true },
  phone: { type: String, required: true, index: true },
  companyName: { type: String },
  city: { type: String },
  country: { type: String },
  source: { 
    type: String, 
    enum: ['WEBSITE_CONTACT', 'WEBSITE_SERVICE_FORM', 'META_LEAD_AD', 'WHATSAPP_INBOUND', 'MANUAL'],
    default: 'WEBSITE_CONTACT'
  },
  interestedServices: [{ type: String }], // WebDev, SEO, PPC, Branding, etc.
  estimatedBudget: { type: Number },
  pipelineId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pipeline', required: true },
  stageId: { type: String, required: true }, // e.g., 'stage_new', 'stage_won'
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  score: { type: Number, default: 0 },
  status: { type: String, enum: ['ACTIVE', 'CONVERTED', 'ARCHIVED', 'LOST'], default: 'ACTIVE' },
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  metaAdDetails: {
    adId: String,
    adName: String,
    campaignId: String,
    campaignName: String,
    formId: String
  }
}, { timestamps: true });
```

#### 3. Client Account Schema (`models/Client.js`)
```javascript
const clientSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  primaryContact: {
    name: String,
    email: String,
    phone: String,
    designation: String
  },
  accountManagerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  onboardingStatus: { 
    type: String, 
    enum: ['NOT_STARTED', 'FORM_SENT', 'IN_REVIEW', 'COMPLETED'], 
    default: 'NOT_STARTED' 
  },
  onboardingData: { type: Map, of: mongoose.Schema.Types.Mixed },
  activeServices: [{ type: String }],
  totalRevenue: { type: Number, default: 0 }
}, { timestamps: true });
```

#### 4. Omnichannel Message Schema (`models/Message.js`)
```javascript
const messageSchema = new mongoose.Schema({
  leadId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead', index: true },
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', index: true },
  channel: { type: String, enum: ['WHATSAPP', 'GMAIL', 'SYSTEM_NOTE'], required: true },
  direction: { type: String, enum: ['INBOUND', 'OUTBOUND'], required: true },
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  senderInfo: { name: String, phoneOrEmail: String },
  content: { type: String },
  mediaUrls: [{ type: String }],
  status: { type: String, enum: ['QUEUED', 'SENT', 'DELIVERED', 'READ', 'FAILED'], default: 'SENT' },
  externalMessageId: { type: String }, // WhatsApp Message ID or Gmail Thread/Message ID
  metadata: { type: Map, of: mongoose.Schema.Types.Mixed }
}, { timestamps: true });
```

#### 5. File Asset Schema (`models/FileAsset.js`)
```javascript
const fileAssetSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  fileUrl: { type: String, required: true },
  fileType: { type: String },
  fileSize: { type: Number },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  relatedLeadId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead' },
  relatedClientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  accessLevel: { type: String, enum: ['PUBLIC_CLIENT', 'INTERNAL_ONLY'], default: 'INTERNAL_ONLY' },
  version: { type: Number, default: 1 }
}, { timestamps: true });
```

#### 6. Meta Ads Insights Cache Schema (`models/MetaInsight.js`)
```javascript
const metaInsightSchema = new mongoose.Schema({
  campaignId: { type: String, required: true, index: true },
  campaignName: { type: String },
  adAccountId: { type: String, required: true },
  spend: { type: Number },
  impressions: { type: Number },
  clicks: { type: Number },
  leadsCount: { type: Number },
  cpl: { type: Number },
  ctr: { type: Number },
  date: { type: Date, required: true }
}, { timestamps: true });
```

---

### 3.3 Integration Specifications

#### 1. Meta Business & Lead Ads Integration
- **Webhook Endpoint**: `POST /api/crm/webhooks/meta-leadgen`
- **Verification Endpoint**: `GET /api/crm/webhooks/meta-leadgen` (Responds to `hub.challenge` token).
- **Execution Flow**:
  1. User fills instant lead form on Facebook/Instagram.
  2. Meta posts event `leadgen_id` to webhooks endpoint.
  3. Async queue fetches full lead payload via Meta Graph API: `GET /v19.0/{leadgen_id}?access_token={PAGE_ACCESS_TOKEN}`.
  4. Lead parsed, deduplicated against email/phone in MongoDB, assigned score, inserted into `Lead` collection, and routed to BDE.

#### 2. WhatsApp Business Cloud API Integration
- **Webhook Endpoint**: `POST /api/crm/webhooks/whatsapp`
- **Outbound Sending API**: `POST /api/crm/whatsapp/send-message`
- **Capabilities**:
  - Outbound text and media messages (PDFs, Images, Agreements).
  - Webhook listener for incoming messages & status callbacks (`sent`, `delivered`, `read`).
  - Template Message dispatch for automated onboarding & notifications.

#### 3. Gmail API & Google Workspace Sync
- **Authentication**: OAuth2 with `https://www.googleapis.com/auth/gmail.modify` scope.
- **Sync Mechanism**: Background cron worker runs every 3 minutes using `gmail.users.messages.list` with query `q: "from:lead@email.com OR to:lead@email.com"`.
- **Parsing**: Decode base64 body, handle attachments, auto-attach to `Message` timeline.

#### 4. AWS S3 / Cloudinary File Engine
- **Presigned Upload Route**: `POST /api/crm/files/presigned-url`
- **Client Direct Upload**: Front-end requests signed URL, uploads file directly to Cloudinary/S3, then commits file metadata to MongoDB `FileAsset`.

---

## 4. Comprehensive Features List & Priority Matrix

| Category | Feature Name | Description | Priority |
| :--- | :--- | :--- | :--- |
| **Auth & Security** | Multi-Role Authentication | JWT / NextAuth session management with 6 distinct roles | **P0** |
| **Auth & Security** | Audit Logging System | Track user actions (lead deleted, file downloaded, status changed) | **P1** |
| **Lead Engine** | Drag-and-Drop Pipeline | Interactive Kanban board with live status updates | **P0** |
| **Lead Engine** | Round-Robin Lead Routing | Auto-assign incoming leads to BDEs based on rules | **P0** |
| **Lead Engine** | Lead Import/Export | Bulk CSV / XLSX import and export engine | **P1** |
| **WhatsApp Engine**| Live 2-Way Chat Dashboard | Real-time chat interface for WhatsApp messaging | **P0** |
| **WhatsApp Engine**| Template Message Dispatcher | Send pre-approved HSM templates to leads | **P0** |
| **WhatsApp Engine**| Broadcast Campaign Manager | Mass messaging to segmented lead lists | **P1** |
| **Gmail Engine** | Email Timeline Sync | Auto-log lead email exchanges directly to Lead timeline | **P0** |
| **Gmail Engine** | HTML Email Templates | Reusable corporate templates with dynamic variables | **P1** |
| **Meta Ads Engine** | Meta Lead Ads Instant Sync | Real-time webhook capture for Facebook lead forms | **P0** |
| **Meta Ads Engine** | Ad Campaign Insights UI | Dashboard showing CPL, ROAS, Spend per campaign | **P0** |
| **Meta Ads Engine** | Offline Conversions API (CAPI)| Send deal conversion events back to Meta | **P2** |
| **File Manager** | Presigned S3/Cloudinary Upload | Secure client & team document upload engine | **P0** |
| **File Manager** | Granular Asset Access Control| Toggle `Client-Visible` vs `Internal-Only` permissions | **P0** |
| **Client Onboarding**| Interactive Onboarding Forms| Custom questionnaire & requirement builder | **P0** |
| **Client Profile** | 360° Account Hub | Consolidated client view (Invoices, Assets, Project status) | **P0** |
| **Analytics** | Executive ROI Dashboard | Sales performance, pipeline velocity, ad attribution metrics | **P0** |

---

## 5. Development Steps & Execution Roadmap

### Phase 1: Core Foundation & Security Infrastructure (Weeks 1 - 2)
- [ ] Initialize CRM sub-folder / app layout structure in Next.js (`src/app/crm/...`).
- [ ] Implement NextAuth.js / JWT Auth with MongoDB adapter.
- [ ] Create schemas: `User`, `Lead`, `Client`, `Pipeline`, `ActivityLog`.
- [ ] Implement RBAC middleware protecting API routes and UI sections.
- [ ] Create base UI layouts with sidebar navigation and dark/light support.

### Phase 2: Lead Management Engine & Kanban Board (Weeks 3 - 4)
- [ ] Refactor existing form submission handlers (`/api/submit-form`, `submitContact`, `submitWeb`) to stream into the new CRM `Lead` schema.
- [ ] Build drag-and-drop Kanban pipeline component using `dnd-kit` / `@hello-pangea/dnd`.
- [ ] Build Lead Detail modal containing 360° lead info, status editor, and notes log.
- [ ] Implement Round-Robin BDE assignment module.
- [ ] Add CSV/Excel Lead Import & Export capability using existing `exceljs`/`xlsx` packages.

### Phase 3: WhatsApp & Gmail Communication Center (Weeks 5 - 6)
- [ ] Configure Meta WhatsApp Cloud API credentials and verify webhooks (`/api/crm/webhooks/whatsapp`).
- [ ] Build Intercom-style 2-way WhatsApp Chat UI component.
- [ ] Implement WhatsApp HSM Template sender module.
- [ ] Setup Google OAuth2 integration for team Gmail accounts.
- [ ] Build Gmail sync background process to pull email threads matching lead contacts.
- [ ] Build unified communication timeline component inside Lead Detail view.

### Phase 4: Meta Ads Insights & Lead Ads Integration (Weeks 7 - 8)
- [ ] Set up Meta Graph API app connection and access token refresh handler.
- [ ] Implement Facebook Lead Ads webhook listener (`/api/crm/webhooks/meta-leadgen`).
- [ ] Build Meta Ads Performance Dashboard displaying Spend, Impressions, CTR, CPL, and ROAS.
- [ ] Create attribution tracker mapping leads to specific Meta Campaign IDs.

### Phase 5: Enterprise File Management & Client Onboarding (Weeks 9 - 10)
- [ ] Configure Cloudinary / AWS S3 presigned upload API (`/api/crm/files/presigned-url`).
- [ ] Build File Manager UI with drag-and-drop file upload, preview, download, and permission toggle.
- [ ] Create Lead-to-Client one-click conversion process.
- [ ] Build custom client onboarding questionnaire engine.
- [ ] Link existing Razorpay payment & invoice system (`Payment` model, PDF generator) to Client Accounts.

### Phase 6: Executive Analytics, Testing & Production Deployment (Weeks 11 - 12)
- [ ] Build Executive Admin Dashboard displaying revenue charts, sales velocity, and rep leaderboards.
- [ ] Conduct end-to-end integration testing for all webhooks (WhatsApp, Meta Lead Ads, Razorpay).
- [ ] Conduct RBAC security audit and input sanitization check.
- [ ] Deploy CRM to production infrastructure (Vercel / AWS) with MongoDB Atlas & Redis instance.

---

## 6. Verification & Quality Assurance Plan

### Automated Verification
- **Unit & Integration Tests**: API route testing using Jest/Supertest for lead insertion, stage transitions, and file upload pre-signing.
- **Webhook Simulation**: Payload simulation scripts to test WhatsApp and Meta Lead Ads webhook resilience under high load.

### Manual Verification Steps
1. **Lead Lifecycle Verification**: Submit form on Tzar homepage -> Verify lead appears in `New Lead` stage -> Drag to `Contacted` -> Convert to `Client`.
2. **WhatsApp 2-Way Chat Verification**: Send text from personal WhatsApp -> Verify incoming webhook logs message in CRM chat UI -> Reply from CRM chat UI -> Verify delivery on mobile device.
3. **Meta Lead Ads Sync**: Test via Meta Lead Ads Testing Tool -> Verify lead is ingested in < 3 seconds with correct campaign tags.
4. **File Manager & RBAC Check**: Log in as Client -> Ensure internal staff files are completely hidden; verify file upload/download works smoothly.
