import { Box, Checkbox, Pagination, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { themeColor } from 'assets/themes/theme';
import Select from 'elements/Select';
import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { convertToRem } from 'utils/convert-to-rem';

const TableComponent = ({
  childrenButton,
  columns,
  rows,
  count,
  page,
  setPage,
  linkTo,
  selectedIds,
  setSelectedIds,
  type,
  perPage,
  setPerPage
}: any) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (location.search !== '') {
      const searchPage = location.search.replace('?page=', '');
      setPage(Number(searchPage));
    }
  }, [location]);

  const masterSelected = useMemo(() => {
    return (rows?.length > 0 && rows.every((row: any) => row.id && selectedIds?.[row.id])) || false;
  }, [selectedIds, page]);

  const setCurrentSelected = (data: any) => {
    setSelectedIds && setSelectedIds(data);
  };

  const handleMasterCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const selectedEl: { [key: string]: boolean } = {};
    rows.forEach((row: any) => {
      if (row.id) selectedEl[row.id] = !!checked;
    });

    setCurrentSelected((current: any) => ({ ...current, ...selectedEl }));
  };

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>, id: number | string) => {
    const checked = event.target.checked;
    setCurrentSelected((current: any) => ({ ...current, [id]: checked }));
  };

  return (
    <Box>
      <Box sx={{ background: 'white', borderRadius: convertToRem('10px'), padding: '0 10px 10px 10px' }}>
        <Table className="table-config">
          <TableHead sx={{ background: 'white', zIndex: 1 }}>
            <TableRow className="h-[20px]">
              {columns?.map((column: any) => (
                <TableCell
                  className={`py-[5px] text-[14px] font-extrabold text-[#00127f] ${
                    column.id === 'checkbox'
                      ? 'rounded-tl-[10px]'
                      : column.id === 'isActive' ||
                          column.id === 'isActive' ||
                          column?.id === 'exposure' ||
                          (column?.id === 'createdDt' && type === 'faq') ||
                          (column?.id === 'isShow' && type === 'content')
                        ? 'rounded-tr-[10px]'
                        : ''
                  }`}
                  align="center"
                  onClick={column?.onClick}
                  sx={{ width: column?.id === 'checkbox' ? 100 : column.width }}
                  key={column.id}
                >
                  {column.id === 'checkbox' ? (
                    <Box className="relative">
                      <div className="absolute top-[50%] left-[50%] h-[15px] w-[15px] -translate-x-[50%] -translate-y-[50%] "></div>
                      <Checkbox
                        className="[&.Mui-checked]:text-jacarta py-2 text-[#DEE2E6]"
                        checked={masterSelected}
                        onChange={handleMasterCheckbox}
                        disabled={rows?.length <= 0}
                      />
                    </Box>
                  ) : (
                    column.label
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row: any) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                {columns.map((column: any) => {
                  const value = row[column.id];
                  let innerContent: string | number | JSX.Element | undefined = column.format
                    ? column.format(value)
                    : value;
                  if (column.id === 'checkbox') {
                    innerContent = (
                      <Checkbox
                        className="[&.Mui-checked]:text-jacarta py-2 text-[#DEE2E6]"
                        checked={row.id ? !!selectedIds?.[row.id] : false}
                        onChange={event => row.id && handleCheckbox(event, row.id)}
                      />
                    );
                  } else if (column.id === 'button') {
                    innerContent = <>{childrenButton}</>;
                  }
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align || 'center'}
                      className={` text-mainColor border-[#EBECEF]${column.id === 'checkbox' ? ' max-w-[30px] py-0' : ''}`}
                      onClick={() => {
                        if (column.id === 'link') {
                          window.open(String(value), '_blank');
                        } else {
                          column.id !== 'checkbox' && linkTo && navigate(linkTo + row.id);
                        }
                      }}
                    >
                      {innerContent}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {count !== 0 && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 2,
            background: 'white',
            padding: '10px',
            borderRadius: '10px'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', color: themeColor.main_primary.main_color }}>
            Show:
            <Select
              value={perPage}
              setValue={setPerPage}
              items={[
                { title: '2', value: 2 },
                { title: '5', value: 5 },
                { title: '10', value: 10 }
              ]}
              width={30}
              border="0.5px solid gray"
              background="white"
            />
            per page
          </Box>

          <Pagination
            count={Math.ceil(count / perPage)}
            page={page}
            className="pagination [&_button.Mui-selected]:bg-mainColor [&_button.Mui-selected]:text-white [&_button]:border-[#DEE2E6] [&_button]:text-mainColor "
            onChange={(_e, currentPage) => {
              if (currentPage !== page) {
                setPage(currentPage);
                searchParams.set('page', currentPage.toString());
                setSearchParams(searchParams);
              }
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default TableComponent;
