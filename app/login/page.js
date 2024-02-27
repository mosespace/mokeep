import LoginForm from "@/Components/LoginForm";

export default async function page() {
  return (
    <div className='bg-slate-50 flex items-center justify-center py-8'>
      <LoginForm />
    </div>
  );
}
