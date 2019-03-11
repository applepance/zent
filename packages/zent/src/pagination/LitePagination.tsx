import layoutLite from './layout/lite';
import AbstractPagination from './impl/AbstractPagination';

export class LitePagination extends AbstractPagination {
  static defaultProps = {
    // Don't give a default value
    // total: 0,

    current: 1,
    pageSize: 10,
    buttonBordered: false,
    showQuickJumper: false,
    showSizeChanger: false,
  };

  name = 'lite';

  layoutFn = layoutLite;
}

export default LitePagination;