export interface Usuario {
    id?: number;
    email: string;
    senha: string;
    permissao: string;
    token?: string;
    criadoem?: string;
}
