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
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      companies: {
        Row: {
          created_at: string | null
          description: string | null
          founded_year: number | null
          id: string
          industry_tags: string[] | null
          is_public_profile: boolean | null
          logo_url: string | null
          name: string
          programs: string[] | null
          stage: Database["public"]["Enums"]["company_stage"] | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          founded_year?: number | null
          id?: string
          industry_tags?: string[] | null
          is_public_profile?: boolean | null
          logo_url?: string | null
          name: string
          programs?: string[] | null
          stage?: Database["public"]["Enums"]["company_stage"] | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          founded_year?: number | null
          id?: string
          industry_tags?: string[] | null
          is_public_profile?: boolean | null
          logo_url?: string | null
          name?: string
          programs?: string[] | null
          stage?: Database["public"]["Enums"]["company_stage"] | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      event_registrations: {
        Row: {
          attended: boolean | null
          company_id: string | null
          created_at: string | null
          event_id: string
          id: string
          user_id: string
        }
        Insert: {
          attended?: boolean | null
          company_id?: string | null
          created_at?: string | null
          event_id: string
          id?: string
          user_id: string
        }
        Update: {
          attended?: boolean | null
          company_id?: string | null
          created_at?: string | null
          event_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_registrations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_registrations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          end_date: string | null
          event_date: string
          id: string
          image_url: string | null
          is_flagship: boolean | null
          is_virtual: boolean | null
          location: string | null
          max_attendees: number | null
          registration_url: string | null
          tags: string[] | null
          title: string
          updated_at: string | null
          virtual_link: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          event_date: string
          id?: string
          image_url?: string | null
          is_flagship?: boolean | null
          is_virtual?: boolean | null
          location?: string | null
          max_attendees?: number | null
          registration_url?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
          virtual_link?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          event_date?: string
          id?: string
          image_url?: string | null
          is_flagship?: boolean | null
          is_virtual?: boolean | null
          location?: string | null
          max_attendees?: number | null
          registration_url?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
          virtual_link?: string | null
        }
        Relationships: []
      }
      impact_reports: {
        Row: {
          capital_raised: number | null
          company_id: string
          created_at: string | null
          customers_count: number | null
          employees_count: number | null
          id: string
          key_milestones: string | null
          patents_filed: number | null
          patents_granted: number | null
          pilots_count: number | null
          reporting_period: string
          revenue: number | null
          status: Database["public"]["Enums"]["report_status"] | null
          submitted_at: string | null
          submitted_by: string
          updated_at: string | null
        }
        Insert: {
          capital_raised?: number | null
          company_id: string
          created_at?: string | null
          customers_count?: number | null
          employees_count?: number | null
          id?: string
          key_milestones?: string | null
          patents_filed?: number | null
          patents_granted?: number | null
          pilots_count?: number | null
          reporting_period: string
          revenue?: number | null
          status?: Database["public"]["Enums"]["report_status"] | null
          submitted_at?: string | null
          submitted_by: string
          updated_at?: string | null
        }
        Update: {
          capital_raised?: number | null
          company_id?: string
          created_at?: string | null
          customers_count?: number | null
          employees_count?: number | null
          id?: string
          key_milestones?: string | null
          patents_filed?: number | null
          patents_granted?: number | null
          pilots_count?: number | null
          reporting_period?: string
          revenue?: number | null
          status?: Database["public"]["Enums"]["report_status"] | null
          submitted_at?: string | null
          submitted_by?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "impact_reports_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      invites: {
        Row: {
          created_at: string | null
          email: string
          expires_at: string | null
          id: string
          invite_code: string
          invited_by: string | null
          used: boolean | null
          used_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          expires_at?: string | null
          id?: string
          invite_code: string
          invited_by?: string | null
          used?: boolean | null
          used_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          expires_at?: string | null
          id?: string
          invite_code?: string
          invited_by?: string | null
          used?: boolean | null
          used_at?: string | null
        }
        Relationships: []
      }
      mentor_meetings: {
        Row: {
          client_feedback: string | null
          client_id: string
          company_id: string | null
          created_at: string | null
          id: string
          meeting_date: string | null
          meeting_notes: string | null
          mentor_id: string
          requested_date: string | null
          status: Database["public"]["Enums"]["meeting_status"] | null
          updated_at: string | null
        }
        Insert: {
          client_feedback?: string | null
          client_id: string
          company_id?: string | null
          created_at?: string | null
          id?: string
          meeting_date?: string | null
          meeting_notes?: string | null
          mentor_id: string
          requested_date?: string | null
          status?: Database["public"]["Enums"]["meeting_status"] | null
          updated_at?: string | null
        }
        Update: {
          client_feedback?: string | null
          client_id?: string
          company_id?: string | null
          created_at?: string | null
          id?: string
          meeting_date?: string | null
          meeting_notes?: string | null
          mentor_id?: string
          requested_date?: string | null
          status?: Database["public"]["Enums"]["meeting_status"] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mentor_meetings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mentor_meetings_mentor_id_fkey"
            columns: ["mentor_id"]
            isOneToOne: false
            referencedRelation: "mentors"
            referencedColumns: ["id"]
          },
        ]
      }
      mentors: {
        Row: {
          bio: string | null
          created_at: string | null
          expertise_areas: string[] | null
          full_name: string
          id: string
          industry_experience: string[] | null
          is_available: boolean | null
          linkedin_url: string | null
          photo_url: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          expertise_areas?: string[] | null
          full_name: string
          id?: string
          industry_experience?: string[] | null
          is_available?: boolean | null
          linkedin_url?: string | null
          photo_url?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          expertise_areas?: string[] | null
          full_name?: string
          id?: string
          industry_experience?: string[] | null
          is_available?: boolean | null
          linkedin_url?: string | null
          photo_url?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          is_read: boolean | null
          recipient_id: string
          sender_id: string
          subject: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          recipient_id: string
          sender_id: string
          subject?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          recipient_id?: string
          sender_id?: string
          subject?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean | null
          link: string | null
          message: string | null
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          link?: string | null
          message?: string | null
          title: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          link?: string | null
          message?: string | null
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      post_comments: {
        Row: {
          author_id: string
          content: string
          created_at: string | null
          id: string
          post_id: string
          updated_at: string | null
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string | null
          id?: string
          post_id: string
          updated_at?: string | null
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string | null
          id?: string
          post_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "post_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      post_likes: {
        Row: {
          created_at: string | null
          id: string
          post_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          post_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_likes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          author_id: string
          comments_count: number | null
          company_id: string | null
          content: string
          created_at: string | null
          id: string
          image_url: string | null
          is_admin_post: boolean | null
          is_pinned: boolean | null
          likes_count: number | null
          post_type: Database["public"]["Enums"]["post_type"] | null
          tags: string[] | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          author_id: string
          comments_count?: number | null
          company_id?: string | null
          content: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_admin_post?: boolean | null
          is_pinned?: boolean | null
          likes_count?: number | null
          post_type?: Database["public"]["Enums"]["post_type"] | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          author_id?: string
          comments_count?: number | null
          company_id?: string | null
          content?: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_admin_post?: boolean | null
          is_pinned?: boolean | null
          likes_count?: number | null
          post_type?: Database["public"]["Enums"]["post_type"] | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company_id: string | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          is_approved: boolean | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          company_id?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id?: string
          is_approved?: boolean | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          company_id?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          is_approved?: boolean | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_profiles_company"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      resources: {
        Row: {
          category: Database["public"]["Enums"]["resource_category"]
          created_at: string | null
          created_by: string | null
          description: string | null
          download_count: number | null
          external_url: string | null
          file_url: string | null
          id: string
          is_featured: boolean | null
          stage_tags: Database["public"]["Enums"]["company_stage"][] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category: Database["public"]["Enums"]["resource_category"]
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          download_count?: number | null
          external_url?: string | null
          file_url?: string | null
          id?: string
          is_featured?: boolean | null
          stage_tags?: Database["public"]["Enums"]["company_stage"][] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: Database["public"]["Enums"]["resource_category"]
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          download_count?: number | null
          external_url?: string | null
          file_url?: string | null
          id?: string
          is_featured?: boolean | null
          stage_tags?: Database["public"]["Enums"]["company_stage"][] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
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
      is_approved_user: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      app_role: "admin" | "client"
      company_stage: "idea" | "pre_seed" | "seed" | "series_a" | "scale"
      meeting_status:
        | "pending"
        | "approved"
        | "declined"
        | "completed"
        | "cancelled"
      post_type:
        | "announcement"
        | "startup_win"
        | "program_update"
        | "event_highlight"
        | "ecosystem_news"
      report_status: "draft" | "submitted" | "reviewed"
      resource_category:
        | "pitch_deck"
        | "legal_templates"
        | "data_room"
        | "fundraising"
        | "customer_discovery"
        | "government_funding"
        | "client_perks"
        | "tools"
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
      app_role: ["admin", "client"],
      company_stage: ["idea", "pre_seed", "seed", "series_a", "scale"],
      meeting_status: [
        "pending",
        "approved",
        "declined",
        "completed",
        "cancelled",
      ],
      post_type: [
        "announcement",
        "startup_win",
        "program_update",
        "event_highlight",
        "ecosystem_news",
      ],
      report_status: ["draft", "submitted", "reviewed"],
      resource_category: [
        "pitch_deck",
        "legal_templates",
        "data_room",
        "fundraising",
        "customer_discovery",
        "government_funding",
        "client_perks",
        "tools",
      ],
    },
  },
} as const
