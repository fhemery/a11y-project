import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {getStorage, provideStorage} from "@angular/fire/storage";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {environment} from "../environments/environment";
import {getAuth, provideAuth} from "@angular/fire/auth";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes),
  importProvidersFrom(
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  )],
};
