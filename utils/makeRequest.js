import { toast } from "sonner";

async function makeRequest(setLoading, endpoint, data, resourceName, reset) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    setLoading(true);
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // console.log(data);

    const responseData = await response.json();

    if (response.ok) {
      setLoading(false);
      toast.success("Your profile has been created successfully");
      reset();
      router.push("/login");
    } else {
      setLoading(false);
      if (response.status === 409) {
        setEmailError("User with this email already exists");
        toast.error("User with this email already exists");
      } else {
        toast.error("Ops, something went wrong");
        console.log("Sever Error:", responseData.message);
      }
    }
  } catch (error) {
    setLoading(false);
    console.log("Network Error:", error);
    toast.error("It seems you have a network error, please try again");
  }
}

export default makeRequest;
