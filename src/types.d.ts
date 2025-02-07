export interface User {
  id: number
  name: string
  email: string
  created_at: Date
}

export type NewUser = Omit<User, 'id' | 'created_at'>
