export interface ISegmentMenuItems{
  key: string;
  name: string;
  icon: string;
  onClick: (e: any) => any;
}

export interface ITaskDetails{
  applicationName: string;
  processName: string;
  priority: string;
  timeDetails: ITimeDetails;
  metaDataDetails: IMetaDataDetail[];
  TaskID: string;
  ProcessID: string;
}

export interface ITimeDetails{
  procesStarted: string;
  dueDays: string;
}

export interface IMetaDataDetail{
  metaDatalabel: string;
  metaDataText: string;
}