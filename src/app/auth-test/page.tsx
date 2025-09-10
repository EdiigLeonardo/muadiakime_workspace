'use client';

import { useAuth } from '@/lib/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function AuthTestPage() {
  const { user, isAuthenticated, isLoading, signOut } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
        <h1 className="text-2xl font-bold mb-4">Loading authentication state...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
      <h1 className="text-2xl font-bold mb-4">Authentication Test Page</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Authentication Status</h2>
        
        <div className="mb-4 p-3 rounded bg-gray-100">
          <p><strong>Authenticated:</strong> {isAuthenticated ? 'Yes' : 'No'}</p>
          {isAuthenticated && user && (
            <>
              <p className="mt-2"><strong>User ID:</strong> {user.id}</p>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </>
          )}
        </div>
        
        <div className="flex flex-col gap-3 mt-6">
          {isAuthenticated ? (
            <>
              <Button 
                onClick={() => signOut({ callbackUrl: '/auth-test' })}
                className="bg-red-600 hover:bg-red-700"
              >
                Sign Out
              </Button>
              <Button 
                onClick={() => router.push('/conta')}
                variant="outline"
              >
                Go to Profile
              </Button>
            </>
          ) : (
            <>
              <Button 
                onClick={() => router.push('/auth/sign-in?callbackUrl=/auth-test')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Sign In
              </Button>
              <Button 
                onClick={() => router.push('/auth/sign-up')}
                variant="outline"
              >
                Create Account
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}