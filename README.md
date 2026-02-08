# TOEIC Vocabulary Study App

A React Native (Expo) mobile app for studying TOEIC vocabulary, consuming a Node.js Express API backend.

## 📁 Project Structure

```
moblie_appV2/
├── App.js                          # Main app entry point
├── app.json                        # Expo configuration
├── babel.config.js                 # Babel configuration
├── package.json                    # Dependencies
├── src/
│   ├── services/
│   │   └── api.js                  # API service layer with JWT
│   ├── hooks/
│   │   └── useFlashcards.js        # Custom hook for flashcards
│   ├── context/
│   │   └── StudyContext.js         # Global state management
│   └── screens/
│       └── StudySessionScreen.js   # Main study UI
└── assets/                         # App icons and images
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your device

### Installation

```bash
# Navigate to project directory
cd moblie_appV2

# Install dependencies
npm install

# Start the development server
npm start
```

### Running on Device/Emulator

```bash
# Start with Expo
npx expo start

# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios
```

## ⚙️ Configuration

### API Base URL

Update the API base URL in `src/services/api.js`:

```javascript
const BASE_URL = __DEV__
  ? "http://YOUR_LOCAL_IP:3000" // Use actual IP, not localhost
  : "https://your-production-api.com";
```

> **Note**: On mobile devices, `localhost` won't work. Use your machine's IP address (e.g., `192.168.1.100:3000`).

## 📦 Features

### 1. API Service Layer (`src/services/api.js`)

- Generic fetch wrapper with timeout
- JWT token management (AsyncStorage)
- Automatic token refresh on 401
- Error handling with custom ApiError class

### 2. useFlashcards Hook (`src/hooks/useFlashcards.js`)

- Fetches words from `GET /api/words/feed`
- Submits results to `POST /api/study/log`
- **Optimistic updates** with automatic rollback
- Card navigation (next/prev/goTo)
- Progress tracking

### 3. Global State (`src/context/StudyContext.js`)

- React Context + useReducer pattern
- Centralized state for multi-screen apps
- Session statistics tracking
- Pending updates tracking for sync status

### 4. Study Session UI (`src/screens/StudySessionScreen.js`)

- Flip card animation
- Quality rating buttons (Again, Hard, Good, Easy)
- Progress bar
- Loading/Error/Empty states
- Pull-to-refresh

## 🔄 Optimistic Updates Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   User taps  │────▶│   Optimistic │────▶│   API Call   │
│    rating    │     │    Update    │     │   Started    │
└──────────────┘     └──────────────┘     └──────────────┘
                                                  │
        ┌─────────────────────────────────────────┤
        │                                         │
        ▼                                         ▼
┌──────────────┐                         ┌──────────────┐
│   Success:   │                         │   Error:     │
│  Keep state  │                         │   Rollback   │
└──────────────┘                         └──────────────┘
```

## 📱 Backend API Requirements

Ensure your Node.js backend provides:

```
GET  /api/words/feed?limit=20
Response: { data: [{ id, word, definition, ... }] }

POST /api/study/log
Body: { wordId, quality, timestamp }
Response: { success: true, nextReview: "2024-01-15T..." }

POST /api/auth/refresh
Body: { refreshToken }
Response: { accessToken, refreshToken }
```

## 🎨 Customization

### Theme Colors

Edit the color scheme in `StudySessionScreen.js`:

```javascript
backgroundColor: '#1A1A2E',  // Dark background
cardColor: '#2D2D44',        // Card background
accentColor: '#4DABF7',      // Primary accent
```

### Quality Ratings

Modify the SM-2 algorithm intervals in `useFlashcards.js`:

```javascript
const intervals = [0, 1, 3, 7, 14, 30]; // Days for quality 0-5
```

## 📄 License

MIT
