"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context.js";

export default function Page() {
  const { user, gitHubSignIn} = useUserAuth();

  async function SignIn() {
    try {
      await gitHubSignIn();
      

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <p>Welcome</p>
      {user ? (
        <>
          <p>Hello, {user.email}</p>
          <a href="./week-10/shopping-list">week-10</a>
          
        </>
      ) : (
        <button onClick={SignIn}>Sign In with GitHub</button>
      )}
    </main>
  );
}