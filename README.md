# OrderDesk - Offline-Capable Task/Order Management App

A React Native application demonstrating offline-first architecture with automatic synchronization capabilities. Built with TypeScript, Redux Toolkit, and Redux Thunk.

## Features

- ✅ **List Screen**: Display orders with title, amount, created date, and sync status
- ✅ **Create Screen**: Form with validation (required fields, valid numbers)
- ✅ **Edit Screen**: Edit existing records before they are synced
- ✅ **Offline Support**: App works seamlessly without internet connectivity
- ✅ **Auto Sync**: Automatically syncs pending records when network is restored
- ✅ **Manual Retry**: Retry option for failed syncs
- ✅ **Network Status**: Visual indicator when offline

## Technical Stack

- **React Native** 0.83.1 with TypeScript
- **Redux Toolkit** for state management
- **Redux Thunk** for async operations
- **React Navigation** (Native Stack) for navigation
- **AsyncStorage** for local persistence
- **NetInfo** for network detection

## Project Structure

```
orderDesk/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── OrderCard.tsx
│   │   └── NetworkStatusBar.tsx
│   ├── hooks/               # Custom React hooks
│   │   └── useNetworkStatus.ts
│   ├── navigation/          # Navigation configuration
│   │   └── AppNavigator.tsx
│   ├── screens/             # Screen components
│   │   ├── OrderListScreen.tsx
│   │   ├── CreateOrderScreen.tsx
│   │   └── EditOrderScreen.tsx
│   ├── services/            # Business logic services
│   │   ├── storage.ts       # AsyncStorage wrapper
│   │   └── sync.ts          # Sync service (mock API)
│   ├── store/               # Redux store configuration
│   │   ├── index.ts         # Store setup
│   │   ├── hooks.ts         # Typed Redux hooks
│   │   ├── slices/          # Redux slices
│   │   │   └── ordersSlice.ts
│   │   └── thunks.ts        # Async thunks
│   └── types/               # TypeScript types
│       └── index.ts
├── App.tsx                  # Root component
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js >= 20
- React Native development environment set up
- iOS Simulator (for iOS) or Android Emulator (for Android)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **For iOS (macOS only):**
   ```bash
   cd ios && pod install && cd ..
   ```

3. **Start Metro bundler:**
   ```bash
   npm start
   ```

4. **Run on iOS:**
   ```bash
   npm run ios
   ```

5. **Run on Android:**
   ```bash
   npm run android
   ```

## How It Works

### Offline-First Architecture

1. **Local Storage**: All orders are persisted locally using AsyncStorage
2. **Sync Status**: Each order has a sync status:
   - `PENDING`: Created offline, waiting to sync
   - `SYNCED`: Successfully synced to server
   - `FAILED`: Sync attempt failed

3. **Auto Sync**: When network is restored, pending orders are automatically synced
4. **Manual Retry**: Failed syncs can be retried manually via the "Retry Sync" button

### State Management

- **Redux Toolkit**: Centralized state management
- **Redux Thunk**: Handles async operations (API calls, storage operations)
- **Actions**: Synchronous state updates
- **Thunks**: Async operations with side effects

### Network Detection

- Uses `@react-native-community/netinfo` to detect network status
- Automatically triggers sync when network is restored
- Shows visual indicator when offline

## Usage

1. **Create Order**: Tap "Create Order" button, fill in title and amount, submit
2. **View Orders**: All orders are displayed in a list with sync status badges
3. **Edit Order**: Tap on an unsynced order to edit (synced orders cannot be edited)
4. **Sync**: Pending orders sync automatically when online, or use "Sync Now" button
5. **Retry**: Failed syncs can be retried using the "Retry Sync" button on the order card

## Sync Service

The sync service (`src/services/sync.ts`) is currently a mock implementation that:
- Simulates network delay (1 second)
- Has a 10% failure rate for testing purposes
- Returns synced orders with updated status

In a production environment, replace this with actual API calls to your backend.

## Code Quality

- ✅ TypeScript for type safety
- ✅ Clean folder structure
- ✅ Reusable components
- ✅ Custom hooks for network status
- ✅ Proper error handling
- ✅ Form validation
- ✅ No console.logs in production code
- ✅ Meaningful variable names and comments

## Git Commit History

The project follows logical commit history:
- Initial setup and dependencies
- Core architecture (Redux, navigation, storage)
- Feature implementation (screens, components)
- Integration and polish

## Notes

- UI design is minimal and functional (as per requirements)
- Focus is on clean code, proper architecture, and offline capabilities
- Sync service is mocked for demonstration purposes
- Error messages use default messages to preserve information

## License

Private project for demonstration purposes.
