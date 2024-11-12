import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Trees, Gift, Star } from "lucide-react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "jori" && password === "feauto") {
      onLogin();
    } else {
      setError("Incorrect username or password");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 to-green-700 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-xl border-2 border-gold-200 animate-fade-in">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Trees className="h-8 w-8 text-green-600 animate-bounce" />
            <Star className="h-10 w-10 text-yellow-400 animate-pulse" />
            <Gift className="h-8 w-8 text-red-600 animate-bounce" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
            Holiday Login
          </CardTitle>
          <p className="text-sm text-gray-600">Spread some holiday cheer!</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
              className="border-2 border-red-200 focus:border-red-400 focus:ring-2 focus:ring-red-200"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="border-2 border-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-200"
            />
          </div>
          <Button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-red-500 to-green-500 hover:from-red-600 hover:to-green-600 text-white font-semibold shadow-lg transform hover:scale-105 transition-all"
          >
            Sign In
          </Button>
          {error && (
            <Alert variant="destructive" className="mt-4 bg-red-50 border-red-200">
              <AlertDescription className="text-red-600">{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;