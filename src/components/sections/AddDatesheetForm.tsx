
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useData } from '@/context/DataContext';
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  subject: z.string().min(1, "Subject is required"),
  exam_date: z.string().min(1, "Exam date is required"),
  duration_minutes: z.coerce.number().min(30, "Duration must be at least 30 minutes"),
  exam_type: z.string().min(1, "Exam type is required"),
});

type FormValues = z.infer<typeof formSchema>;

export const AddDatesheetForm = () => {
  const navigate = useNavigate();
  const { addExamDatesheet } = useData();
  
  console.log("Rendering AddDatesheetForm");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: '',
      exam_date: '',
      duration_minutes: 90,
      exam_type: 'Final',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted with data:", data);
    
    const formattedData = {
      id: 0, // This will be replaced by the addExamDatesheet function
      subject: data.subject,
      exam_date: data.exam_date,
      duration_minutes: data.duration_minutes,
      exam_type: data.exam_type,
    };
    
    console.log("Adding exam datesheet with data:", formattedData);
    addExamDatesheet(formattedData);
    
    toast({
      title: "Exam Datesheet Added",
      description: "The exam datesheet has been successfully added.",
    });
    
    navigate('/teacher/exams');
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-md shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Enter subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="exam_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Exam Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="duration_minutes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration (minutes)</FormLabel>
                <FormControl>
                  <Input type="number" min="30" step="15" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="exam_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Exam Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select exam type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Final">Final</SelectItem>
                    <SelectItem value="Mid Term">Mid Term</SelectItem>
                    <SelectItem value="Quiz">Quiz</SelectItem>
                    <SelectItem value="Practice">Practice</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => navigate('/teacher/exams')}>
              Cancel
            </Button>
            <Button type="submit">Add Exam Datesheet</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
