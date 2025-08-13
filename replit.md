# Home Care Vida Melhor

## Overview

Home Care Vida Melhor is a modern full-stack web application for a home healthcare service company. The application provides a professional marketing website with a lead generation form that collects pre-qualification information from potential clients. The system allows families to request quotes for home care services for elderly patients and those with comorbidities, with seamless integration to WhatsApp for instant communication.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React with TypeScript**: Modern React application using functional components and hooks
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and CSS variables for theming
- **Form Management**: React Hook Form with Zod validation for type-safe form handling
- **State Management**: TanStack Query for server state management and data fetching

### Backend Architecture
- **Express.js Server**: Node.js backend with Express framework
- **TypeScript**: Full TypeScript implementation for type safety
- **Storage Interface**: Abstract storage interface with in-memory implementation (ready for database integration)
- **Middleware**: Custom logging middleware for API request tracking
- **Development Setup**: Vite integration for hot module replacement and development server

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with Neon Database serverless connection
- **Schema Management**: Centralized schema definitions in shared module with Zod validation
- **Migration Support**: Drizzle Kit for database migrations and schema management
- **Current Implementation**: In-memory storage with interface pattern for easy database switching

### Form Processing and Lead Generation
- **Pre-qualification Form**: Comprehensive form collecting patient information, care requirements, and scheduling preferences
- **WhatsApp Integration**: Automatic formatting and redirection to WhatsApp for instant communication
- **Validation**: Robust client-side validation with server-side schema validation using Zod

### Responsive Design and User Experience
- **Mobile-First Design**: Responsive layout optimized for all device sizes
- **Accessibility**: ARIA labels and semantic HTML structure
- **Component Testing**: Data test IDs for component testing and user interaction tracking
- **Toast Notifications**: User feedback system for form submissions and errors

## External Dependencies

### UI and Styling
- **shadcn/ui**: Complete component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide Icons**: Modern icon library for consistent iconography
- **Google Fonts**: Healthcare-focused typography (Source Sans 3 for body text, Merriweather serif for headings)
- **Visual Design**: Professional healthcare imagery focused on humanized care and patient-caregiver interactions

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database for production
- **Drizzle ORM**: Type-safe database toolkit and query builder
- **Drizzle Kit**: Database migration and introspection tools

### Development and Build Tools
- **Vite**: Fast build tool and development server with React plugin
- **TypeScript**: Static type checking and improved developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration

### Communication Integration
- **WhatsApp Business API**: Direct integration for lead communication
- **Custom WhatsApp Formatter**: Utility functions for message formatting and URL generation

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

### Development Environment
- **Replit Integration**: Development environment optimization with Replit-specific plugins
- **Runtime Error Overlay**: Enhanced error handling and debugging in development
- **Cartographer Plugin**: Code mapping and navigation tools for Replit environment