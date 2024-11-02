import { InjectionKey } from "vue";
import { BackendService } from "./services/backend";

export const Store = Symbol("BackendService") as InjectionKey<BackendService>