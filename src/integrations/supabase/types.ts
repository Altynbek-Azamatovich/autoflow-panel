export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      clients: {
        Row: {
          car_model: string | null
          car_number: string | null
          created_at: string
          full_name: string
          id: string
          notes: string | null
          partner_id: string
          phone: string
          updated_at: string
        }
        Insert: {
          car_model?: string | null
          car_number?: string | null
          created_at?: string
          full_name: string
          id?: string
          notes?: string | null
          partner_id: string
          phone: string
          updated_at?: string
        }
        Update: {
          car_model?: string | null
          car_number?: string | null
          created_at?: string
          full_name?: string
          id?: string
          notes?: string | null
          partner_id?: string
          phone?: string
          updated_at?: string
        }
        Relationships: []
      }
      order_services: {
        Row: {
          created_at: string
          id: string
          order_id: string
          price: number
          quantity: number | null
          service_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          order_id: string
          price: number
          quantity?: number | null
          service_id: string
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string
          price?: number
          quantity?: number | null
          service_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_services_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_services_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          client_id: string
          completed_at: string | null
          created_at: string
          id: string
          notes: string | null
          order_number: number
          partner_id: string
          status: string
          total_price: number | null
          updated_at: string
        }
        Insert: {
          client_id: string
          completed_at?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          order_number?: number
          partner_id: string
          status?: string
          total_price?: number | null
          updated_at?: string
        }
        Update: {
          client_id?: string
          completed_at?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          order_number?: number
          partner_id?: string
          status?: string
          total_price?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          full_name: string | null
          id: string
          notifications_completed_orders: boolean | null
          notifications_new_orders: boolean | null
          phone: string
          service_address: string | null
          service_name: string | null
          updated_at: string
          user_id: string
          working_hours_from: string | null
          working_hours_to: string | null
          workplaces_count: number | null
        }
        Insert: {
          created_at?: string
          full_name?: string | null
          id?: string
          notifications_completed_orders?: boolean | null
          notifications_new_orders?: boolean | null
          phone: string
          service_address?: string | null
          service_name?: string | null
          updated_at?: string
          user_id: string
          working_hours_from?: string | null
          working_hours_to?: string | null
          workplaces_count?: number | null
        }
        Update: {
          created_at?: string
          full_name?: string | null
          id?: string
          notifications_completed_orders?: boolean | null
          notifications_new_orders?: boolean | null
          phone?: string
          service_address?: string | null
          service_name?: string | null
          updated_at?: string
          user_id?: string
          working_hours_from?: string | null
          working_hours_to?: string | null
          workplaces_count?: number | null
        }
        Relationships: []
      }
      services: {
        Row: {
          category: string | null
          created_at: string
          duration_minutes: number | null
          id: string
          is_active: boolean | null
          name: string
          partner_id: string
          price: number
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          duration_minutes?: number | null
          id?: string
          is_active?: boolean | null
          name: string
          partner_id: string
          price: number
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          duration_minutes?: number | null
          id?: string
          is_active?: boolean | null
          name?: string
          partner_id?: string
          price?: number
          updated_at?: string
        }
        Relationships: []
      }
      shifts: {
        Row: {
          closed_at: string | null
          created_at: string
          employee_name: string
          id: string
          notes: string | null
          opened_at: string
          orders_processed: number | null
          partner_id: string
          revenue: number | null
        }
        Insert: {
          closed_at?: string | null
          created_at?: string
          employee_name: string
          id?: string
          notes?: string | null
          opened_at?: string
          orders_processed?: number | null
          partner_id: string
          revenue?: number | null
        }
        Update: {
          closed_at?: string | null
          created_at?: string
          employee_name?: string
          id?: string
          notes?: string | null
          opened_at?: string
          orders_processed?: number | null
          partner_id?: string
          revenue?: number | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "partner" | "master" | "manager"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "partner", "master", "manager"],
    },
  },
} as const
