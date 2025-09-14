import * as React from 'react';

import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  classFont?: string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ label, className, classFont, ...props }: TagProps, ref) => {
    return (
      <div
        className={mergeClasses(
          'flex items-center justify-center px-5 py-1',
          className
        )}
        {...props}
      >
        <Typography variant="h2"  className={mergeClasses("font-bold",classFont)}>
          {label}
        </Typography>
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
