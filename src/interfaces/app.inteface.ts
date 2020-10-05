import { AppModules } from '../models/appModules.model' ;


export interface IApp {
  moduleType: AppModules.map | AppModules.char | AppModules.item
}