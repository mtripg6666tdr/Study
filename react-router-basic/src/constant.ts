export abstract class AppURL {
  private constructor(){}

  static readonly Base = "/react-router-basic/dist";
  static readonly Featured = AppURL.Base + "/";
  static readonly Archives = AppURL.Base + "/archives";
  static readonly Settings = AppURL.Base + "/settings";
}