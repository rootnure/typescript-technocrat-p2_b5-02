{
  // Conditional Type

  // type T1 = null;
  type T1 = number;
  // type T2 = undefined;
  type T2 = string;

  type TConditional1 = T1 extends null ? true : false; // Conditional Type

  type TConditional2 = T1 extends null ? true : T2 extends undefined ? undefined : any;

  type TSheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  }

  // car aase kina / bike ase kina / ship acey kina / tractor ace kina
  // type TCheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
  type TCheckVehicle<T> = T extends keyof TSheikh ? true : false;

  type THasBike = TCheckVehicle<"bike">; // true
  type THasCar = TCheckVehicle<"car">; // true
  type THasShip = TCheckVehicle<"ship">; // true
  type THasTractor = TCheckVehicle<"tractor">; // false
  type THasPlane = TCheckVehicle<"plane">; // true

}