class MissingPropertyError extends Error {
  private static BASE = "Missing key";
  constructor(prop?:string) {
    super(MissingPropertyError.getMessage(prop))
  }

  public static getMessage(prop?:string){
    return prop? MissingPropertyError.BASE + ": '" + prop + "'" : MissingPropertyError.BASE;
  }

  public static assertPropIsDefined(propValue:any|undefined, propName:string){
    if(propValue===undefined) throw new MissingPropertyError(propName)
  }

  public static assertPropsAreDefined(propValues:any[], propNames:string[]){
    propNames.forEach((value, index) => this.assertPropIsDefined(propValues[index], value))
  }
}

export { MissingPropertyError}