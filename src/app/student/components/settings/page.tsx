"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [pushNotif, setPushNotif] = useState(true);
  const [language, setLanguage] = useState("English");

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid grid-cols-2 gap-2">
          <TabsTrigger value="account">Login & Security</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        {/* Login & Security */}
        <TabsContent value="account" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Password Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <h3 className="font-semibold">Change Password</h3>
              <Input type="password" placeholder="Enter Old Password" />
              <Input type="password" placeholder="New Password" />
              <Input type="password" placeholder="Confirm New Password" />
              <Button className="bg-blue-500">Update Password</Button>

              <h3 className="font-semibold mt-6">Recover Password</h3>
              <p className="text-sm text-gray-600">
                If you forget your password, you can recover it using your registered email or phone number.
              </p>
              <Input type="email" placeholder="Recovery Email" defaultValue="sabin@example.com" />
              <Input type="tel" placeholder="Recovery Phone Number" defaultValue="+977 9800000000" />
              <Button className="bg-blue-500">Send Recovery Link / OTP</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Enable 2FA</span>
                <Switch checked={twoFactor} onCheckedChange={setTwoFactor} 
 
  className="data-[state=checked]:bg-blue-500"
/> 
              </div>
              <p className="text-sm text-gray-600">
                Two-factor authentication (2FA) adds an extra layer of security to your
                account. After entering your password, you will also need to enter a code
                sent to your recovery email or phone number. This helps protect your account even if your
                password is stolen.
              </p>
              <Button className="bg-blue-500">Send OTP to Recovery Contact</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences */}
        <TabsContent value="preferences" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span>Dark Mode</span>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} className="data-[state=checked]:bg-blue-500"/>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Language</CardTitle>
            </CardHeader>
            <CardContent>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-48 border rounded-lg px-3 py-2"
              >
                <option value="English">English</option>
                <option value="Nepali">Nepali</option>
              </select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Email Alerts (exams, projects, results)</span>
                <Switch checked={emailNotif} onCheckedChange={setEmailNotif} className="data-[state=checked]:bg-blue-500"/>
              </div>
              <div className="flex items-center justify-between">
                <span>SMS Alerts (important announcements)</span>
                <Switch checked={smsNotif} onCheckedChange={setSmsNotif} className="data-[state=checked]:bg-blue-500"/>
              </div>
              <div className="flex items-center justify-between">
                <span>In-app Push Notifications</span>
                <Switch checked={pushNotif} onCheckedChange={setPushNotif} className="data-[state=checked]:bg-blue-500"/>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dashboard Customization</CardTitle>
            </CardHeader>
            <CardContent>
              <select className="w-64 border rounded-lg px-3 py-2">
                <option value="exams">Exams</option>
                <option value="projects">Projects</option>
                <option value="attendance">Attendance</option>
              </select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Calendar Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Show Holidays</span>
                <Switch defaultChecked className="data-[state=checked]:bg-blue-500"/>
              </div>
              <div className="flex items-center justify-between">
                <span>Show Exam Schedules</span>
                <Switch defaultChecked className="data-[state=checked]:bg-blue-500" />
              </div>
              <div className="flex items-center justify-between">
                <span>Enable Reminders</span>
                <Switch className="data-[state=checked]:bg-blue-500"/>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    </div>
  );
}

