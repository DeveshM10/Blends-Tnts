"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  school: z.string().min(2, {
    message: "School/Institute name is required.",
  }),
  grade: z.string({
    required_error: "Please select your grade/year.",
  }),
  committeePreference1: z.string({
    required_error: "Please select a committee preference.",
  }),
  experience: z.string().optional(),
})

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      school: "",
      experience: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(values)
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <Card className="w-full max-w-2xl mx-auto bg-gray-900 border-gray-800 shadow-2xl animate-in fade-in zoom-in duration-500">
        <CardContent className="pt-10 pb-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Registration Successful!</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Thank you for registering for TNTS 2026. We've sent a confirmation email with further details.
          </p>
          <Button 
            onClick={() => setIsSuccess(false)} 
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Register Another Delegate
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-xl border-gray-800 shadow-2xl">
      <CardHeader className="space-y-1">
        <CardTitle className="text-3xl font-bold text-white text-center">Delegate Registration</CardTitle>
        <CardDescription className="text-gray-400 text-center">
          Secure your spot at TNTS 2026. Limited seats available.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="bg-gray-950/50 border-gray-700 text-white placeholder:text-gray-600 focus:border-blue-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} className="bg-gray-950/50 border-gray-700 text-white placeholder:text-gray-600 focus:border-blue-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 98765 43210" {...field} className="bg-gray-950/50 border-gray-700 text-white placeholder:text-gray-600 focus:border-blue-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="school"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">School / Institution</FormLabel>
                    <FormControl>
                      <Input placeholder="Delhi Public School" {...field} className="bg-gray-950/50 border-gray-700 text-white placeholder:text-gray-600 focus:border-blue-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="grade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Grade / Year</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-gray-950/50 border-gray-700 text-white focus:border-blue-500">
                          <SelectValue placeholder="Select your grade" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-gray-900 border-gray-700 text-white">
                        <SelectItem value="6-8">Grade 6-8 (Middle School)</SelectItem>
                        <SelectItem value="9-10">Grade 9-10 (High School)</SelectItem>
                        <SelectItem value="11-12">Grade 11-12 (Senior Secondary)</SelectItem>
                        <SelectItem value="ug">Undergraduate</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="committeePreference1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Committee Preference</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-gray-950/50 border-gray-700 text-white focus:border-blue-500">
                          <SelectValue placeholder="Select priority committee" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-gray-900 border-gray-700 text-white">
                        <SelectItem value="unga">UNGA (DISEC)</SelectItem>
                        <SelectItem value="uncsw">UNCSW (Status of Women)</SelectItem>
                        <SelectItem value="unhrc">UNHRC (Human Rights)</SelectItem>
                        <SelectItem value="aippm">AIPPM (Indian Poli. Parties)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Previous MUN Experience (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Briefly list previous conferences attended..." 
                      className="bg-gray-950/50 border-gray-700 text-white placeholder:text-gray-600 focus:border-blue-500 min-h-[100px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/25" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Registering...
                </>
              ) : (
                "Complete Registration"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
