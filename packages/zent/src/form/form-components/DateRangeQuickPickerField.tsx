import * as React from 'react';
import { Omit } from 'utility-types';
import DateRangeQuickPicker, {
  IDateRangeQuickPickerProps,
} from '../../date-range-quick-picker';
import { DatePickers } from '../../datetimepicker/common/types';
import { IFormComponentProps, dateRangeDefaultValueFactory } from '../shared';
import { FormField } from '../Field';
import { $MergeParams } from '../utils';

export type IFormDateRangeQuickPickerFieldProps = IFormComponentProps<
  DatePickers.RangeValue,
  Omit<IDateRangeQuickPickerProps, 'value'>
>;

export const FormDateRangeQuickPickerField: React.FunctionComponent<
  IFormDateRangeQuickPickerFieldProps
> = props => {
  return (
    <FormField
      {...props}
      defaultValue={
        (props as $MergeParams<IFormDateRangeQuickPickerFieldProps>)
          .defaultValue || dateRangeDefaultValueFactory
      }
    >
      {childProps => <DateRangeQuickPicker {...props.props} {...childProps} />}
    </FormField>
  );
};
