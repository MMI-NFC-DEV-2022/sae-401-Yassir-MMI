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
      basket: {
        Row: {
          bande: string | null
          empeigne: string | null
          id: number
          lacet: string | null
          languette: string | null
          oeillet: string | null
          semelle: string | null
          trimestre: string | null
        }
        Insert: {
          bande?: string | null
          empeigne?: string | null
          id?: number
          lacet?: string | null
          languette?: string | null
          oeillet?: string | null
          semelle?: string | null
          trimestre?: string | null
        }
        Update: {
          bande?: string | null
          empeigne?: string | null
          id?: number
          lacet?: string | null
          languette?: string | null
          oeillet?: string | null
          semelle?: string | null
          trimestre?: string | null
        }
        Relationships: []
      }
      Celebrite: {
        Row: {
          date_de_naissance: string | null
          date_deces: string | null
          id: number
          img_celebrite: string | null
          nationalite_celebrite: string | null
          nom_celebrite: string | null
          prenom_celebrite: string | null
        }
        Insert: {
          date_de_naissance?: string | null
          date_deces?: string | null
          id?: number
          img_celebrite?: string | null
          nationalite_celebrite?: string | null
          nom_celebrite?: string | null
          prenom_celebrite?: string | null
        }
        Update: {
          date_de_naissance?: string | null
          date_deces?: string | null
          id?: number
          img_celebrite?: string | null
          nationalite_celebrite?: string | null
          nom_celebrite?: string | null
          prenom_celebrite?: string | null
        }
        Relationships: []
      }
      celebrite_film: {
        Row: {
          celebrite: number
          film: number
        }
        Insert: {
          celebrite: number
          film: number
        }
        Update: {
          celebrite?: number
          film?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_celebrite_film_celebrite_fkey"
            columns: ["celebrite"]
            isOneToOne: false
            referencedRelation: "Celebrite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_celebrite_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
        ]
      }
      Commune: {
        Row: {
          commune_quartier: string | null
          id: number
          nom_commune: string | null
        }
        Insert: {
          commune_quartier?: string | null
          id?: number
          nom_commune?: string | null
        }
        Update: {
          commune_quartier?: string | null
          id?: number
          nom_commune?: string | null
        }
        Relationships: []
      }
      Films: {
        Row: {
          annee_film: number | null
          description_film: string | null
          description_card: string | null
          id: number
          img_film: string | null
          nom_film: string | null
          note: number | null
        }
        Insert: {
          annee_film?: number | null
          description_film?: string | null
          description_card?: string | null
          id?: number
          img_film?: string | null
          nom_film?: string | null
          note?: number | null
        }
        Update: {
          annee_film?: number | null
          description_film?: string | null
          description_card?: string | null
          id?: number
          img_film?: string | null
          nom_film?: string | null
          note?: number | null
        }
        Relationships: []
      }
      Genre: {
        Row: {
          created_at: string
          genre_film: string | null
          id: number
        }
        Insert: {
          created_at?: string
          genre_film?: string | null
          id?: number
        }
        Update: {
          created_at?: string
          genre_film?: string | null
          id?: number
        }
        Relationships: []
      }
      genre_film: {
        Row: {
          film: number
          genre: number
        }
        Insert: {
          film: number
          genre: number
        }
        Update: {
          film?: number
          genre?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_genre_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_genre_film_genre_fkey"
            columns: ["genre"]
            isOneToOne: false
            referencedRelation: "Genre"
            referencedColumns: ["id"]
          },
        ]
      }
      Plateforme: {
        Row: {
          description_plateforme: string | null
          id: number
          img_plateforme: string | null
          nom_plateforme: string | null
          prix_plateforme: number | null
        }
        Insert: {
          description_plateforme?: string | null
          id?: number
          img_plateforme?: string | null
          nom_plateforme?: string | null
          prix_plateforme?: number | null
        }
        Update: {
          description_plateforme?: string | null
          id?: number
          img_plateforme?: string | null
          nom_plateforme?: string | null
          prix_plateforme?: number | null
        }
        Relationships: []
      }
      plateforme_film: {
        Row: {
          film: number
          plateforme: number
        }
        Insert: {
          film: number
          plateforme: number
        }
        Update: {
          film?: number
          plateforme?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_plateforme_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_plateforme_film_plateforme_fkey"
            columns: ["plateforme"]
            isOneToOne: false
            referencedRelation: "Plateforme"
            referencedColumns: ["id"]
          },
        ]
      }
      Saga: {
        Row: {
          id: number
          libellé: string | null
        }
        Insert: {
          id?: number
          libellé?: string | null
        }
        Update: {
          id?: number
          libellé?: string | null
        }
        Relationships: []
      }
      saga_film: {
        Row: {
          film: number
          saga: number
        }
        Insert: {
          film: number
          saga: number
        }
        Update: {
          film?: number
          saga?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_saga_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_saga_film_saga_fkey"
            columns: ["saga"]
            isOneToOne: false
            referencedRelation: "Saga"
            referencedColumns: ["id"]
          },
        ]
      }
      Support: {
        Row: {
          description_support: string | null
          id: number
          img_support: string | null
          prix_support: number | null
          titre_support: string | null
        }
        Insert: {
          description_support?: string | null
          id?: number
          img_support?: string | null
          prix_support?: number | null
          titre_support?: string | null
        }
        Update: {
          description_support?: string | null
          id?: number
          img_support?: string | null
          prix_support?: number | null
          titre_support?: string | null
        }
        Relationships: []
      }
      support_film: {
        Row: {
          film: number
          support: number
        }
        Insert: {
          film: number
          support: number
        }
        Update: {
          film?: number
          support?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_support_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_support_film_support_fkey"
            columns: ["support"]
            isOneToOne: false
            referencedRelation: "Support"
            referencedColumns: ["id"]
          },
        ]
      }
      Variante: {
        Row: {
          created_at: string
          id: number
          type: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          type?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          type?: string | null
        }
        Relationships: []
      }
      variante_film: {
        Row: {
          film: number | null
          variante: number | null
        }
        Insert: {
          film?: number | null
          variante?: number | null
        }
        Update: {
          film?: number | null
          variante?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_variante_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_variante_film_variante_fkey"
            columns: ["variante"]
            isOneToOne: false
            referencedRelation: "Variante"
            referencedColumns: ["id"]
          },
        ]
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
