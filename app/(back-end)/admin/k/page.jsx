"use client";
import { z } from "zod";
import Link from "next/link";
import {} from "@/lib/utils";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Button } from "@/Components/ui/button";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";
import { useState } from "react";
import { Switch } from "@/Components/ui/switch";
import { generateSlug } from "@/utils/generateSlug";
import ImageInput from "../../../../Components/admin/formInputs/ImageInput";

const profileFormSchema = z.object({
  title: z.string().min(2).max(80),
  price: z.string().min(0),
  discount: z.string().min(0),
  description: z.string().min(10).max(500),
  comingSoon: z.boolean(),
  // bio: z.string().max(160).min(4),
  // urls: z
  //   .array(
  //     z.object({
  //       value: z.string().url({ message: "Please enter a valid URL." }),
  //     })
  //   )
  //   .optional(),
});

const defaultValues = {
  title: "",
  price: "",
  discount: "",
  description: "",
  // Add default value for the switch input
  comingSoon: false,
  // Add default values for other fields if needed
  // urls: [
  //   { value: "https://shadcn.com" },
  //   { value: "http://twitter.com/shadcn" },
  // ],
};

export default function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // const { fields, append } = useFieldArray({
  //   name: "urls",
  //   control: form.control,
  // });
  const [selectedFile, setSelectedFile] = useState(null);
  const [comingSoon, setComingSoon] = useState(false); // Initialize comingSoon state as false
  const [image, setImage] = useState(false);

  const handleComingSoonToggle = () => {
    setComingSoon(!comingSoon); // Toggling the state of comingSoon switch
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  function onSubmit(data) {
    data.comingSoon = comingSoon;
    data.image = image;
    data.slug = generateSlug(data.title);
    console.log(data);
    toast.success("Your data has been submitted");
  }

  return (
    <div className='min-h-screen'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 w-[60%] py-8'
          ss
        >
          {/* Configure this endpoint in the core js */}
          <ImageInput
            imageUrl={image}
            setImageUrl={setImage}
            endpoint='courseImage'
            label='Course Image'
          />
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Title</FormLabel>
                <FormControl>
                  <Input placeholder='Complete Python Mastery' {...field} />
                </FormControl>
                <FormDescription>
                  This course title will be publicly published and viewed by the
                  students on the main website. Make it more meaningful
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* price */}
          <FormField
            control={form.control}
            name='price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Price</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='$1000' {...field} />
                </FormControl>
                <FormDescription>
                  This course price will be publicly published and viewed by the
                  students on the main website. Make it more meaningful
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* discount */}
          <FormField
            control={form.control}
            name='discount'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Discount</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='$100' {...field} />
                </FormControl>
                <FormDescription>
                  This course price will be publicly published and viewed by the
                  students on the main website. Make it more meaningful
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* description */}
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Tell students a little bit about the course'
                    className='resize-true'
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Here you can talk about other key features and it will be used
                  for search-engine optimization. Kindly take your time
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='comingSoon'
            render={({ field }) => (
              <FormItem>
                <div className='flex items-center space-x-2'>
                  <Switch id='airplane-mode' {...field} />
                  <Label htmlFor='airplane-mode'>Coming Soon</Label>
                </div>
              </FormItem>
            )}
          />

          {/* submit */}
          <Button type='submit'>Create Course</Button>
        </form>
      </Form>
    </div>
  );
}
