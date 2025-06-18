<binary>
  
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, CreditCard, List, Send, User } from 'lucide-react';

const Index = () => {
  const [userEarnings] = useState(0);

  const handleEarnNowClick = () => {
    window.open('https://youtube.com', '_blank');
  };

  const handleEarnClick = () => {
    window.location.reload();
  };

  const handleTaskClick = () => {
    window.open('https://facebook.com', '_blank');
  };

  const handleReferEarnClick = () => {
    window.open('https://guga.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 text-white overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <div className="flex-1 px-6 pt-12 pb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome AdsEarn BD</h1>
            <p className="text-lg text-purple-200 mb-8">Start Earning Money Now</p>
            
            <Button 
              onClick={handleEarnNowClick}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold mb-12"
            >
              Earn Now
            </Button>
          </div>

          {/* Character Illustration */}
          <div className="flex justify-center mb-8">
            <div className="w-64 h-48 relative">
              <img 
                src="/lovable-uploads/85d19960-d8f0-4514-80c9-a6ef76856947.png" 
                alt="Professional working on laptop" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* User Earnings Card */}
          <Card className="bg-gradient-to-r from-blue-500 to-cyan-400 border-none mb-6 mx-4">
            <CardContent className="p-6">
              <div className="text-white">
                <div className="text-4xl font-bold mb-1">$</div>
                <div className="text-5xl font-bold mb-2">{userEarnings}</div>
                <div className="text-blue-100 text-lg">User Earnings</div>
              </div>
            </CardContent>
          </Card>

          {/* Refer & Earn Button */}
          <div className="flex justify-end px-4 mb-8">
            <Button 
              onClick={handleReferEarnClick}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Refer & Earn
            </Button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-purple-800/50 border-t border-purple-600/30">
          <div className="flex justify-around items-center py-4 px-4">
            <button className="flex flex-col items-center gap-1 text-orange-400">
              <Home className="w-6 h-6" />
              <span className="text-xs">Home</span>
            </button>
            
            <button 
              onClick={handleEarnClick}
              className="flex flex-col items-center gap-1 text-white"
            >
              <CreditCard className="w-6 h-6" />
              <span className="text-xs">Earn</span>
            </button>
            
            <button 
              onClick={handleTaskClick}
              className="flex flex-col items-center gap-1 text-white"
            >
              <List className="w-6 h-6" />
              <span className="text-xs">Tasks</span>
            </button>
            
            <button className="flex flex-col items-center gap-1 text-white">
              <Send className="w-6 h-6" />
              <span className="text-xs">Withdraw</span>
            </button>
            
            <button className="flex flex-col items-center gap-1 text-white">
              <User className="w-6 h-6" />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
