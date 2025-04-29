export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      assignments: {
        Row: {
          class_level: string
          created_at: string | null
          description: string | null
          due_date: string
          id: string
          subject: string
          teacher_id: string | null
          title: string
        }
        Insert: {
          class_level?: string
          created_at?: string | null
          description?: string | null
          due_date?: string
          id?: string
          subject?: string
          teacher_id?: string | null
          title?: string
        }
        Update: {
          class_level?: string
          created_at?: string | null
          description?: string | null
          due_date?: string
          id?: string
          subject?: string
          teacher_id?: string | null
          title?: string
        }
        Relationships: []
      }
      exam_datesheets: {
        Row: {
          "C++": string
          Chemistry: string
          class_level: string
          created_at: string | null
          duration_minutes: number
          exam_date: string
          exam_type: string
          id: string
          Maths: string
          subject: string
        }
        Insert: {
          "C++"?: string
          Chemistry?: string
          class_level: string
          created_at?: string | null
          duration_minutes: number
          exam_date: string
          exam_type: string
          id?: string
          Maths?: string
          subject: string
        }
        Update: {
          "C++"?: string
          Chemistry?: string
          class_level?: string
          created_at?: string | null
          duration_minutes?: number
          exam_date?: string
          exam_type?: string
          id?: string
          Maths?: string
          subject?: string
        }
        Relationships: []
      }
      fees: {
        Row: {
          amount: number
          created_at: string | null
          due_date: string
          fee_type: string
          id: string
          status: string
          student_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          due_date: string
          fee_type: string
          id?: string
          status: string
          student_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          due_date?: string
          fee_type?: string
          id?: string
          status?: string
          student_id?: string
        }
        Relationships: []
      }
      holidays: {
        Row: {
          created_at: string | null
          description: string | null
          end_date: string
          holiday_name: string
          id: string
          start_date: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          end_date: string
          holiday_name: string
          id?: string
          start_date: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          end_date?: string
          holiday_name?: string
          id?: string
          start_date?: string
        }
        Relationships: []
      }
      results: {
        Row: {
          class_level: string
          created_at: string | null
          exam_date: string
          exam_type: string
          id: string
          marks_obtained: number
          student_id: string
          subject: string
          total_marks: number
        }
        Insert: {
          class_level: string
          created_at?: string | null
          exam_date: string
          exam_type: string
          id?: string
          marks_obtained: number
          student_id: string
          subject: string
          total_marks: number
        }
        Update: {
          class_level?: string
          created_at?: string | null
          exam_date?: string
          exam_type?: string
          id?: string
          marks_obtained?: number
          student_id?: string
          subject?: string
          total_marks?: number
        }
        Relationships: []
      }
      timetable: {
        Row: {
          class_level: string
          day_of_week: string
          end_time: string
          id: string
          room_number: string
          start_time: string
          subject: string
          teacher_id: string | null
        }
        Insert: {
          class_level: string
          day_of_week: string
          end_time: string
          id?: string
          room_number: string
          start_time: string
          subject: string
          teacher_id?: string | null
        }
        Update: {
          class_level?: string
          day_of_week?: string
          end_time?: string
          id?: string
          room_number?: string
          start_time?: string
          subject?: string
          teacher_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
