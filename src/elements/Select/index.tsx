import { InputLabel, Select as MUISelect, MenuItem, Typography } from '@mui/material';
import React from 'react';
import './index.scss';
import { SelectProps } from './select.type';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Select: React.FC<SelectProps> = ({background,border, items, minWidth, width, value, setValue, label, className }) => {
  return (
    <div className={`select-wrapper ${className}`}>
      {!!label && (
        <InputLabel id="select-label" sx={{ color: 'white', mb: 0.5, fontWeight: 500 }}>
          {label}
        </InputLabel>
      )}
      <MUISelect
        labelId="select-label"
        className="select-content"
        value={value}
        onChange={event => {
          setValue((event.target as HTMLInputElement).value);
        }}
        IconComponent={KeyboardArrowDownIcon}
        displayEmpty
        sx={{
          '&>.MuiSelect-select': {
            minWidth,
            width,
            paddingLeft: '1rem',
            paddingRight: '0 !important',
            color: 'white'
          },
          background:background ? background : '#80808026',
          '& .MuiOutlinedInput-notchedOutline':{
            border: border ? border: 'none !important'
          }
      
        }}
        MenuProps={{
          sx: {
            '&.MuiTypography-root':{
              color:'red !important'
            },
            boxShadow: '0 8px 20px -5px #d9d9d9',
            borderRadius: '8px',
            ul: {
              // p: 1
            },
            li: {
              // p: 1,
              // borderRadius: '4px',
              '&:hover': {
                // backgroundColor: '#0000ff14'
              },
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            },
            '.Mui-selected': {
              // backgroundColor: '#80808026 !important',
              color: 'white !important',
              // fontWeight: 600,
              '&:hover': {
                // backgroundColor: 'blue',
                color: 'white'
              }
            }
          }
        }}
      >
        {items?.length ? (
          items.map(item => (
            <MenuItem value={item.value} key={item.value} className="aria-selected:bg-red">
              <Typography variant="inherit" noWrap title={item.title}>
                {item.title}
              </Typography>
            </MenuItem>
          ))
        ) : (
          <Typography variant="subtitle2">데이터가 없습니다</Typography>
        )}
      </MUISelect>
    </div>
  );
};

export default Select;
