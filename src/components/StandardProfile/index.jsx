import React, { PureComponent } from 'react';

// import styles from './index.less';

import DescriptionList from '../DescriptionList';

const { Description } = DescriptionList;

class StandardProfile extends PureComponent {

  render() {
    const { data, profileColumns } = this.props;
    return (
      <DescriptionList style={{ marginBottom: 24 }}>
        {profileColumns && profileColumns.length > 0 ? profileColumns.filter(column => column.profileField === 'Y').map(column => {
          const { columnCode, columnName } = column;
          return <Description key={columnCode} term={columnName}>{data[columnCode]}</Description>
        }) : ''}
      </DescriptionList>
    );
  }
}

export default StandardProfile;
