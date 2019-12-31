export class Cliente {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public nombreUsuario: string,
    public pais: string,
    public email?: string
  ) {}


}
