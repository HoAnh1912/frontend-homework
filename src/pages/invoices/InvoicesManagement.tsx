import { Box, Checkbox, Typography } from '@mui/material';
import SortableHeader from 'components/SortableHeader/SortTableHeader';
import dayjs, { Dayjs } from 'dayjs';
import DatePickerComponent from 'elements/DatePicker';
import Select from 'elements/Select';
import TabPanelCustom from 'elements/TabPanelCustom';
import TableComponent from 'elements/Table';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SORTTYPE } from 'types/common.interface';
import { SortColumn } from 'types/table.interface';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PrintIcon from '@mui/icons-material/Print';
import MailIcon from '@mui/icons-material/Mail';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useRecoilValue } from 'recoil';
import { invoiceDataState } from '../../recoil/atoms';
import './style.scss';
import { convertToRem } from 'utils/convert-to-rem';
import { dataListInvoices } from 'constants/invoices';

const InvoicesManagement = () => {
  const navigate = useNavigate();
  const invoiceData = useRecoilValue(invoiceDataState);
  const [perPage, setPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});
  const [keywordBy, setKeywordBy] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [vat, setVat] = useState<string>('');
  const [selectedFromDate, setSelectedFromDate] = React.useState<Dayjs | null>(dayjs(''));
  const [selectedToDate, setSelectedToDate] = React.useState<Dayjs | null>(dayjs(''));
  const [sortColumn, setSortColumn] = useState<SortColumn>({ columnName: 'id', sortType: 'DESC' });
  const [dataMap, setDataMap] = useState<any>([]);
  const [count, setCount] = useState<number>(0);

  const showSortArrow = (name: string) => {
    if (sortColumn?.columnName === name) return sortColumn?.sortType === 'DESC' ? true : false;
    return true;
  };

  const onSortColumn = (name: string, current: SortColumn) => {
    let _sortType: SORTTYPE = 'DESC';
    if (current.columnName === name) _sortType = current.sortType === 'ASC' ? 'DESC' : 'ASC';
    return { columnName: name, sortType: _sortType };
  };

  const columnsInvoices = [
    {
      id: 'checkbox',
      label: <Checkbox />
    },
    {
      id: 'invoicesId',
      label: (
        <SortableHeader isActive={sortColumn.columnName === 'title'} sortDESC={showSortArrow('title')}>
          Invoices ID
        </SortableHeader>
      ),
      onClick: async () => {
        setSortColumn(current => onSortColumn('title', current));
      }
    },
    {
      id: 'bill',
      label: (
        <SortableHeader isActive={sortColumn.columnName === 'bill'} sortDESC={showSortArrow('bill')}>
          Billed To
        </SortableHeader>
      ),
      onClick: async () => {
        setSortColumn(current => onSortColumn('bill', current));
      }
    },
    {
      id: 'updatedDt',
      label: (
        <SortableHeader isActive={sortColumn.columnName === 'updatedDt'} sortDESC={showSortArrow('updatedDt')}>
          Invoices Date
        </SortableHeader>
      ),
      onClick: async () => {
        setSortColumn(current => onSortColumn('updatedDt', current));
      }
    },
    { id: 'status', label: 'Status' },
    { id: 'vat', label: 'VAT' },
    { id: 'button', label: 'Export' }
  ];

  //when have api you can remove it
  const sortRows = (rows: any, sortColumn: SortColumn) => {
    return [...rows].sort((a, b) => {
      if (sortColumn.sortType === 'ASC') {
        return a[sortColumn.columnName] > b[sortColumn.columnName] ? -1 : 1;
      }
      return a[sortColumn.columnName] < b[sortColumn.columnName] ? -1 : 1;
    });
  };

  useEffect(() => {
    if (invoiceData?.length > 0) {
      setDataMap(sortRows([...dataMap, ...invoiceData], sortColumn));
    } else {
      setDataMap(sortRows(dataMap, sortColumn));
    }
  }, []);

  useEffect(() => {
    var filteredData;
    if (invoiceData?.length > 0) {
      filteredData = [...dataListInvoices, ...invoiceData];
    } else {
      filteredData = dataListInvoices;
    }
    if (status) {
      filteredData = filteredData.filter((row: any) => row.status === status);
    }
    if (vat) {
      filteredData = filteredData.filter((row: any) => row.vat === vat);
    }

    const sortedData = sortRows(filteredData, sortColumn);

    // Pagination logic
    const startIndex = (currentPage - 1) * perPage;
    const paginatedData = sortedData.slice(startIndex, startIndex + perPage);
    setDataMap(paginatedData);
    setCount(filteredData.length);
  }, [status, vat, sortColumn, currentPage, perPage]);

  const listTab = [
    {
      id: 0,
      label: 'All',
      content: (
        <TableComponent
          childrenButton={
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: convertToRem('1px') }}>
              <DownloadIcon className="icon_export" />
              <PictureAsPdfIcon className="icon_export" />
              <PrintIcon className="icon_export" />
              <MailIcon className="icon_export" />
              <RemoveRedEyeIcon className="icon_export" />
            </Box>
          }
          type="content"
          columns={columnsInvoices}
          rows={dataMap}
          page={currentPage}
          count={count}
          setPage={setCurrentPage}
          selectedIds={selected}
          setSelectedIds={setSelected}
          perPage={perPage}
          setPerPage={setPerPage}
        />
      )
    },
    {
      id: 1,
      label: 'Edit',
      content: <Typography variant="h2">Edit</Typography>
    },
    {
      id: 2,
      label: 'Inprogress',
      content: <Typography variant="h2">Inprogress</Typography>
    },
    {
      id: 3,
      label: 'Drafts',
      content: <Typography variant="h2">Drafts</Typography>
    }
  ];
  return (
    <TabPanelCustom
      listTab={listTab}
      handClick={() => {
        navigate('/invoices/create');
      }}
      content={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', paddingTop: '20px' }}>
          <Select
            value={keywordBy}
            setValue={setKeywordBy}
            items={[
              { title: 'All Contractor', value: '' },
              { title: 'Contract A', value: 'contractA' },
              { title: 'Contract B', value: 'contractB' },
              { title: 'Contract C', value: 'contractC' }
            ]}
            width={120}
          />
          <Select
            value={vat}
            setValue={setVat}
            items={[
              { title: 'VAT', value: '' },
              { title: 'Check', value: 'check' },
              { title: 'Uncheck', value: 'uncheck' }
            ]}
            width={120}
          />
          <DatePickerComponent
            width="150px"
            text="From"
            value={selectedFromDate}
            setValue={(value: Dayjs | null | any) => setSelectedFromDate(value)}
          />
          <DatePickerComponent
            width="150px"
            text="To"
            value={selectedToDate}
            setValue={(value: Dayjs | null | any) => setSelectedToDate(value)}
          />
          <Select
            value={status}
            setValue={setStatus}
            items={[
              { title: 'All Status', value: '' },
              { title: 'Paid', value: 'paid' },
              { title: 'Outstanding', value: 'outstanding' },
              { title: 'Late', value: 'late' },
              { title: 'Not Paid', value: 'notPaid' }
            ]}
            width={120}
          />
        </Box>
      }
    />
  );
};

export default InvoicesManagement;
