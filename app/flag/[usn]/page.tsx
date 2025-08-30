// src/app/flag/[usn]/page.tsx
'use client';

import { useEffect, useState } from 'react';
// Make sure this path points to your Supabase client setup file
import { supabase } from '@/lib/supabaseClient'; 

const FlagMalpracticePage = ({ params }: { params: { usn: string } }) => {
  const [message, setMessage] = useState('Processing your request...');
  const { usn } = params;

  useEffect(() => {
    const flagUserInDatabase = async () => {
      if (!usn) {
        setMessage('Error: No user identifier was provided in the URL.');
        return;
      }

      // Update the student's record in the Supabase database
      const { error } = await supabase
        .from('students')
        .update({ malpractice: true })
        .eq('usn', usn); // Find the user by their USN

      if (error) {
        console.error('Supabase update error:', error);
        setMessage('An error occurred while attempting to flag the user.');
      } else {
        setMessage(`Malpractice has been successfully recorded for USN: ${usn}. The user's quiz will be terminated.`);
      }
    };

    flagUserInDatabase();
  }, [usn]); // This effect runs once when the page loads

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800">Malpractice Reporting System</h1>
        <p className="mt-4 text-lg text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default FlagMalpracticePage;
