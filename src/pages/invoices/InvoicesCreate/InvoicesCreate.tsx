import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Box, Button, Divider } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import DatePickerComponent from 'elements/DatePicker';
import SelectHook from 'elements/SelectHook';
import TableComponent from 'elements/Table';
import TextFieldHook from 'elements/TextField';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { invoiceDataState } from '../../../recoil/atoms';
import './style.scss';
import { convertToRem } from 'utils/convert-to-rem';
import { columnsInvoicesDetail, dataInvoicesDetail } from 'constants/invoices';

const InvoicesCreate = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: {}
  } = useForm();
  const setInvoiceData = useSetRecoilState<any>(invoiceDataState);
  const navigate = useNavigate();
  const [selectedFromDate, setSelectedFromDate] = React.useState<Dayjs | null>(dayjs(''));
  const [selectedToDate, setSelectedToDate] = React.useState<Dayjs | null>(dayjs(''));

  const onSubmit = (data: any) => {
    setInvoiceData((oldData: any) => [...oldData, { ...data, updatedDt: dayjs(selectedToDate).format('YYYY-MM-DD') }]);
    navigate('/invoices');
    setSelectedFromDate(dayjs(''));
    setSelectedToDate(dayjs(''));
    reset();
  };
  const onCancel = () => {
    setSelectedFromDate(dayjs(''));
    setSelectedToDate(dayjs(''));
    reset();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: 'flex',
            gap: convertToRem('10px'),
            background: 'white',
            padding: convertToRem('20px'),
            margin: convertToRem('20px'),
            borderRadius: convertToRem('10px')
          }}
        >
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: convertToRem('10px') }}>
            <TextFieldHook placeholder="Bill To" control={control} name="bill" />
            <SelectHook
              placeholder="Contractor"
              name="contractor"
              items={[
                {
                  id: 1,
                  value: 'contractA',
                  title: 'Contract A'
                },
                {
                  id: 2,
                  value: 'contractB',
                  title: 'Contract B'
                },
                {
                  id: 3,
                  value: 'contractC',
                  title: 'Contract C'
                }
              ]}
              control={control}
            />

            <DatePickerComponent
              width="100%"
              text="Invoice date"
              value={selectedFromDate}
              setValue={(value: Dayjs | null | any) => setSelectedFromDate(value)}
            />
          </Box>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: convertToRem('10px') }}>
            <TextFieldHook placeholder="Invoices ID" control={control} name="invoicesId" />

            <SelectHook
              placeholder="Format"
              name="format"
              items={[
                {
                  id: 0,
                  value: '10',
                  title: 'kk'
                },
                {
                  id: 1,
                  value: '20',
                  title: 'aa'
                }
              ]}
              control={control}
            />
            <DatePickerComponent
              width="100%"
              text="Due date"
              value={selectedToDate}
              setValue={(value: Dayjs | null | any) => setSelectedToDate(value)}
            />
          </Box>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: convertToRem('10px') }}>
            <SelectHook
              placeholder="All Status"
              name="status"
              items={[
                { title: 'Paid', value: 'paid' },
                { title: 'Outstanding', value: 'outstanding' },
                { title: 'Late', value: 'late' },
                { title: 'Not Paid', value: 'notPaid' }
              ]}
              control={control}
            />

            <SelectHook
              placeholder="Bank account"
              name="bank"
              items={[
                {
                  id: 0,
                  value: '10',
                  title: 'kk'
                },
                {
                  id: 1,
                  value: '20',
                  title: 'aa'
                }
              ]}
              control={control}
            />
            <SelectHook
              placeholder="payment"
              name="payment"
              items={[
                {
                  id: 0,
                  value: '10',
                  title: 'kk'
                },
                {
                  id: 1,
                  value: '20',
                  title: 'aa'
                }
              ]}
              control={control}
            />
          </Box>
        </Box>
        <Box
          sx={{
            margin: '0px 20px',
            height: convertToRem('300px'),
            overflowY: 'scroll',
            borderRadius: convertToRem('10px'),
            background: 'white'
          }}
        >
          <TableComponent type="content" columns={columnsInvoicesDetail} rows={dataInvoicesDetail} count={0} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'white',
            margin: '20px',
            borderRadius: convertToRem('10px'),
            padding: convertToRem('10px'),
            flexWrap: 'wrap',
            gap: convertToRem('10px')
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: convertToRem('10px') }}>
            <p className="text-total">
              <ReceiptIcon />
              Tax Base
            </p>
            <p className="text-total">0 GBN</p>
            <Divider orientation="vertical" flexItem />
            <p className="text-total">
              <DragIndicatorIcon />
              VAT
            </p>
            <p className="text-total">0 BGN</p>
            <Divider orientation="vertical" flexItem />

            <p className="text-total">
              <LocalAtmIcon />
              TOTAL
            </p>
            <p className="text-total">0 BGN</p>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: convertToRem('5px') }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                width: convertToRem('150px'),
                textTransform: 'none',
                background: 'linear-gradient(90deg, rgba(37,60,163,1) 0%, rgba(3,3,75,1) 100%)'
              }}
            >
              Save
            </Button>
            <Button
              sx={{
                width: convertToRem('150px'),
                textTransform: 'none',
                color: 'linear-gradient(90deg, rgba(37,60,163,1) 0%, rgba(3,3,75,1) 100%)'
              }}
              variant="outlined"
              color="primary"
            >
              Save default
            </Button>
            <Button
              sx={{
                width: convertToRem('100px'),
                textTransform: 'none'
              }}
              onClick={onCancel}
              variant="text"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default InvoicesCreate;
