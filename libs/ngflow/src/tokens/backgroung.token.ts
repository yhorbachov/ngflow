import { InjectionToken, Type } from '@angular/core';

/**
 * Token for stand-alone component for background
 */
export const BACKGROUND_COMPONENT = new InjectionToken<Type<unknown>>('Stand-alone component for background');
