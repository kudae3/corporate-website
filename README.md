# Digital Tide

## About This Project

![Digital Tide - Empowering Your Business with Innovative Digital Solutions](./main.png)

Digital Tide is a modern digital solutions platform built to empower businesses with innovative technology services. The platform offers comprehensive services including web development, mobile app development, cloud solutions, AI & data analytics, e-commerce solutions, and digital transformation consulting.

The project features a sleek, responsive design with engaging animations and interactive components, providing an exceptional user experience for showcasing digital services and capabilities. Built with modern web technologies, it includes user authentication, admin functionality, and a robust backend infrastructure.

## Built With

This project leverages cutting-edge technologies and frameworks:

### Frontend

- ![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black) - React framework for production
- ![React](https://img.shields.io/badge/React-19.0.0-blue) - JavaScript library for building user interfaces
- ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) - Typed superset of JavaScript
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC) - Utility-first CSS framework
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.18.1-ff69b4) - Motion library for React

### UI Components & Libraries

- ![Radix UI](https://img.shields.io/badge/Radix_UI-Latest-purple) - Low-level UI primitives
- ![ShadCN](https://img.shields.io/badge/ShadCN-Components-gray) - Re-usable components built with Radix UI
- ![Lucide React](https://img.shields.io/badge/Lucide_React-0.511.0-orange) - Beautiful & consistent icons
- ![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green) - Professional-grade animation library

### Backend & Database

- ![MongoDB](https://img.shields.io/badge/MongoDB-8.15.0-green) - NoSQL database
- ![Mongoose](https://img.shields.io/badge/Mongoose-8.15.0-red) - MongoDB object modeling

### Authentication & User Management

- ![Clerk](https://img.shields.io/badge/Clerk-6.20.0-purple) - Complete user management solution

### File Storage

- ![EdgeStore](https://img.shields.io/badge/EdgeStore-0.5.2-blue) - File upload and storage solution

### Additional Tools

- ![TanStack Query](https://img.shields.io/badge/TanStack_Query-5.80.6-red) - Data fetching and caching
- ![Axios](https://img.shields.io/badge/Axios-1.9.0-blue) - HTTP client
- ![React Leaflet](https://img.shields.io/badge/React_Leaflet-5.0.0-green) - Interactive maps
- ![Zustand](https://img.shields.io/badge/Zustand-5.0.5-orange) - State management

## Getting Started

Follow these steps to set up the Digital Tide project locally:

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- MongoDB database
- ngrok (for webhook development)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kudae3/digital-tide.git
   cd digital-tide
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   ```bash
   cp .env.example .env
   ```

4. **Configure Environment Variables**

   Update your `.env` file with the following configurations:

   #### Clerk Authentication Setup

   - Sign up at [Clerk](https://clerk.com/)
   - Create a new application
   - Get your keys from the Clerk Dashboard:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

   #### Clerk Webhook Configuration

   For user synchronization between Clerk and MongoDB, you need to set up webhooks:

   - Follow the [Clerk Webhook Documentation](https://clerk.com/docs/webhooks/sync-data)
   - Set up ngrok for local development:

     ```bash
     # Install ngrok globally
     npm install -g ngrok

     # Start ngrok tunnel (run this in a separate terminal)
     ngrok http --url=<YOUR_FORWARDING_URL> 3000
     ```

   - Configure webhook endpoint in Clerk Dashboard pointing to your ngrok URL
   - Add the webhook signing secret:

   ```env
   CLERK_WEBHOOK_SIGNING_SECRET=your_webhook_signing_secret
   ```

   #### MongoDB Setup

   - Create a MongoDB Atlas account or use local MongoDB
   - Get your connection string:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

   #### Admin Configuration

   Set the admin email (only this email will have admin privileges):

   ```env
   ADMIN_EMAIL=your_admin_email@example.com
   ```

   #### EdgeStore Setup

   - Sign up at [EdgeStore](https://edgestore.dev/)
   - Create a new project and get your credentials:

   ```env
   EDGE_STORE_ACCESS_KEY=your_edge_store_access_key
   EDGE_STORE_SECRET_KEY=your_edge_store_secret_key
   ```

5. **Start the Development Server**

   ```bash
   npm run dev
   ```

6. **Start ngrok (in a separate terminal)**
   ```bash
   ngrok http --url=<YOUR_FORWARDING_URL> 3000
   ```

The application will be available at `http://localhost:3000`

### Development Workflow

1. **Local Development**: Run `npm run dev` for the Next.js development server
2. **Webhook Testing**: Keep ngrok running to test Clerk webhooks locally
3. **Database**: Ensure MongoDB connection is active
4. **File Uploads**: EdgeStore handles file storage and CDN delivery

### Project Structure

```
digital-tide/
├── src/
│   ├── app/
│   │   ├── (home)/         # Home page route group
│   │   │   └── page.tsx    # Home page
│   │   ├── api/            # API routes
│   │   │   ├── applications/
│   │   │   ├── careers/
│   │   │   ├── edgestore/
│   │   │   ├── users/
│   │   │   └── webhooks/
│   │   ├── careers/        # Careers pages
│   │   │   ├── [type]/     # Dynamic career type routes
│   │   │   ├── Types/      # Career type definitions
│   │   │   └── page.tsx    # Main careers page
│   │   ├── components/     # Reusable components
│   │   │   ├── AboutSection.tsx
│   │   │   ├── AlertDialog.tsx
│   │   │   ├── ContactCTA.tsx
│   │   │   ├── FeaturedProjects.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── MyMap.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ServicesPreview.tsx
│   │   │   └── YangonMap.tsx
│   │   ├── contact-us/     # Contact page
│   │   │   └── page.tsx
│   │   ├── dashboard/      # Admin dashboard
│   │   │   ├── (users)/
│   │   │   ├── applications/
│   │   │   ├── block-list/
│   │   │   ├── careers/
│   │   │   ├── components/
│   │   │   └── layout.tsx
│   │   ├── services/       # Services page
│   │   │   └── page.tsx
│   │   ├── test/           # Test page
│   │   │   └── page.tsx
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   ├── loading.tsx     # Loading component
│   │   └── not-found.tsx   # 404 page
│   ├── components/
│   │   └── ui/            # UI components
│   ├── lib/               # Utility functions
│   └── routes.ts          # Route definitions
├── public/                # Static assets
└── ...config files
```

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

### Key Features

- 🎨 Modern, responsive design with dark/light mode
- 🔐 Complete authentication system with Clerk
- 📊 Admin dashboard functionality
- 🗄️ MongoDB integration with Mongoose
- 📁 File upload and management with EdgeStore
- 🎭 Rich animations with Framer Motion and GSAP
- 🗺️ Interactive maps with React Leaflet
- 📱 Mobile-responsive design
- ⚡ Optimized performance with Next.js 15

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Support

If you encounter any issues or have questions, please create an issue in the GitHub repository.

---

Built with ❤️ by the Kudae Sithu
