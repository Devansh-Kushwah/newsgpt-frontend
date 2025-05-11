# NewsGPT Frontend

A React-based frontend for an AI-powered news chat application that allows users to have conversations about news articles.

## Features

- **Chat Interface**: Real-time chat with AI about news articles
- **Session Management**: 
  - Unique device identification
  - Multiple chat sessions per device
  - Session history tracking
- **Responsive Sidebar**: 
  - Collapsible navigation
  - List of all chat sessions
  - Quick access to new chats

## Component Structure

### App.tsx
- Main application component
- Handles session management and device identification
- Manages chat state and message streaming
- Routes between new and existing chat sessions

### History.tsx
- Displays chat history for a specific session
- Shows conversation timeline
- Handles message streaming and display

### Sidebar.tsx
- Collapsible navigation panel
- Lists all chat sessions for the current device
- Provides quick access to create new chats
- Shows session timestamps and preview messages

## Session Management

- Each device gets a unique identifier stored in localStorage
- Chat sessions are associated with device IDs
- Session format: `{deviceId}:d-and-s:{randomString}`
- Sessions persist across page reloads

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Dependencies

- React
- React Router
- UUID (for device identification)
- TypeScript

## Environment Variables

Create a `.env` file with:
