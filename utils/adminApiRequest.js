import { toast } from "sonner";

export default async function adminApiRequest({
  setLoading2,
  setLoading,
  apiUrl,
  data,
  toastName,
  reset,
  method,
  onSuccess,
}) {
  try {
    setLoading(true);
    const response = await fetch(apiUrl, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const result = await response.json();
      onSuccess?.(result);
      toast.success(
        `Successfully ${method === "POST" ? "created" : "updated"} ${toastName}`
      );
      reset();
      setLoading(false);
      setLoading2(false)
    } else {
      setLoading(false);
      setLoading2(false);
      toast.error("Something wrong happened.");
    }
  } catch (error) {
    setLoading(false);
    console.error(error);
  }
}
