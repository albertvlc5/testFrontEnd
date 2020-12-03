export default interface ItrackingEvent {
  name: string;
  params: ItrackingEventParams;
}

export interface ItrackingEventParams {
  origin: string;
  name?: string;
  type: string;
  componentName?: string;
  component?: string;
  destinationUrl?: string;
  order?: string;
  payrollId?: string;
}

export interface ItrackingEventsList {
  [name: string]: ItrackingEvent;
}
