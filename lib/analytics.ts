// Analytics tracking for Atrium
interface AnalyticsData {
  userCount: number;
  waitlistSignups: number;
  buttonClicks: number;
  totalSessionTime: number;
  averageSessionTime: number;
}

class AnalyticsTracker {
  private data: AnalyticsData = {
    userCount: 0,
    waitlistSignups: 0,
    buttonClicks: 0,
    totalSessionTime: 0,
    averageSessionTime: 0
  };
  private startTime: number = Date.now();
  private sessionStartTime: number = Date.now();

  constructor() {
    // Check if we're on client side
    if (typeof window === 'undefined') {
      return;
    }
    
    // Initialize from localStorage
    this.data = this.loadFromStorage();
    this.startTime = Date.now();
    this.sessionStartTime = Date.now();
    
    // Track page view
    this.trackPageView();
    
    // Track session duration
    this.trackSessionDuration();
    
    // Track button clicks
    this.trackButtonInteractions();
  }

  private loadFromStorage(): AnalyticsData {
    if (typeof window === 'undefined') {
      return {
        userCount: 0,
        waitlistSignups: 0,
        buttonClicks: 0,
        totalSessionTime: 0,
        averageSessionTime: 0
      };
    }
    
    const stored = localStorage.getItem('atrium_analytics');
    if (stored) {
      return JSON.parse(stored);
    }
    
    return {
      userCount: 0,
      waitlistSignups: 0,
      buttonClicks: 0,
      totalSessionTime: 0,
      averageSessionTime: 0
    };
  }

  private saveToStorage(): void {
    if (typeof window === 'undefined') {
      return;
    }
    localStorage.setItem('atrium_analytics', JSON.stringify(this.data));
  }

  trackPageView(): void {
    this.data.userCount += 1;
    this.saveToStorage();
  }

  trackButtonInteractions(): void {
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.closest('.hero-btn')) {
        this.data.buttonClicks += 1;
        console.log(`Button clicked: ${target.textContent}`);
        this.saveToStorage();
      }
    });
  }

  trackWaitlistSignup(): void {
    this.data.waitlistSignups += 1;
    console.log('Waitlist signup tracked');
    this.saveToStorage();
  }

  trackSessionDuration(): void {
    const updateDuration = () => {
      const currentTime = Date.now();
      const sessionDuration = currentTime - this.sessionStartTime;
      
      this.data.totalSessionTime += sessionDuration;
      this.data.averageSessionTime = this.data.totalSessionTime / this.data.userCount;
      
      this.saveToStorage();
    };

    // Save session duration when user leaves or after 30 min
    const saveSession = () => {
      updateDuration();
      this.sessionStartTime = Date.now();
    };

    // Track page unload
    window.addEventListener('beforeunload', saveSession);
    
    // Auto-save every 5 minutes
    setInterval(saveSession, 5 * 60 * 1000);
  }

  getData(): AnalyticsData {
    return { ...this.data };
  }

  reset(): void {
    this.data = {
      userCount: 0,
      waitlistSignups: 0,
      buttonClicks: 0,
      totalSessionTime: 0,
      averageSessionTime: 0
    };
    this.saveToStorage();
  }
}

export const analytics = new AnalyticsTracker();
export type { AnalyticsData };
