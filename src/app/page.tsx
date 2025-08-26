import AuthRoutes from "./AuthRoutes";

export default function Home() {
  const isAuthenticated = true; // Replace with actual authentication logic
  return <AuthRoutes isAuthenticated={isAuthenticated} />;
}
