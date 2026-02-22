#!/bin/bash
# ============================================
# MycoNurseries - Quick Setup Script
# ============================================
# Usage: chmod +x setup.sh && ./setup.sh
# This installs all dependencies and starts
# both the backend and frontend servers.
# ============================================

set -e

echo ""
echo "🍄 MycoNurseries Setup"
echo "======================"
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required but not installed."
    echo "   Download it from: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v)
echo "✅ Node.js found: $NODE_VERSION"

# Check for npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is required but not installed."
    exit 1
fi

NPM_VERSION=$(npm -v)
echo "✅ npm found: v$NPM_VERSION"
echo ""

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd my-backend
npm install
echo "✅ Backend dependencies installed"
echo ""

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd ../my-frontend
npm install
echo "✅ Frontend dependencies installed"
echo ""

cd ..

echo "============================================"
echo "✅ Setup complete!"
echo ""
echo "To start the application, run:"
echo ""
echo "  1. Start backend:   cd my-backend && node server.js"
echo "  2. Start frontend:  cd my-frontend && npm start"
echo ""
echo "Or run both at once:"
echo ""
echo "  cd my-backend && node server.js &"
echo "  cd my-frontend && npm start"
echo ""
echo "Then open: http://localhost:3000"
echo ""
echo "📊 Analytics:  http://localhost:3000/#/analytics"
echo "🔐 Admin:      http://localhost:3000/#/admin"
echo "   Password:   letmein"
echo "============================================"
