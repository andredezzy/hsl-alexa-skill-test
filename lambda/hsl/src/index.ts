import * as Alexa from 'ask-sdk-core';

import { Launch } from './intents/Launch';
import { Help } from './intents/Help';
import { Stop } from './intents/Stop';
import { Fallback } from './intents/Fallback';
import { Emergency } from './intents/Emergency';
import { ErrorProcessor } from './errors/ErrorProcessor';
import { SessionEnded } from './intents/SessionEnded';
import { LocalizationRequestInterceptor } from './interceptors/LocalizationRequestInterceptor';

export const handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    Launch,
    Help,
    Stop,
    SessionEnded,
    Fallback,

    Emergency
  )
  .addErrorHandlers(ErrorProcessor)
  .addRequestInterceptors(LocalizationRequestInterceptor)
  .lambda();
