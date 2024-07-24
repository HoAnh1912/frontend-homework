import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { Controller } from 'react-hook-form';
import { ISelectHook } from './selecthook.type';

const SelectHook = ({ name, items, control, placeholder }: ISelectHook) => {
  return (
    <Box className="select-hook-wrapper">
      <FormControl style={{ margin: ' 0px' }} variant="outlined" fullWidth margin="normal">
        <Controller
          name={name}
          control={control}
          defaultValue="0"
          render={({ field }) => (
            <Select
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                width: '100%',
                '.MuiOutlinedInput-input': {
                  padding: '11px'
                },
                '&.MuiOutlinedInput-root': {
                  color: '#969696!important',
                  fontWeight: '400 !important',
                  background: '#ECECEC',
                  borderRadius: '10px'
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ff000000 !important'
                }
              }}
              {...field}
            >
              <MenuItem value="0">{placeholder}</MenuItem>
              {items?.map((item: any, i: number) => (
                <MenuItem key={i} value={item?.value}>
                  {item?.title}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    </Box>
  );
};

export default SelectHook;
