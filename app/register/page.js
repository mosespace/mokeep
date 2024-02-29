import RegisterForm from "@/components/RegisterForm";

export default function Home() {
  const field_names = ["First Name", "Second Name"];

  return (
    <main className='min-h-screen bg-slate-50'>
      <RegisterForm field_names={field_names} />
    </main>
  );
}
