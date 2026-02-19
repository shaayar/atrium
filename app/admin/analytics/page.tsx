"use client";

import React, { useState, useEffect } from 'react';
import { analytics } from '@/lib/analytics';
import type { AnalyticsData } from '@/lib/analytics';

const AdminAnalytics: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    userCount: 0,
    waitlistSignups: 0,
    buttonClicks: 0,
    totalSessionTime: 0,
    averageSessionTime: 0
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const data = analytics.getData();
      setAnalyticsData(data);
      
      // Update data every 5 seconds
      const interval = setInterval(() => {
        setAnalyticsData(analytics.getData());
      }, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'atrium2026') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleReset = () => {
    analytics.reset();
    setAnalyticsData(analytics.getData());
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          <h1 className="text-2xl font-lec mb-8 text-center">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/50"
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-lec">Atrium Analytics</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-white/60 hover:text-white transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 border border-white/20 rounded-lg p-6">
            <h3 className="text-lg font-lec mb-2">Total Users</h3>
            <p className="text-3xl font-bold">{analyticsData.userCount}</p>
            <p className="text-sm text-white/60">Unique visitors</p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-lg p-6">
            <h3 className="text-lg font-lec mb-2">Waitlist Signups</h3>
            <p className="text-3xl font-bold">{analyticsData.waitlistSignups}</p>
            <p className="text-sm text-white/60">Total conversions</p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-lg p-6">
            <h3 className="text-lg font-lec mb-2">Button Clicks</h3>
            <p className="text-3xl font-bold">{analyticsData.buttonClicks}</p>
            <p className="text-sm text-white/60">Total interactions</p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-lg p-6">
            <h3 className="text-lg font-lec mb-2">Avg Session Time</h3>
            <p className="text-3xl font-bold">{Math.round(analyticsData.averageSessionTime / 1000)}s</p>
            <p className="text-sm text-white/60">Per visitor</p>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={handleReset}
            className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors"
          >
            Reset Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
