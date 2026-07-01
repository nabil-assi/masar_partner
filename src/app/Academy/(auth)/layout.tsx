 export default function AuthLayout({ children }: { children: React.ReactNode }) {
   return (
    <main className="min-h-screen bg-[#0F172A]">
      {children}
    </main>
  );
}