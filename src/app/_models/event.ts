import {Time} from "@angular/common";

export class Event {
  eventName: string;
  eventDate: Date;
  eventHour: Time;
  eventLink: string;
  eventAddress: string;
  eventDescription: string;
  eventImg: boolean;
  typeEventId: number;
  canalEventId: number;
  userId: number;
}
