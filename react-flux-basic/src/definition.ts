export abstract class AppURL {
  private constructor(){};

  static readonly Base = "";
  static readonly Top = AppURL.Base + "/";
  static readonly Favorites = AppURL.Base + "/favorites";
  static readonly Settings = AppURL.Base + "/settings";
}

export type todoEntry = {
  id:number,
  text:string,
  complete:boolean
}