import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
  nome: string;
  email: string;
  area_interesse: string;
  mensagem: string;
  pagina_origem?: string;
}

export async function salvarLead(lead: Lead): Promise<boolean> {
  try {
    const { error } = await supabase.from('leads').insert([lead]);
    if (error) {
      console.error('Erro ao salvar lead:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Erro inesperado ao salvar lead:', err);
    return false;
  }
}
