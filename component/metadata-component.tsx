import * as React from 'react';

interface IMetaDataDetails {
  metaDatalabel: string;
  metaDataText: string;
}

interface IMetaDataDetailsProps {
  metaDataItems: any;
}

export class MetaDataDetails extends React.Component<IMetaDataDetailsProps, any>{

  constructor(props: IMetaDataDetailsProps) {
    super(props);
  }

  render() {
    console.log(this.props.metaDataItems)
    return (
      <React.Fragment>
      <div className="metadata-details">
        {this.props.metaDataItems.map((item: any, index) => {
          console.log(item);
          return (
            <div className={`metadata-items ${(index % 2 != 0) ? 'right-align': ''} `}>
              <div className="item-header">{item.metaDatalabel}</div>
              <div className="item-data">{item.metaDataText}</div>
            </div>
          )
        })}
      </div>
      </React.Fragment>
    );
  }

}