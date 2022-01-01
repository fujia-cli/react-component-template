import React, { FC } from 'react';
import classnames from 'classnames';

import { <%= pascalName %>Props } from './interface';

const prefixCls = 'pr-<%= rawName %>';

const <%= pascalName %>: FC<<%= pascalName %>Props> = (props) => {
  const {
    className,
    style
  } = props;

  const classNames = classnames(prefixCls, className);

  return (
    <div className={classNames} style={style}>
      {/* adding something */}
    </div>
  );
};

export default <%= pascalName %>;
