import * as React from 'react';

interface IMetaDataDetails {
  metaDatalabel: string;
  metaDataText: string;
}

interface IMetaDataDetailsProps {
  metaDataItems: IMetaDataDetails[]
}

export class MetaDataDetails extends React.Component<IMetaDataDetailsProps>{

  constructor(props: IMetaDataDetailsProps) {
    super(props);
  }

  render() {
    console.log(this.props.metaDataItems)
    return (
      <React.Fragment>
        {this.props.metaDataItems.map((item: IMetaDataDetails, index) => {
          <div className={`metadata-items ${(index % 2 != 0) ? '' : 'right-align'} `}>
            <div className="item-header">{item.metaDatalabel}</div>
            <div className="item-data">{item.metaDataText}</div>
          </div>
        })}
      </React.Fragment>
    );
  }

}